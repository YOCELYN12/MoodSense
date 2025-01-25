  import React, { useState } from 'react';
  import supabase from '../../supabase/Supabase';
  import './StudentFormcc.css';
  const StudentFormC = () => {
    const [formData, setFormData] = useState({
      entry_date: '',
      name: '',
      lastname: '',
      age: '',
      student_id: '',
      nationality: '',
      id_number: '',
      personal_phone: '',
      family_phone: '',
      province: '',
      canton: '',
      district: '',
      medications: '',
      diseases: '',
      psychological_diagnosis: ''
    });
    //hola

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data, error } = await supabase
          .from('user')
          .insert([
            {
              entry_date: formData.entry_date,
              name: formData.name,
              lastname: formData.lastname,
              age: formData.age,
              student_id: formData.student_id,
              nationality: formData.nationality,
              id_number: formData.id_number,
              personal_phone: formData.personal_phone,
              family_phone: formData.family_phone,
              province: formData.province,
              canton: formData.canton,
              district: formData.district,
              medications: formData.medications,
              diseases: formData.diseases,
              psychological_diagnosis: formData.psychological_diagnosis
            }
          ]);

        if (error) throw error;
        console.log('Data inserted successfully');
    
      } catch (error) {
        console.error('Error inserting data:', error.message);
      }
    };

    return (
      <div>
        <div style={{ padding: '20px' }}>
          <form onSubmit={handleSubmit}>
            <h2>Formulario de datos del estudiante</h2>

            <div>
              <label>Nombre</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej: Juan"
                required 
              />
            </div>

            <div>
              <label>Apellidos</label>
              <input 
                type="text" 
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Ej: Pérez Mora"
                required 
              />
            </div>

            <div>
              <label>Edad</label>
              <input 
                type="number" 
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Ej: 20"
                required 
              />
            </div>

            <div>
              <label>Carné Estudiantil</label>
              <input 
                type="text" 
                name="student_id"
                value={formData.student_id}
                onChange={handleChange}
                placeholder="Ej: B12345"
                required 
              />
            </div>

            <div>
              <label>Nacionalidad</label>
              <input 
                type="text" 
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Ej: Costarricense"
                required 
              />
            </div>

            <div>
              <label>Cédula</label>
              <input 
                type="text" 
                name="id_number"
                value={formData.id_number}
                onChange={handleChange}
                placeholder="Ej: 1-1234-5678"
                required 
              />
            </div>

            <div>
              <label>Número de Contacto Personal</label>
              <input 
                type="tel" 
                name="personal_phone"
                value={formData.personal_phone}
                onChange={handleChange}
                placeholder="Ej: 8888-8888"
                required 
              />
            </div>

            <div>
              <label>Número de Contacto Familiar</label>
              <input 
                type="tel" 
                name="family_phone"
                value={formData.family_phone}
                onChange={handleChange}
                placeholder="Ej: 7777-7777"
                required 
              />
            </div>

            <div>
              <label>Provincia</label>
              <input 
                type="text" 
                name="province"
                value={formData.province}
                onChange={handleChange}
                placeholder="Ej: San José"
                required 
              />
            </div>

            <div>
              <label>Cantón</label>
              <input 
                type="text" 
                name="canton"
                value={formData.canton}
                onChange={handleChange}
                placeholder="Ej: Central"
                required 
              />
            </div>

            <div>
              <label>Distrito</label>
              <input 
                type="text" 
                name="district"
                value={formData.district}
                onChange={handleChange}
                placeholder="Ej: Catedral"
                required 
              />
            </div>

            <div>
              <label>Fecha de Ingreso</label>
              <input 
                type="date" 
                name="entry_date"
                value={formData.entry_date}
                onChange={handleChange}
                required 
              />
            </div>

            <div>
              <label>¿Toma algún medicamento?</label>
              <textarea
                name="medications"
                value={formData.medications}
                onChange={handleChange}
                placeholder="Ej: Acetaminofén 500mg, Omeprazol 20mg"
              ></textarea>
            </div>

            <div>
              <label>Enfermedades</label>
              <textarea
                name="diseases"
                value={formData.diseases}
                onChange={handleChange}
                placeholder="Ej: Asma, Hipertensión"
              ></textarea>
            </div>

            <div>
              <label>Diagnóstico Psicológico</label>
              <textarea
                name="psychological_diagnosis"
                value={formData.psychological_diagnosis}
                onChange={handleChange}
                placeholder="Ej: Ansiedad, Depresión"
              ></textarea>
            </div>

            <div>
              <button type="submit">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default StudentFormC;