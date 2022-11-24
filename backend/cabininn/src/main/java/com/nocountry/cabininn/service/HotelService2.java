
package com.nocountry.cabininn.service;

import com.nocountry.cabininn.criteria.HotelCriteria;
import com.nocountry.cabininn.model.Address_;
import com.nocountry.cabininn.model.Hotel;
import com.nocountry.cabininn.model.Hotel_;
import com.nocountry.cabininn.repository.HotelRepository;
import io.github.jhipster.service.QueryService;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class HotelService2 extends QueryService<Hotel> {
    
    @Autowired
    HotelRepository hotelRep;

    public List<Hotel> findByCriteria(HotelCriteria hotelCriteria){
        final Specification<Hotel> specification = createSpecification(hotelCriteria);
        List<Hotel> hotels = hotelRep.findAll(specification);
        return hotels;
    }

    private Specification<Hotel> createSpecification(HotelCriteria criteria){
        Specification<Hotel> specification = Specification.where(null);
        if(criteria != null){
            if(criteria.getCountryName()!=null){
              specification =
                      specification
                              .and(buildReferringEntitySpecification(criteria.getCountryName(), Hotel_.address, Address_.countryName));
           }
            
            if(criteria.getCityName()!=null){
              specification =
                      specification
                              .and(buildReferringEntitySpecification(criteria.getCityName(), Hotel_.address, Address_.cityName));
           }
            
            if(criteria.getDailyPrice()!=null){
               specification =
                       specification
                               .and(buildRangeSpecification(criteria.getDailyPrice(), Hotel_.dailyPrice));
           }
        }
        
       return specification;
    }
}
