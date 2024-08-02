package com.example.demo.service;

import com.example.demo.model.Order;
import com.example.demo.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    // Retrieve all orders
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Retrieve an order by ID
    public Optional<Order> getOrderById(Integer id) {
        return orderRepository.findById(id);
    }

    // Create or update an order
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    // Delete an order by ID
    public void deleteOrder(Integer id) {
        if (orderRepository.existsById(id)) {
            orderRepository.deleteById(id);
        } else {
            throw new RuntimeException("Order not found with id " + id);
        }
    }
}
