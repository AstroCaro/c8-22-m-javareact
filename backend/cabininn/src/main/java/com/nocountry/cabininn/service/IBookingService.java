package com.nocountry.cabininn.service;

import com.nocountry.cabininn.dto.BookingDto;

import java.util.List;

public interface IBookingService {

    BookingDto findById(Long id);

    List<BookingDto> findAllBookings();

    BookingDto createBooking(BookingDto bookingDto);

    BookingDto cancelBookingById(Long id);

    void deleteBookingById(Long id);

}
