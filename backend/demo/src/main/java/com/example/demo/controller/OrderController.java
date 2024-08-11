package com.example.demo.controller;

import com.example.demo.model.Order;
import com.example.demo.model.User;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

     @Autowired
    private UserService userService;

    // Create a new Order - accessible by all users (admins or regular users)
    @PostMapping
    @PreAuthorize("permitAll()")
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
    // Retrieve the user by email
    User user = userService.findUserByEmail(order.getEmail());
    
    if (user != null) {
        order.setUser(user);  // Associate the user with the order
        Order createdOrder = orderRepository.save(order);
        return ResponseEntity.ok(createdOrder);
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(null);
    }
}

    // Get all Orders - accessible by admins and regular users
    @GetMapping
    @PreAuthorize("permitAll()")
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Get a single Order by ID - accessible by admins and the user who placed the order
    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or (hasRole('ROLE_USER') )")
    public ResponseEntity<Order> getOrderById(@PathVariable Integer id) {
        Optional<Order> order = orderRepository.findById(id);
        return order.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update an Order - accessible by admins only
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Order> updateOrder(@PathVariable Integer id, @RequestBody Order orderDetails) {
        Optional<Order> orderOptional = orderRepository.findById(id);
        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();
            order.setName(orderDetails.getName());
            order.setEmail(orderDetails.getEmail());
            order.setMobile(orderDetails.getMobile());
            order.setAddress(orderDetails.getAddress());
            Order updatedOrder = orderRepository.save(order);
            return ResponseEntity.ok(updatedOrder);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete an Order - accessible by admins only
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Void> deleteOrder(@PathVariable Integer id) {
        if (orderRepository.existsById(id)) {
            orderRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
