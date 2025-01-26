import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/LoginPage/LoginP";
import Register from "../Pages/RegisterPage/RegisterP";
import StudentForm from "../Pages/StudentFormPage/StudentFormp";
import Admin from "../Pages/Admin/Admin";
import Home from "../Pages/home/Home";
import ForemotioP from "../Pages/FormEmotion/ForemotioP";
import MoodSense from "../Components/navbar/navbarC";
import ListaUsuarios from "../Components/Lista de Usuarios/ListaUsuarios";



const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/StudentForm" element={<StudentForm />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/ForemotioP" element={<ForemotioP />} />
      </Routes>
    </div>
  );
};

export default Routing;
