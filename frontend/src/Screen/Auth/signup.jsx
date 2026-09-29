import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {registerUser} from './service.js'
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message , setmessage] = useState({ status: '', message: ''});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(formData , setmessage);
    console.log(message.message);
  };

  useEffect(() => {
    changeScreen();
  }, [message]);

  const changeScreen = () => {
    if(message.status === "success"){
      navigate('/Login');
    setFormData({name: '', email: '', password: ''});
    }
  }
  

 

  return (
    <div className="signup-page-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <p className="signup-subtitle">Please enter your details to sign up</p>
       
        <form onSubmit={handleSubmit}>
          <div className="signup-input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="signup-input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="signup-input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              minLength={6}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-submit-btn">Sign Up</button>
        </form>
        { message && (
               <div className="success-message">{message.message}</div>
            )}
        <p className="signup-switch-text">
          Already have an account? <Link to="/Login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;