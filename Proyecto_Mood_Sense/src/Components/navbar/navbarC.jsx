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
          border: '2px solid #a20f41', 
          height: '100vh', 
          width: '250px',
          boxShadow: '0px 0px 10px rgba(162, 15, 65, 0.3)',
          '@media (max-width: 600px)': {
            width: '100%',
            height: 'auto',
            position: 'relative'
          }
        }}>
          <Typography variant="h6" sx={{ 
            textAlign: 'center', 
            color: '#a20f41', 
            padding: '20px',
            '@media (max-width: 600px)': {
              fontSize: '1.1rem',
              padding: '10px'
            }
          }}>
            MoodSense
          </Typography>
          <Divider />
          <Typography variant="h6" sx={{ 
            textAlign: 'center', 
            color: '#a20f41', 
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
              color: '#a20f41',
              '@media (max-width: 600px)': {
                '& .MuiTypography-root': {
                  fontSize: '0.9rem'
                }
              }
            }} />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/mis-emociones">
            <ListItemText primary="Mis Emociones" sx={{ 
              color: '#a20f41',
              '@media (max-width: 600px)': {
                '& .MuiTypography-root': {
                  fontSize: '0.9rem'
                }
              }
            }} />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/studentform">
            <ListItemText primary="Formulario de Perfil" sx={{ 
              color: '#a20f41',
              '@media (max-width: 600px)': {
                '& .MuiTypography-root': {
                  fontSize: '0.9rem'
                }
              }
            }} />
          </ListItem>
          <Divider />
        </List>
      </Box>
    );
  };

  export default MoodSense;