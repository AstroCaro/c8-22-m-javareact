
package com.nocountry.cabininn.service;

import com.nocountry.cabininn.model.Address;
import com.nocountry.cabininn.repository.AddressRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService implements IAddressService {
    
    @Autowired
    public AddressRepository addrRep;

    @Override
    public List<Address> showAddresses() {
        return addrRep.findAll();
    }

    @Override
    public void createAddress(Address address) {
        addrRep.save(address);
    }

    @Override
    public void deleteAddress(Long id) {
        addrRep.deleteById(id);
    }

    @Override
    public Optional<Address> findAddress(Long id) {
        return addrRep.findById(id);
    }
    
}
