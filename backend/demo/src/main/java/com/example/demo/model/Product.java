package com.example.demo.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;

    private String productName;
    private double rating;
    private double price;

    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AddToCart> cartItems;

    // Default constructor
    public Product() {
    }

    // Parameterized constructor
    public Product(int productId, String productName, double rating, double price, User user) {
        this.productId = productId;
        this.productName = productName;
        this.rating = rating;
        this.price = price;
        this.user = user;
    }

    // Getters and Setters
    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<AddToCart> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<AddToCart> cartItems) {
        this.cartItems = cartItems;
    }
}
