// // Importación de dependencias necesarias: React, hooks, estilos, SweetAlert2 y cliente Supabase
// import React, { useState, useEffect } from "react";
// import "../Register/Register.css";
// import Swal from "sweetalert2";
// import supabase from "../../supabase/Supabase";

// const RegisterC = () => {
//   // Estados para manejar el correo, contraseña e institución seleccionada
//   const [correo, setCorreo] = useState("");
//   const [contrasena, setContrasena] = useState("");
//   const [instituciones, setInstituciones] = useState([]);
//   const [institucionId, setInstitucionId] = useState("");

//   // Efecto que se ejecuta al montar el componente para obtener la lista de instituciones
//   useEffect(() => {
//     const fetchInstituciones = async () => {
//       try {
//         const { data, error } = await supabase.from("institution").select("*");

//         if (error) throw error;
//         setInstituciones(data);
//       } catch (error) {
//         console.error("Error al obtener instituciones:", error);
//       }
//     };
//     fetchInstituciones();
//   }, []);

//   // Función para validar y registrar un nuevo usuario
//   const ValidateUser = async () => {

//     console.log(institucionId);
    
//     // Validación de campos vacíos
//     if (correo.trim() === "" || contrasena.trim() === "" || !institucionId) {
//       Swal.fire("Necesitas llenar todos los campos");
//       return;
//     }
//     try {
//       // Registra el nuevo usuario en auth
//       const { data: authData, error: authError } = await supabase.auth.signUp({
//         email: correo,
//         password: contrasena,
//       });
      
//       if (authError) throw authError;

//       if (authData) {
//         // Guarda la información adicional en la tabla users
//         const { error: userError } = await supabase
//         .from('datosmeta')
//         .insert([
//           {
//             email: correo,
//             id_institution: institucionId
//           }
//         ]);
//       }

//       if (userError) throw userError;
      

//       Swal.fire("Usuario registrado exitosamente");
//     } catch (error) {
//       Swal.fire("Error al registrar usuario o ya hay un usuario con esta cuenta");
//       console.error(error);
//     }
//   };
//   // Renderizado del formulario de registro
//   return (
//     <div className="MainContainer">
//       <div className="ContainerIMG">
//         {/* <img className="IMG"
//           src="https://s3-alpha-sig.figma.com/img/c9d1/4ce3/92283268c1f57aab7696b3623117cce6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ed5ZylPnmE9LU9xDwNmWSYlRwAUC1XOcwSt58MD2a0D6SOymk0u3bEGDK~h4tE1lW61xRwOeaVPE5dYGhBhTElKqMITuxYjob8T-77orrcudibfCapeTFq2Dt9dWxVtexV-1iz3xw3bpdAPN2Ewl5DQxtL4ng3yjQ72JckWzxuC03JB1lqp8WQy6P42G5ZS-o760IZu332w0hiJ3eBEyRELz6QttLppvu3tek-1qbAUbYypXXhC7h3YduhI1vIZWoLkEgbVHZYoRcPUX57C3m3bjm3Qf27tz5MMnuxH2loQpRxbyBbyf1CY-On2IgUa-rMhxDYwyb1GkS86USJK~Lg__"
//           alt="Flores moradas"
//         /> */}
//       </div>
//       <div className="ContainerInputs">
//         <h1>Registro</h1>
//         <div className="ContainerInputs1">
//           <p>Correo</p>
//           <input className="Inputs" 
//             onChange={(e) => {
//               setCorreo(e.target.value);
//             }}
//             type="email"
//             name=""
//             id="email"
//             placeholder="Ingrese su correo"
//           />
//         </div>
//         <div className="ContainerInputs1">
//           <p>Contraseña</p>
//           <input className="Inputs"
//             onChange={(e) => {
//               setContrasena(e.target.value);
//             }}
//             type="password"
//             name=""
//             id="password"
//             placeholder="Ingrese su contraseña"
//           />
//         </div>
//         <select
//           className="select"
//           name="institucion"
//           id="institucion"
//           onChange={(e) => setInstitucionId(e.target.value)}
//           value={institucionId}
//         >
//           <option value="">Seleccione una institución</option>
//           {instituciones.map((institucion) => (
//             <option key={institucion.id} value={institucion.id}>
//               {institucion.nombre}
//             </option>
//           ))}
//         </select>

//         <button className="b-t-n" onClick={ValidateUser}>
//           Registrarse
//         </button>
//         <div className="ContainerTags">
//           <p>
//             Do you have an account? <a href="http://">Log in</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterC;