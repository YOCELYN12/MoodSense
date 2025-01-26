import React, { useState, useEffect } from "react";
import "../Register/Register.css";
import Swal from "sweetalert2";
import { getInstitution, postDatosMetadata, postUser,  } from "../service/service";

const RegisterC = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [instituciones, setInstituciones] = useState([]);
  const [institucionId, setInstitucionId] = useState("");

  // Efecto que se ejecuta al montar el componente para obtener la lista de instituciones
  useEffect(() => {
    const fetchInstituciones = async () => {
      try {
        const response = await getInstitution();
        const data = await response.json();
        setInstituciones(data);
      } catch (error) {
        console.error("Error al obtener instituciones:", error);
      }
    };
    fetchInstituciones();
  }, []);

  // Función para validar y registrar un nuevo usuario
  const ValidateUser = async () => {
    if (correo.trim() === "" || contrasena.trim() === "" || !institucionId) {
      Swal.fire("Necesitas llenar todos los campos");
      return;
    }

    try {
      // Crear nuevo usuario en la "base de datos"
      const newUser = {
        email: correo,
        password: contrasena,
        id_institution: institucionId,
      };

      // Realiza la solicitud POST para agregar al nuevo usuario
      const response = await postUser(newUser);
      const data = await response.json();

      if (data) {
        Swal.fire("Usuario registrado exitosamente");
      } else {
        Swal.fire("Hubo un error al registrar el usuario");
      }
    } catch (error) {
      Swal.fire("Error al registrar usuario");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <span>Correo</span>
      <input
        onChange={(e) => setCorreo(e.target.value)}
        type="email"
        id="email"
        placeholder="Ingrese su correo"
      />
      <span>Contraseña</span>
      <input
        onChange={(e) => setContrasena(e.target.value)}
        type="password"
        id="password"
        placeholder="Ingrese su contraseña"
      />
      {/* Selector de institución */}
      <select
        name="institucion"
        id="institucion"
        onChange={(e) => setInstitucionId(e.target.value)}
        value={institucionId}
      >
        <option value="">Seleccione una institución</option>
        {instituciones.map((institucion) => (
          <option key={institucion.id} value={institucion.id}>
            {institucion.institution_name}
          </option>
        ))}
      </select>

      <button onClick={ValidateUser}>Registrarse</button>
      <span>or</span>
      <span>
        Do you have an account? <a href="http://">Log in</a>
      </span>
      <img
        src="https://s3-alpha-sig.figma.com/img/c9d1/4ce3/92283268c1f57aab7696b3623117cce6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ed5ZylPnmE9LU9xDwNmWSYlRwAUC1XOcwSt58MD2a0D6SOymk0u3bEGDK~h4tE1lW61xRwOeaVPE5dYGhBhTElKqMITuxYjob8T-77orrcudibfCapeTFq2Dt9dWxVtexV-1iz3xw3bpdAPN2Ewl5DQxtL4ng3yjQ72JckWzxuC03JB1lqp8WQy6P42G5ZS-o760IZu332w0hiJ3eBEyRELz6QttLppvu3tek-1qbAUbYypXXhC7h3YduhI1vIZWoLkEgbVHZYoRcPUX57C3m3bjm3Qf27tz5MMnuxH2loQpRxbyBbyf1CY-On2IgUa-rMhxDYwyb1GkS86USJK~Lg__"
        alt="Flores moradas"
      />
    </div>
  );
};

export default RegisterC;
