
package com.nocountry.cabininn.repository;

import com.nocountry.cabininn.model.Distance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DistanceRepository extends JpaRepository <Distance, Long>{
    
}
