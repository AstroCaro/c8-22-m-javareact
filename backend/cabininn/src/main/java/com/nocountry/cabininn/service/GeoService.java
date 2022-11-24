
package com.nocountry.cabininn.service;

import com.nocountry.cabininn.model.GeoCode;
import com.nocountry.cabininn.repository.GeoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GeoService implements IGeoService {
    
    @Autowired
    public GeoRepository geoRep;

    @Override
    public List<GeoCode> showGeoCodes() {
        return geoRep.findAll();
    }

    @Override
    public void createGeoCode(GeoCode geo) {
        geoRep.save(geo);
    }

    @Override
    public void deleteGeoCode(Long id) {
        geoRep.deleteById(id);
    }

    @Override
    public Optional<GeoCode> findGeoCode(Long id) {
        return geoRep.findById(id);
    }
    
}
