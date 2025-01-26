import React, { useState } from "react";
import "./StudentFormcc.css";
import {PostStudent} from "../service/service";

const StudentFormC = () => {
  const [intEmail, setEmail] = useState([]);
  const [intPassword, setPassword] = useState("");
  const [intInstitutionId, setInstitutionId] = useState("002");
  const [intName, setName] = useState("");
  const [intLastName, setLastName] = useState("");
  const [intAge, setAge] = useState("");
  const [intStudentState, setStudentState] = useState("");
  const [intNationality, setNationality] = useState("");
  const [intPersonalContact, setPersonalContact] = useState("");
  const [intFamilyContact, setFamilyContact] = useState("");
  const [intResidence, setResidence] = useState("");
  const [intDiseases, setDiseases] = useState("");
  const [intProvince, setProvince] = useState("");
  const [intDistrict, setDistrict] = useState("");
  const [intCanton, setCanton] = useState("");
  const [intMedications, setMedications] = useState("");
  const [intPsychologicalDiagnosis, setPsychologicalDiagnosis] = useState("");
  const [intRole, setRole] = useState("");

  // Función para manejar el envío del formulario (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudent = {
      email: intEmail,
      password: intPassword,
      institucion_id: intInstitutionId,
      id: "54321", // ID asignado manualmente como en el JSON de ejemplo
      name: intName,
      last_name: intLastName,
      age: intAge,
      student_state: intStudentState,
      nationality: intNationality,
      personal_contact: intPersonalContact,
      family_contact: intFamilyContact,
      residence: intResidence,
      diseases: intDiseases,
      province: intProvince,
      district: intDistrict,
      canton: intCanton,
      medications: intMedications,
      psychological_diagnosis: intPsychologicalDiagnosis,
      rol: intRole,
    };

    const result = await PostStudent(newStudent); // Yos, acá hay que cambiar el export, la función no existe
  };

  return (
    <div>
      <h2>Formulario del Perfil</h2>
      <form className="student-form" onSubmit={handleSubmit}>
        <div className="form-email">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            value={intEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-password">
          <label>Contraseña:</label>
          <input
            type="password"
            value={intPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-password">
          <label>Institution id:</label>
          <input
            type="number"
            value={intInstitutionId}
            onChange={(e) => setInstitutionId(e.target.value)}
          />
        </div>

        <div className="form-nombre">
          <label>Nombre:</label>
          <input
            type="text"
            value={intName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-apellido">
          <label>Apellido:</label>
          <input
            type="text"
            value={intLastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-edad">
          <label>Edad:</label>
          <input
            type="number"
            value={intAge || ""}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>

        <div className="form-estado">
          <label>Estado del Estudiante:</label>
          <input
            type="text"
            value={intStudentState}
            onChange={(e) => setStudentState(e.target.value)}
          />
        </div>

        <div className="form-nacionalidad">
          <label>Nacionalidad:</label>
          <input
            type="text"
            value={intNationality}
            onChange={(e) => setNationality(e.target.value)}
          />
        </div>

        <div className="form-contacto">
          <label>Contacto Personal:</label>
          <input
            type="text"
            value={intPersonalContact}
            onChange={(e) => setPersonalContact(e.target.value)}
          />
        </div>

        <div className="form-familiar">
          <label>Contacto Familiar:</label>
          <input
            type="text"
            value={intFamilyContact}
            onChange={(e) => setFamilyContact(e.target.value)}
          />
        </div>

        <div className="form-residencia">
          <label>Residencia:</label>
          <input
            type="text"
            value={intResidence}
            onChange={(e) => setResidence(e.target.value)}
          />
        </div>

        <div className="form-enfermedades">
          <label>Enfermedades:</label>
          <input
            type="text"
            value={intDiseases}
            onChange={(e) => setDiseases(e.target.value)}
          />
        </div>

        <div className="form-provincia">
          <label>Provincia:</label>
          <input
            type="text"
            value={intProvince}
            onChange={(e) => setProvince(e.target.value)}
          />
        </div>

        <div className="form-canton">
          <label>Cantón:</label>
          <input
            type="text"
            value={intCanton}
            onChange={(e) => setCanton(e.target.value)}
          />
        </div>

        <div className="form-distrito">
          <label>Distrito:</label>
          <input
            type="text"
            value={intDistrict}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>

        <div className="form-medicamentos">
          <label>Medicamentos:</label>
          <input
            type="text"
            value={intMedications}
            onChange={(e) => setMedications(e.target.value)}
          />
        </div>

        <div className="form-diagnostico">
          <label>Diagnóstico Psicológico:</label>
          <input
            type="text"
            value={intPsychologicalDiagnosis}
            onChange={(e) => setPsychologicalDiagnosis(e.target.value)}
          />
        </div>

        <div className="form-rol">
          <label>Rol:</label>
          <input
            type="text"
            value={intRole}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default StudentFormC;
