package com.nocountry.cabininn.controller;

import com.nocountry.cabininn.dto.BookingDto;
import com.nocountry.cabininn.service.IBookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    private final IBookingService bookingService;

    @GetMapping("/{id}")
    public ResponseEntity<BookingDto> findById(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(bookingService.findById(id));
    }

    @GetMapping("/list")
    public ResponseEntity<List<BookingDto>> getBookings() {
        return ResponseEntity.ok().body(bookingService.findAllBookings());
    }

    @PostMapping
    public ResponseEntity<BookingDto> createBooking(@RequestBody BookingDto bookingDto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(bookingService.createBooking(bookingDto));
    }

    @PutMapping("/cancel/{id}")
    public ResponseEntity<BookingDto> cancel(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(bookingService.cancelBookingById(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(
            @PathVariable("id") Long id) {
        bookingService.deleteBookingById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
