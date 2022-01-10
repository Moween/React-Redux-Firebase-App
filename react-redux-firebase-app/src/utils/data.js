import EventList from '../components/events/EventList';
import EventDetails from '../components/events/EventDetails';
import NewPost from '../pages/NewPost';
import Notifications from '../components/dashboard/Notification';
import Profile from '../components/dashboard/Profile';

export const navLinks = [
  {
    path: 'notifications',
    element: <Notifications />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
  {
    path: 'events/eventdetails/:id',
    element: <EventDetails />,
  },
  {
    path: 'events',
    element: <EventList />,
  },
  {
    path: 'newpost',
    element: <NewPost />
  }
];
