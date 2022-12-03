
package com.nocountry.cabininn.controller;

import com.nocountry.cabininn.model.Distance;
import com.nocountry.cabininn.service.IDistanceService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/distances")
@CrossOrigin(origins = "http://localhost:3000")
public class DistanceController {
    
    @Autowired
    private IDistanceService distServ;
    
    @GetMapping("")
    public ResponseEntity<List<Distance>> showDistances(){
        return ResponseEntity.ok().body(distServ.showDistances());
    }
    
    @GetMapping("/{id}")
    public Distance findDistance(@PathVariable Long id) {
        return distServ.findDistance(id).orElse(null);
    }
    
    @PostMapping("/add")
    public ResponseEntity<Distance> createDistance(@RequestBody Distance distance){ 
                                                                                        
        distServ.createDistance(distance);
        return ResponseEntity.ok().body(distance);
    }
    
    @DeleteMapping("/delete/{id}")
    public void deleteDistance(@PathVariable Long id){
        distServ.deleteDistance(id);
    }
    
}
