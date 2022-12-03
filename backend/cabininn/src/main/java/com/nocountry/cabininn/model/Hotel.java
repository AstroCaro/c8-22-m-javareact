
package com.nocountry.cabininn.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import java.util.List;

//JDateChooser JCalendar
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Hotel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String chainCode;
    private String iataCode;
    private String name;
    private Integer dailyPrice;
    private String descripcion;
    private String urlImage;
    private String urlImage2;
    private String urlImage3;
    private Integer guestsNumber;
    private Integer rooms;
    private Integer bathrooms;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name= "id_geoCode", referencedColumnName="id")
    private GeoCode geoCode;
    
    @ManyToOne()
    @JoinColumn(name = "id_address", nullable=false)
    private Address address;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name= "id_distance", referencedColumnName="id")
    private Distance distance;


}
