import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Profile = ({
  imgSrc,
  messages,
  numOfViews,
  numOfAttendedEvents,
  userName,
}) => {
  return (
    <Box component="aside">
      <Card>
        <CardContent>
          <Box sx={{ height: '5vh' }}></Box>
          <Box>
            <Avatar
              alt="user"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Box>
          <Box>
            <Link href="dashboard/profile">{userName}</Link>
            <Stack>
              <Typography component="h5">
                <Link href="events/eventList">Events</Link>
                <Typography variant="h5" component="span">
                  {messages}
                </Typography>
              </Typography>
              <Typography variant="h5" component="h5">
                Views of your Post
                <Typography component="span">{numOfViews}</Typography>
              </Typography>
              <Typography variant="h5" component="h5">
                Number of events attended
                <Typography component="span">{numOfAttendedEvents}</Typography>
              </Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
