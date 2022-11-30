package com.nocountry.cabininn.service;

import com.nocountry.cabininn.dto.UserDto;
import com.nocountry.cabininn.model.Role;
import com.nocountry.cabininn.model.User;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.List;

public interface IUserService {

    UserDto findById(Long id);

    UserDto findByUsername(String username);

    List<UserDto> findAllUsers();

    UserDto cancelUserByUsername(String username);

    void deleteUserById(Long id);


    void deleteUserByUsername(String username);

    User saveUser(User user);

    Role saveRole(Role role);

    void addRoleToUser(String roleName, String email);

}
