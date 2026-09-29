const API_URL = "https://employees-dashboard.infinityfreeapp.com/Backend/Form";

export const handleForm = (formData , setmessage) => {
  fetch(`${API_URL}/form.php`, {
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
      console.log("Server error");
    });
};

export const handleEdit = (id , setFormData) => {
  fetch(`https://employees-dashboard.infinityfreeapp.com/Backend/UserData/edit_user.php?id=${id}`)
    .then((res) => res.json())
    .then((data) => {
      setFormData(data);
      console.log("Server Response:", data.message);
    })
    .catch((error) => {
      console.error("Error:", error);
      console.log("Server error");
    });
};

export const handleUpdateForm = (formData , setmessage) => {
  fetch(`https://employees-dashboard.infinityfreeapp.com/Backend/Backend/UserData/user_update.php`, {
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
      console.log(1)
    })
    .catch((error) => {
      console.error("Error:", error);
      console.log("Server error");
    });
};