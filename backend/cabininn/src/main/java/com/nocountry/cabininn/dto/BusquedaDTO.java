
package com.nocountry.cabininn.dto;

public class BusquedaDTO {
    
    private String countryName;
    private String cityName;
    private Integer maxPrice;

    public String getCountryName() {
        return countryName;
    }

    public String getCityName() {
        return cityName;
    }

    public Integer getMaxPrice() {
        return maxPrice;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public void setMaxPrice(Integer maxPrice) {
        this.maxPrice = maxPrice;
    }

}
