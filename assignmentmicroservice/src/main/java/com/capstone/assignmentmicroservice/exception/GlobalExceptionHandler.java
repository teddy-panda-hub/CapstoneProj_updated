package com.capstone.assignmentmicroservice.exception;

import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {
	 @ExceptionHandler(IllegalArgumentException.class)
	    public ResponseEntity<Object> handleIllegalArgumentException(
	            IllegalArgumentException ex, WebRequest request) {
	        return new ResponseEntity<>(new ApiError(HttpStatus.BAD_REQUEST, "Invalid input", ex.getMessage()), HttpStatus.BAD_REQUEST);
	    }

	    // Handle NoSuchElementException
	    @ExceptionHandler(NoSuchElementException.class)
	    public ResponseEntity<Object> handleNoSuchElementException(
	            NoSuchElementException ex, WebRequest request) {
	        return new ResponseEntity<>(new ApiError(HttpStatus.NOT_FOUND, "Element not found", ex.getMessage()), HttpStatus.NOT_FOUND);
	    }

	    // Handle all other exceptions
	    @ExceptionHandler(Exception.class)
	    public ResponseEntity<Object> handleGlobalException(
	            Exception ex, WebRequest request) {
	        return new ResponseEntity<>(new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, "There is something wrong with the code", ex.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
	    }

	    public static class ApiError {
	        private HttpStatus status;
	        private String message;
	        private String details;

	        public ApiError(HttpStatus status, String message, String details) {
	            this.status = status;
	            this.message = message;
	            this.details = details;
	        }

	        // Getters and setters
	        public HttpStatus getStatus() {
	            return status;
	        }

	        public void setStatus(HttpStatus status) {
	            this.status = status;
	        }

	        public String getMessage() {
	            return message;
	        }

	        public void setMessage(String message) {
	            this.message = message;
	        }

	        public String getDetails() {
	            return details;
	        }

	        public void setDetails(String details) {
	            this.details = details;
	        }
	    }
}
