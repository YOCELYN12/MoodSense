  import React, { useState } from 'react';
  import supabase from '../../supabase/Supabase';

  const StudentFormC = () => {
    const [formData, setFormData] = useState({
      entry_date: '',
      name: '',
      diseases: '',
      user_idemail: ''
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
              diseases: formData.diseases,
              user_idemail: formData.user_idemail
            }
          ]);

        if (error) throw error;
        console.log('Data inserted successfully');
      
      } catch (error) {
        console.error('Error inserting data:', error.message);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <h2>Formulario de datos del estudiante</h2>

        <div>
          <label>Nombre</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>

        <div>
          <label>Correo electrónico</label>
          <input 
            type="email" 
            name="user_idemail"
            value={formData.user_idemail}
            onChange={handleChange}
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
          <label>Enfermedad</label>
          <textarea
            name="diseases"
            value={formData.diseases}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>
    );
  };

  export default StudentFormC;