package com.nocountry.cabininn.security;

import com.nocountry.cabininn.dto.RegisterDto;
import com.nocountry.cabininn.dto.UserDto;
import com.nocountry.cabininn.dto.response.LoginResponse;
import com.nocountry.cabininn.exception.ResourceFoundException;
import com.nocountry.cabininn.exception.ResourceNotFoundException;
import com.nocountry.cabininn.model.Role;
import com.nocountry.cabininn.model.User;
import com.nocountry.cabininn.repository.RoleRepository;
import com.nocountry.cabininn.repository.UserRepository;
import com.nocountry.cabininn.utils.Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.util.Collection;
import java.util.Collections;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService  implements UserDetailsService {

    private final Mapper mapper;

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Username not found"));
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), mapRolesToAuthorities(user.getRoles()));
    }

    private Collection<GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }

    public RegisterDto save(@Valid RegisterDto registerDto) throws ResourceFoundException {  /*Acordar exceptions*/
        if (userRepository.existsByUsername(registerDto.getUsername())) {
            throw new ResourceFoundException("Username already exists");
        }

        User user = mapper.getMapper().map(registerDto, User.class);
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Role roles = roleRepository.findByName("ROLE_USER");
        user.setRoles(Collections.singletonList(roles));

        User userSaved = userRepository.save(user);

        RegisterDto userDto = mapper.getMapper().map(userSaved, RegisterDto.class);

        return userDto;
    }

    public UserDto completeSave(@Valid UserDto registerDto) throws ResourceFoundException {  /*Acordar exceptions*/
        if (userRepository.existsByUsername(registerDto.getUsername())) {
            throw new ResourceFoundException("Username already exists");
        }
        User user = mapper.getMapper().map(registerDto, User.class);
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Role roles = roleRepository.findByName("ROLE_USER");
        user.setRoles(Collections.singletonList(roles));

        User userSaved = userRepository.save(user);

        UserDto userDto = mapper.getMapper().map(userSaved, UserDto.class);

        return userDto;
    }

    public UserDto completeSaveAdmin(@Valid UserDto registerDto) throws ResourceFoundException {  /*Acordar exceptions*/
        if (userRepository.existsByUsername(registerDto.getUsername())) {
            throw new ResourceFoundException("Username already exists");
        }
        User user = mapper.getMapper().map(registerDto, User.class);
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Role roles = roleRepository.findByName("ROLE_ADMIN");
        user.setRoles(Collections.singletonList(roles));

        User userSaved = userRepository.save(user);

        UserDto userDto = mapper.getMapper().map(userSaved, UserDto.class);

        return userDto;
    }

    public UserDto getUserAuthenticated() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        UserDto userDto = mapper.getMapper().map(userRepository.findByUsername(username), UserDto.class);
        return userDto;
    }

    public LoginResponse findByUsername(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            return mapper.getMapper().map(user, LoginResponse.class);
        }
        throw new ResourceNotFoundException("Username not found");
    }
}