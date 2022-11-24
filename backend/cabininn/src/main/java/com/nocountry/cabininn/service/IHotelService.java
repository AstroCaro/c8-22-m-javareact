
package com.nocountry.cabininn.service;

import com.nocountry.cabininn.model.Hotel;
import java.util.List;
import java.util.Optional;


public interface IHotelService {
    
    public List<Hotel> showHotels();
    public void createHotel(Hotel hotel);
    public void deleteHotel(Long id);
    public Optional<Hotel> findHotel(Long id);
    
}
