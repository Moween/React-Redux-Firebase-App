import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

import PageMenu from './Menu';

const SignInLinks = ({ anchorElNav, onOpenNavMenu, onCloseNavMenu }) => {
  const pages = ['Home'];
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={onOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <PageMenu
          anchorOriginVertical="bottom" 
          sx={{ display: { xs: 'block', md: 'none' } }}
          originHorizontal="left"
          transformOriginVertical="top"
          menuList={pages}
          position="right"
          anchorNav={anchorElNav}
          onCloseNavMenu={onCloseNavMenu}
        />
      </Box>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
      >
        EventApp
      </Typography>
      <Box>
        <Button variant="contained">Login</Button>
        <Button variant="contained">Register</Button>
      </Box>
    </>
  );
};

export default SignInLinks;
