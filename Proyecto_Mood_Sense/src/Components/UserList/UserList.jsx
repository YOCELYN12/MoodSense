import React, { useState, useEffect } from "react";
import { getDatosMeta, postDatosMetadata, getInstitution, postInstitution, postUser, postEmotion } from "../service/service";
import "../GroupsReport/GroupsReport.css";

const UserList = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editandoUsuarioId, setEditandoUsuarioId] = useState(null);
  const [formularioEditarUsuario, setFormularioEditarUsuario] = useState({
    name: '',
    last_name: '',
    student_id: '',
    age: '',
    diseases: '',
    psychological_diagnosis: '',
    student_state: ''
  });

  useEffect(() => {
    cargarUsuarios();
  }, []);

  // Función para obtener y cargar los usuarios desde la API local
  const cargarUsuarios = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  };

  // Función para iniciar la edición de un usuario
  const iniciarEdicion = (usuario) => {
    setEditandoUsuarioId(usuario.id);
    setFormularioEditarUsuario(usuario);
  };

  // Función para manejar los cambios en los campos del formulario
  const EditInput = (event) => {
    const { name, value } = event.target;
    setFormularioEditarUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función para guardar los cambios del usuario
  const guardarCambios = async (id) => {
    try {
      await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formularioEditarUsuario),
      });
      setEditandoUsuarioId(null);
      cargarUsuarios();
    } catch (error) {
      console.error("Error al guardar usuario:", error);
    }
  };

  // Función para cancelar la edición del usuario
  const cancelarEdicion = () => {
    setEditandoUsuarioId(null);
  };

  return (
    <div id="UserList">
      <h1>Administrar Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>ID del Estudiante</th>
            <th>Edad</th>
            <th>Enfermedades</th>
            <th>Diagnóstico Psicológico</th>
            <th>Estado del Estudiante</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id} id={`fila-${usuario.id}`}>
              {editandoUsuarioId === usuario.id ? (
                <>
                  <td data-label="Nombre" id="nombre_UserList"><input type="text" name="name" value={formularioEditarUsuario.name} onChange={EditInput} /></td>
                  <td data-label="Apellido" id="apellido_UserList"><input type="text" name="last_name" value={formularioEditarUsuario.last_name} onChange={EditInput} /></td>
                  <td data-label="ID del Estudiante" id="student_id_UserList"><input type="text" name="student_id" value={formularioEditarUsuario.student_id} onChange={EditInput} /></td>
                  <td data-label="Edad" id="age_UserList"><input type="text" name="age" value={formularioEditarUsuario.age} onChange={EditInput} /></td>
                  <td data-label="Enfermedades" id="diseases_UserList"><input type="text" name="diseases" value={formularioEditarUsuario.diseases} onChange={EditInput} /></td>
                  <td data-label="Diagnóstico Psicológico" id="psychological_diagnosis_UserList"><input type="text" name="psychological_diagnosis" value={formularioEditarUsuario.psychological_diagnosis} onChange={EditInput} /></td>
                  <td data-label="Estado del Estudiante">
                    <select id="student_state_UserList" name="student_state" value={formularioEditarUsuario.student_state} onChange={EditInput}>
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </td>
                  <td data-label="Acciones">
                    <button id="btnUserList_guardar" onClick={() => guardarCambios(usuario.id)}>Guardar</button>
                    <button id="btnUserList_cancelar" onClick={cancelarEdicion}>Cancelar</button>
                  </td>
                </>
              ) : (
                <>
                  <td data-label="Nombre" id="nombre_UserList">{usuario.name}</td>
                  <td data-label="Apellido" id="apellido_UserList">{usuario.last_name}</td>
                  <td data-label="ID del Estudiante" id="student_id_UserList">{usuario.student_id}</td>
                  <td data-label="Edad" id="age_UserList">{usuario.age}</td>
                  <td data-label="Enfermedades" id="diseases_UserList">{usuario.diseases}</td>
                  <td data-label="Diagnóstico Psicológico" id="psychological_diagnosis_UserList">{usuario.psychological_diagnosis}</td>
                  <td data-label="Estado del Estudiante" id="student_state_UserList">{usuario.student_state}</td>
                  <td data-label="Acciones">
                    <button id="btnUserList_editar" onClick={() => iniciarEdicion(usuario)}>Editar</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;


