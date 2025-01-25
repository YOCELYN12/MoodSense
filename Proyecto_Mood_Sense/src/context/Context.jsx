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

  //Trae el usuario de la base de datos, el usuario activo, actual

  const getUserInfo = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) {
      console.error("Error obteniendo usuario:", error.message);
      return null;
    }
    return user; // Devuelve el objeto del usuario
  };

  //Login con email
  const asignIn = async (email, password) => {
    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

    if (authError) {
      console.log("Error al iniciar sesión: Credenciales inválidas");
      return;
    }

    if (authData && authData.user) {
      // Verificar si el usuario existe en la tabla usuarios y es administrador
      const { data: userData, error: userError } = await supabase
        .from("user")
        .select("*")
        .eq("email", email)
        .single();

      if (userError) {
        console.log("Error al verificar el usuario");
        return;
      }

      if (!userData) {
        console.log("Usuario no encontrado en el sistema");
        return;
      } else {
        //Inserta el usuario en la base de datos
        const { data_, error_ } = await supabase
          .from("users") //Revisar la linea de abajo
          //photo: authData.user.app_metadata.picture,
          .insert({
            email: authData.user.email,
            user_id: authData.user.id,
            name: authData.user.name,
          })
          .select(); // Incluye el select() para obtener los datos insertados

        if (error_) {
          console.error("Error al añadir usuario a tabla:", error_.message);
          throw error_;
        } else if (data_) {
          console.log("Usuario guardado en la tabla users");
          return;
        }
      }
    }
  };

  //Verifica si el email ya existe en la base de datos
  const checkEmailExists = async (email) => {
    try {
      const { data, error } = await supabase
        .from("user")
        .select("email")
        .eq("email", email)
        .single();

      return { exists: !!data, error: null };
    } catch (error) {
      return { exists: false, error };
    }
  };


  //Registra un nuevo usuario en la base de datos.
  const signUp = async (email, password) => {
    try {
      // Primero verificamos si el email existe
      const { exists, error: checkError } = await checkEmailExists(email);

      if (checkError) {
        throw checkError;
      }

      if (exists) {
        return {
          data: null,
          error: new Error("Este correo electrónico ya está registrado"),
        };
      }

      // Si el email no existe, procedemos con el registro
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      AddUserTable(email, data.user.id, data.user.user_metadata.picture, data.user.user_metadata.name);

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };


  const UpdateTableUsers = async (email, object) => {
    console.log(object);
    const { data, error } = await supabase
    .from('users') // Nombre de la tabla
    .update(object) // Los campos que deseas actualizar
    .eq('email', email); // Condición para identificar el registro a actualizar

  if (error) {
    console.error('Error al actualizar:', error);
    return;
  }
  return {error: error, data: data}
  }

  const AddUserTable = async (Email, userId, Photo, Name) => {
    //Inserta el usuario en la base de datos
    const { data_, error_ } = await supabase
      .from("user")
      .insert({ email: Email, user_id: userId, photo: Photo, name: Name })
      .select(); // Incluye el select() para obtener los datos insertados

    if (error_) {
      console.error("Error al añadir usuario a tabla:", error_.message);
      throw error_;
    } else if (data_) {
      console.log("Usuario guardado en la tabla users");
    }
  };

  const logOut = async () => {
    //Sale del perfil
    try {
      const { error } = await supabase.auth.signOut();
      if (error)
        throw new Error("Ah ocurrido un problema duente el cierre de sesion ");
      Cookies.remove("supabase-session"); //Borra la cokie
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  //   useEffect(() => {

  //     // Verificar si existe una sesión en las cookies
  //     const session = Cookies.get("supabase-session");
  //     console.log(session);

  //     if (session) {
  //       const parsedSession = JSON.parse(session);
  //       setUser(parsedSession.user); // Asume que user está incluido en la sesión
  //       supabase.auth.setSession({
  //         //Permite restaurar la sesión del usuario sin requerir que inicie sesión nuevamente cada vez que recarga la aplicación
  //         access_token: parsedSession.access_token,
  //         refresh_token: parsedSession.refresh_token,
  //       });

  //     }

  //     // Escucha los cambios en el estado de autenticación, con un metodos de supabase llamado 'onAuthStateChange'.
  //     const { data: authListener } = supabase.auth.onAuthStateChange(
  //       async (event, sesion) => {

  //         if (sesion !== null) {
  //           setUser(sesion.user); //
  //           // Guardar sesión completa en cookies
  //           Cookies.set("supabase-session", JSON.stringify(sesion), {
  //             expires: 7,
  //           }); // Persistencia del token
  //           if (sesion?.user?.user_metadata) {
  //             setPerfil(sesion.user.user_metadata); //Setea los datos del usuario en el estado
  //           }
  //           navigate("/", { replace: true });
  //         } else if (sesion === null ) {
  //           setUser(null);
  //           Cookies.remove("supabase-session"); //Elimina la cookie
  //           navigate("/login", { replace: true });
  //         }
  //       }
  //     );

  //     setLoading(false);

  //     return () => {
  //       authListener?.unsubscribe?.(); //Evita fugas de memoria eliminando la suscripción al listener cuando el componente se desmonta.
  //     };
  //   }, []);

  return (
    <AuthContext.Provider
      value={{ user, objPerfil, Loading, getUserInfo, signUp, asignIn, logOut, UpdateTableUsers }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
