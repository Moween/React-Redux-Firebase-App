import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import DatePicker from '@mui/material/DatePicker';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import InputField from './TextField';
import Select from './Select';

const CreatePost = (props) => {
  const eventTypes = [
    'Select an event type',
    'Social',
    'Party',
    'corporate',
    'Meet and Greet',
  ];
  const { values, touched, errors, handleChange, handleSubmit } = props;

  return (
    <Box
      component="form"
      id="login-form"
      sx={{
        width: { xs: '70%', lg: '40%' },
        m: '0 auto',
        mt: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-end',
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <InputField
        label="Event Title"
        name="title"
        value={values.title}
        onChange={handleChange}
        error={touched.title && Boolean(errors.title)}
        helperText={touched.title && errors.title}
      />
      <InputField
        label="Event Details"
        name="details"
        value={values.details}
        onChange={handleChange}
        error={touched.details && Boolean(errors.details)}
        helperText={touched.details && errors.details}
      />
      {/* <DatePicker /> */}
      <Select
        eventTypes={eventTypes}
        eventType={values.eventType}
        onChange={handleChange}
        error={touched.eventType && Boolean(errors.eventType)}
        helperText={touched.eventType && errors.eventType}
      />
      <Button type="submit" variant="contained" endIcon={<NavigateNextIcon />}>
        Post
      </Button>
    </Box>
  );
};

export default CreatePost;
