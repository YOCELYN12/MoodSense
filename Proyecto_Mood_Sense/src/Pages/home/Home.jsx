import React, { useEffect, useContext } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { getUserLogin } = Context();
  const navigate = useNavigate();

  const RedirectionFunction = async () => {
    try {
      const { data } = await getUserLogin();
      const role = data?.[0]?.rol;

      if (role === "admin") {
        navigate("/Admin");
      } else {
        navigate("/StudentForm");
      }
    } catch (error) {
      console.error("Error obteniendo el usuario:", error);
    }
  };

  useEffect(() => {
    RedirectionFunction();
  }, []);

  return <div>Cargando...</div>; // Asegura que el componente devuelva JSX
};

export default Home;
