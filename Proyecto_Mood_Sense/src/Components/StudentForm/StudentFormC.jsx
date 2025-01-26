import React, { useState } from "react";
import supabase from "../../supabase/Supabase";
import "./StudentFormcc.css";
import { UserAuth } from "../../context/Context";

const StudentFormC = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [studentId, setStudentId] = useState([]);
  const [nationality, setNationality] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [personalContact, setpersonalContact] = useState("");
  const [FamilyContact, setFamilyContact] = useState("");
  const [province, setProvince] = useState("");
  const [canton, setCanton] = useState("");
  const [district, setDistrict] = useState("");
  const [studentState, setStudentState] = useState("");
  const [drugs, setDrugs] = useState(""); 
  const [studies, setStudies] = useState("");
  const [diseases, setDiseases] = useState("");
  const [residence, setResidence] = useState("");
  const [psychologicaldiagnosis, setpsychologicaldiagnosis] = useState("");
  const [InstitutionId, setInstitutionId] = useState("");
  const [role, setRole] = useState("");


  return (
    <div>
      <h2>Formulario del Perfil</h2>
      <form  className="student-form">
      <div className="form-nombre">
          <label className="id">Nombre:</label>
          <input
            className="input-id"
            type="text"
            id="setName"
            name="student_id"
          />
        </div>

        <div className="form-Apellido">
          <label className="id">Apellido:</label>
          <input
            className="input-id"
            type="text"
            id="setLastName"
            name="student_id"
          />
        </div>


        <div className="form-id">
          <label className="id">ID Estudiante:</label>
          <input
            className="input-id"
            type="text"
            id="setStudentId"
            name="student_id"
           
          />
        </div>

        <div className="form-nacionalidad">
          <label className="nacionalidad">Nacionalidad:</label>
          <input
          className="input-nacionalidad"
            type="text"
            name="nationality"
            id="setNationality"
            
          />
        </div>

        <div className="form-identidad">
          <label className="identidad">Número de Identificación:</label>
          <input
          className="input-identidad"
            type="text"
            name="id_number"
            id="setIdNumber"
           
          />
        </div>

        <div className="form-contacto">
          <label className="contacto">Contacto Personal:</label>
          <input
          className="input-contacto"
            type="text"
            name="personal_contact"
            id="setpersonalContact"
          />
        </div>

        <div className="form-familiar">
          <label className="familiar">Contacto Familiar:</label>
          <input
          className="input-familiar"
            type="text"
            name="family_contact"
            id="setFamilyContact"
            
          />
        </div>

        <div className="form-provincia">
          <label className="provincia">Provincia:</label>
          <input
          className="input-provincia"
            type="text"
            name="province"
            id="setProvince"
          />
        </div>

        <div className="form-canton">
          <label className="canton">Cantón:</label>
          <input
          className="input-canton"
            type="text"
            name="canton"
            id="setCanton"
          />
        </div>

        <div className="form-distrito">
          <label className="distrito">Distrito:</label>
          <input
          className="input-distrito"
            type="text"
            name="district"
            id="setDistrict"
            
          />
        </div>

        <div className="form-estado">
          <label className="estado">Estado del Estudiante:</label>
          <input
          className="input-estado"
            type="text"
            name="student_state"
            id="setstudent_state"
            
          />
        </div>

        <div className="form-medicamentos">
          <label className="medicamentos">Medicamentos:</label>
          <input
          className="input-medicamentos"
            type="text"
            name="medications"
            id="setMedications"
          />
        </div>

        <div className="form-estudios">
          <label className="estudios">Estudios:</label>
          <input
          className="input-estudios"
            type="text"
            name="studies"
            id="setStudies"
          />
        </div>

        <div className="form-enfermedades">
          <label className="enfermedades">Enfermedades:</label>
          <input
          className="input-enfermedades"
            type="text"
            name="diseases"
            id="setDiseases"
          />
        </div>

        <div className="form-residencia">
          <label className="residencia">Residencia:</label>
          <input
          className="input-residencia"
            type="text"
            name="residence"
            id="setResidence"
          />
        </div>

        <div className="form-diagnostico">
          <label className="diagnostico">Diagnóstico Psicológico:</label>
          <input
          className="input-diagnostico"
            type="text"
            name="psychological_diagnosis"
            id="setPsychologicalDiagnosis"
          />
        </div>

        <div className="form-istitucion">
          <label className="institucion">ID Institución:</label>
          <input
          className="input-institucion"
            type="text"
            name="institution_id"
            id="setInstitutionId"
          />
        </div>

        <div className="form-rol">
          <label className="rol">Rol:</label>
          <input
          className="input-rol"
            type="text"
            name="rol"
            id="setRol"
          />
        </div>

        <button className="boton-guardar" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default StudentFormC;
