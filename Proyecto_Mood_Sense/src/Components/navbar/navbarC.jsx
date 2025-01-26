  import React from 'react';
  import { Link } from 'react-router-dom';
  import { List, ListItem, ListItemText, Divider, Typography, Box } from '@mui/material';
  import StudentFormC from '../StudentForm/StudentFormC';

  const MoodSense = () => {
    return (
      <Box sx={{ display: 'flex' }}>
        <List sx={{ border: '2px solid #a20f41', height: '100vh', width: '250px', boxShadow: '0px 0px 10px rgba(162, 15, 65, 0.3)' }}>
          <Typography variant="h6" sx={{ textAlign: 'center', color: '#a20f41', padding: '20px' }}>
            MoodSense
          </Typography>
          <Divider />
          <Typography variant="h6" sx={{ textAlign: 'center', color: '#a20f41', padding: '20px' }}>
            Menu
          </Typography>
          <ListItem button>
            <ListItemText primary="Lista de Estudiantes" sx={{ color: '#a20f41' }} />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/mis-emociones">
            <ListItemText primary="Mis Emociones" sx={{ color: '#a20f41' }} />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/perfil">
            <ListItemText primary="Formulario de Perfil" sx={{ color: '#a20f41' }} />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/notificaciones">
            <ListItemText primary="Notificaciones" sx={{ color: '#a20f41' }} />
          </ListItem>
        </List>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          {/* <StudentFormC /> */}
        </Box>
      </Box>
    );
  };

  export default MoodSense;