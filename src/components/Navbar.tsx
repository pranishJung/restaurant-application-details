import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#212121' }}> {/* Dark grey background */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#ffffff' }}> {/* White text */}
          Restaurant Website
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{ 
            color: '#ffffff', 
            '&:hover': { backgroundColor: '#333333' }  // Darker grey on hover
          }}
        >
          Homepage
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/menu"
          sx={{ 
            color: '#ffffff', 
            '&:hover': { backgroundColor: '#333333' }
          }}
        >
          Menu
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/order"
          sx={{ 
            color: '#ffffff', 
            '&:hover': { backgroundColor: '#333333' }
          }}
        >
          Order
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/reservation"
          sx={{ 
            color: '#ffffff', 
            '&:hover': { backgroundColor: '#333333' }
          }}
        >
          Reservation
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/reviews"
          sx={{ 
            color: '#ffffff', 
            '&:hover': { backgroundColor: '#333333' }
          }}
        >
          Reviews
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;