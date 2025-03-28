import React from 'react';
import { Route, Routes, Navigate  } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';


const App = () => {
  return (
    <div >
      <main>
        
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            {/* <Route path="/portfolios" element={<PortfolioPage />} /> */}
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
