import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/LoginPage/LoginP";
import Register from "../Pages/RegisterPage/RegisterP";
import StudentForm from "../Pages/StudentFormPage/StudentFormp";
import Admin from "../Pages/Admin/AdminPage/AdminPage.jsx";
import Home from "../Pages/home/Home";
import ForemotioP from "../Pages/FormEmotion/ForemotioP";
import MoodSense from "../Components/navbar/navbarC";
import ListaUsuarios from "../Components/Lista de Usuarios/ListaUsuarios";
import GeneralAdministrative from "../Components/Administrativa/GeneralAdministrative";
import NavbarAdministrative from "../Components/NavbarAdministrative/NavbarAdministrative";
import RegisterDb from "../Components/Register/RegisterDb";
import GroupDash from "../Pages/GroupDashboard/GroupDash";import RegisterDb from "../Components/Register/RegisterDb";



const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterDb />} />
        <Route path="/StudentForm" element={<StudentForm />} />
        <Route path="/navbar" element={<MoodSense/>} />
        <Route path="/listaUsuarios" element={<ListaUsuarios />} />
        <Route path="/GeneralAdministrative" element={<GeneralAdministrative />} />
        <Route path="/NavbarAdministrative" element={<NavbarAdministrative />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/GroupDash" element={<GroupDash />} />
        <Route path="/ForemotioP" element={<ForemotioP />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default Routing;
