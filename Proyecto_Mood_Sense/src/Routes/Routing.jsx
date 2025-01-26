import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/LoginPage/LoginP";
import Register from "../Pages/RegisterPage/RegisterP";
import StudentForm from "../Pages/StudentFormPage/StudentFormp";
import UserList from "../Pages/UserList/UserList";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/StudentForm" element={<StudentForm />} />
        <Route path="/UserList" element={<UserList />} />
      </Routes>
    </div>
  );
};

export default Routing;
