package com.nocountry.cabininn.repository;

import com.nocountry.cabininn.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    @Query(value = "select * from booking a where (a.check_in <= :checkOutDate and :checkInDate <= a.check_out) and a.hotel_id = :hotelId",
    nativeQuery = true)
    List<Booking> findAllByHotelIdAndDateBetween(@Param("hotelId") Long hotelId,
                                                @Param("checkInDate") LocalDate checkIn,
                                                @Param("checkOutDate") LocalDate checkOut);
}
