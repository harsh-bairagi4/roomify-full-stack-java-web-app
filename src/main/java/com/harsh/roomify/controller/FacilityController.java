package com.harsh.roomify.controller;

import com.harsh.roomify.model.Facility;
import com.harsh.roomify.service.FacilityService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/facilities")
public class FacilityController {
    private final FacilityService facilityService;
    @Autowired
    public FacilityController(FacilityService facilityService){
        this.facilityService = facilityService;
    }
    @PostMapping
    public Facility addFacility(@Valid @RequestBody Facility facility){
        return facilityService.addFacility(facility);
    }
    @GetMapping
    public List<Facility> getAllFacilities(){
        return facilityService.getAllFacilities();
    }
}
