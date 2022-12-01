package com.nocountry.cabininn.service;

import com.nocountry.cabininn.dto.RoleDto;
import org.springframework.stereotype.Service;

public interface IRoleService {

    RoleDto createRole(RoleDto roleDto);
}
