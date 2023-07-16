package com.notecards.user.service;

import java.util.UUID;
import org.springframework.http.ResponseEntity;
import com.notecards.user.model.User;

public interface IUserService {

    ResponseEntity<Object> saveUser(User user);
    ResponseEntity<Object> deleteUser(UUID id);
    ResponseEntity<Object> updateUser(User user);
    ResponseEntity<Object> AuthenticationLogin(User user);

}