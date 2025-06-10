import { Mail, Phone, Linkedin, Award, Users } from "lucide-react"; // Ensure you have lucide-react installed

const ContactPage = () => {
  const achievements = [
    "Upcoming chapters in 2 internationally recognized books",
    "Author for ACTA Editorial Volume 9",
    "1st Position in FSM HACKATHON at FORE School of Management",
    "200+ LeetCode problems solved",
    "President of E-Cell/Srajan Club PSIT (2023-2024)",
  ];

  return (
    <div className="py-12 relative z-10">
      <h2 className="text-5xl font-bold text-white mb-16 tracking-tight">Let's Connect</h2>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12">Get in Touch</h3>
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800">
                <Mail className="text-red-500" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Email</p>
                <p className="text-white text-lg font-medium">rishabhdidwania22@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800">
                <Phone className="text-red-500" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Phone</p>
                <p className="text-white text-lg font-medium">+91-7752865124</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800">
                <Linkedin className="text-red-500" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">LinkedIn</p>
                <p className="text-white text-lg font-medium">/rishabh-didwania</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-12">
            <h4 className="text-xl font-bold text-white mb-6">Education</h4>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h5 className="text-white font-bold text-lg mb-2">
                B.Tech Computer Science Engineering
              </h5>
              <p className="text-gray-400 mb-1">
                Pranveer Singh Institute of Technology, Kanpur
              </p>
              <p className="text-gray-400">CGPA: 8.34 • 2021–2025</p>
            </div>
          </div>
        </div>

        {/* Achievements & Leadership */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12">Achievements & Leadership</h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 flex items-start space-x-4"
              >
                <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Award size={20} className="text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>

          {/* Leadership Experience */}
          <div className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
              <Users className="text-red-500" size={24} />
              <span>Leadership Experience</span>
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-white font-bold text-lg">President, E-Cell/Srajan Club PSIT</p>
                <p className="text-gray-400">Led 40+ volunteers, organized 50+ events</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Technical Head, CSE Department</p>
                <p className="text-gray-400">PSIT IGNITIA 2K23, 2K24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
