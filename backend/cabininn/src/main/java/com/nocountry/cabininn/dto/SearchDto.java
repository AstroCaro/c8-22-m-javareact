package com.nocountry.cabininn.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchDto {
    
    private String countryName;
    private String cityName;
    private Integer maxPrice;
    private Integer guestsNumber;

}
