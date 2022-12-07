package com.nocountry.cabininn.service.impl;

import com.nocountry.cabininn.dto.RoleDto;
import com.nocountry.cabininn.model.Role;
import com.nocountry.cabininn.repository.RoleRepository;
import com.nocountry.cabininn.service.IRoleService;
import com.nocountry.cabininn.utils.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements IRoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private Mapper mapper;

    @Override
    public RoleDto createRole(RoleDto roleDto) {
        Role role = mapper.getMapper().map(roleDto, Role.class);
        return mapper.getMapper().map(roleRepository.save(role), RoleDto.class);
    }
}

