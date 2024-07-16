import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} /> {/* This empty Box takes up the left space */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">Link 1</Button>
          <Button color="inherit">Link 2</Button>
          <Button color="inherit">Link 3</Button>
          <Button color="inherit">Link 4</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
