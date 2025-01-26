import React, { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserAuth } from "../../context/Context";

const LoginC = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [Status, setStatus] = useState(false);
  const { getUsers, userActive } = UserAuth();

  const Log_In = async (e) => {
    e.preventDefault();
    try {
      const userInfo = await getUsers();
      const userExists = userInfo.some((user) => user.email === correo);

 
      
      if (!userExists) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El correo no existe en nuestros registros",
        });
        setStatus("Ese correo no existe");
        return;
      }else{
        await userActive(correo, contrasena );
         setStatus("Ingreso exitoso");
        navigate("/StudentForm");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="ContainerLogin">
      <div className="ContainerLoginForm">
        <h1>Inicio Sesión</h1>
        <form required className="">
          <p>Correo</p>
          <input
            className="InputsLogin"
            required
            onChange={(e) => setCorreo(e.target.value)}
            type="email"
            name=""
            id="email"
            placeholder="Ingrese su correo"
            value={correo}
          />
          <p>Contraseña</p>
          <input
            required
            className="InputsLogin"
            onChange={(e) => setContrasena(e.target.value)}
            type="password"
            name=""
            id="password"
            placeholder="Ingrese su contraseña"
            value={contrasena}
          />

          <button className="Login_BTN" onClick={Log_In}>
            Inicio sesión
          </button>
        </form>
        <p>
          Don´t you have an account? <a href="http://">Sign up</a>
        </p>
      </div>
      <div>
        <img
          className="ContainerImgLogin"
          src="https://s3-alpha-sig.figma.com/img/2b6a/28ea/9c2b8a56243b0be7b8fa5ec08f2e50a2?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mKiQWvqJS0VmAS3Zhm5uMNGWFXty7HmIFkgKXddndDnswv0ZSDLXrIMamac9I0FhvbSPma1U9rgWBWc6tuNJNvcl4wyCuhoZeWdx2KdXxe1V8TeZiE3FLPEHkk8rj98YASAgS0unfupPhH9CkWeCw9~HzZ0PaOFOD8pVoMHRGNfCXhlEnIqTb3Jy-gl9qyALDuxSW3lx0NGjja0CQC1BW4NMYIf5OPiocGHRNtViod33KuXrN-O31Mooiv6ZvxVuCTYGH~guMTVXv9i3Cawf6uy2roi4jjwiSnjODmbj0bvdo4cbEDOcl6B0O1XPG2Su2qrKTbUw3tr4RMRxYKb7cQ__"
          alt=""
        />
      </div>

      {Status && <div>{Status}</div>}
      
    </div>
  );
};

export default LoginC;
