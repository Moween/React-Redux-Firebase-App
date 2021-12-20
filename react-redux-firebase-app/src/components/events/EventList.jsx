import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link  from '@mui/material/Link';


const EventList = () => {
  return (
    <Box component="section" className="">
      <Typography>Events Near you</Typography>
      <Box>
        <Typography className="">
          <Link href="./events/eventdetails/:id">Event Name</Link>
        </Typography>
        <Typography className="">Event Date</Typography>
        <Button>Interested</Button>
      </Box>
    </Box>
  );
}
 
export default EventList;