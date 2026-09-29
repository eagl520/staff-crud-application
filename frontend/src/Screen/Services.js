const API_URL = "https://employees-dashboard.infinityfreeapp.com/Backend/UserData";

export const getData = (setEmployees) => {
    fetch(`${ API_URL}/get_data.php`, {
        credentials : 'include',
    })
    .then((res) => res.json())
    .then((data) => setEmployees(data))

    .catch((err) => {
        console.error(err)
    })
}


export const handleDelete = (id , setDel_user) => {
  fetch(`${API_URL}/delete_User.php`, {
    method: "POST",
    credentials : "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id}),
  })
    .then((res) => res.json())
    .then((data) => {
      setDel_user(data);
      console.log("Server Response:", data.message);
      
    })
    .catch((error) => {
      console.error("Error:", error);
      console.log("Server error");
    });
};