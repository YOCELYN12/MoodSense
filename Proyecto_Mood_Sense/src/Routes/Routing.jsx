import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/LoginPage/LoginP";
import Register from "../Pages/RegisterPage/RegisterP";
import Home from "../Pages/home/Home";
import StudentFormC from "../Components/StudentForm/StudentFormC";

const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/StudentForm" element={<StudentFormC/>} />

          
          <Route path="/Home" element={<Home />} />
        </Routes>
    </div>
  );
};

export default Routing;
