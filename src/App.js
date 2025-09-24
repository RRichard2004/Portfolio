import './styles/App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, Typography } from '@mui/material';

import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

import MainPageEN from './pages/English/mainPageEN';
import MainPageHU from './pages/Hungarian/mainPageHU';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 1 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.3
};

function AnimatedRoutes({ english }) {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes> {/* Key based on language */}
        <Route path="/eng" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <MainPageEN />
            </motion.div>
          } />
          <Route path="/hu" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <MainPageHU />
            </motion.div>
            
          } />
          <Route path="*" element={<Navigate to="/eng" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Start with no decision
  const [english, setEnglish] = useState(null);

  // Decide language after the page has loaded
  useEffect(() => {
    const path = window.location.pathname;

    if (path.startsWith("/hu")) {
      setEnglish(false);
    } else {
      setEnglish(true);
      if (!path.startsWith("/eng")) {
        // Redirect unknown or root paths to /eng
        navigate("/eng", { replace: true });
      }
    }
  }, [navigate]);

  const handleClick = () => {
    if (english === null) return; // avoid clicking before loaded
    const newLanguage = !english;
    setEnglish(newLanguage);
    navigate(newLanguage ? "/eng" : "/hu");
  };

  // While language is not decided, you can render nothing or a loader
  if (english === null) return null;

  return (
    <>
      <AppBar position="static" sx={{display: 'flex', justifyContent: 'end', alignItems: 'end', flexDirection: 'row'}}>
        <Button
          onClick={handleClick}
          fontSize="large"
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

      <AnimatedRoutes sx={{ height: '100%' }} english={english} />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}