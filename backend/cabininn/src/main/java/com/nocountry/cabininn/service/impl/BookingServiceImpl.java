package com.nocountry.cabininn.service.impl;

import com.nocountry.cabininn.dto.request.BookingRequest;
import com.nocountry.cabininn.dto.response.BookingResponse;
import com.nocountry.cabininn.exception.ResourceFoundException;
import com.nocountry.cabininn.exception.ResourceNotFoundException;
import com.nocountry.cabininn.model.Booking;
import com.nocountry.cabininn.model.Hotel;
import com.nocountry.cabininn.model.User;
import com.nocountry.cabininn.repository.BookingRepository;
import com.nocountry.cabininn.service.IHotelService;
import com.nocountry.cabininn.service.IUserService;
import com.nocountry.cabininn.utils.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
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
    private IUserService userService;

    @Autowired
    private IHotelService hotelService;

    @Autowired
    private Mapper mapper;

    @Override
    public BookingResponse findById(Long id) {
        Booking booking = bookingRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Booking ID Invalid"));
        BookingResponse bookingDto = mapper.getMapper().map(booking, BookingResponse.class);
        return bookingDto;
    }

    @Override
    public List<BookingResponse> findAllBookings() {
        return bookingRepository.findAll().
                stream().
                map(booking ->
                        mapper.getMapper()
                                .map(booking, BookingResponse.class)
                ).collect(Collectors.toList());
    }

    @Override
    public BookingResponse createBooking(BookingRequest bookingDto) {
        User userFound = mapper.getMapper().map(userService.findById(bookingDto.getUserId()),
                User.class);
        Hotel hotelFound = mapper.getMapper().map(hotelService.findById(bookingDto.getHotelId()),
                Hotel.class);
        if (hotelFound == null || userFound == null) {
            throw new ResourceFoundException("Invalid Ids");
        }
        if (bookingDto.getCheckIn().compareTo(bookingDto.getCheckOut()) >= 0) {
            throw new ResourceFoundException("Invalid dates");
        }
        List<Booking> bookingsFound = bookingRepository.findAllByHotelIdAndDateBetween(bookingDto.getHotelId(), bookingDto.getCheckIn(), bookingDto.getCheckOut());
        if (!bookingsFound.isEmpty()) {
            throw new ResourceNotFoundException("Cabin not available for these dates");
        }
        Booking booking = mapper.getMapper().map(bookingDto, Booking.class);
        System.out.println(booking.getHotel());
        booking.setUser(userFound);
        booking.setHotel(hotelFound);
        booking.setCreationDate(new Date());
        booking.setDuration();
        booking.setPrice();
        Booking bookingCreated = bookingRepository.save(booking);
        return mapper.getMapper().map(bookingCreated, BookingResponse.class);
    }

    @Override
    public BookingResponse cancelBookingById(Long id) {
        Optional<Booking> booking = bookingRepository.findById(id);
        if (!booking.isPresent()) {
            throw new ResourceNotFoundException("Booking not found with the given id");
        }
        if (booking.get().getCancellationDate() != null) {
            throw new ResourceFoundException("Booking has already been canceled");
        }
        booking.get().setCancellationDate(new Date());
        bookingRepository.save(booking.get());
        BookingResponse bookingDto = mapper.getMapper().map(booking, BookingResponse.class);
        return bookingDto;
    }

    @Override
    public void deleteBookingById(Long id) {
        Booking booking = bookingRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Booking ID Invalid")
        );
        bookingRepository.deleteById(id);
    }

}
