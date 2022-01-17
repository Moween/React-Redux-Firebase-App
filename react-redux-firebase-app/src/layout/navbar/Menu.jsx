import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';

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
  const firebase = useFirebase();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await firebase.logout();
      toast.success('Logged out!');
      navigate('/', { replace: true });
      onCloseNavMenu();
    } catch (error) {
      toast.error(error.message);
    }
  };

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
        <MenuItem
          key={index}
          onClick={item === 'Logout' ? logout : onCloseNavMenu}
        >
          {item}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default PageMenu;
