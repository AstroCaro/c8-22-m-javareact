package com.nocountry.cabininn.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class BookingDto {

    private Long id;

    private Long hotelId;

    @JsonFormat(pattern="dd-MM-yyyy")
    private LocalDate checkIn;

    @JsonFormat(pattern="dd-MM-yyyy")
    private LocalDate checkOut;

    private Double price;

    private Date creationDate;

    private Date cancellationDate;
}
