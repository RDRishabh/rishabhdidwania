import { Link, useLocation } from 'react-router-dom';
import { Home, FolderOpen, Settings, MessageCircle, Bookmark, Layers, Twitter, Download } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/services', label: 'Services', icon: Settings },
    { path: '/contact', label: 'Contact', icon: MessageCircle }
  ];

  const resources = [
    { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark },
    { id: 'stack', label: 'Stack', icon: Layers },
    { id: 'twitter', label: 'Twitter', icon: Twitter }
  ];

  const currentDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-64 bg-black text-white h-screen fixed left-0 top-0 flex flex-col">
      {/* Profile Section */}
      <div className="p-6 pb-8">
        <div className="w-10 h-10 bg-red-600 rounded-md flex items-center justify-center mb-3">
          <span className="text-white font-bold text-lg">R</span>
        </div>
        <h3 className="text-white font-medium text-lg leading-tight">Rishabh Didwania</h3>
        <p className="text-gray-400 text-sm mt-1">Associate Software Engineer</p>
      </div>

      {/* Navigation */}
      <nav className="px-6 flex-1">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = currentPath === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 mb-1 ${
                isActive ? 'bg-gray-900 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-900'
              }`}
            >
              <IconComponent size={18} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-6 pt-0">
        <div className="text-gray-500 text-sm mb-4">
          <p className="font-medium">{currentDate}</p>
          <p>Kanpur, UP</p>
        </div>
        <a
          href="/Rishabh_Didwania_Resume.pdf"
          download
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
        >
          <Download size={16} />
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
