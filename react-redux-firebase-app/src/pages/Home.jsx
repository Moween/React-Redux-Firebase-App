import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

import eventImg  from '../assets/home-event-img.jpg';


const Home = () => {
  const mobile = useSelector((state) => state.mediaQuery.smallScreen);
  return (
    <Box>
      <Container>
        <Box component="section" className="md:flex  pt-4 items-center">
          <Box className="p-1">
            <Typography className="p-1" variant={mobile ? 'h5' : 'h3'} component="h2">
              Make your events public and keep people talking about it.
            </Typography>
            <Typography sx={{ p: '0.5rem' }} component="p">
              Event sharing software that makes event sharing easy. 
              Invite people to your events.
            </Typography>
            <Box>
              <Button variant="contained" href='/registeruser'>Join for free</Button>
              <Button variant="outlined" href="/loginuser">Sign In</Button>
            </Box>
          </Box>
          <Box className="md:w-3/4">
            <img
              className="w-full"
              src={eventImg}
              alt="A black boy with system"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
