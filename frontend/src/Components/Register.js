import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Register.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: ""
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: ""
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [isFormVisible, setFormVisible] = useState(true);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let passwordError = "";
        let mobileError = "";

        if (!formData.firstName) {
            firstNameError = "First name is required";
        }

        if (!formData.lastName) {
            lastNameError = "Last name is required";
        }

        if (!formData.email.includes("@")) {
            emailError = "Invalid email address";
        }

        if (formData.password.length < 6) {
            passwordError = "Password must be at least 6 characters";
        }

        if (!/^\d{10}$/.test(formData.mobile)) {
            mobileError = "Mobile number must be 10 digits";
        }

        if (firstNameError || lastNameError || emailError || passwordError || mobileError) {
            setErrors({ firstName: firstNameError, lastName: lastNameError, email: emailError, password: passwordError, mobile: mobileError });
            return false;
        }

        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) {
            try {
                const response = await axios.post("http://127.0.0.1:8080/users", {
                    id: 0,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                    mobile: formData.mobile,
                    roles: "ROLE_USER",
                });
                if (response.status === 200 || response.status === 201) {
                    alert("User created successfully");
                    setSuccessMessage("Registration successful");
                    navigate('/login');
                }
                else 
                {
                    alert("User creation failed");
                }
                
            } catch (error) {
                console.error(error);
                alert("Something went wrong");
            }
        }
    };

    return (
        <div className="register-page">
            <div className={`register-container ${isFormVisible ? '' : 'hidden'}`}>
                <div className="close-icon" onClick={() => setFormVisible(false)}>
                    <i className="fas fa-times"></i>
                </div>
                <h2>REGISTER</h2>
                {successMessage && <div className="success">{successMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        {errors.firstName && <div className="error">{errors.firstName}</div>}
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                        {errors.lastName && <div className="error">{errors.lastName}</div>}
                    </div>
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
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                            type="text"
                            placeholder="Enter your mobile number"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                        {errors.mobile && <div className="error">{errors.mobile}</div>}
                    </div>
                    <button type="submit">Register</button>
                    <p>Already registered? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Register;
