package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String name;
    private String email;
    private String address;
    private String mobile;
    private double totalPrice;  // New field for total price

    @ManyToOne
    @JoinColumn(name = "user_id", nullable=false)  
    @JsonIgnore
    private User user;   

    @OneToOne(mappedBy = "order")
    @JsonIgnore
    private Payment payment;  

    public Order() {
    }

    public Order(String name, String email, String mobile, String address, double totalPrice, User user, Payment payment) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.address = address;
        this.totalPrice = totalPrice;
        this.user = user;
        this.payment = payment;
    }

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }
}
