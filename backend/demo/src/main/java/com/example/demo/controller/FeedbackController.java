package com.example.demo.controller;

import com.example.demo.model.Feedback;
import com.example.demo.model.User;
import com.example.demo.service.FeedbackService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @Autowired
    private UserService userService;

    // Retrieve all feedbacks - accessible by admins only
    @GetMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<Feedback>> getAllFeedbacks() {
        List<Feedback> feedbacks = feedbackService.getAllFeedbacks();
        return new ResponseEntity<>(feedbacks, HttpStatus.OK);
    }

    // Retrieve a feedback by ID - accessible by admins and the user who created the feedback
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable int id) {
        Optional<Feedback> feedback = feedbackService.getFeedbackById(id);
        return feedback.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

//     @PostMapping
//      public ResponseEntity<?> submitFeedback(@RequestBody Feedback feedback) {
//     try {
//         // Assuming you save the feedback here
//         feedbackService.saveFeedback(feedback);
//         return ResponseEntity.ok("Feedback submitted successfully");
//     } catch (Exception e) {
//         // Log the error details
//         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error submitting feedback");
//     }
// }

    @PostMapping
    @PreAuthorize("permitAll()")
    public ResponseEntity<Feedback> submitFeedback(@RequestBody Feedback feedback) {
        // Retrieve user by email or another identifier
        User user = userService.findUserByEmail(feedback.getEmail());
        if (user != null) {
            feedback.setUser(user); // Set the user for the feedback
            Feedback savedFeedback = feedbackService.saveFeedback(feedback);
            return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Update an existing feedback - accessible by admins only
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Feedback> updateFeedback(@PathVariable int id, @RequestBody Feedback feedbackDetails) {
        Optional<Feedback> existingFeedback = feedbackService.getFeedbackById(id);
        if (existingFeedback.isPresent()) {
            Feedback feedback = existingFeedback.get();
            feedback.setRating(feedbackDetails.getRating());
            feedback.setMessage(feedbackDetails.getMessage());
            feedback.setUser(feedbackDetails.getUser()); // Update user if needed
            Feedback updatedFeedback = feedbackService.saveFeedback(feedback);
            return new ResponseEntity<>(updatedFeedback, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a feedback - accessible by admins only
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Void> deleteFeedback(@PathVariable int id) {
        if (feedbackService.getFeedbackById(id).isPresent()) {
            feedbackService.deleteFeedback(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
