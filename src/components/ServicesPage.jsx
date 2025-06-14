import React from 'react';
import { Code, Database, Cloud, Terminal, Building, Calendar, Award, BookOpen } from 'lucide-react';

const SkillsPage = () => {
  const skills = {
    "Frontend Development": {
      icon: Code,
      color: "blue",
      items: ["React.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "JavaScript ES6+"]
    },
    "Backend Development": {
      icon: Terminal,
      color: "purple",
      items: ["C#", ".NET Framework", "Express.js", "Python", "Django", "Node.js"]
    },
    "Database & Storage": {
      icon: Database,
      color: "green",
      items: ["MySQL", "MongoDB", "SQL Server", "Database Design", "Query Optimization"]
    },
    "Programming Languages": {
      icon: Code,
      color: "orange",
      items: ["Java", "Python", "JavaScript", "TypeScript", "C#", "SQL"]
    },
    "Cloud & DevOps": {
      icon: Cloud,
      color: "cyan",
      items: ["Azure Functions", "AWS Lambda", "Docker", "CI/CD", "Git", "Version Control"]
    }
  };

  const experience = [
    {
      title: "Associate Software Engineer",
      company: "MAQ Software",
      period: "Sept 2024 - Present",
      description: "Developing full-stack applications with React.js, TypeScript, and C#. Built Dataset Analysis Dashboard with OpenAI integration and migrated chatbot framework from legacy Bot Chat to modern Web Chat framework.",
      technologies: ["React.js", "TypeScript", "C#", ".NET", "OpenAI"]
    },
    {
      title: "Frontend Developer, UI/UX Designer",
      company: "Sense Original Technologies Pvt Ltd",
      period: "May 2023 - Oct 2023",
      description: "Designed comprehensive CRM system and built frontend for Content Management System. Created responsive web applications enhancing user engagement and system performance.",
      technologies: ["React.js", "CRM Development", "CMS", "Frontend Architecture"]
    }
  ];

  const achievements = [
    {
      title: "Problem Solving",
      description: "200+ LeetCode problems solved using Java and Python",
      icon: Award
    },
    {
      title: "Research Publications",
      description: "4 published chapters in Taylor & Francis on AI and Supply Chain Management",
      icon: BookOpen
    },
    {
      title: "Leadership Experience",
      description: "President of E-Cell/Srajan Club PSIT, led 40+ volunteers",
      icon: Building
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-600 to-blue-500 text-blue-300 bg-blue-500/20",
      purple: "from-purple-600 to-purple-500 text-purple-300 bg-purple-500/20",
      green: "from-green-600 to-green-500 text-green-300 bg-green-500/20",
      orange: "from-orange-600 to-orange-500 text-orange-300 bg-orange-500/20",
      cyan: "from-cyan-600 to-cyan-500 text-cyan-300 bg-cyan-500/20"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Skills & <span className="text-gray-500">Achievements</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Technical expertise, professional experience, and continuous learning in software engineering
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 lg:mb-12">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Object.entries(skills).map(([category, data]) => {
              const IconComponent = data.icon;
              const colorClasses = getColorClasses(data.color);
              return (
                <div
                  key={category}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-lg sm:rounded-xl flex items-center justify-center`}>
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {data.items.map((skill, i) => {
                      const bgColor = colorClasses.split(' ')[3];
                      const textColor = colorClasses.split(' ')[2];
                      return (
                        <span
                          key={i}
                          className={`${bgColor} ${textColor} px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Work Experience Section */}
        {/* <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 lg:mb-12">Work Experience</h3>
          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 sm:mb-6">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building className="text-white" size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">{exp.title}</h4>
                      <p className="text-blue-400 font-semibold text-sm sm:text-base lg:text-lg">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 text-xs sm:text-sm flex-shrink-0">
                    <Calendar size={14} className="sm:w-4 sm:h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-500/20 text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Key Achievements Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 lg:mb-12">Key Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800 text-center hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{achievement.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        {/* <div className="mb-16 sm:mb-24 lg:mb-32">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 lg:mb-12">Education</h3>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                <Code className="text-white" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                  B.Tech Computer Science Engineering
                </h4>
                <p className="text-blue-400 font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3">
                  Pranveer Singh Institute of Technology, Kanpur
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-6 text-gray-400 text-xs sm:text-sm">
                  <span>CGPA: 8.34 (Till 5th Sem)</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Nov 2021 - Jul 2025</span>
                  <span className="hidden sm:inline">•</span>
                  <span>AKTU</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SkillsPage;