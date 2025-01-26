import React, { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserAuth } from "../../context/Context";

const LoginC = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [estatus, setEstatus] = useState("");
  const { asignIn, getUserInfo, Status } = UserAuth();

  const Log_In = async () => {
   
    try {
      const { error: authError, data: authData } = await asignIn(
        correo,
        contrasena
      );

      if (authData) {
        setEstatus("ingreso exitoso");
        navigate("/StudentForm");
      } else {
        setEstatus("Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };
  return (
    <div>
      <h1>Inicio Sesión</h1>
      <p>Solicitar permiso ingreso</p>
      <span>Correo</span>

      <form required >
        <input
          required
          onChange={(e) => setCorreo(e.target.value)}
          type="email"
          name=""
          id="email"
          placeholder="Ingrese su correo"
          value={correo}
        />
        <span>Contraseña</span>
        <input
          required
          onChange={(e) => setContrasena(e.target.value)}
          type="password"
          name=""
          id="password"
          placeholder="Ingrese su contraseña"
          value={contrasena}
        />
        <a href="http://">Olvidó contraseña?</a>
        {/* <input type="checkbox" name="" id="" />
      <span>Remember for 30 days</span> */}
        <button onClick={Log_In}>Inicio sesión</button>
      </form>
      <span>or</span>
      <span>
        Don´t you have an account? <a href="http://">Sign up</a>
      </span>

      <div className="contenedor-img">     
         <img className="Img-login"
        src="https://s3-alpha-sig.figma.com/img/2b6a/28ea/9c2b8a56243b0be7b8fa5ec08f2e50a2?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mKiQWvqJS0VmAS3Zhm5uMNGWFXty7HmIFkgKXddndDnswv0ZSDLXrIMamac9I0FhvbSPma1U9rgWBWc6tuNJNvcl4wyCuhoZeWdx2KdXxe1V8TeZiE3FLPEHkk8rj98YASAgS0unfupPhH9CkWeCw9~HzZ0PaOFOD8pVoMHRGNfCXhlEnIqTb3Jy-gl9qyALDuxSW3lx0NGjja0CQC1BW4NMYIf5OPiocGHRNtViod33KuXrN-O31Mooiv6ZvxVuCTYGH~guMTVXv9i3Cawf6uy2roi4jjwiSnjODmbj0bvdo4cbEDOcl6B0O1XPG2Su2qrKTbUw3tr4RMRxYKb7cQ__"
        alt="Flores moradas"
      />

      {Status && <div>{Status}</div>}
    </div>
  );
};

export default LoginC;
