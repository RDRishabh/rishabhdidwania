import React, { useState, useEffect } from "react";
import { Award, Code, BookOpen, Users, ExternalLink, ArrowRight, Building, Calendar } from "lucide-react";

const HomePage = ({ setActiveSection }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(formattedTime);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 60000); // update every 60 sec

    return () => clearInterval(interval);
  }, []);

  const publications = [
    {
      title: "Role of AI in Supply Chain Management in Bio-Informatics Sector",
      type: "Chapter 7 - Taylor & Francis",
      status: "Published",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781032711515-7/role-ai-supply-chain-management-bio-informatics-sector-rishabh-didwania-sanat-kumar-mishra-satvik-shukla-rajat-verma-namrata-dhanda"
    },
    {
      title: "Future Ahead for Supply Chain Management",
      type: "Chapter 15 - Taylor & Francis",
      status: "Published",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003509561-15/future-ahead-supply-chain-management-rishabh-didwania-rajat-verma-namrata-dhanda"
    },
    {
      title: "Application of Robotics in Manufacturing Industry",
      type: "Chapter 4 - Taylor & Francis",
      status: "Published",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003438137-4/application-robotics-manufacturing-industry-rishabh-didwania-rajat-verma-namrata-dhanda"
    },
    {
      title: "ACTA Scientific Computer Sciences",
      type: "Research Publication",
      status: "Published",
      link: "https://actascientific.com/ASCS/ASCS-05-0470.php"
    }
  ];

  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "MAQ Software",
      period: "Sept 2024 - Present",
      description: "Developed full-stack applications using React.js, TypeScript, and C#. Built Dataset Analysis Dashboard with OpenAI integration and migrated chatbot framework from legacy Bot Chat to modern Web Chat framework.",
      technologies: ["React.js", "TypeScript", "C#", ".NET", "OpenAI"]
    },
    {
      title: "Frontend Developer, UI/UX Designer", 
      company: "Sense Original Technologies Pvt Ltd",
      period: "May 2023 - Oct 2023",
      description: "Designed comprehensive CRM system and built frontend for Content Management System. Created responsive design for company website enhancing user engagement.",
      technologies: ["React.js", "UI/UX Design", "CRM", "CMS"]
    }
  ];

  const achievements = [
    "1st Position in FSM HACKATHON at FORE School of Management",
    "200+ LeetCode problems solved using Java and Python",
    "President of E-Cell/Srajan Club PSIT (2023-2024)",
    "Technical Head, CSE Department PSIT IGNITIA 2K23, 2K24",
    "Mentored students and fostered collaboration in E-Cell"
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center relative pt-16 lg:pt-0">
        <div className="max-w-4xl relative z-10 w-full">
          {/* Achievement Badge */}
          <div className="flex items-center space-x-3 mb-8 lg:mb-12">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">R</span>
              </div>
            </div>
            <span className="text-gray-400 text-xs sm:text-sm">
              Associate Software Engineer @ MAQ Software
            </span>
          </div>

          {/* Main Headline */}
          <div className="mb-8 lg:mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
              I'm Rishabh, creating tech
              <br />
              magic from the pulse of
              <br />
              <span className="text-gray-500">digital innovation.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-gray-400 mb-12 lg:mb-16 max-w-2xl leading-relaxed">
            I specialize in creating visually stunning
            <br className="hidden sm:block" />
            full-stack applications that leave a lasting impression.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 lg:mb-20">
            <button 
              onClick={() => setActiveSection && setActiveSection("contact")}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3.5 rounded-xl flex items-center space-x-2 transition-all duration-200 border border-gray-700 hover:border-gray-600">
              <span className="text-sm">⚡</span>
              <span className="font-medium">Contact me</span>
            </button>
            <span className="text-gray-500 font-medium">{currentTime}</span>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="py-12 lg:py-20 relative z-10">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12 lg:mb-16 tracking-tight">Bio</h2>
        
        {/* About Me */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-20">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8">About Me</h3>
            <div className="space-y-4 lg:space-y-6 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Computer Science Engineer with expertise in full-stack development, 
                specializing in React.js, TypeScript, and .NET technologies. Currently working as an 
                Associate Software Engineer at MAQ Software, where I build enterprise-level applications 
                with modern architectures and cloud integration.
              </p>
              <p>
                With a strong foundation in algorithms and data structures (200+ LeetCode problems solved), 
                I combine technical excellence with leadership experience, having served as President of 
                E-Cell/Srajan Club and led teams of 40+ volunteers.
              </p>
              <p>
                My work extends beyond coding - I'm an upcoming author contributing to internationally 
                recognized publications on AI and supply chain management, demonstrating my commitment 
                to sharing knowledge and driving innovation in technology.
              </p>
            </div>
          </div>
          
          {/* Profile Image Placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center border border-gray-700">
              <span className="text-white text-4xl lg:text-6xl font-bold">R</span>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 lg:mb-12">Publications & Research</h3>
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-200 group">
                <div className="flex items-start justify-between mb-4">
                  <BookOpen className="text-blue-400 group-hover:text-blue-300" size={24} />
                  <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                    {pub.status}
                  </span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                  {pub.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">{pub.type}</p>
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm font-medium group-hover:translate-x-1 transition-all"
                >
                  <span>View Publication</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 lg:mb-12">Education</h3>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Code className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  B.Tech Computer Science Engineering
                </h4>
                <p className="text-blue-400 font-semibold text-base lg:text-lg mb-2">
                  Pranveer Singh Institute of Technology, Kanpur
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm">
                  <span>CGPA: 8.52</span>
                  <span className="hidden sm:block">•</span>
                  <span>Nov 2021 - Jul 2025</span>
                  <span className="hidden sm:block">•</span>
                  <span>AKTU</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 lg:mb-12">Work Experience</h3>
          <div className="space-y-6 lg:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 space-y-4 sm:space-y-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building className="text-white" size={18} />
                    </div>
                    <div>
                      <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">{exp.title}</h4>
                      <p className="text-blue-400 font-semibold text-base lg:text-lg">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Projects Redirect Card */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => { window.location.href = '/projects'; }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { window.location.href = '/projects'; } }}
              aria-label="View all projects"
              className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-blue-500/30 hover:border-blue-400 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    Explore My Projects
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Discover my technical projects including Dataset Analysis Dashboard, 
                    Role-Based Todo Application, and CompileX coding platform.
                  </p>
                  <div className="flex items-center space-x-2 text-blue-400 font-medium">
                    <span>View All Projects</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Code className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra-Curricular Activities */}
        <div className="mb-24 lg:mb-32">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 lg:mb-12">Leadership & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Leadership */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800">
              <h4 className="text-lg lg:text-xl font-bold text-white mb-6 flex items-center space-x-3">
                <Users className="text-blue-400" size={24} />
                <span>Leadership Experience</span>
              </h4>
              <div className="space-y-6">
                <div>
                  <p className="text-white font-bold text-base lg:text-lg">President, E-Cell/Srajan Club PSIT</p>
                  <p className="text-gray-400 mb-2">Aug 2023 - Aug 2024</p>
                  <p className="text-gray-300 text-sm">Led 40+ volunteers, organized 50+ events focusing on strategic planning and crisis management.</p>
                </div>
                <div>
                  <p className="text-white font-bold text-base lg:text-lg">Technical Head, CSE Department</p>
                  <p className="text-gray-400 mb-2">PSIT IGNITIA 2K23, 2K24</p>
                  <p className="text-gray-300 text-sm">Executed 7+ events over 2 days during PSIT's annual fest showcasing technical innovations.</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800">
              <h4 className="text-lg lg:text-xl font-bold text-white mb-6 flex items-center space-x-3">
                <Award className="text-blue-400" size={24} />
                <span>Key Achievements</span>
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Name */}
      <div className="py-12 lg:py-20 text-center relative overflow-hidden">
        <div className="relative">
          <h2 className="text-6xl sm:text-8xl lg:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200/70 to-transparent tracking-[0.1em] lg:tracking-[0.2em] select-none uppercase leading-none">
            RISHABH
          </h2>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;