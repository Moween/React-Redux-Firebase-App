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
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <InputField
        label="FullName"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        error={touched.fullName && Boolean(errors.fullName)}
        helperText={touched.fullName && errors.fullName}
      />
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

      <Button type="submit" variant="contained" endIcon={<NavigateNextIcon />}>
        Sign Up
      </Button>
    </Box>
  );
};

export default RegisterForm;
