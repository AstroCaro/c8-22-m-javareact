package com.nocountry.cabininn.dto;

import com.nocountry.cabininn.model.Provider;
import lombok.Data;

@Data
public class UserDto {

    private Long id;

    private String username;

    private String firstName;

    private String lastName;

    private String password;

    private String phoneNumber;

    private boolean isActive;

    private Provider provider;

}
