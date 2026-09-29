import { useEffect, useState } from 'react';
import './user_Form.css'; 
import { useNavigate , useParams } from 'react-router-dom';
import {handleForm, handleEdit, handleUpdateForm} from './form_Service';

function UserForm() {

  const [formData, setFormData] = useState({
    id : null,
    name: '',
    email: '',
    phone: '',
    industry: ''
  });

  const [message , setmessage] = useState({ status: '', message: ''});
  const navigate = useNavigate();
  const {id} = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm(formData, setmessage);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    handleUpdateForm(formData, setmessage);
  };

  useEffect(() => {
    if(message.status === "success"){
        setFormData({id: null, name: '', email: '', phone: '', industry: ''})
        navigate('/');
    }
  },[message])

  useEffect(() => {
    if(id) {
      handleEdit(id , setFormData);
    }
  },[id])


  return (
    <div className="form-container">
      <h2>Add User Information</h2>
      <form onSubmit={id ? handleUpdate : handleSubmit}>
       
        
        <div className="form-group">
          <label>Name:</label>
          <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
        </div>

        
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        
        <div className="form-group">
          <label>Industry:</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            placeholder="Enter your industry"
            required
          />
        </div>

        
        <button type="submit" className="submit-btn">{id ? 'Update' : 'Submit'}</button>

      </form>
       
    </div>
  );
}

export default UserForm;