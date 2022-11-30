package com.nocountry.cabininn.service.impl;

import com.nocountry.cabininn.dto.BookingDto;
import com.nocountry.cabininn.exception.ResourceFoundException;
import com.nocountry.cabininn.exception.ResourceNotFoundException;
import com.nocountry.cabininn.model.Booking;
import com.nocountry.cabininn.repository.BookingRepository;
import com.nocountry.cabininn.utils.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookingServiceImpl implements com.nocountry.cabininn.service.IBookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private Mapper mapper;

    @Override
    public BookingDto findById(Long id) {
        Booking booking = bookingRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Booking ID Invalid"));
        BookingDto bookingDto = mapper.getMapper().map(booking, BookingDto.class);
        return bookingDto;
    }

    @Override
    public List<BookingDto> findAllBookings() {
        return bookingRepository.findAll().
                stream().
                map(booking ->
                        mapper.getMapper()
                                .map(booking, BookingDto.class)
                ).collect(Collectors.toList());
    }

    @Override
    public BookingDto createBooking(BookingDto bookingDto) {
        List<Booking> bookingsFound = bookingRepository.findAllByHotelIdAndDateBetween(bookingDto.getCheckIn(), bookingDto.getCheckOut());
        if (bookingsFound.isEmpty()) {
            Booking booking = mapper.getMapper().map(bookingDto, Booking.class);
            booking.setCreationDate(new Date());
            Booking bookingCreated = bookingRepository.save(booking);
            return mapper.getMapper().map(bookingCreated, BookingDto.class);
        }
        throw new ResourceFoundException("Cabin not available");
    }

    @Override
    public BookingDto cancelBookingById(Long id) {
        Optional<Booking> booking = bookingRepository.findById(id);
        if (booking.isPresent()) {
            booking.get().setCancellationDate(new Date());
            bookingRepository.save(booking.get());
            BookingDto bookingDto = mapper.getMapper().map(booking, BookingDto.class);
            return bookingDto;
        }
        throw new ResourceNotFoundException("Booking not found with the given id");
    }

    @Override
    public void deleteBookingById(Long id) {
        Booking booking = bookingRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Booking ID Invalid")
        );
        bookingRepository.deleteById(id);
    }


}
