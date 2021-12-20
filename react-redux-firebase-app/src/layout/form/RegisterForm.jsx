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
        width: { xs: '70%', lg: '40%' },
        m: '0 auto',
        mt: '2rem',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <InputField
        label="FirstName"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        error={touched.firstName && Boolean(errors.firstName)}
        helperText={touched.firstName && errors.firstName}
      />
      <InputField
        label="LastName"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        error={touched.lastName && Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
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
        name="ConfirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
        helperText={touched.confirmPassword && errors.confirmPassword}
      />

      <Button type="submit" variant="contained" endIcon={<NavigateNextIcon />}>
        Sign Up
      </Button>
    </Box>
  );
};

export default RegisterForm;
