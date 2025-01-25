import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/LoginPage/LoginP";
import Register from "../Pages/RegisterPage/RegisterP";
import StudentFormp from "../Pages/StudentFormPage/StudentFormp";

const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/StudentForm" element={<StudentFormp />} />
        </Routes>
    </div>
  );
};

export default Routing;
