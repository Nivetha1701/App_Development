package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(int productId) {
        return productRepository.findById(productId).orElse(null);
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }


    public Product updateProduct(int productId, Product productDetails) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        product.setProductName(productDetails.getProductName());
        product.setRating(productDetails.getRating());
        product.setPrice(productDetails.getPrice());
        product.setImage(productDetails.getImage());
        product.setUser(productDetails.getUser()); 

        return productRepository.save(product);
    }
    public void deleteProduct(int productId) {
        productRepository.deleteById(productId);
    }
}
