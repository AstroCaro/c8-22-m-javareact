package com.nocountry.cabininn.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Setter
@Getter
@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @JsonFormat(pattern="dd-MM-yyyy")
    private Date checkIn;

    @JsonFormat(pattern="dd-MM-yyyy")
    private Date checkOut;

    private Double price;

    private Date creationDate;

    private Date cancellationDate;

}
