
package com.nocountry.cabininn.service;

import com.nocountry.cabininn.model.GeoCode;
import java.util.List;
import java.util.Optional;


public interface IGeoService {
    
    public List<GeoCode> showGeoCodes();
    public void createGeoCode(GeoCode geo);
    public void deleteGeoCode(Long id);
    public Optional<GeoCode> findGeoCode(Long id);
}
