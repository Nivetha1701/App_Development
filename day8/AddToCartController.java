package com.example.demo.controller;

import com.example.demo.model.AddToCart;
import com.example.demo.service.AddToCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cart")
public class AddToCartController {

    @Autowired
    private AddToCartService addToCartService;

    @PostMapping
    public AddToCart createItem(@RequestBody AddToCart item) {
        return addToCartService.createItem(item);
    }

    @GetMapping
    public List<AddToCart> getAllItems() {
        return addToCartService.getAllItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AddToCart> getItemById(@PathVariable Integer id) {
        Optional<AddToCart> item = addToCartService.getItemById(id);
        return item.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<AddToCart> updateItem(@PathVariable Integer id, @RequestBody AddToCart itemDetails) {
        AddToCart updatedItem = addToCartService.updateItem(id, itemDetails);
        if (updatedItem != null) {
            return ResponseEntity.ok(updatedItem);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Integer id) {
        addToCartService.deleteItem(id);
        return ResponseEntity.noContent().build();
    }
}
