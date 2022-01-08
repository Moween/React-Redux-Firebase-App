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
  const accountSettings = [
    <Link href="/profile">Profile</Link>,
    <Link href="/notifications">Notifications</Link>,
    'Logout',
  ];

  const pages = [
    <Link sx={{color: 'inherit'}} href="/">Home</Link>,
    <Link sx={{color: 'inherit'}} href="/newpost">Create Post</Link>,
    <Link sx={{color: 'inherit'}} href="/events">Events</Link>,
    <Link sx={{color: 'inherit'}} href="/blog">Blog</Link>,
  ];

  return (
    <>
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
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={onOpenNavMenu}
          color="inherit"
          sx={{ ml: 'auto' }}
        >
          <MenuIcon />
        </IconButton>
        <PageMenu
          anchorOriginVertical="bottom"
          originHorizontal="left"
          transformOriginVertical="top"
          menuList={[...pages, ...accountSettings]}
          position="right"
          anchorNav={anchorElNav}
          onCloseNavMenu={onCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        />
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page, index) => (
          <Button
            key={index}
            onClick={onCloseNavMenu}
            sx={{ my: 2, display: 'block', color: 'inherit' }}
          >
            {page}
          </Button>
        ))}
      </Box>
      <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
        <Tooltip title="Account settings">
          <IconButton onClick={onOpenUserMenu} sx={{ p: 0, cursor: 'pointer' }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/2.jpg"
              sx={{ cursor: 'pointer' }}
            />
          </IconButton>
        </Tooltip>
        <PageMenu
          anchorOriginVertical="top"
          sx={{ mt: '45px' }}
          originHorizontal="right"
          transformOriginVertical="top"
          menuList={accountSettings}
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
