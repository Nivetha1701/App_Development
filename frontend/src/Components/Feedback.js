import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Feedback.css';

const Feedback = () => {
  const [email, setEmail] = useState('');
  const [emojiRating, setEmojiRating] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(''); // Added rating state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackDetails = {
      email: email,
      rating: getNumericRating(emojiRating), 
      message: suggestions,
    };

    try {
      const response = await fetch('http://127.0.0.1:8080/api/feedbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackDetails),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        const errorText = await response.text();
        console.error('Failed to submit feedback:', errorText);
        alert('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting feedback.');
    }
  };

  const getNumericRating = (emojiRating) => {
    switch (emojiRating) {
      case 'Very Dissatisfied':
        return 1;
      case 'Dissatisfied':
        return 2;
      case 'Neutral':
        return 3;
      case 'Satisfied':
        return 4;
      case 'Very Satisfied':
        return 5;
      default:
        return 0;
    }
  };

  return (
    <div className="feedback-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h1>Share your feedback</h1>
        {!submitted ? (
          <>
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
              <label>How satisfied are you with our service?</label>
              <div className="emoji-group">
                <span
                  className={`emoji ${emojiRating === 'Very Dissatisfied' ? 'selected' : ''}`}
                  onClick={() => setEmojiRating('Very Dissatisfied')}
                  role="img"
                  aria-label="Very Dissatisfied"
                >
                  😠
                </span>
                <span
                  className={`emoji ${emojiRating === 'Dissatisfied' ? 'selected' : ''}`}
                  onClick={() => setEmojiRating('Dissatisfied')}
                  role="img"
                  aria-label="Dissatisfied"
                >
                  😟
                </span>
                <span
                  className={`emoji ${emojiRating === 'Neutral' ? 'selected' : ''}`}
                  onClick={() => setEmojiRating('Neutral')}
                  role="img"
                  aria-label="Neutral"
                >
                  😐
                </span>
                <span
                  className={`emoji ${emojiRating === 'Satisfied' ? 'selected' : ''}`}
                  onClick={() => setEmojiRating('Satisfied')}
                  role="img"
                  aria-label="Satisfied"
                >
                  🙂
                </span>
                <span
                  className={`emoji ${emojiRating === 'Very Satisfied' ? 'selected' : ''}`}
                  onClick={() => setEmojiRating('Very Satisfied')}
                  role="img"
                  aria-label="Very Satisfied"
                >
                  😃
                </span>
              </div>
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
          </>
        ) : (
          <div className="thank-you-message">
            <h1>Thank you for your feedback!</h1>
          </div>
        )}
      </form>
    </div>
  );
};

export default Feedback;
