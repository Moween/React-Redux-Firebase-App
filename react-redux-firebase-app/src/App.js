import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Header from './layout/Header';
import Home from './pages/Home';
import LoginUser from './pages/LoginUser';
import Main from './layout/Main';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import RegisterUser from './pages/RegisterUser';
import { theme } from './utils/MuiStyles';
import { navLinks } from './utils/data';
import './App.css';

function App() {
  // const isTablet = useMediaQuery(theme.breakpoints.between('sm', "md"));
  // const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

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
