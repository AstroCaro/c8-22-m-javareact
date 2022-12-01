package com.nocountry.cabininn.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nocountry.cabininn.model.Address;
import com.nocountry.cabininn.model.Booking;
import com.nocountry.cabininn.model.Distance;
import com.nocountry.cabininn.model.GeoCode;
import lombok.Data;

@Data
public class HotelDto {

    private Long id;
    private String chainCode;
    private String iataCode;
    private String name;
    private Integer dailyPrice;
    private String urlFoto;
    private GeoCode geoCode;
    private Address address;
    private Distance distance;

}
