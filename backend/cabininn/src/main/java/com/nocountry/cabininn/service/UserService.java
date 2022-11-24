package com.nocountry.cabininn.service;

import com.nocountry.cabininn.model.Role;
import com.nocountry.cabininn.model.User;

import java.util.List;

public interface UserService {

    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String roleName, String email);

    User getUserByUsername(String username);
    List<User> getUsers();
}
