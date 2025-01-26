import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/Supabase";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [objPerfil, setPerfil] = useState([]);
  const navigate = useNavigate();
  const [Loading, setLoading] = useState();
  const [Rol, setRol] = useState();
  const [Status, setStatus] = useState(false);

  //Responsable de verificar si el usuario esta activo.
  const userActive = (email, correo, id_institution) => {
    const metadata = [{
      "email": email,
      "password": correo,
      "id_institution": id_institution,
    }];
    //Setea al usuario activo, en el contexto
    setUser(metadata);
  };

  const getInstitution = async () => {
    try {
      const response = await fetch("http://localhost:3000/institution");
      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.error("Error al obtener la institution:", error);
      return [];
    }
  };


  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.error("Error al obtener la institution:", error);
      return [];
    }
  };

  

  const validateEmail = async (email) => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();

      // Verifica si el correo ya existe en la base de datos
      const emailExists = data.some((user) => user.email === email);

      console.log(emailExists);
      

      // Retorna true si el correo no existe (es válido para usar)
      // Retorna false si el correo ya existe
      return !emailExists;
    } catch (error) {
      console.error("Error al validar el email:", error);
      return false;
    }
  };

  

  const postUser = async (user) => {

    console.log(user.email);
    
    try {
      const valid = validateEmail(user.email);
      if (!valid) {
        console.log("El correo ya existe en la base de datos.");
        return null;
      } else {
        const response = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (!response.ok) {
          throw new Error(
            new Error(`Error al registrar los dat: ${response.statusText}`)
          );
        } else {
          console.log("Se registraron correctamente sus datos.");
          return response;
        }
      }
    } catch (error) {
      console.error("Error al enviar el usuario al backend:", error);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, getInstitution, postUser, Status, getUsers, userActive }}>
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
