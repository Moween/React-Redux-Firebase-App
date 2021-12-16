import React from 'react';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const PageMenu = ({
  anchorOriginVertical,
  originHorizontal,
  transformOriginVertical,
  menuList,
  anchorNav,
  onCloseNavMenu,
  onCloseUserMenu,
  sx,
}) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorNav}
      anchorOrigin={{
        vertical: anchorOriginVertical,
        horizontal: originHorizontal,
      }}
      keepMounted
      transformOrigin={{
        vertical: transformOriginVertical,
        horizontal: originHorizontal,
      }}
      open={Boolean(anchorNav)}
      onClose={menuList.includes('Dashboard') ? onCloseUserMenu : onCloseNavMenu}
      sx={{ ...sx }}
    >
      {menuList.map((item) => (
        <MenuItem key={item} onClick={onCloseNavMenu}>
          <Typography textAlign="center">{item}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default PageMenu;
