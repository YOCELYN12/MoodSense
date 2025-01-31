import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SideBar.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AdminSideBar.css"; // Asegúrate de tener los estilos en este archivo

function AdminSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Verificamos si el token está en localStorage antes de hacer logout
    const token = localStorage.getItem("token");
    console.log("Token antes de logout:", token);

    // Eliminar el token de localStorage para cerrar sesión
    localStorage.removeItem("token");

    // Verificamos si el token se eliminó correctamente
    const tokenAfterLogout = localStorage.getItem("token");
    console.log("Token después de logout:", tokenAfterLogout);

    // Redirigir a la página de login después de cerrar sesión
    navigate("/login");
  };

  return (
    <>
      {!isOpen && (
        <button
          className="menuButton1"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      )}
      <div className={`sidebarContainer ${isOpen ? "open" : ""}`}>
        <button className="closeButton1" onClick={toggleSidebar}>
          ✖
        </button>
        <nav className="sidebarNav">
          <h4 id="tituloSideBar">Menú</h4>
          <hr id="hrSideBar" />
          <Link id="SideText" className="sidebarLink" to="/Administracion">
            Graficas de Emociones
          </Link>
          <Link className="sidebarLink" to="/AgregarAdmin">
            Emociones por Grupo
          </Link>
          <Link className="sidebarLink" to="/AgregarRecofi">
           Emociones Estudiantiles
          </Link>
          <Link className="sidebarLink" to="/AgregarEmpren">
            Profile
          </Link>
   
          {/* Botón de Cerrar Sesión */}
          <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
        </nav>
      </div>
    </>
  );
}

export default AdminSideBar;
