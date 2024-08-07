package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    // Retrieve all products - accessible by admins and users
    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    // Retrieve a product by ID - accessible by admins and users
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity<Product> getProductById(@PathVariable int id) {
        Product product = productService.getProductById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    // Create a new product - accessible by admins only
    @PostMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product createdProduct = productService.saveProduct(product);
        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }

    // Update an existing product - accessible by admins only
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Product> updateProduct(@PathVariable int id, @RequestBody Product product) {
        product.setProductId(id);
        Product updatedProduct = productService.updateProduct(product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }

    // Delete a product by ID - accessible by admins only
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Void> deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
