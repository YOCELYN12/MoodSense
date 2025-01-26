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
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label>ID Estudiante:</label>
          <input
            type="text"
            name="student_id"
            value={formData.student_id}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Nacionalidad:</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Número de Identificación:</label>
          <input
            type="text"
            name="id_number"
            value={formData.id_number}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Contacto Personal:</label>
          <input
            type="text"
            name="personal_contact"
            value={formData.personal_contact}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Contacto Familiar:</label>
          <input
            type="text"
            name="family_contact"
            value={formData.family_contact}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Provincia:</label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Cantón:</label>
          <input
            type="text"
            name="canton"
            value={formData.canton}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Estado del Estudiante:</label>
          <input
            type="text"
            name="student_state"
            value={formData.student_state}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Medicamentos:</label>
          <input
            type="text"
            name="medications"
            value={formData.medications}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Distrito:</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Estudios:</label>
          <input
            type="text"
            name="studies"
            value={formData.studies}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Enfermedades:</label>
          <input
            type="text"
            name="diseases"
            value={formData.diseases}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Residencia:</label>
          <input
            type="text"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Diagnóstico Psicológico:</label>
          <input
            type="text"
            name="psychological_diagnosis"
            value={formData.psychological_diagnosis}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>ID Institución:</label>
          <input
            type="text"
            name="institution_id"
            value={formData.institution_id}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Rol:</label>
          <input
            type="text"
            name="rol"
            value={formData.rol}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default StudentFormC;
