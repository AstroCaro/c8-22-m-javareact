
package com.nocountry.cabininn.service;

import com.nocountry.cabininn.dto.HotelDto;
import com.nocountry.cabininn.model.Hotel;
import java.util.List;
import java.util.Optional;


public interface IHotelService {

    HotelDto findById(Long id);
    List<Hotel> showHotels();
    void createHotel(Hotel hotel);
    void deleteHotel(Long id);
    Optional<Hotel> findHotel(Long id);
    
}
