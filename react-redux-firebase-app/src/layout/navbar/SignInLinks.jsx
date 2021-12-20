import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';

import PageMenu from './Menu';

const SignInLinks = ({
  anchorElNav,
  anchorElUser,
  onOpenUserMenu,
  onCloseUserMenu,
  onCloseNavMenu,
  onOpenNavMenu,
}) => {
  const settings = [
    <Link href="/dashboard">Dashboard</Link>,
    <Link href="/profile">Profile</Link>,
    <Link href="/notifications">Notifications</Link>,
    'Logout',
  ];

  const pages = [
    <Link href="/">Home</Link>,
    <Link href="/newpost">Create Post</Link>,
    <Link href="/events">Events</Link>,
    <Link href="/blog">Blog</Link>,
  ];

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
        <Link href="/" sx={{ color: '#fff' }}>
          EventApp
        </Link>
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={onCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>

      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={onOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <PageMenu
          anchorOriginVertical="top"
          sx={{ mt: '45px' }}
          originHorizontal="right"
          transformOriginVertical="top"
          menuList={settings}
          position="right"
          anchorNav={anchorElUser}
          onCloseUserMenu={onCloseUserMenu}
          onCloseNavMenu={onCloseNavMenu}
        />
      </Box>
    </>
  );
};

export default SignInLinks;
