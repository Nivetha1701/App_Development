package com.example.demo.service;

import com.example.demo.model.Payment;
import com.example.demo.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Optional<Payment> getPaymentById(int id) {
        return paymentRepository.findById(id);
    }

    public Payment savePayment(Payment payment) {
        // Validate order
        if (payment.getOrder() == null || payment.getOrder().getId() == null) {
            throw new IllegalArgumentException("Order cannot be null or missing ID");
        }
        // Save payment
        return paymentRepository.save(payment);
    }
    

    public void deletePayment(int id) {
        paymentRepository.deleteById(id);
    }
}
