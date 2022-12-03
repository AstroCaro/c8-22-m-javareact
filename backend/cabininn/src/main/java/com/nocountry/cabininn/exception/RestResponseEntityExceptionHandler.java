package com.nocountry.cabininn.exception;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletResponse;
import javax.validation.ConstraintViolationException;
import java.io.IOException;

@ControllerAdvice
public class RestResponseEntityExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public void exceptionHandler(final MethodArgumentNotValidException ex,
                                 final HttpServletResponse response) throws IOException {

        for (final ObjectError objectError : ex.getBindingResult().getAllErrors()) {
            response.getWriter().append(objectError.getDefaultMessage()).append(".");
        }
        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler({ResourceFoundException.class, ConstraintViolationException.class})
    public ResponseEntity<Object> handleCreateUserException(Exception exception) {
        ApiException apiException = ApiException.builder()
                .status(HttpStatus.BAD_REQUEST)
                .message(exception.getMessage())
                .developerMessage(ExceptionUtils.getRootCauseMessage(exception))
                .build();
        return new ResponseEntity<>(apiException, HttpStatus.BAD_REQUEST);
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Object> handleNotExistUserException (Exception exception) {
        ApiException apiException = ApiException.builder()
                .status(HttpStatus.NOT_FOUND)
                .message(exception.getMessage())
                .developerMessage(ExceptionUtils.getRootCauseMessage(exception))
                .build();
        return new ResponseEntity<>(apiException, HttpStatus.NOT_FOUND);
    }


}
