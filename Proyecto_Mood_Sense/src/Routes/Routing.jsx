import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/LoginPage/LoginP";
import Register from "../Pages/RegisterPage/RegisterP";
import StudentForm from "../Pages/StudentFormPage/StudentFormp";
import Admin from "../Pages/Admin/Admin";
import Home from "../Pages/home/Home";
import ForemotioP from "../Pages/FormEmotion/ForemotioP";
import RegisterP from "../Pages/RegisterPage/RegisterP";
import PrivateRoute from "./PrivateRoute";

const Routing = () => {
  return (
    <div>
      <Routes>
        {/* Ruta privada para el componente Admin */}
        <Route path="/Admin" element={<PrivateRoute> <Admin /> </PrivateRoute>} />

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterP />} />
        <Route path="/StudentForm" element={<StudentForm />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/ForemotioP" element={<ForemotioP />} />
      </Routes>
    </div>
  );
};

export default Routing;
