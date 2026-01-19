package com.harsh.roomify.service.impl;

import com.harsh.roomify.model.Facility;
import com.harsh.roomify.model.PackageEntity;
import com.harsh.roomify.model.User;
import com.harsh.roomify.repository.FacilityRepository;
import com.harsh.roomify.repository.PackageEntityRepository;
import com.harsh.roomify.repository.UserRepository;
import com.harsh.roomify.service.PackageEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class PackageEntityServiceImpl implements PackageEntityService {
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
    public PackageEntity createPackage(Long userId, String name, List<Long> facilityIds) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        List<Facility> facilities = facilityRepository.findAllById(facilityIds);

        double totalPrice = facilities.stream().mapToDouble(f -> f.getPrice() != null ? f.getPrice() : 0).sum();

        PackageEntity pkg = new PackageEntity();
        pkg.setName(name);
        pkg.setUser(user);
        pkg.setFacilities(facilities);
        pkg.setTotalPrice(totalPrice);
        pkg.setCreatedAt(LocalDateTime.now());

        return packageEntityRepository.save(pkg);

    }

    @Override
    public List<PackageEntity> getUserPackages(Long userId) {
        return packageEntityRepository.findByUserId((userId));
    }
}
