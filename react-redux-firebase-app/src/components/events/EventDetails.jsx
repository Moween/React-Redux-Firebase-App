import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useMatch } from 'react-router-dom';


const EventDetails = (props) => {
  return (
    <Box component="section">
      <Box component="article">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h2">Event Name</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h3">Details</Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              voluptatem hic ipsum distinctio numquam blanditiis architecto
              repellendus ea ducimus praesentium ipsam molestias eligendi quae
              perferendis, nesciunt deserunt, consectetur a vel.
            </Typography>
          </Grid>
          <Grid container item>
            <Grid item xs={12}>
              <Button variant="contained">Interested</Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="span">
                Time
              </Typography>
              <Typography variant="body1" component="span">
                Date
              </Typography>
              <Typography variant="body1" component="span">
                Venue
              </Typography>
              <Typography variant="body1" component="span">
                Type:{' '}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="span">
                Posted by {}
              </Typography>
              <Typography variant="body1" component="span">
                timeStamp
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EventDetails;
