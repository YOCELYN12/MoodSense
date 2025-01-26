import React, { useState, useEffect } from "react";
import "./StudentFormcc.css";
import { UserAuth } from "../../context/Context";

const StudentFormC = () => {
  const { UpdateTableUsers, user } = UserAuth();

  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    age: "",
    student_id: "",
    nationality: "",
    id_number: "",
    personal_contact: "",
    family_contact: "",
    province: "",
    canton: "",
    student_state: "",
    medications: "",
    district: "",
    studies: "",
    diseases: "",
    residence: "",
    psychological_diagnosis: "",
    institution_id: "",
    rol: "",
    province: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStudent = {
      name: intName,
      lastname: intLastname,
      studentId: intStudentId,
      nationality: intNationality,
      idNumber: intIdNumber,
      personalContact: intPersonalContact,
      familyContact: intFamilyContact,
      province: intProvince,
      canton: intCanton,
      district: intDistrict,
      studentState: intStudentState,
      drugs: intDrugs,
      studies: intStudies,
      diseases: intDiseases,
      residence: intResidence,
      psychologicalDiagnosis: intPsychologicalDiagnosis,
      institutionId: intInstitutionId,
      role: intRole,
    };

    const result = await PostStudent(newStudent);
  };

  return (
    <div>
      <h2>Formulario del Perfil</h2>
      <form className="student-form" onSubmit={handleSubmit}>
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

      <h3>Lista de Estudiantes</h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} {student.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentFormC;
