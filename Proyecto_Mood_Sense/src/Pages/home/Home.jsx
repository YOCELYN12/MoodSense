import React, { useEffect, useContext } from "react"; // Eliminamos la importación duplicada
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import LoadingFace from "../../Components/Loading/FaceLoading";

const Home = () => {
  const { getUserRole } = Context(); // Usamos `useContext` correctamente
  const navigate = useNavigate();

  // Función para obtener el usuario y redirigir según el rol
  const AsyncGet = async () => {
    try {
      const rol = await getUserRole();
    
      return rol;
    } catch (error) {
      console.error("Error obteniendo el usuario:", error);
    }
  };

  // Función para manejar la redirección
  const RedirectionFunction = async () => {
    const role = await AsyncGet();
    
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "student") {
      navigate("/home-student");
    }
  };

  // useEffect para ejecutar la redirección cuando el componente se monta
  useEffect(() => {
    RedirectionFunction();
  }, []); // Solo ejecutará una vez, al montar el componente
  
  return  <LoadingFace />; // Componente JSX de carga mientras se obtiene el usuario
};

export default Home;
