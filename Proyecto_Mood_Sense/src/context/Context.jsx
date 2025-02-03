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

  /*********************************************
   *                 SUPABASE
   *********************************************/

  // 📌 Obtener usuario logueado
  const getUserInfo = async () => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) throw error;
      return user;
    } catch (error) {
      console.error("❌ Error obteniendo usuario:", error.message);
      return null;
    }
  };

  // 📌 Registro de usuario
  const signUp = async (email, password) => {
    try {
      const userExists = await checkUserExists(email);

      if (userExists) {
        setMessage("❌ Este correo ya está registrado.");
        return;
      }

      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        setMessage("❌ Ha ocurrido un error en el registro.");
        return;
      }

      setMessage("✅ Registro exitoso. Revisa tu correo para confirmar.");
      return { data, error: null };
    } catch (error) {
      console.error("❌ Error en signUp:", error);
      return { data: null, error };
    }
  };

  // 📌 Iniciar sesión
  const signIn = async (email, password) => {
    try {
      const { dataTables } = await getUsersSupabase();
      const userFound = dataTables.find((user) => user.email === email);

      if (!userFound) {
        setMessage("❌ El correo no existe, regístrese.");
        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setMessage("✅ Inicio de sesión exitoso. Redirigiendo...");
      return { data: data.user, error: null };
    } catch (error) {
      console.error("❌ Error en signIn:", error);
      return { data: null, error };
    }
  };

  // 📌 Verificar si un usuario ya existe
  const checkUserExists = async (email) => {
    try {
      const { data } = await supabase
        .from("users")
        .select("email")
        .eq("email", email)
        .maybeSingle();

      return !!data;
    } catch (error) {
      console.error("❌ Error verificando usuario:", error);
      return false;
    }
  };

  // 📌 Obtener todas las instituciones
  const fetchInstituciones = async () => {
    try {
      const { data, error } = await supabase.from("institutions").select("*");
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("❌ Error al obtener instituciones:", error);
      return [];
    }
  };

  // 📌 Obtener todos los usuarios
  const getUsersSupabase = async () => {
    try {
      const { data, error } = await supabase.from("users").select("*");
      if (error) throw error;
      return { dataTables: data, errorTables: null };
    } catch (error) {
      console.error("❌ Error al obtener usuarios:", error);
      return { dataTables: null, errorTables: error };
    }
  };

  // 📌 Obtener el rol de un usuario
  const getUserRole = async () => {
    try {
      const userActive = await getUserInfo();
      const { dataTables } = await getUsersSupabase();
      const userRole = dataTables.find(
        (user) => user.email === userActive?.email
      );
      return userRole?.rol || "Usuario sin rol asignado";
    } catch (error) {
      console.error("❌ Error obteniendo rol del usuario:", error);
      return null;
    }
  };

  // 📌 Actualizar información de usuario
  const updateUser = async (email, updatedData) => {
    try {
      const { error } = await supabase
        .from("users")
        .update(updatedData)
        .eq("email", email);

      if (error) throw error;

      console.log("✅ Usuario actualizado correctamente.");
    } catch (error) {
      console.error("❌ Error al actualizar usuario:", error);
    }
  };

  // 📌 Cerrar sesión
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw new Error("❌ Error al cerrar sesión.");
      setMessage("✅ Sesión cerrada correctamente.");
    } catch (error) {
      console.error("❌ Error al cerrar sesión:", error);
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
        getUserInfo,
        getUserRole,
        updateUser,
        Message,
        signOut,
        setMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const Context = () => {
  return useContext(GlobalContext);
};
