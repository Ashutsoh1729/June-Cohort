import logo from './logo.svg';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import About from './pages/about';
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [expanded, setExpanded] = useState(true)
  return (
    <div className="App flex h-screen overflow-hidden">
      <Sidebar expanded={expanded} setExpanded={setExpanded}>
      </Sidebar>
      <main className={`flex-1 transition-all duration-300 w-full overflow-y-auto`}>
        <div className="">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
