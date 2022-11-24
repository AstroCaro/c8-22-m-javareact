
package com.nocountry.cabininn.repository;

import com.nocountry.cabininn.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelRepository extends JpaRepository <Hotel, Long>, JpaSpecificationExecutor<Hotel> {
    
}
