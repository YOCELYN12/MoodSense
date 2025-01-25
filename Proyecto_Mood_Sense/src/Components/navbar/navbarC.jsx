  import React from 'react';
  import { Link } from 'react-router-dom';
  import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

  const MoodSense = () => {
    return (
      <List sx={{ border: '1px solid #939393', height: '100vh', width: '100%', boxShadow: '0px 0px 10px rgba(229, 25, 82, 0.3)' }}>
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#e51952', padding: '20px' }}>
          MoodSense
        </Typography>
        <Divider />
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#e51952', padding: '20px' }}>
          Menu
        </Typography>
        <ListItem button component={Link} to="/lista-estudiantes">
          <ListItemText primary="Lista de Estudiantes" sx={{ color: '#e51952' }} />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/mis-emociones">
          <ListItemText primary="Mis Emociones" sx={{ color: '#e51952' }} />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/perfil">
          <ListItemText primary="Formulario de Perfil" sx={{ color: '#e51952' }} />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/notificaciones">
          <ListItemText primary="Notificaciones" sx={{ color: '#e51952' }} />
        </ListItem>
      </List>
    );
  };

  export default MoodSense;