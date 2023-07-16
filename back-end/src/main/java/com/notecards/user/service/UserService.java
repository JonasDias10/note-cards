package com.notecards.user.service;

import com.notecards.user.model.User;
import com.notecards.user.repository.IUserRepository;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService implements IUserService {

    private final IUserRepository userRepository;

    public UserService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public ResponseEntity<Object> saveUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                .body("The email already exists.");
        }
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(userRepository.save(user));
    }

    @Override
    public ResponseEntity<Object> deleteUser(@NotNull @Positive UUID id) {
        if (!userRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("The user doesn't exist.");
        }
        userRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK)
            .body("User successfully deleted.");
    }

    @Override
    public ResponseEntity<Object> updateUser(User user) {
        User userUpdate = userRepository.getReferenceById(user.getId());

        userUpdate.setName(user.getName());

        return ResponseEntity.status(HttpStatus.OK)
            .body(userRepository.save(userUpdate));
    }

    @Override
    public ResponseEntity<Object> AuthenticationLogin(User user) {
        Optional<User> userFound = userRepository.findByEmail(user.getEmail());
 
        if (!userFound.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("The email is incorrect.");
        }
        if (!(userFound.get().getPassword().equals(user.getPassword()))) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                .body("The password is incorrect.");
        }
        
        return ResponseEntity.status(HttpStatus.OK)
            .body(userFound.get());
    }

}