package com.nocountry.cabininn.service.impl;

import com.nocountry.cabininn.dto.UserDto;
import com.nocountry.cabininn.exception.ResourceNotFoundException;
import com.nocountry.cabininn.model.Role;
import com.nocountry.cabininn.model.User;
import com.nocountry.cabininn.repository.RoleRepository;
import com.nocountry.cabininn.repository.UserRepository;
import com.nocountry.cabininn.service.IUserService;
import com.nocountry.cabininn.utils.Mapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl implements IUserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final Mapper mapper;

    @Override
    public UserDto findById(Long id) {
        User user = userRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("User ID Invalid"));
        UserDto userDto = mapper.getMapper().map(user, UserDto.class);
        return userDto;
    }

    @Override
    public UserDto findByUsername(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            return mapper.getMapper().map(user, UserDto.class);
        }
        throw new ResourceNotFoundException("Username not found");
    }

    @Override
    public UserDto findByUsernameOrNull(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            return mapper.getMapper().map(user, UserDto.class);
        }
        return null;
    }

    @Override
    public List<UserDto> findAllUsers() {
        return userRepository.findAll().
                stream().
                map(continent ->
                        mapper.getMapper()
                                .map(continent, UserDto.class)
                ).collect(Collectors.toList());
    }

    @Override
    public UserDto cancelUserByUsername(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new ResourceNotFoundException("Username not found")
        );
        user.setActive(false);
        User userSaved = userRepository.save(user);
        UserDto userDto = mapper.getMapper().map(userSaved, UserDto.class);
        return userDto;
    }

    @Override
    public UserDto cancelUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("User ID Invalid")
        );
        user.setActive(false);
        User userSaved = userRepository.save(user);
        UserDto userDto = mapper.getMapper().map(userSaved, UserDto.class);
        return userDto;
    }

    @Override
    public void deleteUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("User ID Invalid")
        );
        userRepository.deleteById(id);
    }

    @Override
    public void deleteUserByUsername(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new ResourceNotFoundException("Username Invalid")
        );
        userRepository.deleteByUsername(username);
    }

    //TODO: change entity to dto, also using cases.

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



//    @Override
//    public void processOAuthPostLogin(OAuth2User oAuth2User) {
//
//        User existUser = userRepository.findByUsername(oAuth2User.getAttribute("email")).get();
//
//        if (existUser == null) {
//            User newUser = new User();
//            newUser.setUsername(oAuth2User.getAttribute("email"));
//            newUser.setFirstName(oAuth2User.getAttribute("given_name"));
//            newUser.setLastName(oAuth2User.getAttribute("family_name"));
//            newUser.setProvider(Provider.GOOGLE);
//            newUser.setActive(true);
//
//            userRepository.save(newUser);
//
//            System.out.println("Created new user: " + newUser);
//        }
//
//    }

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
