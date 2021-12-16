import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import SignInLinks from './navbar/SignInLinks';
import SignOutLinks from './navbar/SignOutLinks';

const ResponsiveAppBar = () => {
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
            Event App
          </Typography>
          {/* <SignInLinks
            onCloseUserMenu={handleCloseUserMenu}
            onOpenUserMenu={handleOpenUserMenu}
            onCloseNavMenu={handleCloseNavMenu}
            onOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            anchorElUser={anchorElUser}
          /> */}
          <SignOutLinks
            onCloseNavMenu={handleCloseNavMenu}
            onOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
