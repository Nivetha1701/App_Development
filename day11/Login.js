import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginSuccess } from '../redux/Action';
import '../assets/css/Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [isFormVisible, setFormVisible] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let emailError = "";
    let passwordError = "";
    if (!formData.email.includes("@")) emailError = "Invalid email address";
    if (formData.password.length < 6) passwordError = "Password must be at least 6 characters";
    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/authenticate", 
          {
            email: formData.email,
            password: formData.password,
          }
        );
        console.log(response);
        localStorage.setItem("token", response.data.token); // Save token
        localStorage.setItem("role", response.data.role);  // Save role separately
        const role = response.data.role; // Retrieve role directly

        if (role === "ROLE_ADMIN") {
          navigate("/admin");
        } else {
          alert("Login successful");
          navigate('/'); // Redirect to homepage for other users
        }
      } catch (error) {
        console.error('Login failed:', error);
        setErrors({ email: "Login failed. Please check your credentials and try again."});
      }
    }
  };


  return (
    <div className={`login-page`}>
      <div className={`login-container ${isFormVisible ? '' : 'hidden'}`}>
        <div className="close-icon" onClick={() => setFormVisible(false)}>
          <i className="fas fa-times"></i>
        </div>
        <h2>LOGIN</h2>
        {successMessage && <div className="success">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
          <button type="submit">Login</button>
          <p>Not registered yet? <Link to="/register">Sign up</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
