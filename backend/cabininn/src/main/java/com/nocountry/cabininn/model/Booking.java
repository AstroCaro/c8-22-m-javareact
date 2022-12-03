package com.nocountry.cabininn.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.Duration;
import java.time.LocalDate;
import java.time.Period;
import java.util.Date;

@Setter
@Getter
@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @JsonFormat(pattern="dd-MM-yyyy")
    private LocalDate checkIn;

    @JsonFormat(pattern="dd-MM-yyyy")
    private LocalDate checkOut;

    private Integer duration;

    private Integer price /*= duration*this.hotel.getDailyPrice()*/;

    private Date creationDate;

    private Date cancellationDate;

    public void setDuration() {
        this.duration = Period.between(checkIn, checkOut).getDays();
    }

    public void setPrice() {
        this.price = this.duration*this.hotel.getDailyPrice();
    }

}
