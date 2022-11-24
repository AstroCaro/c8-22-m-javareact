
package com.nocountry.cabininn.service;

import com.nocountry.cabininn.model.Distance;
import com.nocountry.cabininn.repository.DistanceRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DistanceService implements IDistanceService {
    
    @Autowired
    public DistanceRepository distRep;

    @Override
    public List<Distance> showDistances() {
        return distRep.findAll();
    }

    @Override
    public void createDistance(Distance dist) {
        distRep.save(dist);
    }

    @Override
    public void deleteDistance(Long id) {
        distRep.deleteById(id);
    }

    @Override
    public Optional<Distance> findDistance(Long id) {
        return distRep.findById(id);
    }
    
    
}
