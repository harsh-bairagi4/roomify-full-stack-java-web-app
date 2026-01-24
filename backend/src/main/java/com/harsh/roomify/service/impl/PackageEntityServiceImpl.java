package com.harsh.roomify.service.impl;

import com.harsh.roomify.dto.FacilitySummaryDTO;
import com.harsh.roomify.dto.PackageComparisonDTO;
import com.harsh.roomify.dto.PackageResponseDTO;
import com.harsh.roomify.enums.FacilityType;
import com.harsh.roomify.exception.BadRequestException;
import com.harsh.roomify.exception.ResourceNotFoundException;
import com.harsh.roomify.model.Facility;
import com.harsh.roomify.model.PackageEntity;
import com.harsh.roomify.model.User;
import com.harsh.roomify.repository.FacilityRepository;
import com.harsh.roomify.repository.PackageEntityRepository;
import com.harsh.roomify.repository.UserRepository;
import com.harsh.roomify.security.SecurityUtil;
import com.harsh.roomify.service.PackageEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class PackageEntityServiceImpl implements PackageEntityService {
    private static final List<FacilityType> SINGLE_ALLOWED_TYPES =
            List.of(FacilityType.ROOM, FacilityType.HOSTEL);

    private final PackageEntityRepository packageEntityRepository;
    private final UserRepository userRepository;
    private final FacilityRepository facilityRepository;
    @Autowired
    public PackageEntityServiceImpl(PackageEntityRepository packageEntityRepository, UserRepository userRepository, FacilityRepository facilityRepository){
        this.packageEntityRepository = packageEntityRepository;
        this.userRepository = userRepository;
        this.facilityRepository = facilityRepository;
    }

    @Override
    public PackageResponseDTO createPackage(String name, List<Long> facilityIds) {
        Long userId = SecurityUtil.getCurrentUserId();

        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found"));

        List<Facility> facilities = facilityRepository.findAllById(facilityIds);

        Map<FacilityType, Long> typeCountMap = facilities.stream()
                .collect(Collectors.groupingBy(
                        Facility::getType,
                        Collectors.counting()
                ));

        for (FacilityType type : SINGLE_ALLOWED_TYPES) {
            if (typeCountMap.getOrDefault(type, 0L) > 1) {
                throw new BadRequestException(
                        "Only one " + type + " is allowed per package"
                );
            }
        }

        double totalPrice = facilities.stream().mapToDouble(f -> f.getPrice() != null ? f.getPrice() : 0).sum();

        PackageEntity pkg = new PackageEntity();
        pkg.setName(name);
        pkg.setUser(user);
        pkg.setFacilities(facilities);
        pkg.setTotalPrice(totalPrice);
        pkg.setCreatedAt(LocalDateTime.now());

        packageEntityRepository.save(pkg);

        return mapToDto(pkg);

    }

    @Override
    public List<PackageResponseDTO> getUserPackages(Long userId) {
        return packageEntityRepository.findByUserId(userId);
    }

    @Override
    public List<PackageComparisonDTO> comparePackages(List<Long> packageIds) {
        Long userId = SecurityUtil.getCurrentUserId();

        List<PackageEntity> packages = packageEntityRepository.findByUserIdAndIdIn(userId,packageIds);

        List<PackageComparisonDTO> result = packages.stream().map(pkg -> {
            PackageComparisonDTO dto = new PackageComparisonDTO();
            dto.setPackageId(pkg.getId());
            dto.setPackageName(pkg.getName());
            dto.setTotalPrice(pkg.getTotalPrice());
            dto.setFacilityCount(pkg.getFacilities().size());

            dto.setFacilityTypes(pkg.getFacilities().stream().map(f -> f.getType().name()).distinct().toList());
            return dto;
        }).toList();

        double minPrice = result.stream()
                .mapToDouble(PackageComparisonDTO::getTotalPrice)
                .min()
                .orElse(0);

        result.forEach(dto ->
                dto.setCheapest(dto.getTotalPrice() == minPrice)
        );
        PackageComparisonDTO bestValuePkg = result.stream()
                .max((a, b) -> Double.compare(
                        a.getFacilityCount() / a.getTotalPrice(),
                        b.getFacilityCount() / b.getTotalPrice()
                ))
                .orElse(null);

        if (bestValuePkg != null) {
            bestValuePkg.setBestValue(true);
        }

        return result;
    }

    private PackageResponseDTO mapToDto(PackageEntity pkg){
        PackageResponseDTO dto = new PackageResponseDTO();
        dto.setId(pkg.getId());
        dto.setName(pkg.getName());
        dto.setTotalPrice(pkg.getTotalPrice());
        dto.setCreatedAt(pkg.getCreatedAt());

        dto.setFacilities(
                pkg.getFacilities().stream().map(f -> {
                    FacilitySummaryDTO fDto = new FacilitySummaryDTO();
                    fDto.setId(f.getId());
                    fDto.setName(f.getName());
                    fDto.setType(f.getType().name());
                    fDto.setPrice(f.getPrice());
                    fDto.setLocation(f.getLocation());
                    return fDto;
                }).toList()
        );
        return dto;
    }
}
