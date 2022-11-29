package com.nocountry.cabininn.service;

import com.nocountry.cabininn.model.Role;
import com.nocountry.cabininn.model.User;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.List;

public interface IUserService {

    User saveUser(User user);

    Role saveRole(Role role);

    void addRoleToUser(String roleName, String email);

    User getUserByUsername(String username);

    List<User> getUsers();

}
