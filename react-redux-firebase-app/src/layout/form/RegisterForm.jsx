import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import InputField from './TextField';

const RegisterForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Box
      component="form"
      id="register-form"
      sx={{
        mt: '1rem',
        mb: '1rem',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <InputField
        label="UserName"
        name="userName"
        value={values.userName}
        onChange={handleChange}
        error={touched.userName && Boolean(errors.userName)}
        helperText={touched.userName && errors.userName}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <InputField
        id="confirm-password"
        label="Confirm Password"
        variant="outlined"
        margin="normal"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
        helperText={touched.confirmPassword && errors.confirmPassword}
      />

      <Button
        type="submit"
        variant="contained"
        endIcon={<NavigateNextIcon />}
        disableRipple={true}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default RegisterForm;
