package com.nocountry.cabininn.controller;

import com.nocountry.cabininn.dto.BookingDto;
import com.nocountry.cabininn.dto.request.BookingRequest;
import com.nocountry.cabininn.dto.response.BookingResponse;
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
    public ResponseEntity<BookingResponse> findById(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(bookingService.findById(id));
    }

    @GetMapping("/list")
    public ResponseEntity<List<BookingResponse>> getBookings() {
        return ResponseEntity.ok().body(bookingService.findAllBookings());
    }

    @PostMapping
    public ResponseEntity<BookingResponse> createBooking(@RequestBody BookingRequest booking) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(bookingService.createBooking(booking));
    }

    @PutMapping("/cancel/{id}")
    public ResponseEntity<BookingResponse> cancel(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(bookingService.cancelBookingById(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(
            @PathVariable("id") Long id) {
        bookingService.deleteBookingById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
