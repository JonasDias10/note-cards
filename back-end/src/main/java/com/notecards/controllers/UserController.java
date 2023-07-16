package com.notecards.controllers;

import com.notecards.user.model.User;
import com.notecards.user.service.IUserService;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.util.UUID;
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
    public ResponseEntity<Object> deleteUser(@PathVariable @NotNull @Positive UUID id) {
        return userService.deleteUser(id);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> AuthenticationLogin(@RequestBody User user) {
        return userService.AuthenticationLogin(user);
    }

}