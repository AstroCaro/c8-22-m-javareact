package com.nocountry.cabininn.service;

import com.nocountry.cabininn.dto.BookingDto;

public interface IBookingService {
    BookingDto createBooking(BookingDto bookingDto);

    BookingDto cancelBookingById(Long id);
}
