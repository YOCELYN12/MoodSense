import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider, Typography, Box } from '@mui/material';

const MoodSense = () => {
  return (
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
        <ListItem button>
          <ListItemText primary="Lista de Estudiantes" sx={{
            color: '#5E1151',  // Changed text color
            '@media (max-width: 600px)': {
              '& .MuiTypography-root': {
                fontSize: '0.9rem'
              }
            }
          }} />
        </ListItem>
        <Divider sx={{ backgroundColor: '#FFFFFF' }} />
        <ListItem button component={Link} to="/ForemotioP">
          <ListItemText primary="Mis Emociones" sx={{
            color: '#5E1151',  // Changed text color
            '@media (max-width: 600px)': {
              '& .MuiTypography-root': {
                fontSize: '0.9rem'
              }
            }
          }} />
        </ListItem>
        <Divider sx={{ backgroundColor: '#FFFFFF' }} />
        <ListItem button component={Link} to="/StudentForm">
          <ListItemText primary="Formulario de Perfil" sx={{
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
  );
};

export default MoodSense;
