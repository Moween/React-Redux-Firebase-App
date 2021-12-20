import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';

const SelectItem = ({ eventType, eventTypes, onChange, helperText }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="eventType">Event Type</InputLabel>
        <Select
          labelId="event-type-label"
          id="eventType"
          name="eventType"
          value={eventType}
          label="Event Type"
          onChange={onChange}
          renderValue={(value) => value}
        >
          {eventTypes.map((type, index) => (
            <MenuItem value={type} key={index}>{type}</MenuItem>
          ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default SelectItem;