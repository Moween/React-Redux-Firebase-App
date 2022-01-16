import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';

import eventImg from '../assets/home-event-img.jpg';
import DashBoard from '../components/dashboard/DashBoard';
import { theme } from '../utils/MuiStyles';

const Home = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', "md"));

  const { isLoaded, isEmpty } = useSelector((state) => state.firebase.auth);

  const displayHomeContent = () => {
    if (isLoaded && isEmpty) {
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
          }}
        >
          <Box
            component="section"
            className="flex flex-col-reverse  lg:flex-row lg:pt-4 items-center"
          >
            <Box className="p-1 pl-0">
              <Typography
                className="p-1 pl-0"
                variant={isMobile ? 'h5' : 'h3'}
                component="h1"
              >
                Make your events public
              </Typography>
              <Typography component="p" className="pl-0 p-4">
                Event sharing software that makes event sharing easy. Invite
                people to your events and keep them talking about it.
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                aria-label="vertical contained button group"
                size="large"
                spacing={{ xs: 1, md: 2 }}
              >
                <Button variant="contained" href="/registeruser">
                  Join for free
                </Button>
                <Button variant="outlined" href="/loginuser">
                  Sign In
                </Button>
              </Stack>
            </Box>
            <Box className="lg:w-3/4">
              <img
                className="w-full"
                src={eventImg}
                alt="A black boy with system"
              />
            </Box>
          </Box>
        </Box>
      );
    } else if (isLoaded && !isEmpty) {
      return <DashBoard />;
    }
  };
  return (
    <Box>
      {/* <ToastContainer /> */}
      <Container>{displayHomeContent()}</Container>
    </Box>
  );
};

export default Home;
