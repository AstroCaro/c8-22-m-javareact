package com.nocountry.cabininn.exception;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
@Builder
public class ApiException {

    private HttpStatus status;
    private String message;
    private String developerMessage;

}