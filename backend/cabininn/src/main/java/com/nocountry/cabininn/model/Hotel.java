
package com.nocountry.cabininn.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

//JDateChooser JCalendar

@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Hotel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String chainCode;
    private String iataCode;
    private String name;
    private Integer dailyPrice;
    private String urlFoto;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name= "id_geoCode", referencedColumnName="id")
    private GeoCode geoCode;
    
    @ManyToOne()
    @JoinColumn(name = "id_address", nullable=false)
    private Address address;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name= "id_distance", referencedColumnName="id")
    private Distance distance;

    @OneToMany(mappedBy = "hotel", cascade=CascadeType.ALL)
    @JsonIgnore
    private List<Booking> bookings;

    public Long getId() {
        return id;
    }

    public String getChainCode() {
        return chainCode;
    }

    public String getIataCode() {
        return iataCode;
    }

    public String getName() {
        return name;
    }

    public Integer getDailyPrice() {
        return dailyPrice;
    }

    public String getUrlFoto() {
        return urlFoto;
    }

    public GeoCode getGeoCode() {
        return geoCode;
    }

    public Address getAddress() {
        return address;
    }

    public Distance getDistance() {
        return distance;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setChainCode(String chainCode) {
        this.chainCode = chainCode;
    }

    public void setIataCode(String iataCode) {
        this.iataCode = iataCode;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDailyPrice(Integer dailyPrice) {
        this.dailyPrice = dailyPrice;
    }

    public void setUrlFoto(String urlFoto) {
        this.urlFoto = urlFoto;
    }

    public void setGeoCode(GeoCode geoCode) {
        this.geoCode = geoCode;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public void setDistance(Distance distance) {
        this.distance = distance;
    }
    
}
