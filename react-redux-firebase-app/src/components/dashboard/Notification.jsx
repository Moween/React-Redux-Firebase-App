import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const Notifications = ({ notifications }) => {
  return (
    <Box component="aside">
      <Card component="article">
        <Link href="/dashboard/notifications">Notifications</Link>
        <CardContent>
          <Grid container spacing={2}>
            {notifications.map((notification) => (
              <>
                <Grid item xs={6}>
                  <Typography>{notification.eventName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Date: {notification.eventDate}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Type: {notification.eventType}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>{notification.eventName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>{notification.postedBy}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>{notification.postTime}</Typography>
                </Grid>
              </>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Notifications;
