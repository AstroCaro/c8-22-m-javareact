
package com.nocountry.cabininn.controller;

import com.nocountry.cabininn.model.Distance;
import com.nocountry.cabininn.service.IDistanceService;
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
public class DistanceController {
    
    @Autowired
    private IDistanceService distServ;
    
    @GetMapping("/distances")
    public ResponseEntity<List<Distance>> showDistances(){
        return ResponseEntity.ok().body(distServ.showDistances());
    }
    
    @GetMapping("/distances/{id}")
    public Distance findDistance(@PathVariable Long id) {
        return distServ.findDistance(id).orElse(null);
    }
    
    @PostMapping("/distances/add")
    public ResponseEntity<Distance> createDistance(@RequestBody Distance distance){ 
                                                                                        
        distServ.createDistance(distance);
        return ResponseEntity.ok().body(distance);
    }
    
    @DeleteMapping("/distances/delete/{id}")
    public void deleteDistance(@PathVariable Long id){
        distServ.deleteDistance(id);
    }
    
}
