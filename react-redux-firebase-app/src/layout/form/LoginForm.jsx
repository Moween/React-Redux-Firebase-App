import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import InputField from './TextField';

const Login = ({ values, touched, errors, handleChange, handleSubmit }) => {
  return (
    <Box
      component="form"
      id="login-form"
      sx={{
        mb: '2rem',
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
    </Box>
  );
};

export default Login;
