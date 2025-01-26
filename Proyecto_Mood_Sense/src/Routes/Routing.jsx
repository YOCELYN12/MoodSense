import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/LoginPage/LoginP";
import Register from "../Pages/RegisterPage/RegisterP";
import StudentFormC from "../Pages/StudentFormPage/StudentFormp";
import Admin from "../Pages/Admin/AdminPage/AdminPage.jsx";
import ForemotioP from "../Pages/FormEmotion/ForemotioP";
import MoodSense from "../Components/navbar/navbarC";
import GeneralAdministrative from "../Components/Administrativa/GeneralAdministrative";
import NavbarAdministrative from "../Components/NavbarAdministrative/NavbarAdministrative";
import RegisterDb from "../Components/Register/RegisterDb";
import GroupDash from "../Pages/GroupDashboard/GroupDash";
import UserList from "../Components/UserList/UserList.jsx";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterDb />} />
        <Route path="/StudentForm" element={<StudentFormC />} />
        <Route path="/navbar" element={<MoodSense/>} />
        <Route path="/UserList" element={<UserList />} />
        <Route path="/GeneralAdministrative" element={<GeneralAdministrative />} />
        <Route path="/NavbarAdministrative" element={<NavbarAdministrative />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/GroupDash" element={<GroupDash />} />
        <Route path="/ForemotioP" element={<ForemotioP />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default Routing;
