package com.nocountry.cabininn.criteria;

import io.github.jhipster.service.filter.IntegerFilter;
import io.github.jhipster.service.filter.StringFilter;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class HotelCriteria {

    private StringFilter countryName;
    private StringFilter cityName;
    private IntegerFilter dailyPrice;
    private IntegerFilter guestsNumber;

}