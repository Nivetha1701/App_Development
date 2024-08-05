package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
public class AddToCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "product_id") // JoinColumn to specify the foreign key
    @JsonIgnore
    private Product product;

    @ManyToOne
    @JoinColumn(name = "user_id") // JoinColumn to specify the foreign key
    @JsonIgnore
    private User user;

    private String productName;
    private double price;
    private double totalPrice;

    // Default constructor
    public AddToCart() {
    }

    // Parameterized constructor
    public AddToCart(Product product, User user, String productName, double price, double totalPrice) {
        this.product = product;
        this.user = user;
        this.productName = productName;
        this.price = price;
        this.totalPrice = totalPrice;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
