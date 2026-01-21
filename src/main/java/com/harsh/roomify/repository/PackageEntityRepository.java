package com.harsh.roomify.repository;

import com.harsh.roomify.model.PackageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PackageEntityRepository extends JpaRepository<PackageEntity, Long> {
    List<PackageEntity> findByUserId(Long userId);
    List<PackageEntity> findByUserIdAndIdIn(Long userId, List<Long> packageIds);
}
