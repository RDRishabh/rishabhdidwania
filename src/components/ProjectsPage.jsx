import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Dataset Analysis Dashboard",
      period: "Oct 2024 - Dec 2024",
      tech: ["React.js", "TypeScript", "Azure Functions", ".NET"],
      description:
        "Comprehensive dashboard for dataset analysis with OpenAI integration. Users can select from lakehouse or semantic datasets and ask questions to get intelligent insights.",
      highlights: [
        "Fluent UI implementation",
        "Chart.js visualizations",
        "Azure Functions backend",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
      link: "https://example.com/dataset-dashboard"
    },
    {
      title: "Role Based Todo Application",
      period: "Aug 2024 - Oct 2024",
      tech: ["React.js", "TypeScript", "Redux"],
      description:
        "Task management system with three user roles: Admin, Team Manager, and Team Member. Features multiple view formats and advanced task management.",
      highlights: [
        "Role-based access control",
        "Multiple view formats",
        "Local storage integration",
      ],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop&crop=center",
      link: "https://example.com/todo-app"
    },
    {
      title: "CompileX",
      period: "June 2024 - July 2024",
      tech: ["Next.js", "TypeScript", "AWS Lambda", "Django"],
      description:
        "Code editor for C++ compilation with competitive coding features. Real-time dashboard for coding battles and participant progress tracking.",
      highlights: [
        "Docker containerization",
        "Real-time dashboard",
        "AWS deployment",
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "TaskFlow",
      period: "2024",
      tech: ["AI", "Keyword Research", "Automation"],
      description:
        "Unlock the Power of AI-Driven Keyword Research. Discover highly targeted keyword suggestions with our smart analysis and boost your SEO performance.",
      highlights: [
        "AI-powered keyword analysis",
        "Smart targeting algorithms",
        "Performance optimization",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center",
      link: "https://taskflow.ai"
    },
  ];

  const handleCardClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 tracking-tight text-center">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(project.link)}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 ${
                project.link ? 'cursor-pointer' : ''
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm font-medium bg-gray-800/50 px-3 py-1 rounded-full">
                      {project.period}
                    </span>
                    {project.link && (
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800/60 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-700/50 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-3 text-gray-400"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;