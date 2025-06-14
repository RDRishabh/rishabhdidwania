import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import GeometricBackground from './components/GeometricPattern';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen relative overflow-hidden">
        <GeometricBackground />
        <Sidebar />
        <main className="ml-64 px-16 py-12 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
