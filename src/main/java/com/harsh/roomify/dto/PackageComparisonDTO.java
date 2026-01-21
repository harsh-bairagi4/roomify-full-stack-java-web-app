package com.harsh.roomify.dto;

import java.util.List;

public class PackageComparisonDTO {
    private Long packageId;
    private String packageName;
    private Double totalPrice;
    private int facilityCount;
    private boolean cheapest;
    private boolean bestValue;
    private List<String> facilityTypes;

    public Long getPackageId() {
        return packageId;
    }

    public void setPackageId(Long packageId) {
        this.packageId = packageId;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public int getFacilityCount() {
        return facilityCount;
    }

    public void setFacilityCount(int facilityCount) {
        this.facilityCount = facilityCount;
    }

    public boolean isCheapest() {
        return cheapest;
    }

    public void setCheapest(boolean cheapest) {
        this.cheapest = cheapest;
    }

    public boolean isBestValue() {
        return bestValue;
    }

    public void setBestValue(boolean bestValue) {
        this.bestValue = bestValue;
    }

    public List<String> getFacilityTypes() {
        return facilityTypes;
    }

    public void setFacilityTypes(List<String> facilityTypes) {
        this.facilityTypes = facilityTypes;
    }
}
