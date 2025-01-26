import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../context/Context';

const PrivateRoute = ({ children }) => {
  const { getUserLogin } = Context();
  const [rol, setRol] = useState(null);  // Renombré "Rol" a "rol" para seguir las convenciones de React
  const [loading, setLoading] = useState(true);  // Añadí un estado de carga

  // Función asincrónica para obtener el rol del usuario
  const asyncCall = async () => {
    try {
      const { data } = await getUserLogin();
      if (data && data[0]) {
        setRol(data[0].rol);
      }
    } catch (error) {
      console.error('Error al obtener el rol:', error);
    } finally {
      setLoading(false);  // Marca como cargado cuando se termina la llamada
    }
  };

  useEffect(() => {
    asyncCall();
  }, []);

  // Si estamos cargando los datos o el rol aún no está asignado, no renderizar nada
  if (loading) {
    return <div>Loading...</div>;  // O cualquier otro indicador de carga que prefieras
  }

  // Si el rol es admin, renderiza el contenido hijo, si no, redirige
  if (rol === 'admin') {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
