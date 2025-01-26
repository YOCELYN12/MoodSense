import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider, Typography, Box } from '@mui/material';

const NavbarAdministrative = () => {
  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      '@media (max-width: 600px)': {
        flexDirection: 'column'
      }
    }}>
      <List sx={{
        border: '2px solid #AE9EE4',
        height: '97vh',
        width: '250px',
        boxShadow: '0px 0px 10px rgba(174, 158, 228, 0.3)',
        backgroundColor: '#AE9EE4',
        '@media (max-width: 600px)': {
          width: '100%',
          height: 'auto',
          position: 'relative'
        }
      }}>
        <Typography variant="h6" sx={{
          textAlign: 'center',
          color: '#FFFFF',
          padding: '20px',
          '@media (max-width: 600px)': {
            fontSize: '1.1rem',
            fontFamily: 'fredoka-one-regular, sans-serif',
            padding: '15px'
          }
        }}>
        </Typography>

        <ListItem button component={Link} to="/graficas-emociones">
          <ListItemText primary="Gráficas Emociones" sx={{
            color: '#FFFFFF',
            '@media (max-width: 600px)': {
              '& .MuiTypography-root': {
                fontSize: '0.9rem'
              }
            }
          }} />
        </ListItem>
        <Divider sx={{ backgroundColor: '#FFFFFF' }} />
        <ListItem button component={Link} to="/emociones-por-grupos">
          <ListItemText primary="Emociones por Grupos" sx={{
            color: '#FFFFFF',
            '@media (max-width: 600px)': {
              '& .MuiTypography-root': {
                fontSize: '0.9rem'
              }
            }
          }} />
        </ListItem>
        <Divider sx={{ backgroundColor: '#FFFFFF' }} />
        <ListItem button component={Link} to="/emociones-estudiantes">
          <ListItemText primary="Emociones Estudiantes" sx={{
            color: '#FFFFFF',
            '@media (max-width: 600px)': {
              '& .MuiTypography-root': {
                fontSize: '0.9rem'
              }
            }
          }} />
        </ListItem>
        <Divider sx={{ backgroundColor: '#FFFFFF' }} />
        <ListItem button component={Link} to="/profile">
          <ListItemText primary="Perfil" sx={{
            color: '#FFFFFF',
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

export default NavbarAdministrative;
