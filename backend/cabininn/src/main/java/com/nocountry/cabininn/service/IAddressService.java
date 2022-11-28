
package com.nocountry.cabininn.service;

import com.nocountry.cabininn.model.Address;
import java.util.List;
import java.util.Optional;


public interface IAddressService {
    
    public List<Address> showAddresses();
    public void createAddress(Address address);
    public void deleteAddress(Long id);
    public Optional<Address> findAddress(Long id);
}
