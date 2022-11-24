package com.nocountry.cabininn.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Email field must not be empty")
    @Column(name = "username", unique = true)
    private String username;

    //@NotBlank(message = "First name is required")
    @Column(name = "first_name")
    private String firstName;

    //@NotBlank(message = "Last name is required")
    @Column(name = "last_name")
    private String lastName;

    @NotBlank(message = "Password cannot be empty")
    @Size(min = 7, max = 250, message = "Password must have at least 8 characters")
    private String password;

    //@NotBlank(message = "Phone number cannot be empty")
    private String phoneNumber;

    private boolean isActive = true;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private Collection<Role> roles = new ArrayList<Role>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user", orphanRemoval = true)
    private Collection<PaymentMethod> paymentMethods = new ArrayList<PaymentMethod>();


}
