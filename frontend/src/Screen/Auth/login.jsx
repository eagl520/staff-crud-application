import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {handleLogin} from './service';
import './login.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: ''});
  const [message , setmessage] = useState({ status: '', message: ''});

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await handleLogin(formData, setmessage)
    console.log(message)
  };

  useEffect(() => {
    changeScreen();
  },[message])

  const changeScreen = () => {
    if(message.status === "success"){
      navigate('/');
    setFormData({email: '', password: ''});
    }
  }

  return (
    <div className="login-page-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Please enter your credentials to login</p>
       
        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
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

          <div className="login-input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              minLength={6}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-submit-btn">Login</button>
        </form>
        { message && (
               <div className="success-message">{message.message}</div>
            )}
        <p className="login-switch-text">
          Don't have an account? <Link to="/Signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;