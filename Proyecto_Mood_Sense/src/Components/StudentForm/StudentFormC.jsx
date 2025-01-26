import React, { useState } from "react";
import "./StudentFormcc.css";

const StudentFormC = () => {
  const [intName, setName] = useState("");
  const [intLastname, setLastName] = useState("");
  const [intStudentId, setStudentId] = useState("");
  const [intNationality, setNationality] = useState("");
  const [intIdNumber, setIdNumber] = useState("");
  const [intPersonalContact, setPersonalContact] = useState("");
  const [intFamilyContact, setFamilyContact] = useState("");
  const [intProvince, setProvince] = useState("");
  const [intCanton, setCanton] = useState("");
  const [intDistrict, setDistrict] = useState("");
  const [intStudentState, setStudentState] = useState("");
  const [intDrugs, setDrugs] = useState("");
  const [intStudies, setStudies] = useState("");
  const [intDiseases, setDiseases] = useState("");
  const [intResidence, setResidence] = useState("");
  const [intPsychologicalDiagnosis, setPsychologicalDiagnosis] = useState("");
  const [intInstitutionId, setInstitutionId] = useState("");
  const [intRole, setRole] = useState("");

  return (
    <div>
      <h2>Formulario del Perfil</h2>
      <form className="student-form">
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
            value={intLastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-id">
          <label>ID Estudiante:</label>
          <input
            type="text"
            value={intStudentId}
            onChange={(e) => setStudentId(e.target.value)}
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

        <div className="form-identidad">
          <label>Número de Identificación:</label>
          <input
            type="text"
            value={intIdNumber}
            onChange={(e) => setIdNumber(e.target.value)}
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

        <div className="form-estado">
          <label>Estado del Estudiante:</label>
          <input
            type="text"
            value={intStudentState}
            onChange={(e) => setStudentState(e.target.value)}
          />
        </div>

        <div className="form-medicamentos">
          <label>Medicamentos:</label>
          <input
            type="text"
            value={intDrugs}
            onChange={(e) => setDrugs(e.target.value)}
          />
        </div>

        <div className="form-estudios">
          <label>Estudios:</label>
          <input
            type="text"
            value={intStudies}
            onChange={(e) => setStudies(e.target.value)}
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

        <div className="form-residencia">
          <label>Residencia:</label>
          <input
            type="text"
            value={intResidence}
            onChange={(e) => setResidence(e.target.value)}
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

        <div className="form-institucion">
          <label>ID Institución:</label>
          <input
            type="text"
            value={intInstitutionId}
            onChange={(e) => setInstitutionId(e.target.value)}
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
