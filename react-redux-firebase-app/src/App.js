import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';


import Header from './layout/Header';
import Home from './pages/Home';
import LoginUser from './pages/LoginUser';
import Main from './layout/Main';
import NotFound from './pages/NotFound';
import RegisterUser from './pages/RegisterUser';
import { theme } from './utils/MuiStyles';
import {
  setMediumScreen,
  setLargeScreen,
  setSmallScreen,
} from './reducers/mediaQuerySlice';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import { navLinks } from './utils/data';

function App() {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    dispatch(setSmallScreen(isMobile));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(setMediumScreen(isTablet));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(setLargeScreen(isDesktop));
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <Routes>
          {navLinks.map((navLink) => (
            <Route
              key={navLink.path}
              path={navLink.path}
              element={<PrivateRoute>{navLink.element}</PrivateRoute>}
            />
          ))}
          <Route path="loginuser" element={<LoginUser />} />
          <Route path="registeruser" element={<RegisterUser />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}

export default App;
