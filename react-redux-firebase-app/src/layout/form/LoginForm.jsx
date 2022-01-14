import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import InputField from './TextField';

const Login = ({ values, touched, errors, handleChange, handleSubmit }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}
      className=""
    >
      <Box
        component="form"
        id="login-form"
        sx={{
          width: { xs: '70%', lg: '30%' },
          m: '0 auto',
          // mt: '2rem',
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <InputField
          name="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />

        <InputField
          label="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          type="password"
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />

        <Button
          type="submit"
          variant="contained"
          endIcon={<NavigateNextIcon />}
          disableRipple={true}
        >
          Login
        </Button>
        <Link
          sx={{ m: '0 auto', mt: '2rem', textDecoration: 'none' }}
          href="/registeruser"
        >
          Don't have an account? Register
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
