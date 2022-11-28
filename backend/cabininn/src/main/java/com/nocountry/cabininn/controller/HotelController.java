
package com.nocountry.cabininn.controller;

import com.nocountry.cabininn.criteria.HotelCriteria;
import com.nocountry.cabininn.dto.BusquedaDTO;
import com.nocountry.cabininn.model.Address;
import com.nocountry.cabininn.model.Hotel;
import com.nocountry.cabininn.service.HotelService2;
import com.nocountry.cabininn.service.IAddressService;
import com.nocountry.cabininn.service.IHotelService;
import io.github.jhipster.service.filter.IntegerFilter;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import io.github.jhipster.service.filter.StringFilter;
import net.logstash.logback.encoder.org.apache.commons.lang3.StringUtils;

@RestController
public class HotelController {
    
    @Autowired
    private IHotelService hotelServ;
    
    @Autowired
    private IAddressService addServ;
    
    @Autowired
    private HotelService2 hotel2Serv;
    
    @GetMapping("/hotels")
    public ResponseEntity<List<Hotel>> showHotels(){
        return ResponseEntity.ok().body(hotelServ.showHotels());
    }
    
    @GetMapping("/hotels/{id}")
    public Hotel findHotel(@PathVariable Long id) {
        return hotelServ.findHotel(id).orElse(null);
    }
    
    @PostMapping("/hotels/add/{addressId}")
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
    
    @DeleteMapping("hotels/delete/{id}")
    public void deleteHotel(@PathVariable Long id){
        hotelServ.deleteHotel(id);
    }
    
//    @PostMapping("/address/{addressId}/hotels/add")
    
    @PostMapping("/list")
    public ResponseEntity<List<Hotel>> list(@RequestBody BusquedaDTO busquedaDTO){
        HotelCriteria hotelCriteria = createCriteria(busquedaDTO);
        List<Hotel> list = hotel2Serv.findByCriteria(hotelCriteria);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    private HotelCriteria createCriteria(BusquedaDTO dto){
        HotelCriteria hotelCriteria = new HotelCriteria();
        if(dto!=null){
            if(!StringUtils.isBlank(dto.getCountryName())){
                StringFilter filter = new StringFilter();
                filter.setEquals(dto.getCountryName());
                hotelCriteria.setCountryName(filter);
            }
            if(!StringUtils.isBlank(dto.getCityName())){
                StringFilter filter = new StringFilter();
                filter.setEquals(dto.getCityName());
                hotelCriteria.setCityName(filter);
            }

            if(dto.getMaxPrice()!=null){
                IntegerFilter filter = new IntegerFilter();
                filter.setEquals(dto.getMaxPrice());
                hotelCriteria.setDailyPrice(filter);
            }
        }
        
       return hotelCriteria;
    }
}
