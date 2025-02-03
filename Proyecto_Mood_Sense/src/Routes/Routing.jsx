import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/LoginPage/LoginP";
import Register from "../Pages/RegisterPage/RegisterP";
import StudentForm from "../Pages/StudentFormPage/StudentFormp";
import Admin from "../pages/Admin/AdminPage.jsx";
import ForemotioP from "../Pages/FormEmotion/ForemotioP";
import MoodSense from "../Components/NavbarStudent/navbarC.jsx";
import ListaUsuarios from "../Components/Lista de Usuarios/ListaUsuarios";
import GeneralAdministrative from "../Components/Admin/Administrativa/GeneralAdministrative.jsx";
import NavbarAdministrative from "../Components/Admin/NavbarAdministrative/NavbarAdministrative.jsx";
import RegisterDb from "../Components/Register/RegisterDb";
import RegisterP from "../Pages/RegisterPage/RegisterP";
import PrivateRoute from "./PrivateRoute";
import RegisterC from "../Components/Register/RegisterC.jsx";
import LoginC from "../Pages/LoginPage/LoginP";
import Home from "../pages/home/Home.jsx";
import GroupDash from "../Pages/GroupDashboard/GroupDash";
import UserList from "../Components/UserList/UserList.jsx";
import Students_UI from "../Components/StudentsUI/Students_UI.jsx";

const Routing = () => {
  return (
    <div>
      <Routes>
        {/* Ruta privada para el componente Admin */}
        <Route path="/admin" element={<PrivateRoute> <Admin /> </PrivateRoute>} />

        <Route path="/" element={<LoginC />} />
        <Route path="/register" element={<RegisterC />} />
        <Route path="/StudentForm" element={<StudentForm />} />
        <Route path="/navbar" element={<MoodSense/>} />
        <Route path="/listaUsuarios" element={<ListaUsuarios />} />
        <Route path="/GeneralAdministrative" element={<GeneralAdministrative />} />
        <Route path="/NavbarAdministrative" element={<NavbarAdministrative />} />
        <Route path="/Home" element={<Home />} /> 
        <Route path="/ForemotioP" element={<ForemotioP />} />
        <Route path="/GroupDash" element={<GroupDash />} />

      {/* Ruta del estudiante: */}
        <Route path="/home-student" element={<Students_UI />} />
      </Routes>
    </div>
  );
};

export default Routing;
