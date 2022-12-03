
package com.nocountry.cabininn.controller;

import com.nocountry.cabininn.model.GeoCode;
import com.nocountry.cabininn.service.IGeoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/geoCodes")
@CrossOrigin(origins = "http://localhost:3000")
public class GeoCodeController {
    
    @Autowired
    private IGeoService geoServ;
    
    @GetMapping("")
    public ResponseEntity<List<GeoCode>> showGeoCodes(){
        return ResponseEntity.ok().body(geoServ.showGeoCodes());
    }
    
    @GetMapping("/{id}")
    public GeoCode findGeoCode(@PathVariable Long id) {
        return geoServ.findGeoCode(id).orElse(null);
    }
    
    @PostMapping("/add")
    public ResponseEntity<GeoCode> createGeoCode(@RequestBody GeoCode geoCode){ 
                                                                                        
        geoServ.createGeoCode(geoCode);
        return ResponseEntity.ok().body(geoCode);
    }
    
    @DeleteMapping("/delete/{id}")
    public void deleteGeoCode(@PathVariable Long id){
        geoServ.deleteGeoCode(id);
    }
    
    
}
