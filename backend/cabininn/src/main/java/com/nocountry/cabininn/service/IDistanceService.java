
package com.nocountry.cabininn.service;

import com.nocountry.cabininn.model.Distance;
import java.util.List;
import java.util.Optional;


public interface IDistanceService {
    
    public List<Distance> showDistances();
    public void createDistance(Distance dist);
    public void deleteDistance(Long id);
    public Optional<Distance> findDistance(Long id);
}
