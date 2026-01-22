package com.harsh.roomify.dto;

import java.time.LocalDateTime;
import java.util.List;

public class PackageResponseDTO {
    private Long id;
    private String name;
    private Double totalPrice;
    private LocalDateTime createdAt;
    private List<FacilitySummaryDTO> facilities;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public List<FacilitySummaryDTO> getFacilities() {
        return facilities;
    }

    public void setFacilities(List<FacilitySummaryDTO> facilities) {
        this.facilities = facilities;
    }
}
