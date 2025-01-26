// Importación de dependencias necesarias: React, hooks, estilos, SweetAlert2 y cliente Supabase
import React, { useState, useEffect } from "react";
import "../Register/Register.css";
import Swal from "sweetalert2";
import { Context } from "../../context/Context";
import LoadingSpinner from "../Loading/LoadingComponent";
import { v4 as uuidv4 } from 'uuid';

const RegisterDb = () => {
  // Estados para manejar el correo, contraseña e institución seleccionada
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [instituciones, setInstituciones] = useState([]);
  const [institucionId, setInstitucionId] = useState("");
  const [carga, setCarga] = useState("");

  // Recuperar la función getInstitution del contexto Context
  const { getInstitution, postUser, Status } = Context();

  const InstitucionesGet = async () => {
    try {
      // Obtener las instituciones desde el contexto
      const institutions = await getInstitution();
      setInstituciones(institutions);

      if (institutions.length === 0) {
        console.log("No se encontraron instituciones");
      }
    } catch (error) {
      console.error("Error al obtener instituciones:", error);
    }
  };

  
  useEffect(() => {
    InstitucionesGet();
  }, [])


  // Función para validar y registrar un nuevo usuario
  const ValidateUser = async (e) => {
    e.preventDefault(); // Evitar la recarga del formulario al hacer submit
    console.log(institucionId);

    // Validación de campos vacíos
    if (correo.trim() === "" || contrasena.trim() === "" || !institucionId) {
      Swal.fire("Necesitas llenar todos los campos");
      return;
    }

    // Validación de estructura de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
          Swal.fire("Por favor ingrese un correo electrónico válido");
          return;
        }
    
        // Validación de dominio de correo
        const domainRegex = /@(gmail\.com|outlook\.com|hotmail\.com|yahoo\.com|estudiantes\.uam\.cr)$/i;
        if (!domainRegex.test(correo)) {
          Swal.fire("Por favor utilice un correo electrónico con dominio válido (gmail.com, outlook.com, hotmail.com, yahoo.com o estudiantes.uam.cr)");
          return;
        }
    

    try {
      // Llamar a la función para registrar los datos en la base de datos
      const response = await postUser({
        email: correo,
        password: contrasena,
        institucion_id: institucionId,
        id: uuidv4(),
        name: null,
        last_name: null,
        age: null,
        student_state: null,
        nationality: null,
        personal_contact: null,
        family_contact: null,
        residence: null,
        diseases: null,
        institution_id: null,
        rol: null,
        province: null,
        district: null,
        canton: null,
        medications: null,
        psychological_diagnosis: null
      });

      // Comprobar si la respuesta es correcta
      if (response) {
        setCarga("Se registraron correctamente los datos");
        Swal.fire("Usuario registrado exitosamente");
      }
    } catch (error) {
      Swal.fire("Error al registrar usuario o ya hay un usuario con esta cuenta");
      console.error(error);
    }
  };

  // Renderizado del formulario de registro
  return (
    <>
      {instituciones.length > 0 ? (
        <div className="MainContainer">
          <div className="ContainerIMG">
            {/* <img className="IMG"
              src="https://s3-alpha-sig.figma.com/img/c9d1/4ce3/92283268c1f57aab7696b3623117cce6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ed5ZylPnmE9LU9xDwNmWSYlRwAUC1XOcwSt58MD2a0D6SOymk0u3bEGDK~h4tE1lW61xRwOeaVPE5dYGhBhTElKqMITuxYjob8T-77orrcudibfCapeTFq2Dt9dWxVtexV-1iz3xw3bpdAPN2Ewl5DQxtL4ng3yjQ72JckWzxuC03JB1lqp8WQy6P42G5ZS-o760IZu332w0hiJ3eBEyRELz6QttLppvu3tek-1qbAUbYypXXhC7h3YduhI1vIZWoLkEgbVHZYoRcPUX57C3m3bjm3Qf27tz5MMnuxH2loQpRxbyBbyf1CY-On2IgUa-rMhxDYwyb1GkS86USJK~Lg__"
              alt="Flores moradas"
            /> */}
          </div>

          <div className="ContainerInputs">
            <h1>Registro</h1>
            <form onSubmit={ValidateUser}>
              <div className="ContainerInputs1">
                <p>Correo</p>
                <input
                  required
                  className="Inputs"
                  onChange={(e) => {
                    setCorreo(e.target.value);
                  }}
                  type="email"
                  placeholder="Ingrese su correo"
                />
              </div>
              <div className="ContainerInputs1">
                <p>Contraseña</p>
                <input
                  required
                  className="Inputs"
                  onChange={(e) => {
                    setContrasena(e.target.value);
                  }}
                  type="password"
                  placeholder="Ingrese su contraseña"
                />
              </div>
              <div className="ContainerInputs1">
                <p>Selecciona una institución</p>
                <select
                  className="select"
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
              </div>
              <button className="b-t-n" type="submit">
                Registrarse
              </button>
            </form>
          {Status && <p>{Status}</p>}
            <div className="ContainerTags">
              <p>
                ¿Ya tienes una cuenta? <a href="/">Log in</a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
        <p>Servidor caido...</p>
        <LoadingSpinner/>
        
        </>
      )}

    </>
  );
};

export default RegisterDb;
