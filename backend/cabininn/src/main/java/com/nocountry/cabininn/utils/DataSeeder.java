package com.nocountry.cabininn.utils;

import com.nocountry.cabininn.dto.RoleDto;
import com.nocountry.cabininn.dto.UserDto;
import com.nocountry.cabininn.exception.ResourceNotFoundException;
import com.nocountry.cabininn.security.CustomUserDetailsService;
import com.nocountry.cabininn.service.IRoleService;
import com.nocountry.cabininn.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataSeeder {

    @Autowired
    private IRoleService roleService;
    @Autowired
    private IUserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Bean
    CommandLineRunner commandLineRunner() throws ResourceNotFoundException {
        return args -> {

            RoleDto role;
            role = RoleDto.builder()
                    .name("ROLE_USER").build();
            roleService.createRole(role);

            role = RoleDto.builder()
                    .name("ROLE_ADMIN").build();
            roleService.createRole(role);

            UserDto user = userService.findByUsernameOrNull("juan@gmail.com");
            if (user == null) {
                user = UserDto.builder()
                        .username("juanperez@gmail.com")
                        .firstName("juan")
                        .lastName("perez")
                        .password("password")
                        .phoneNumber("5555-5555")
                        .isActive(true)
                        .build();
                customUserDetailsService.completeSave(user);
            }

            user = userService.findByUsernameOrNull("pedro@gmail.com");
            if (user == null) {
                user = UserDto.builder()
                        .username("pedro@gmail.com")
                        .firstName("pedro")
                        .lastName("gonzalez")
                        .password("password")
                        .phoneNumber("4444-4444")
                        .isActive(true)
                        .build();
                customUserDetailsService.completeSave(user);
            }


            user = userService.findByUsernameOrNull("cabininn@gmail.com");
            if (user == null) {
                user = UserDto.builder()
                        .username("cabininn@gmail.com")
                        .firstName("cabininn")
                        .lastName("noCountry")
                        .password("password")
                        .phoneNumber("3333-3333")
                        .isActive(true)
                        .build();
                customUserDetailsService.completeSaveAdmin(user);
            }

        };
    }
}

