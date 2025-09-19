import React, { useState, useMemo } from 'react';
import { ExternalLink, Search, Filter, Globe, Code, User, Briefcase } from 'lucide-react';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: "Jai Multi",
      url: "https://jai-multi.vercel.app/",
      category: "Client Projects",
      description: "Multi-purpose web application with React.js and modern tech stack implementation",
      tech: ["React.js", "Vercel", "JavaScript"],
      thumbnail: `/png/Jai_Multi.png`
    },
    {
      title: "Krackpot",
      url: "https://krackpot.vercel.app/",
      category: "Client Projects",
      description: "Interactive web application with dynamic features and responsive architecture",
      tech: ["React.js", "Vercel", "JavaScript"],
      thumbnail: `/png/Krackpot.png`
    },
    {
      title: "Nova Watches",
      url: "https://novawatches.in/",
      category: "Client Projects",
      description: "E-commerce platform for luxury watches with payment gateway integration",
      tech: ["E-commerce", "Payment Gateway", "React.js"],
      thumbnail: `/png/Nova_Watches.png`
    },
    {
      title: "Learn Infini",
      url: "https://www.learninfini.com/",
      category: "Client Projects",
      description: "Educational platform for online learning with Razorpay payment integration",
      tech: ["EdTech", "Razorpay", "React.js"],
      thumbnail: `/png/LearnInfini.png`
    },
    {
      title: "Marieta",
      url: "http://marieta.in/",
      category: "Client Projects",
      description: "Professional business website built with React.js and Tailwind CSS",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      thumbnail: `/png/Marieta.png`
    },
    {
      title: "Hikki",
      url: "https://www.hikki.co/",
      category: "Client Projects",
      description: "Modern business platform with innovative technical solutions",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      thumbnail: `/png/Hikki.png`
    },
    {
      title: "BYOC Live",
      url: "https://www.byoc.live/",
      category: "Client Projects",
      description: "Live streaming platform with real-time communication features",
      tech: ["React.js", "WebRTC", "Node.js"],
      thumbnail: `/png/BYOC.png`
    },
    {
      title: "Curtains & More",
      url: "https://curtains-and-more-re.vercel.app/",
      category: "Client Projects",
      description: "E-commerce platform for home decor with inventory management system",
      tech: ["E-commerce", "React.js", "Vercel"],
      thumbnail: `/png/Curtains_And_More.png`
    },
    {
      title: "Aucto Games",
      url: "http://auctogames.com/",
      category: "Client Projects",
      description: "Gaming platform with auction-based mechanics and real-time WebSocket communication",
      tech: ["Gaming", "WebSockets", "Real-time"],
      thumbnail: `/png/Aucto_Games.png`
    },
    {
      title: "Monarque",
      url: "https://www.monarque.co.in/",
      category: "Client Projects",
      description: "Luxury brand website with responsive web development and performance optimization",
      tech: ["React.js", "Performance Optimization", "Responsive"],
      thumbnail: `/png/Monarque.png`
    },
    {
      title: "Blue Bagels",
      url: "https://www.bluebagels.com/",
      category: "Client Projects",
      description: "Food and beverage business website with React.js and modern web technologies",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      thumbnail: `/png/Blue_Bagels.png`
    },
    {
      title: "Green Bridge AI",
      url: "https://greenbridge.ai/",
      category: "Client Projects",
      description: "AI-powered platform for sustainable solutions with machine learning integration",
      tech: ["AI/ML", "React.js", "API Integration"],
      thumbnail: `/png/GreenBridge_ai.png`
    },
    {
      title: "Kind Matter",
      url: "https://kindmatter.in/?pb=0",
      category: "Client Projects",
      description: "Social impact platform for community engagement with database management",
      tech: ["React.js", "Database", "Community Platform"],
      thumbnail: `/png/Kind_Matter.png`
    },
    {
      title: "Visiting Card Atharv Associates",
      url: "https://atharvassociates.vercel.app/",
      category: "Client Projects",
      description: "Professional visiting card website for Atharv Associates",
      tech: ["React.js", "Tailwind CSS"],
      thumbnail: `/png/AtharvAssociates.jpg`
    },
    {
      title: "Industrial Control System",
      url: "https://www.industrialcontrolsystem.co.in/",
      category: "Client Projects",
      description: "Empowering Your Electrical Infrastructure with Excellence",
      tech: ["React.js", "Tailwind CSS"],
      thumbnail: `/png/ICS.jpg`
    },
    {
      title: "Mint Ginger LLP",
      url: "https://mgfrontend.vercel.app/",
      category: "Client Projects",
      description: "Discover their portfolio of exceptional architectural achievements,  Mint Ginger LLP",
      tech: ["React.js", "Tailwind CSS"],
      thumbnail: `/png/MgLlp.jpg`
    },
    {
      title: "Finovatech",
      url: "https://thefinovatech.com/",
      category: "Client Projects",
      description: "Finovatech is a leading provider of innovative financial technology solutions.",
      tech: ["React.js", "Tailwind CSS"],
      thumbnail: `/png/Finovatech.png`
    }
  ];

  const categories = [
    { name: 'All', icon: Filter, count: projects.length },
    { name: 'Websites', icon: Globe, count: projects.filter(p => p.category === 'Websites').length },
    { name: 'Web Apps', icon: Code, count: projects.filter(p => p.category === 'Web Apps').length },
    { name: 'Personal Projects', icon: User, count: projects.filter(p => p.category === 'Personal Projects').length },
    { name: 'Client Projects', icon: Briefcase, count: projects.filter(p => p.category === 'Client Projects').length }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, projects]);

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            My <span className="text-gray-500">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my collection of web applications, e-commerce platforms, and technical solutions
          </p>
        </div>

        {/* Search Bar - Commented Out */}
        {/*
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects, technologies, or descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-xl transition-all duration-300"
          />
        </div>
        */}

        {/* Category Filter - Commented Out */}
        {/*
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
        */}

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...filteredProjects].reverse().map((project) => (
            <div
              key={project.title}
              onClick={() => handleCardClick(project.url)}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x240/1f2937/9ca3af?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* External Link Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-full p-2 border border-gray-700">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p>Try adjusting your search terms or filter criteria</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer with Name - matching home page style */}
      
    </div>
  );
};

export default ProjectsPage;