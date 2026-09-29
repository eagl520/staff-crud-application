import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const API_URL = "https://employees-dashboard.infinityfreeapp.com/Backend";

  useEffect(() => {

    fetch(`${API_URL}/check_session.php`, {
      method: "GET",
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);


  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }


  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;