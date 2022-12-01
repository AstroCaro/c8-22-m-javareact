package com.nocountry.cabininn.utils;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class Mapper {
    @Bean
    public ModelMapper getMapper() {
        ModelMapper modelmapper = new ModelMapper();
        Configuration config = modelmapper.getConfiguration();
        config.setPropertyCondition(Conditions.isNotNull());
        return modelmapper;
    }
}