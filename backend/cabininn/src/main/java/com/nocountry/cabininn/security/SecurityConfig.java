package com.nocountry.cabininn.security;

import com.nocountry.cabininn.security.oauth.CustomOAuth2UserService;
import com.nocountry.cabininn.security.oauth.CustomOidcUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;

@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final CustomOAuth2UserService customOAuth2UserService;
    private final CustomOidcUserService customOidcUserService;
    private final JwtAuthEntryPoint authEntryPoint;

    @Autowired
    ClientRegistrationRepository clientRegistrationRepository;


    @Bean
    public SecurityFilterChain basicFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable())
                .exceptionHandling(exception -> exception.authenticationEntryPoint(authEntryPoint))
                .authorizeRequests(auth -> {
                    auth.antMatchers("/", "/error", "/webjars/**", "/swagger-ui.html").permitAll();
                    auth.antMatchers("/auth/**").permitAll();
                    auth.antMatchers("/hotels/**", "/addresses/**", "/distances/**", "/geoCodes/**").permitAll();
                    auth.antMatchers("/bookings/**").permitAll();//hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
                    auth.antMatchers("/bookings/**").hasAnyAuthority("ROLE_ADMIN");
//                    auth.antMatchers("/bookings/delete").hasAnyAuthority("ROLE_ADMIN");
//                    auth.antMatchers("/hotels/delete/**", "hotels/add/**").hasAnyAuthority("ROLE_ADMIN");
                    auth.antMatchers(GET, "/users/listWithToken").hasAnyAuthority("ROLE_ADMIN");
                    auth.antMatchers(GET, "/api/users/**").hasAnyAuthority("ROLE_ADMIN");
                    auth.antMatchers(POST, "/api/users/save").hasAnyAuthority("ROLE_ADMIN");
                    auth.anyRequest().authenticated();
                })
                .oauth2Login()
                .userInfoEndpoint().oidcUserService(customOidcUserService).and()
                .defaultSuccessUrl("/").and()
                .logout(l -> l
                        .logoutSuccessUrl("/")
                        .deleteCookies("JSESSIONID")
                        .logoutUrl("/logout")
                        .invalidateHttpSession(true)
                        .clearAuthentication(true).permitAll()
                )
//                .sessionManagement(session -> session.sessionCreationPolicy(STATELESS)
// .addFilter(customAuthenticationFilter)
//               .addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
                .build();
    }


    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }

}

//
//    @Bean
//    public SecurityFilterChain oAuthFilterChain(HttpSecurity http) throws Exception {
//        return http
//                .csrf(csrf -> csrf.disable())
//                .authorizeRequests(auth -> {
//                    auth.antMatchers("/", "/error", "/webjars/**").permitAll();
//////                    auth.antMatchers("/auth/**", "/login").permitAll();
////                    auth.antMatchers("/list/**", "/hotels", "/addresses").permitAll();
////                    auth.antMatchers("/hotels/delete/**", "hotels/add/**").hasAnyAuthority("ROLE_ADMIN");
////                    auth.antMatchers(GET, "/api/users/**").hasAnyAuthority("ROLE_ADMIN");
////                    auth.antMatchers(POST, "/api/users/save").hasAnyAuthority("ROLE_ADMIN");
//                    auth.anyRequest().authenticated();
//                })
//                .exceptionHandling(exception -> exception.authenticationEntryPoint(authEntryPoint))
//
////                .httpBasic().and()
////                .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
//                //.addFilter(customAuthenticationFilter)
////               .addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class)
//                //
//                // .addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
////                .loginPage("/oauth_login");
////                    .defaultSuccessUrl("/loginSuccess")
////                .userInfoEndpoint()
////                .userService(oAuth2UserService)
////                .and()
////                    .failureUrl("/loginFailure")
////                .httpBasic().and()
//                .logout(l -> l
//                        .logoutSuccessUrl("/")
//                        .deleteCookies("JSESSIONID")
//                        .logoutUrl("/logout")
//                        .invalidateHttpSession(true)
//                        .clearAuthentication(true).permitAll()
//                        .logoutSuccessHandler(oidcLogoutSuccessHandler())
//                )
//                .oauth2Login()
//                .and()
//                .csrf(c -> c
//                        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
//                )
//                .build();
//    }