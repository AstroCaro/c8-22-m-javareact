package com.nocountry.cabininn.dto.response;

import com.nocountry.cabininn.model.Provider;
import lombok.Data;

@Data
public class UserResponse {

    private Long id;

    private String username;

    private String firstName;

    private String lastName;

    private String password;

    private String phoneNumber;

    private boolean isActive;

    private Provider provider;

}
