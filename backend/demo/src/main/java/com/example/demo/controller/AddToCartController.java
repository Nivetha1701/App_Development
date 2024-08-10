package com.example.demo.controller;

import com.example.demo.model.AddToCart;
import com.example.demo.service.AddToCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cart")
public class AddToCartController {

    @Autowired
    private AddToCartService addToCartService;

    // Create a new item - automatically associate with logged-in user
    @PostMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<AddToCart> createItem(@RequestBody AddToCart item, Authentication authentication) {
        String userEmail = authentication.getName(); // Get user's email from the authentication object
        AddToCart createdItem = addToCartService.createItem(item, userEmail);
        return ResponseEntity.ok(createdItem);
    }

    // Retrieve all items - accessible by logged-in users only
    @GetMapping("/all")
    @PreAuthorize("isAuthenticated()")
    public List<AddToCart> getAllItems() {
        return addToCartService.getAllItems();
    }

    // Retrieve an item by ID - accessible by logged-in users only
    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<AddToCart> getItemById(@PathVariable Integer id) {
        Optional<AddToCart> item = addToCartService.getItemById(id);
        return item.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update an item - accessible by logged-in users only
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<AddToCart> updateItem(@PathVariable Integer id, @RequestBody AddToCart itemDetails) {
        AddToCart updatedItem = addToCartService.updateItem(id, itemDetails);
        if (updatedItem != null) {
            return ResponseEntity.ok(updatedItem);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete an item - accessible by logged-in users only
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Void> deleteItem(@PathVariable Integer id) {
        addToCartService.deleteItem(id);
        return ResponseEntity.noContent().build();
    }
}
