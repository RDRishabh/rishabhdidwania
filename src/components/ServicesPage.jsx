import { Code } from "lucide-react"; // Ensure this import exists if using lucide-react icons

const ServicesPage = () => {
  const skills = {
    "Frontend Development": [
      "React.js",
      "TypeScript",
      "HTML5",
      "CSS",
      "Tailwind CSS",
    ],
    "Backend Development": ["C#", ".NET", "Express.js", "Python", "Django"],
    Database: ["MySQL", "MongoDB"],
    "Programming Languages": ["Java", "Python", "JavaScript"],
    "Cloud & Tools": ["Azure Functions", "AWS Lambda", "Docker"],
  };

  const experience = [
    {
      title: "Associate Software Engineer",
      company: "MAQ Software",
      period: "Sept 2024 - Present",
      description:
        "Developing full-stack applications with React.js, TypeScript, and C#. Built Dataset Analysis Dashboard with OpenAI integration and migrated chatbot framework.",
    },
    {
      title: "Frontend Developer, UI/UX Designer",
      company: "Sense Original Technologies Pvt Ltd",
      period: "May 2023 - Oct 2023",
      description:
        "Designed comprehensive CRM system and built frontend for Content Management System. Created responsive design for company website.",
    },
  ];

  return (
    <div className="py-12 relative z-10">
      <h2 className="text-5xl font-bold text-white mb-16 tracking-tight">
        Skills & Experience
      </h2>

      {/* Skills Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-white mb-12">Technical Skills</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                <Code size={24} className="text-red-500" />
                <span>{category}</span>
              </h4>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-12">Work Experience</h3>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-red-400 font-semibold text-lg">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-500 text-sm font-medium">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
