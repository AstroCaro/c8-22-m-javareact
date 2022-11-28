
package com.nocountry.cabininn.service;

import com.nocountry.cabininn.model.Hotel;
import com.nocountry.cabininn.repository.HotelRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HotelService implements IHotelService {
    
    @Autowired
    public HotelRepository hotelRep;

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
