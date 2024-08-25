import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/FeedbackManage.css';
import { Link } from 'react-router-dom';

const FeedbackManage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/api/feedbacks');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks', error.response ? error.response.data : error.message);
        alert('Failed to fetch feedbacks. Please check the server logs for more details.');
      }
    };

    fetchFeedbacks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8080/api/feedbacks/${id}`);
      setFeedbacks(prevFeedbacks => prevFeedbacks.filter(feedback => feedback.id !== id));
    } catch (error) {
      console.error('Error deleting feedback:', error);
      alert('Failed to delete feedback. Please try again.');
    }
  };

  return (
    <div className="manage-feedback">
      <Link to="/admin" className="bal">Back</Link>
      <h1>Manage Feedbacks</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map(feedback => (
            <tr key={feedback.id}>
              <td>{feedback.id}</td>
              <td>{feedback.email}</td>
              <td>{feedback.rating}</td>
              <td>{feedback.message}</td>
              <td>
                <button onClick={() => handleDelete(feedback.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackManage;
