package com.example.demo.service;

import com.example.demo.model.AddToCart;
import com.example.demo.model.User;
import com.example.demo.repository.AddToCartRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AddToCartService {

    @Autowired
    private AddToCartRepository addToCartRepository;

    @Autowired
    private UserRepository userRepository;

    // Create a new AddToCart item
    public AddToCart createItem(AddToCart item, String userEmail) {
        Optional<User> userOptional = userRepository.findByEmail(userEmail);
        if (userOptional.isPresent()) {
            item.setUser(userOptional.get()); // Set the user before saving
            return addToCartRepository.save(item);
        } else {
            throw new RuntimeException("User not found with email: " + userEmail);
        }
    }

    // Get all AddToCart items
    public List<AddToCart> getAllItems() {
        return addToCartRepository.findAll();
    }

    // Get a single AddToCart item by ID
    public Optional<AddToCart> getItemById(Integer id) {
        return addToCartRepository.findById(id);
    }

    // Update an existing AddToCart item
    public AddToCart updateItem(Integer id, AddToCart itemDetails) {
        Optional<AddToCart> itemOptional = addToCartRepository.findById(id);
        if (itemOptional.isPresent()) {
            AddToCart item = itemOptional.get();
            item.setProductName(itemDetails.getProductName());
            item.setPrice(itemDetails.getPrice());
            item.setTotalPrice(itemDetails.getTotalPrice());
            return addToCartRepository.save(item);
        } else {
            return null;
        }
    }

    // Delete an AddToCart item by ID
    public void deleteItem(Integer id) {
        if (addToCartRepository.existsById(id)) {
            addToCartRepository.deleteById(id);
        }
    }
}
