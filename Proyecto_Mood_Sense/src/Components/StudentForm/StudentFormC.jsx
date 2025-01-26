import React, { useState } from 'react';
  import supabase from '../../supabase/Supabase';
  import '../StudentForm/StudentFormC.css';
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
            <h1>Formulario de Perfil</h1>
            <h2>Datos Personales</h2>
            <p className='barrita'></p>


            <div className='div-nombre'>
              <label className='nombre'>Nombre</label>
              <input 
                className='input-nombre'
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej: Juan"
                required 
              />
            </div>

            <div className='div-apellido'>
              <label className='apellido'>Apellidos</label>
              <input 
                className='input-apellido'
                type="text" 
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Ej: Pérez Mora"
                required 
              />
            </div>

            <div className='div-correo'>
              <label className='correo'>Correo Electronico</label>
              <input 
                className='input-correo'
                type="text" 
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Ej: Pérez Mora"
                required 
              />
            </div>

            <div className='div-cedula'>
              <label className='cedula'>Cédula</label>
              <input 
                className='input-cedula'
                type="text" 
                name="id_number"
                value={formData.id_number}
                onChange={handleChange}
                placeholder="Ej: 1-1234-5678"
                required 
              />
            </div>

            <div className='div-edad'>
              <label className='edad'>Edad</label>
              <input 
                className='input-edad'
                type="number" 
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Ej: 20"
                required 
              />
            </div>

            <div className='div-nacionalidad'>
              <label className='nacionalidad'>Nacionalidad</label>
              <input 
                className='input-nacionalidad'
                type="text" 
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Ej: Costarricense"
                required 
              />
            </div>

          <h2>Datos Adicionales</h2>

            <div className='div-nivescolaridad'>
              <label className='nivescolaridad'>Niv.escolaridad</label>
              <input 
                className='input-nivescolaridad'
                type="tel" 
                name="personal_phone"
                value={formData.personal_phone}
                onChange={handleChange}
                placeholder="Ej: Bachillerato"
                required 
              />
            </div>

            <div className='div-padecimiento'>
              <label className='padecimiento'>¿Tiene algun padecimiento?</label>
              <textarea
                className='input-padecimiento'
                name="medications"
                value={formData.medications}
                onChange={handleChange}
                placeholder="Ej: Asma, Diabetes, etc."
              ></textarea>
            </div>

            <div className='div-direccion'>
              <label className='direccion'>Direccion Exacta</label>
              <input 
                className='input-direccion'
                type="text" 
                name="province"
                value={formData.province}
                onChange={handleChange}
                placeholder="Ej: San José"
                required 
              />
            </div>

            <div className='div-provincia'>
              <label className='provincia'>Provincia</label>
              <input 
                className='input-provincia'
                type="text" 
                name="province"
                value={formData.province}
                onChange={handleChange}
                placeholder="Ej: San José"
                required 
              />
            </div>

            <div className='div-canton'>
              <label className='canton'>Cantón</label>
              <input 
                className='input-canton'
                type="text" 
                name="canton"
                value={formData.canton}
                onChange={handleChange}
                placeholder="Ej: Central"
                required 
              />
            </div>

            <div className='div-distrito'>
              <label className='distrito'>Distrito</label>
              <input 
                className='input-distrito'
                type="text" 
                name="district"
                value={formData.district}
                onChange={handleChange}
                placeholder="Ej: Catedral"
                required 
              />
            </div>

            <div className='div-diagnostico'>
              <label className='diagnostico'>Diagnóstico Psicológico</label>
              <textarea
                className='input-diagnostico'
                name="psychological_diagnosis"
                value={formData.psychological_diagnosis}
                onChange={handleChange}
                placeholder="Ej: Ansiedad, Depresión"
              ></textarea>
            </div>

            <div>
              <button className='boton-guardar' type="submit">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default StudentFormC;