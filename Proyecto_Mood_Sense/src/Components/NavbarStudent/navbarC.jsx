import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider, Typography, Box } from '@mui/material';
import FormEmotion from '../formEmotion/FormEmotion';
import StudentFormC from '../StudentForm/StudentFormC';
import MainStudent from '../MainLandingPageStudent/MainStudent';
import { useCallback } from 'react';
import { useState } from 'react';
import './navbarCSS.css';

const MoodSense = () => {

  const [Component, setComponent] = useState();

  //Cambia el componente:
  const handleClick = useCallback((prop) => {
    setComponent(prop); // Resetea antes de cambiar
  }, []);
  
  return (
    <>
    <Box sx={{
      display: 'flex',
      width: '100%',
      '@media (max-width: 600px)': {
        flexDirection: 'column'
      }
    }}>
      <List sx={{
        border: '2px solid #AE9EE4',  // Changed border color
        height: '100vh',
        position: 'absolute',
        width: '250px',
        boxShadow: '0px 0px 10px rgba(174, 158, 228, 0.3)',  // Changed shadow color
        backgroundColor: '#AE9EE4',  // Added background color
        '@media (max-width: 600px)': {
          width: '100%',
          height: 'auto',
          position: 'relative'
        }
      }}>
        <Typography variant="h6" sx={{
          textAlign: 'center',
          color: '#5E1151',  // Changed text color to white for better contrast
          padding: '20px',
          '@media (max-width: 600px)': {
            fontSize: '1.1rem',
            fontFamily: 'Arial, sans-serif',
            padding: '15px'
          }
        }}>
          MoodSense
        </Typography>
        <Divider sx={{ backgroundColor: '#FFFFFF' }} />
        <Typography variant="h6" sx={{
          textAlign: 'center',
          color: '#5E1151',  // Changed text color
          padding: '20px',
          '@media (max-width: 600px)': {
            fontSize: '1.1rem',
            padding: '10px'
          }
        }}>
          Menu
        </Typography>
        <ListItem >
          <ListItemText className='listenItem-click' onClick={() => handleClick('Main')}  primary="Pagina Principal" sx={{
            color: '#5E1151',  // Changed text color
            '@media (max-width: 600px)': {
              '& .MuiTypography-root': {
                fontSize: '0.9rem'
              }
            }
          }} />
        </ListItem>
        <Divider sx={{ backgroundColor: '#FFFFFF' }} />
        <ListItem onClick={() => handleClick('FormEmotion')} to="/mis-emociones">
          <ListItemText className='listenItem-click' primary="Mis Emociones" sx={{
            color: '#5E1151',  // Changed text color
            '@media (max-width: 600px)': {
              '& .MuiTypography-root': {
                fontSize: '0.9rem'
              }
            }
          }} />
        </ListItem>
        <Divider sx={{ backgroundColor: '#FFFFFF' }} />
        <ListItem onClick={() => handleClick('StudentFormC')} to="/StudentForm">
          <ListItemText className='listenItem-click' primary="Formulario de Perfil" sx={{
            color: '#5E1151',  // Changed text color
            '@media (max-width: 600px)': {
              '& .MuiTypography-root': {
                fontSize: '0.9rem'
              }
            }
          }} />
        </ListItem>
        <Divider sx={{ backgroundColor: '#FFFFFF' }} />
      </List>
    </Box>


    {Component == "FormEmotion" ? (
      <FormEmotion />
    ) : Component == "StudentFormC" ? (
      <StudentFormC />
    ) : Component == "Main" && (
       <MainStudent />
    )};
  
    {/* {Component === "PaginaPrincipal" && (
      <Typography variant="h4" sx={{ textAlign: 'center', padding: '20px' }}>
        Pagina Principal
      </Typography>
    )} */}
    </>
  );
};

export default MoodSense;
