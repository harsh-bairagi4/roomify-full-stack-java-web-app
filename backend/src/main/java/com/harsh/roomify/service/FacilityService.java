package com.harsh.roomify.service;

import com.harsh.roomify.model.Facility;

import java.util.List;

public interface FacilityService {
    Facility addFacility(Facility facility);
    List<Facility> getAllFacilities();
}
