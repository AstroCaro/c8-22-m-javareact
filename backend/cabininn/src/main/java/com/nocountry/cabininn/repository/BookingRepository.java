package com.nocountry.cabininn.repository;

import com.nocountry.cabininn.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    @Query(value = "SELECT b FROM booking b WHERE b.check_in <= :checkOutDate AND :checkInDate <= b.check_out", nativeQuery = true)
    List<Booking> findAllByHotelIdAndDateBetween(@Param("checkInDate")Date checkIn,@Param("checkOutDate") Date checkOut);
}
