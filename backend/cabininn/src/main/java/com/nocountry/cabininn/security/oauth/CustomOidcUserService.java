package com.nocountry.cabininn.security.oauth;

import com.nocountry.cabininn.model.Provider;
import com.nocountry.cabininn.model.Role;
import com.nocountry.cabininn.model.User;
import com.nocountry.cabininn.repository.RoleRepository;
import com.nocountry.cabininn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Optional;

@Service
public class CustomOidcUserService extends OidcUserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public OidcUser loadUser(OidcUserRequest userRequest) throws OAuth2AuthenticationException {
        OidcUser oidcUser = super.loadUser(userRequest);

        try {
            return processOidcUser(userRequest, oidcUser);
        } catch (Exception ex) {
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private OidcUser processOidcUser(OidcUserRequest userRequest, OidcUser oidcUser) {
        CustomOAuth2User googleUserInfo = new CustomOAuth2User(oidcUser);

        // see what other data from userRequest or oidcUser you need

        Optional<User> userOptional = userRepository.findByUsername(googleUserInfo.getEmail());
        if (!userOptional.isPresent()) {
            User user = new User();
            user.setUsername(googleUserInfo.getEmail());
            user.setFirstName(googleUserInfo.getName());
            user.setLastName(googleUserInfo.getLastName());
            Role roles = roleRepository.findByName(String.valueOf(googleUserInfo.getAuthorities().stream().findFirst()));
            user.setRoles(Collections.singletonList(roles));
//            user.setProvider(Provider.valueOf(userRequest.getClientRegistration().getClientName()));
            // set other needed data

            userRepository.save(user);
        }

        return oidcUser;
    }
}

