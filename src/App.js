import './styles/App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
import { Button, Typography } from '@mui/material';
import Fade from '@mui/material/Fade';


import MainPageEN from './pages/English/mainPageEN';
import MainPageHU from './pages/Hungarian/mainPageHU';

export default function App() {
  const [english, setEnglish] = useState(true);

  const handleClick = () => {
    setEnglish(prevEnglish => !prevEnglish); // Toggle language state
  };

  return (
    <Router>
      <AppBar position="static" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
        <Button
          onClick={handleClick}
          fontsize="large"
          color="inherit"
          sx={{ px: 2 }}
          endIcon={<LanguageIcon />}
        >
          <span
            style={{
              opacity: english ? 1 : 0.3,
              transition: 'opacity 0.3s ease',
            }}
          >
            English
          </span>

          {/* Divider */}
          <Typography sx={{ mx: 2 }}>|</Typography>

          <span
            style={{
              opacity: !english ? 1 : 0.3,
              transition: 'opacity 0.3s ease',
            }}
          >
            Magyar
          </span>
        </Button>   {/*  language toggle Button  */}
      </AppBar>

      <Routes>
        <Route path="/" element={english? <MainPageEN /> : <MainPageHU />} />
      </Routes>
    </Router>
  );
}
