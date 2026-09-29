import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home_Screen.css';
import {handleSignout} from './Auth/service.js';
import {getData} from './Services.js';
import {handleDelete} from './Services.js';


function Home() {
  const [employees, setEmployees] = useState([]);
  const [signout , setSignout] = useState({status: ''});
  const [del_user , setDel_user] = useState({ status: '', message: ''});
  const navigate = useNavigate();

  useEffect(()=> {
   getData(setEmployees);
  },[])


  useEffect(()=> {
    if(signout.status === "success"){
      navigate('/login');
    }
  },[signout])

  useEffect(()=> {
    if(del_user.status === "success"){
      getData(setEmployees);
    }
  },[del_user])

  const handleEdit = (id) => {
    navigate(`/Form/${id}`)
  }
  
  


  return (
    <div className="page-wrapper">
      
      <header className="app-header">
        <h1>🏢 StaffSync</h1>
        <nav className="header-nav">
          <a href="#" onClick={(e) => {e.preventDefault();
             navigate('/Form');}}>Add Employee</a>
          <a href="#" onClick={(e) => {e.preventDefault();
             handleSignout(setSignout);}}>SignOut</a>
          
        </nav>
      </header>

      
      <main className="company-container">
        <div className="table-card">
          <div className="table-header-flex">
            <h3>Registered employees Directory</h3>
            <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
              Total: {employees.length}
            </span>
          </div>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>phone</th>
                <th>Industry</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((comp) => (
                  <tr key={comp.id}>
                    <td><strong>{comp.name}</strong></td>
                    <td>{comp.email}</td>
                    <td>{comp.phone}</td>
                    <td>{comp.industry}</td>
                    <td>
                      <button
                        className="btn-danger"
                        onClick={() => handleDelete(comp.id , setDel_user)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-Edit"
                        onClick={() => handleEdit(comp.id)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-data">No employees found in directory.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      
      <footer className="app-footer">
        <p>© 2026 StaffSync. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
