package com.nocountry.cabininn.service.impl;

import com.nocountry.cabininn.model.Provider;
import com.nocountry.cabininn.model.Role;
import com.nocountry.cabininn.model.User;
import com.nocountry.cabininn.repository.RoleRepository;
import com.nocountry.cabininn.repository.UserRepository;
import com.nocountry.cabininn.service.IUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl implements IUserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public User saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String roleName, String username) {
        User user = userRepository.findByUsername(username).get();
        Role role = roleRepository.findByName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username).get();
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }


    @Override
    public void processOAuthPostLogin(OAuth2User oAuth2User) {

        User existUser = userRepository.findByUsername(oAuth2User.getAttribute("email")).get();

        if (existUser == null) {
            User newUser = new User();
            newUser.setUsername(oAuth2User.getAttribute("email"));
            newUser.setFirstName(oAuth2User.getAttribute("given_name"));
            newUser.setLastName(oAuth2User.getAttribute("family_name"));
            newUser.setProvider(Provider.GOOGLE);
            newUser.setActive(true);

            userRepository.save(newUser);

            System.out.println("Created new user: " + newUser);
        }

    }

//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByUsername(username).get();
//        if(user == null) {
//            log.error("User not found: " + username);
//            throw new UsernameNotFoundException("User not found: " + username);
//        }
//        log.error("User found: " + username);
//        Collection<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
//        user.getRoles().forEach(role -> {
//            authorities.add(new SimpleGrantedAuthority(role.getName()));
//        });
//        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
//    }
}
