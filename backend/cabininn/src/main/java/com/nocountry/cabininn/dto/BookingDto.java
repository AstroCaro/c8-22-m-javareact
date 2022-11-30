package com.nocountry.cabininn.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.nocountry.cabininn.model.Hotel;
import com.nocountry.cabininn.model.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Setter
@Getter
public class BookingDto {

    private Long id;

    private Long hotelId;

    private Long userId;

    @JsonFormat(pattern="dd-MM-yyyy")
    private Date checkIn;

    @JsonFormat(pattern="dd-MM-yyyy")
    private Date checkOut;

    private Double price;

    private Date creationDate;

    private Date cancellationDate;
}
