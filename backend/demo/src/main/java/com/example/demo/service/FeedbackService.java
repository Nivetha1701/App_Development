package com.example.demo.service;

import com.example.demo.model.Feedback;
import com.example.demo.model.User;
import com.example.demo.repository.FeedbackRepository;
import com.example.demo.repository.UserRepository; // Add this import for UserRepository
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserRepository userRepository; // Add this for user lookups

    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    public Optional<Feedback> getFeedbackById(int id) {
        return feedbackRepository.findById(id);
    }

    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    public void deleteFeedback(int id) {
        feedbackRepository.deleteById(id);
    }

    public Feedback updateFeedback(int id, Feedback feedbackDetails) {
        Feedback feedback = feedbackRepository.findById(id).orElseThrow();
        feedback.setRating(feedbackDetails.getRating());
        feedback.setMessage(feedbackDetails.getMessage());
        feedback.setEmail(feedbackDetails.getEmail());
        
        // Ensure the user exists and is set correctly
        if (feedbackDetails.getUser() != null) {
            User user = userRepository.findById(feedbackDetails.getUser().getId()).orElseThrow();
            feedback.setUser(user);
        }
        
        return feedbackRepository.save(feedback);
    }
}
