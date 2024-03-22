// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/" element={<AuthPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/" element={<LandingPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;