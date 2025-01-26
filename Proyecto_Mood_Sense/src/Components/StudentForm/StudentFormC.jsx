import React, { useState } from "react";
import supabase from "../../supabase/Supabase";
import "./StudentFormcc.css";
import { UserAuth } from "../../context/Context";

const StudentFormC = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [idEstudiante, setIdEstudiante] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [numerodeIdentificacion, setnumeroIdentificacion] = useState("");
  const [contactoPersonal, setContactoPersonal] = useState("");
  const [contactoFamiliar, setContactoFamiliar] = useState("");
  const [provincia, setProvincia] = useState("");
  const [canton, setCanton] = useState("");
  const [distrito, setDistrito] = useState("");
  const [estadoEstudiante, setEstadoEstudiante] = useState("");
  const [medicamentos, setMedicamentos] = useState(""); 
  const [estudios, setEstudios] = useState("");
  const [enfermedades, setEnfermedades] = useState("");
  const [residencia, setResidecia] = useState("");
  const [diagnosticoPsicológico, setDiagnosticoPsicológico] = useState("");
  const [idInstitucion, setIdInstitucion] = useState("");
  const [rol, setRol] = useState("");

  
  return (
    <div>
      <h2>Formulario del Perfil</h2>
      <form  className="student-form">
      <div className="form-nombre">
          <label className="id">Nombre:</label>
          <input
            className="input-id"
            type="text"
            id="Nombre"
            name="student_id"
           
          />
        </div>

        <div className="form-Apellido">
          <label className="id">Apellido:</label>
          <input
            className="input-id"
            type="text"
            id="from-Apellido"
            name="student_id"
          />
        </div>


        <div className="form-id">
          <label className="id">ID Estudiante:</label>
          <input
            className="input-id"
            type="text"
            id="idEstudiante"
            name="student_id"
           
          />
        </div>

        <div className="form-nacionalidad">
          <label className="nacionalidad">Nacionalidad:</label>
          <input
          className="input-nacionalidad"
            type="text"
            name="nationality"
            
          />
        </div>

        <div className="form-identidad">
          <label className="identidad">Número de Identificación:</label>
          <input
          className="input-identidad"
            type="text"
            name="id_number"
           
          />
        </div>

        <div className="form-contacto">
          <label className="contacto">Contacto Personal:</label>
          <input
          className="input-contacto"
            type="text"
            name="personal_contact"
          />
        </div>

        <div className="form-familiar">
          <label className="familiar">Contacto Familiar:</label>
          <input
          className="input-familiar"
            type="text"
            name="family_contact"
            
          />
        </div>

        <div className="form-provincia">
          <label className="provincia">Provincia:</label>
          <input
          className="input-provincia"
            type="text"
            name="province"
            
          />
        </div>

        <div className="form-canton">
          <label className="canton">Cantón:</label>
          <input
          className="input-canton"
            type="text"
            name="canton"
            
          />
        </div>

        <div className="form-distrito">
          <label className="distrito">Distrito:</label>
          <input
          className="input-distrito"
            type="text"
            name="district"
            
          />
        </div>

        <div className="form-estado">
          <label className="estado">Estado del Estudiante:</label>
          <input
          className="input-estado"
            type="text"
            name="student_state"
            
          />
        </div>

        <div className="form-medicamentos">
          <label className="medicamentos">Medicamentos:</label>
          <input
          className="input-medicamentos"
            type="text"
            name="medications"
            
          />
        </div>

        <div className="form-estudios">
          <label className="estudios">Estudios:</label>
          <input
          className="input-estudios"
            type="text"
            name="studies"
            
          />
        </div>

        <div className="form-enfermedades">
          <label className="enfermedades">Enfermedades:</label>
          <input
          className="input-enfermedades"
            type="text"
            name="diseases"
            
          />
        </div>

        <div className="form-residencia">
          <label className="residencia">Residencia:</label>
          <input
          className="input-residencia"
            type="text"
            name="residence"
           
          />
        </div>

        <div className="form-diagnostico">
          <label className="diagnostico">Diagnóstico Psicológico:</label>
          <input
          className="input-diagnostico"
            type="text"
            name="psychological_diagnosis"
            
          />
        </div>

        <div className="form-istitucion">
          <label className="institucion">ID Institución:</label>
          <input
          className="input-institucion"
            type="text"
            name="institution_id"
            
          />
        </div>

        <div className="form-rol">
          <label className="rol">Rol:</label>
          <input
          className="input-rol"
            type="text"
            name="rol"
            
          />
        </div>

        <button className="boton-guardar" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default StudentFormC;
