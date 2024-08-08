import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(user => user.email === formData.email && user.password === formData.password);

      if (user || (formData.email === 'nivethabs2004@gmail.com' && formData.password === 'nivetha2004')) {
        dispatch(loginSuccess(user || { email: formData.email, password: formData.password }));
        setSuccessMessage("Login successful");
        
        if (formData.email === 'nivethabs2004@gmail.com' && formData.password === 'nivetha2004') {
          setTimeout(() => navigate('/admin'), 2000); // Redirect to admin page
        } else {
          setTimeout(() => navigate('/'), 2000); // Redirect to home page
        }
      } else {
        setErrors({ email: "Invalid email or password", password: "" });
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
