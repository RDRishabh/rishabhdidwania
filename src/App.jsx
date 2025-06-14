import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import GeometricBackground from './components/GeometricPattern';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="bg-black min-h-screen relative overflow-hidden">
        <GeometricBackground />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        <main className="lg:ml-64 px-4 sm:px-8 lg:px-16 py-6 lg:py-12 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage setActiveSection={() => {}} />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;