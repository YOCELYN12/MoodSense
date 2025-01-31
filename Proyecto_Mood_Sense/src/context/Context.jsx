import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import supabase from "../supabase/Supabase";

const GlobalContext = createContext();

export const MoodGlobalContext = ({ children }) => {
  const [Loading, setLoading] = useState(false);
  const [Message, setMessage] = useState(false);

  //Responsable de verificar si el usuario esta activo.
  const userActive = (email, correo, id_institution) => {
    const metadata = [
      {
        email: email,
        password: correo,
        id_institution: id_institution,
      },
    ];
    //Setea al usuario activo, en el contexto
    localStorage.setItem("user_email", email);
  };

  //Trae los datos del usuario activo en la app.
  const getUserLogin = async () => {
    const email = localStorage.getItem("user_email");
    const response = await fetch(`http://localhost:3000/users?email=${email}`);
    const data = await response.json();
    return { data: data };
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

  //Validacion de correo
  const validateEmail = async (email) => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();

      // Verifica si el correo ya existe en la base de datos
      const emailExists = data.some((user) => user.email === email);

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
      const valid = await validateEmail(user.email);
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
            `Error al registrar los datos: ${response.statusText}`
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

  //*********************************************SUPABASE************************************************* */

  const signUp = async (email, password) => {
    
    //Registro con la app.
    try {
      const check = await checkUserExists(email);
      
      if (!check) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw (error);
        
        return { data: data, error: null };
      }else{
        setMessage("Este correo ya existe...")
        return;
      }
    
    } catch (error) {
      return { data: null, error };
    }
  };

  const fetchInstituciones = async () => { //Obtener instituciones
    try {
      const { data, error } = await supabase.from("institutions").select("*");

      if (error) throw error;
      return { data: data, error: error };
    } catch (error) {
      console.error("Error al obtener instituciones:", error);
    }
  };

  const getUsersSupabase = async () => { //Obtener instituciones
    try {
      const { data, error } = await supabase.from("users").select("*");

      if (error) throw error;
      return { data_tables: data, error_tables: error };
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  const signIn = async (email_prop, password) => {//LOGIN CON LA APP ->
    try {

      const { data_tables, error_tables } = await getUsersSupabase(); // Obtén la lista de usuarios.

      const userFound = data_tables.find(({ email }) => email === email_prop); // Busca el usuario por correo.

      if (userFound == undefined) {
        setMessage("El correo no existe, registrese.");
        return;
      }
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email_prop,
        password: password,
      });   
      

      if (data.user) {
        setMessage("Ingreso exitoso, redirigiendo a su cuenta...");
        return {data: data.user, error: error};
      }

      if (error) throw error;
      return { data, error: error };
    } catch (error) {
      return { data: null, error };
    }
  };

  const checkUserExists = async (email) => {
    try {
      // Realiza la consulta a Supabase
      const {data} = await supabase
        .from('users')
        .select('email')
        .eq('email', email)
        .maybeSingle()
      
      // Si la búsqueda devuelve datos, el correo ya existe
      if (data == null) {
        setMessage("Registrado correctamente, revise su corre para autenticar correo.")
        return false; // El usuario no existe
      } else {

        setMessage('Este usuario ya existe...');
        return true; // El usuario existe
      }
    } catch (err) {
      // Maneja cualquier error no anticipado
      console.error('Error inesperado:', err);
      return false; // Retorna false si ocurre un error inesperado
    }
  };
  

  return (
    <GlobalContext.Provider
      value={{
        getInstitution,
        postUser,
        Loading,
        getUsers,
        userActive,
        getUserLogin,
        signUp,
        signIn,
        fetchInstituciones,
        getUsersSupabase,
        checkUserExists,
        Message,
        setMessage
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const Context = () => {
  return useContext(GlobalContext);
};
