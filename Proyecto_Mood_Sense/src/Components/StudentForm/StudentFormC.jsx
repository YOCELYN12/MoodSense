import React, { useState } from "react";
import supabase from "../../supabase/Supabase";
import "./StudentFormcc.css";
import { UserAuth } from "../../context/Context";

const StudentFormC = () => {
  const { UpdateTableUsers, user } = UserAuth();

  console.log(user);
  

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
    try {
      const { error, data } = await UpdateTableUsers(formData);
      if (data) {
        console.log("Se registraron correctamente sus datos.");
        return;
      }

      if (error) {
        console.log("Se registraron correctamente sus datos.");
        throw new Error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Formulario del Perfil</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-id">
          <label className="id">ID Estudiante:</label>
          <input
            className="input-id"
            type="text"
            name="student_id"
            value={formData.student_id}
            onChange={handleChange}
          />
        </div>

        <div className="form-nacionalidad">
          <label className="nacionalidad">Nacionalidad:</label>
          <input
          className="input-nacionalidad"
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
        </div>

        <div className="form-identidad">
          <label className="identidad">Número de Identificación:</label>
          <input
          className="input-identidad"
            type="text"
            name="id_number"
            value={formData.id_number}
            onChange={handleChange}
          />
        </div>

        <div className="form-contacto">
          <label className="contacto">Contacto Personal:</label>
          <input
          className="input-contacto"
            type="text"
            name="personal_contact"
            value={formData.personal_contact}
            onChange={handleChange}
          />
        </div>

        <div className="form-familiar">
          <label className="familiar">Contacto Familiar:</label>
          <input
          className="input-familiar"
            type="text"
            name="family_contact"
            value={formData.family_contact}
            onChange={handleChange}
          />
        </div>

        <div className="form-provincia">
          <label className="provincia">Provincia:</label>
          <input
          className="input-provincia"
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
          />
        </div>

        <div className="form-canton">
          <label className="canton">Cantón:</label>
          <input
          className="input-canton"
            type="text"
            name="canton"
            value={formData.canton}
            onChange={handleChange}
          />
        </div>

        <div className="form-distrito">
          <label className="distrito">Distrito:</label>
          <input
          className="input-distrito"
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
          />
        </div>

        <div className="form-estado">
          <label className="estado">Estado del Estudiante:</label>
          <input
          className="input-estado"
            type="text"
            name="student_state"
            value={formData.student_state}
            onChange={handleChange}
          />
        </div>

        <div className="form-medicamentos">
          <label className="medicamentos">Medicamentos:</label>
          <input
          className="input-medicamentos"
            type="text"
            name="medications"
            value={formData.medications}
            onChange={handleChange}
          />
        </div>

        <div className="form-estudios">
          <label className="estudios">Estudios:</label>
          <input
          className="input-estudios"
            type="text"
            name="studies"
            value={formData.studies}
            onChange={handleChange}
          />
        </div>

        <div className="form-enfermedades">
          <label className="enfermedades">Enfermedades:</label>
          <input
          className="input-enfermedades"
            type="text"
            name="diseases"
            value={formData.diseases}
            onChange={handleChange}
          />
        </div>

        <div className="form-residencia">
          <label className="residencia">Residencia:</label>
          <input
          className="input-residencia"
            type="text"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
          />
        </div>

        <div className="form-diagnostico">
          <label className="diagnostico">Diagnóstico Psicológico:</label>
          <input
          className="input-diagnostico"
            type="text"
            name="psychological_diagnosis"
            value={formData.psychological_diagnosis}
            onChange={handleChange}
          />
        </div>

        <div className="form-istitucion">
          <label className="institucion">ID Institución:</label>
          <input
          className="input-institucion"
            type="text"
            name="institution_id"
            value={formData.institution_id}
            onChange={handleChange}
          />
        </div>

        <div className="form-rol">
          <label className="rol">Rol:</label>
          <input
          className="input-rol"
            type="text"
            name="rol"
            value={formData.rol}
            onChange={handleChange}
          />
        </div>

        <button className="boton-guardar" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default StudentFormC;
