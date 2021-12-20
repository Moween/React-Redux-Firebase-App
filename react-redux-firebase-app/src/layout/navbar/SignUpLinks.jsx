import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

import PageMenu from './Menu';

const SignUpLinks = ({ anchorElNav, onOpenNavMenu, onCloseNavMenu }) => {
  const pages = [
    <Link href="/">Home</Link>,
    <Link href="/loginuser">Login</Link>,
    <Link href="/registeruser">Register</Link>,
  ];
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: '#fff' }}
      >
        <Link href="/" sx={{ color: '#fff' }}>
          EventApp
        </Link>
      </Typography>
      <Box
        sx={{ ml: 'auto', display: { xs: 'none', md: 'block' }, width: '15%' }}
      >
        <Link href="/loginuser" sx={{ color: '#fff', mr: '1rem', p: '0.5rem' }}>
          Login
        </Link>
        <Link href="/registeruser" sx={{ color: '#fff', p: '0.5rem' }}>
          Register
        </Link>
      </Box>
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
    </>
  );
};

export default SignUpLinks;
