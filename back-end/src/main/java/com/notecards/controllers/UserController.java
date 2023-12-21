package com.notecards.controllers;

import com.notecards.user.model.User;
import com.notecards.user.service.IUserService;
import java.util.UUID;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/note-cards/user")
public class UserController {

    private final IUserService userService;

    public UserController(IUserService userService) {
        this.userService = userService;
    }

    @PostMapping("/")
    public ResponseEntity<Object> saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PutMapping("/update")
    public ResponseEntity<Object> updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable @NotNull UUID id) {
        return userService.deleteUser(id);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> authenticationLogin(@RequestBody User user) {
        return userService.authenticationLogin(user);
    }

}