package com.crudapp.crudbackend.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("There is no user with given id - " + id);
    }
}
