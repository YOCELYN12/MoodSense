import React, { useEffect, useState } from 'react';
import { getUser } from '../service/service';
import "../UserList/UserList.css"; // Asegúrate de importar el CSS

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUser();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div id="userTableContainer">
      <h2 id="userTableHeader">Lista de Usuarios</h2>
      <table id="userTable">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Edad</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td data-label="Nombre">{user.name}</td>
              <td data-label="Apellido">{user.last_name}</td>
              <td data-label="Email">{user.email}</td>
              <td data-label="Edad">{user.age}</td>
              <td data-label="Rol">{user.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;





