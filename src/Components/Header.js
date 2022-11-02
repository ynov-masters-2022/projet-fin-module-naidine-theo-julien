import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UserAccount from './Account/UserAccount';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Header = () => {

    return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <WbSunnyIcon/>  
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Météo Fronce
          </Typography>
          <UserAccount/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;