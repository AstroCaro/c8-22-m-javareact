package com.nocountry.cabininn.service;

import com.nocountry.cabininn.dto.request.BookingRequest;
import com.nocountry.cabininn.dto.response.BookingResponse;

import java.util.List;

public interface IBookingService {

    BookingResponse findById(Long id);

    List<BookingResponse> findAllBookings();

    BookingResponse createBooking(BookingRequest bookingDto);

    BookingResponse cancelBookingById(Long id);

    void deleteBookingById(Long id);

}
