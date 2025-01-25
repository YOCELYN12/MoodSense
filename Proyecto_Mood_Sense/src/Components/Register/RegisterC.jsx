import React from "react";
import "../Register/Register.css";

const RegisterC = () => {
  return (
    <div>
      <h1>Registro</h1>

      <span>Correo</span>
      <input type="email" name="" id="email" placeholder="Ingrese su correo" />
      <span>Contraseña</span>
      <input
        type="password"
        name=""
        id="password"
        placeholder="Ingrese su contraseña"
      />
      <input type="checkbox" name="" id="" />
      <span>Remember for 30 days</span>
      <button>Registrarse</button>
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
