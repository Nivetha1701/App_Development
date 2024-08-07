package com.example.demo.controller;

import com.example.demo.model.Feedback;
import com.example.demo.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/feedbacks")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    // Retrieve all feedbacks - accessible by admins only
    @GetMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Feedback> getAllFeedbacks() {
        return feedbackService.getAllFeedbacks();
    }

    // Retrieve a feedback by ID - accessible by admins and the user who created the feedback
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable int id) {
        Optional<Feedback> feedback = feedbackService.getFeedbackById(id);
        return feedback.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new feedback - accessible by all users
    @PostMapping
    @PreAuthorize("hasRole('ROLE_USER')")
    public Feedback createFeedback(@RequestBody Feedback feedback) {
        // Ensure the user exists before saving feedback
        if (feedback.getUser() != null) {
            feedback.setUser(feedback.getUser()); // Ensure the user is set
        }
        return feedbackService.saveFeedback(feedback);
    }

    // Update an existing feedback - accessible by admins only
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Feedback> updateFeedback(@PathVariable int id, @RequestBody Feedback feedbackDetails) {
        Feedback updatedFeedback = feedbackService.updateFeedback(id, feedbackDetails);
        return ResponseEntity.ok(updatedFeedback);
    }

    // Delete a feedback - accessible by admins only
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Void> deleteFeedback(@PathVariable int id) {
        feedbackService.deleteFeedback(id);
        return ResponseEntity.noContent().build();
    }
}
