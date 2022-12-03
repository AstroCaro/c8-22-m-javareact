package com.nocountry.cabininn.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.nocountry.cabininn.model.Hotel;
import com.nocountry.cabininn.model.User;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class BookingResponse {

    private Long id;

    private HotelResponse hotel;

    private UserResponse user;

    @JsonFormat(pattern="dd-MM-yyyy")
    private LocalDate checkIn;

    @JsonFormat(pattern="dd-MM-yyyy")
    private LocalDate checkOut;

    private Double price;

    private Date creationDate;

    private Date cancellationDate;
}
