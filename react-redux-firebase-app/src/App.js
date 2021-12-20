import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';

import DashBoard from './components/dashboard/DashBoard';
import EventDetails from './components/events/EventDetails';
import EventList from './components/events/EventList';
import Header from './layout/Header';
import Home from './pages/Home';
import LoginUser from './pages/LoginUser';
import Main from './layout/Main';
import NewPost from './pages/NewPost';
import NotFound from './pages/NotFound';
import Notification from './components/dashboard/Notification';
import Profile from './components/dashboard/Profile';
import RegisterUser from './pages/RegisterUser';
import { theme } from './utils/MuiStyles';
import {
  setMediumScreen,
  setLargeScreen,
  setSmallScreen,
} from './app/reducers/mediaQuerySlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  dispatch(setSmallScreen(isMobile));
  dispatch(setMediumScreen(isTablet));
  dispatch(setLargeScreen(isDesktop));

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/events/eventdetails/:id" element={<EventDetails />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/loginuser" element={<LoginUser />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}

export default App;
