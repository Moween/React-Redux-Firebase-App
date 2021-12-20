import React, { forwardRef } from 'react';
import { createTheme } from '@mui/material/styles';
import { makeStyles }  from '@mui/material/styles/makeStyles';
import { Link } from 'react-router-dom';

// Customize Mui Link Component
const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <Link data-testid="custom-link" ref={ref} to={href} {...other} />;
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1C0446',
    },
    secondary: {
      main: '#9D88B3',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
  },
});
