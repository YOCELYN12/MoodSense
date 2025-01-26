import React from "react";

const Admin = () => {
  return (
    <div>
      <div>
        <button>Graficas emociones</button>
        <button>Emociones por grupo</button>
        <button>Emociones por estudiante</button>
        <button>Profile</button>
        <button>Settings</button>
      </div>
      <div>
        <input type="text" name="" id="" placeholder="buscar nombre" />
        <div>Wendy</div>
        <button>Cerrar Sesión</button>
      </div>
      <div>
        <input type="date" name="" id="" placeholder="Filtrar por fecha" />
      </div>
      <div>
        <p>Enojo</p>
        <p>12</p>
      </div>
      <div>
        <p>Alegre</p>
        <p>20</p>
      </div>
      <div>
        <p>Miedo</p>
        <p>2</p>
      </div>
      <div>
        <p>Triste</p>
        <p>4</p>
      </div>
      <div></div>
    </div>
  );
};

export default Admin;
