const API_URL = "https://employees-dashboard.infinityfreeapp.com/Backend";

export const registerUser = (formData , setmessage) => {
  fetch(`${API_URL}/signup.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      setmessage(data);
      console.log("Server Response:", data.message);
      
    })
    .catch((error) => {
      console.error("Error:", error);
      console.log("Server error");
    });
};


export const handleLogin = (formData , setmessage) => {
  fetch(`${API_URL}/login.php`, {
    method: "POST",
    credentials : "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      setmessage(data);
      console.log("Server Response:", data.message);
      
    })
    .catch((error) => {
      console.error("Error:", error);
      setmessage(error);
      console.log("Server error");
    });
};

export const handleSignout = (setSignout) => {
 
    fetch(`${API_URL}/signout.php`, {
      method: "GET",
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => {
          setSignout(data);
      })
      .catch((error) => {
       console.error("Error:", error);
      });
};