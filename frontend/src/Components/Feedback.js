import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, rating, suggestions });
    // Add your form submission logic here
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h1>Feedback Form</h1>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Please provide your feedback on the quality of our service.</label>
        <div className="rating-group">
          <label>
            <input
              type="radio"
              value="Excellent"
              checked={rating === 'Excellent'}
              onChange={(e) => setRating(e.target.value)}
            />
            Excellent
          </label>
          <label>
            <input
              type="radio"
              value="Very Good"
              checked={rating === 'Very Good'}
              onChange={(e) => setRating(e.target.value)}
            />
            Very Good
          </label>
          <label>
            <input
              type="radio"
              value="Good"
              checked={rating === 'Good'}
              onChange={(e) => setRating(e.target.value)}
            />
            Good
          </label>
          <label>
            <input
              type="radio"
              value="Average"
              checked={rating === 'Average'}
              onChange={(e) => setRating(e.target.value)}
            />
            Average
          </label>
          <label>
            <input
              type="radio"
              value="Poor"
              checked={rating === 'Poor'}
              onChange={(e) => setRating(e.target.value)}
            />
            Poor
          </label>
        </div>
      </div>
      <div className="form-group">
        <label>Do you have suggestions on what we can do to provide you with a better service?</label>
        <textarea
          placeholder="Type here..."
          value={suggestions}
          onChange={(e) => setSuggestions(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Feedback;
