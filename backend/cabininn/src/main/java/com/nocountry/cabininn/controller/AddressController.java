
package com.nocountry.cabininn.controller;

import com.nocountry.cabininn.model.Address;
import com.nocountry.cabininn.service.IAddressService;
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
public class AddressController {
    
    @Autowired
    private IAddressService addServ;
    
    @GetMapping("/addresses")
    public ResponseEntity<List<Address>> showAddresses(){
        return ResponseEntity.ok().body(addServ.showAddresses());
    }
    
    @GetMapping("/addresses/{id}")
    public Address findAddress(@PathVariable Long id) {
        return addServ.findAddress(id).orElse(null);
    }
    
    @PostMapping("/addresses/add")
    public ResponseEntity<Address> createAddress(@RequestBody Address address){ 
                                                                                        
        addServ.createAddress(address);
        return ResponseEntity.ok().body(address);
    }
    
    @DeleteMapping("/addresses/delete/{id}")
    public void deleteAddress(@PathVariable Long id){
        addServ.deleteAddress(id);
    }
    
}
