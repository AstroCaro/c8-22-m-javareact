
package com.nocountry.cabininn.controller;

import com.nocountry.cabininn.model.GeoCode;
import com.nocountry.cabininn.service.IGeoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GeoCodeController {
    
    @Autowired
    private IGeoService geoServ;
    
    @GetMapping("/geoCodes")
    public ResponseEntity<List<GeoCode>> showGeoCodes(){
        return ResponseEntity.ok().body(geoServ.showGeoCodes());
    }
    
    @GetMapping("/geoCodes/{id}")
    public GeoCode findGeoCode(@PathVariable Long id) {
        return geoServ.findGeoCode(id).orElse(null);
    }
    
    @PostMapping("/geoCodes/add")
    public ResponseEntity<GeoCode> createGeoCode(@RequestBody GeoCode geoCode){ 
                                                                                        
        geoServ.createGeoCode(geoCode);
        return ResponseEntity.ok().body(geoCode);
    }
    
    @DeleteMapping("/geoCodes/delete/{id}")
    public void deleteGeoCode(@PathVariable Long id){
        geoServ.deleteGeoCode(id);
    }
    
    
}
