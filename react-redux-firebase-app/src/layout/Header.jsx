import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

import SignInLinks from './navbar/SignInLinks';
import SignUpLinks from './navbar/SignUpLinks';

const ResponsiveAppBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link href="/" sx={{ color: '#fff'}}>Event App</Link>
          </Typography>
          {isLoggedIn ? (
            <SignInLinks
              onCloseUserMenu={handleCloseUserMenu}
              onOpenUserMenu={handleOpenUserMenu}
              onCloseNavMenu={handleCloseNavMenu}
              onOpenNavMenu={handleOpenNavMenu}
              anchorElNav={anchorElNav}
              anchorElUser={anchorElUser}
            />
          ) : (
            <SignUpLinks
              onCloseNavMenu={handleCloseNavMenu}
              onOpenNavMenu={handleOpenNavMenu}
              anchorElNav={anchorElNav}
            />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
