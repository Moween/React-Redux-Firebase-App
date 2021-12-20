import React from 'react';
import TextField from '@mui/material/TextField';

const InputField = ({ label, name, onChange, value, error, helperText, type="text" }) => {
  return (
    <TextField
      fullWidth
      id={name}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      variant="outlined"
      margin="normal"
      type={type}
      error={error}
      helperText={helperText}
    />
  );
}

export default InputField;
