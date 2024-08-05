package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

      @Autowired
    private PasswordEncoder passwordEncoder;


    // Retrieve all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Retrieve a user by ID
    public Optional<User> getUserById(int id) {
        return userRepository.findById(id);
    }

    // Create a new user
    public User createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // Update an existing user
    public User updateUser(int id, User user) {
        user.setId(id);  // Ensure the ID is set in the user object
        return userRepository.save(user);
    }

    // Delete a user by ID
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
}
