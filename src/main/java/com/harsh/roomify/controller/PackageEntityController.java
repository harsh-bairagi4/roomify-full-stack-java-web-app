package com.harsh.roomify.controller;

import com.harsh.roomify.dto.PackageComparisonDTO;
import com.harsh.roomify.model.PackageEntity;
import com.harsh.roomify.service.PackageEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/packages")
public class PackageEntityController {
    private final PackageEntityService packageEntityService;

    @Autowired
    public PackageEntityController(PackageEntityService packageEntityService){
        this.packageEntityService = packageEntityService;
    }
    @PostMapping
    public PackageEntity createPackage(@RequestParam String name, @RequestBody List<Long> facilityIds){
        return packageEntityService.createPackage(name, facilityIds);
    }
    @GetMapping("/user/{userId}")
    public List<PackageEntity> getUserPackages(@PathVariable Long userId){
        return packageEntityService.getUserPackages(userId);
    }
    @PostMapping("/compare")
    public List<PackageComparisonDTO> comparePackages(@RequestBody List<Long> packageIds){
        return packageEntityService.comparePackages(packageIds);
    }
}
