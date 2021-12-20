import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import Profile from './Profile';
import Notifications from './Notification';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DashBoard = ({ newsFeed }) => {
  const mobile = useSelector((state) => state.mediaQuery.smallScreen);

  return (
    <Box component="main">
      <Container>
        <Grid
          container
          spacing={2}
          direction={mobile ? 'column-reverse' : 'row'}
        >
          <Grid item xs={12} lg={4} md={4}>
            <Item>{Profile}</Item>
          </Grid>
          <Grid item xs={12} lg={4} md={8}>
            <Item>{newsFeed}</Item>
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
            <Item>{Notifications}</Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashBoard;
