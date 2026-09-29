# 🚀 StaffSync

A modern, clean, and responsive **Employee Management System** built with **HTML, CSS, JavaScript, React, PHP, and MySQL**.

---

## 📱 About the Project

**StaffSync** helps organizations manage employee records, authenticate users securely, and maintain a clean administrative directory — all in one simple application. 

The application provides a clean dashboard where users can browse registered employee directories, add new staff members, and manage records with a fully mobile-optimized interface.

---

## ✨ Features

* **🔐 Secure Authentication:** User login system with password validation and visibility toggle.
* **👥 Employee Directory:** Clean tabular layout displaying registered employee details (Name, Email, Phone, Industry).
* **⚙️ Data Management:** Easily add, edit, or delete employee records.
* **📱 Fully Responsive Design:** Optimized for all screen sizes (Desktops, Tablets, and Mobile phones) using modern CSS Flexbox and Media Queries.
* **🎨 Modern UI/UX:** Built with CSS custom root variables for consistent theme management, smooth card layouts, and intuitive navigation.

---

## 🛠️ Technologies Used

* **Frontend:** HTML5, CSS3 (Flexbox, CSS Variables, Media Queries), JavaScript, React.js
* **Backend & Database:** PHP, MySQL
* **Tools & Platforms:** VS Code, Git, GitHub

---

## ⚙️ How It Works

1. The user logs into the system using valid credentials.
2. The application loads the main dashboard utilizing a flexible column layout wrapper (`min-height: 100vh`).
3. The header stays fixed at the top, the central table container manages employee data lists, and the footer remains pinned to the bottom.
4. Administrators can view, edit, or delete employee details directly from the responsive table interface.
5. Media queries automatically adjust header padding, font sizes, and table cell dimensions on smaller viewports (`max-width: 768px`).

---

## 🔒 Layout Architecture

StaffSync uses a dedicated CSS structure to ensure:
* **Headers** span the full width (`width: 100%`) with `space-between` alignments.
* **Main containers** center employee cards gracefully with maximum width constraints (`max-width: 1000px`).
* **Tables** feature horizontal scrolling support (`overflow-x: auto`) for smaller mobile screens.

---

## 📂 Project Structure

```text
├── backend/
│   ├── Form/
│   │   └── form.php
│   ├── UserData/
│   │   ├── delete_User.php
│   │   ├── edit_user.php
│   │   ├── get_data.php
│   │   └── user_update.php
│   ├── check_session.php
│   ├── db.php
│   ├── login.php
│   ├── signout.php
│   └── signup.php
│
└── frontend/
    ├── .vscode/
    ├── node_modules/
    ├── src/
    │   └── Screen/
    │       ├── Auth/
    │       │   ├── login.css
    │       │   ├── login.jsx
    │       │   ├── service.js
    │       │   ├── signup.css
    │       │   └── signup.jsx
    │       ├── Form/
    │       │   ├── form_Service.js
    │       │   ├── user_Form.css
    │       │   └── user_Form.jsx
    │       ├── home_Screen.css
    │       ├── home_Screen.jsx
    │       ├── Services.js
    │       ├── main.jsx
    │       └── ProtectedRoute.jsx
    ├── .gitignore
    ├── .oxlintrc.json
    ├── image.jpg
    ├── index.html
    └── package-lock.json
```
---

## 🎓 Academic / Portfolio Project
* StaffSync was developed as a web application project demonstrating:
* React component structure and UI design
* CSS custom root variables and modern theming
* Flexbox layout management
* Mobile responsiveness via media queries
* Clean code maintenance and optimization
* Version control with Git & GitHub

---

## 👨‍💻 Developer
* Ibrahim
