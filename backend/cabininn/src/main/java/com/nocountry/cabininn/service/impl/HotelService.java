
package com.nocountry.cabininn.service.impl;

import com.nocountry.cabininn.dto.HotelDto;
import com.nocountry.cabininn.dto.UserDto;
import com.nocountry.cabininn.exception.ResourceNotFoundException;
import com.nocountry.cabininn.model.Hotel;
import com.nocountry.cabininn.model.User;
import com.nocountry.cabininn.repository.HotelRepository;
import java.util.List;
import java.util.Optional;

import com.nocountry.cabininn.service.IHotelService;
import com.nocountry.cabininn.utils.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HotelService implements IHotelService {
    
    @Autowired
    public HotelRepository hotelRep;

    @Autowired
    public Mapper mapper;

    @Override
    public HotelDto findById(Long id) {
        Hotel hotel = hotelRep.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Hotel ID Invalid"));
        HotelDto hotelDto = mapper.getMapper().map(hotel, HotelDto.class);
        return hotelDto;
    }

    @Override
    public List<Hotel> showHotels() {
        return hotelRep.findAll();
    }

    @Override
    public void createHotel(Hotel hotel) {
        hotelRep.save(hotel);
    }

    @Override
    public void deleteHotel(Long id) {
        hotelRep.deleteById(id);
    }

    @Override
    public Optional<Hotel> findHotel(Long id) {
        return hotelRep.findById(id);
    }
    
}
