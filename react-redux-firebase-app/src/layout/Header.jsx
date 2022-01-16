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
  const { isLoaded, isEmpty } = useSelector((state) => state.firebase.auth);
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

  const displayLinks = () => {
    if (isLoaded && isEmpty) {
      return (
        <SignUpLinks
          onCloseNavMenu={handleCloseNavMenu}
          onOpenNavMenu={handleOpenNavMenu}
          anchorElNav={anchorElNav}
        />
      );
    } else if (isLoaded && !isEmpty) {
      return (
        <SignInLinks
          onCloseUserMenu={handleCloseUserMenu}
          onOpenUserMenu={handleOpenUserMenu}
          onCloseNavMenu={handleCloseNavMenu}
          onOpenNavMenu={handleOpenNavMenu}
          anchorElNav={anchorElNav}
          anchorElUser={anchorElUser}
        />
      );
    }
  };

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <Link href="/" sx={{ color: '#fff' }}>
                Eventify
              </Link>
            </Typography>
            {displayLinks()}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};
export default ResponsiveAppBar;
