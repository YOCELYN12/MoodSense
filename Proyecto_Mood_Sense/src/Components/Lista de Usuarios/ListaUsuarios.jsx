import { useState, useEffect } from 'react';
import { postUser } from '../service/service';

const ListaUsuarios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await postUser();
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <div className="users-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name} {user.last_name}</h3>
            <p>Email: {user.email}</p>
            <p>Edad: {user.age}</p>
            <p>Estado: {user.student_state}</p>
            <p>Nacionalidad: {user.nationality}</p>
            <p>Rol: {user.rol}</p>
            <p>Residencia: {user.residence}</p>
            <p>Provincia: {user.province}</p>
            <p>Distrito: {user.district}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaUsuarios;
