
package com.nocountry.cabininn.repository;

import com.nocountry.cabininn.model.GeoCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GeoRepository extends JpaRepository <GeoCode, Long>{
    
}
