package com.nocountry.cabininn.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.nocountry.cabininn.dto.response.HotelResponse;
import com.nocountry.cabininn.dto.response.UserResponse;
import com.nocountry.cabininn.model.Hotel;
import com.nocountry.cabininn.model.User;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class BookingRequest {

    private Long id;

//    private HotelResponse hotel;

    private Long hotelId;

//    private UserResponse user;

    private Long userId;

    @JsonFormat(pattern="dd-MM-yyyy")
    private LocalDate checkIn;

    @JsonFormat(pattern="dd-MM-yyyy")
    private LocalDate checkOut;

    private Double price;

    private Date creationDate;

    private Date cancellationDate;
}
