package com.example.demo.model;

<<<<<<< HEAD
// import com.fasterxml.jackson.annotation.JsonIgnore;
=======
import com.fasterxml.jackson.annotation.JsonIgnore;
>>>>>>> d675db0bf1bc1359334c5d3fd4104b31f506367e

import jakarta.persistence.*;

@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String cardNumber;
    private String cvc;
    private String expirationDate;

    @OneToOne
    @JoinColumn(name = "order_id", nullable = false) 
    // @JsonIgnore
    private Order order;

    // Default constructor
    public Payment() {
    }

    // Parameterized constructor
    public Payment(String name, String cardNumber, String cvc, String expirationDate, Order order) {
        this.name = name;
        this.cardNumber = cardNumber;
        this.cvc = cvc;
        this.expirationDate = expirationDate;
        this.order = order;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCvc() {
        return cvc;
    }

    public void setCvc(String cvc) {
        this.cvc = cvc;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
