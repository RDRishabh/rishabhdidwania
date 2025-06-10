import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import HomePage from './components/HomePage'
import ProjectsPage from './components/ProjectsPage'
import ServicesPage from './components/ServicesPage'
import ContactPage from './components/ContactPage'
import GeometricBackground from './components/GeometricPattern'

function App () {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage setActiveSection={setActiveSection} />;
      case 'projects':
        return <ProjectsPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setActiveSection={setActiveSection} />;
    }
  };


  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      <GeometricBackground />
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="ml-64 px-16 py-12 relative z-10">
        {renderContent()}
      </main>
      
      
    </div>
  );
};

export default App
