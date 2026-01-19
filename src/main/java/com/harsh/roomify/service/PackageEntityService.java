package com.harsh.roomify.service;

import com.harsh.roomify.model.PackageEntity;
import org.springframework.stereotype.Service;

import java.util.List;

public interface PackageEntityService {
    PackageEntity createPackage(Long userId, String name, List<Long> facilityIds);
    List<PackageEntity> getUserPackages(Long userId);
}
