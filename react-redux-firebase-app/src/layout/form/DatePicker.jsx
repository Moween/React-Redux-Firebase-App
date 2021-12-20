import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function BasicDatePicker({error, helperText, onChange, value}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        renderInput={(props) => <TextField sx={{ mt: '1rem' }} {...props} />}
        label="Pick Event Date"
        value={value}
        clearable
        cancelLabel
        okLabel
        disablePast
        onChange={(value) => onChange("date", value)}
      />
    </LocalizationProvider>
  );
}
