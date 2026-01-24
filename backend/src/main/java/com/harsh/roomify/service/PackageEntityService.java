package com.harsh.roomify.service;

import com.harsh.roomify.dto.PackageComparisonDTO;
import com.harsh.roomify.dto.PackageResponseDTO;
import com.harsh.roomify.model.PackageEntity;
import org.springframework.stereotype.Service;

import java.util.List;

public interface PackageEntityService {
    PackageResponseDTO createPackage(String name, List<Long> facilityIds);
    List<PackageResponseDTO> getUserPackages(Long userId);
    List<PackageComparisonDTO> comparePackages(List<Long> packageIds);
}
