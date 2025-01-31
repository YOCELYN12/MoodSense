import React, { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../../context/Context";

const LoginC = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const { signIn, Message, setMessage } = Context();

  const Log_In = async (e) => {
    e.preventDefault();

    try {
      //Valida si el usuario existe en la db.
      const { error, data } = await signIn(correo, contrasena);

      if (error) throw (error);
      
      if (data) {
        localStorage.setItem("usuarioEmail", correo);
        
        setTimeout(() => {
          navigate("/Home");
        }, 1500);
      }

      //     Swal.fire({
      //       icon: "error",
      //       title: "Error",
      //       text: "El correo no existe en nuestros registros",
      //     });
      //    
      //     const usuarioFiltrado = userInfo.filter(
      //       (usuario) => usuario.email === correo
      //     );
      //     // localStorage.setItem("usuarioId", usuarioFiltrado[0].id);
      //     // localStorage.setItem("usuarioRol", usuarioFiltrado[0].rol);
      //     // localStorage.setItem("usuarioNombre", usuarioFiltrado[0].name);
      //     // localStorage.setItem("usuarioApellido", usuarioFiltrado[0].last_name);
      //     localStorage.setItem("usuarioEmail", usuarioFiltrado[0].email);
      //   }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      if (!Message) {
        setMessage("Contraseña invalida..."); 
      }
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
          {Message && <div className="status_div">{Message}</div>}

        </form>
        <p>
          ¿Todavia no tienes una cuenta? <a href="/register">Sign up</a>
        </p>
      </div>
      <div>
        <img
          className="ContainerImgLogin"
          src="https://s3-alpha-sig.figma.com/img/2b6a/28ea/9c2b8a56243b0be7b8fa5ec08f2e50a2?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mKiQWvqJS0VmAS3Zhm5uMNGWFXty7HmIFkgKXddndDnswv0ZSDLXrIMamac9I0FhvbSPma1U9rgWBWc6tuNJNvcl4wyCuhoZeWdx2KdXxe1V8TeZiE3FLPEHkk8rj98YASAgS0unfupPhH9CkWeCw9~HzZ0PaOFOD8pVoMHRGNfCXhlEnIqTb3Jy-gl9qyALDuxSW3lx0NGjja0CQC1BW4NMYIf5OPiocGHRNtViod33KuXrN-O31Mooiv6ZvxVuCTYGH~guMTVXv9i3Cawf6uy2roi4jjwiSnjODmbj0bvdo4cbEDOcl6B0O1XPG2Su2qrKTbUw3tr4RMRxYKb7cQ__"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoginC;
