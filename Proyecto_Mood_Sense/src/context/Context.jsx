import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/Supabase";
import Cookies from "js-cookie";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [ user, setUser] = useState(null);
  const [ objPerfil, setPerfil] = useState([]);
  const navigate = useNavigate();
  const [Loading, setLoading] = useState();


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
    value={{ user, objPerfil, Loading, getUserInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
