package com.nocountry.cabininn.dto;

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

    private Long bookingId;

    private Date checkIn;

    private Date checkOut;

    private Double price;

}
