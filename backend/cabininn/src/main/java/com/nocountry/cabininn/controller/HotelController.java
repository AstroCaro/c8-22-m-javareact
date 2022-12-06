package com.nocountry.cabininn.controller;

import com.nocountry.cabininn.criteria.HotelCriteria;
import com.nocountry.cabininn.dto.HotelDto;
import com.nocountry.cabininn.dto.SearchDto;
import com.nocountry.cabininn.model.Address;
import com.nocountry.cabininn.model.Hotel;
import com.nocountry.cabininn.service.impl.HotelService2;
import com.nocountry.cabininn.service.IAddressService;
import com.nocountry.cabininn.service.IHotelService;
import io.github.jhipster.service.filter.IntegerFilter;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.github.jhipster.service.filter.StringFilter;
import org.springframework.util.StringUtils;


@RestController
@RequestMapping("/hotels")
@CrossOrigin(origins = "http://localhost:3000")
public class HotelController {

    @Autowired
    private IHotelService hotelServ;

    @Autowired
    private IAddressService addServ;

    @Autowired
    private HotelService2 hotel2Serv;

    @GetMapping("")
    public ResponseEntity<List<Hotel>> showHotels(){
        return ResponseEntity.ok().body(hotelServ.showHotels());
    }

    @GetMapping("/{id}")
    public Hotel findHotel(@PathVariable Long id) {
        return hotelServ.findHotel(id).orElse(null);
    }

    @GetMapping("/random")
    public Hotel findHotelRandom() {
        return hotelServ.findHotelRandom();
    }

    @PostMapping("/add/{addressId}")
    public ResponseEntity<Hotel> createHotel(@PathVariable("addressId") Long addressId, @RequestBody Hotel hotel){
        Optional<Address> addOpt = addServ.findAddress(addressId);

        if (addOpt.isPresent()){
            Address address = addOpt.get();
            hotel.setAddress(address);
            hotelServ.createHotel(hotel);
            return ResponseEntity.ok().body(hotel);
        }
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteHotel(@PathVariable Long id){
        hotelServ.deleteHotel(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

//    @PostMapping("/address/{addressId}/hotels/add")

    @PostMapping("/list")
    public ResponseEntity<List<Hotel>> list(@RequestBody SearchDto searchDTO){
        HotelCriteria hotelCriteria = createCriteria(searchDTO);
        List<Hotel> list = hotel2Serv.findByCriteria(hotelCriteria);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    private HotelCriteria createCriteria(SearchDto dto){
        HotelCriteria hotelCriteria = new HotelCriteria();
        if(dto!=null){
            if(StringUtils.hasText(dto.getCountryName())){
                StringFilter filter = new StringFilter();
                filter.setEquals(dto.getCountryName());
                hotelCriteria.setCountryName(filter);
            }
            if(StringUtils.hasText(dto.getCityName())){
                StringFilter filter = new StringFilter();
                filter.setEquals(dto.getCityName());
                hotelCriteria.setCityName(filter);
            }
            if(dto.getGuestsNumber()!=null){
                IntegerFilter filter = new IntegerFilter();
                filter.setEquals(dto.getGuestsNumber());
                hotelCriteria.setGuestsNumber(filter);
            }
        }

       return hotelCriteria;
    }
}
