import React from 'react';
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
      onClose={
        menuList[0].props.href === '/profile' ? onCloseUserMenu : onCloseNavMenu
      }
      sx={{ ...sx }}
    >
      {menuList.map((item, index) => (
        <MenuItem key={index} onClick={onCloseNavMenu}>
          {item}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default PageMenu;
