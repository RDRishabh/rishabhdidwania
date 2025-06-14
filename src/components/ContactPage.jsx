import { Mail, Phone, Linkedin, Github, Twitter, Instagram, Award, Users, MapPin, Calendar } from "lucide-react";

const ContactPage = () => {
  // Replace these with your actual information
  const contactInfo = {
    email: "rishabhdidwania22@gmail.com",
    phone: "+91-7752865124",
    linkedin: "/rishabh-didwania/",
    github: "/RDRishabh", // Add if you have GitHub
    // twitter: "@your-twitter", // Add if you have Twitter
    // instagram: "@your-instagram", // Add if you have Instagram
    location: "India"
  };

  const achievements = [
    "Your achievement #1",
    "Your achievement #2", 
    "Your achievement #3",
    "Your achievement #4",
    "Your achievement #5"
  ];

  const socialLinks = [
    {
      name: "Email",
      value: contactInfo.email,
      icon: Mail,
      href: `mailto:${contactInfo.email}`,
      color: "text-blue-400"
    },
    {
      name: "Phone", 
      value: contactInfo.phone,
      icon: Phone,
      href: `tel:${contactInfo.phone}`,
      color: "text-green-400"
    },
    {
      name: "LinkedIn",
      value: contactInfo.linkedin,
      icon: Linkedin, 
      href: `https://linkedin.com/in${contactInfo.linkedin}`,
      color: "text-blue-500"
    },
    {
      name: "GitHub",
      value: contactInfo.github,
      icon: Github,
      href: `https://github.com${contactInfo.github}`,
      color: "text-purple-400"
    }
  ];

  return (
    <div className="py-12 lg:py-20 relative z-10 pt-16 lg:pt-20">
      {/* Header */}
      <div className="mb-12 lg:mb-20">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 lg:mb-8 tracking-tight leading-tight">
          Let's Connect
        </h2>
        <p className="text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
          Ready to collaborate or just want to say hello? 
          <br className="hidden sm:block" />
          I'm always excited to connect with fellow innovators.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 lg:mb-12">Get in Touch</h3>
          <div className="space-y-4 lg:space-y-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.name !== "Email" && social.name !== "Phone" ? "_blank" : "_self"}
                rel={social.name !== "Email" && social.name !== "Phone" ? "noopener noreferrer" : ""}
                className="flex items-center space-x-4 lg:space-x-6 p-4 lg:p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-200 group"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl lg:rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-blue-500/50 transition-all flex-shrink-0">
                  <social.icon className={`${social.color} group-hover:scale-110 transition-transform`} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-sm font-medium mb-1">{social.name}</p>
                  <p className="text-white text-base lg:text-lg font-medium group-hover:text-blue-300 transition-colors truncate">
                    {social.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Location */}
            <div className="flex items-center space-x-4 lg:space-x-6 p-4 lg:p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl lg:rounded-2xl flex items-center justify-center border border-gray-700 flex-shrink-0">
                <MapPin className="text-red-400" size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Location</p>
                <p className="text-white text-base lg:text-lg font-medium">{contactInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col justify-start">
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-blue-500/30 hover:border-blue-400 transition-all duration-200 group">
            <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
              Let's Build Something Amazing Together
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
              Whether you have a project in mind, want to collaborate, or just want to chat about technology, 
              I'm always open to new opportunities and connections.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-center text-sm lg:text-base"
              >
                Send Message
              </a>
              <a
                href={`https://linkedin.com/in${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold transition-all duration-200 border border-gray-700 hover:border-gray-600 text-center text-sm lg:text-base"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Additional Info Card - Only visible on larger screens or as secondary info */}
          <div className="mt-8 bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800">
            <h4 className="text-lg lg:text-xl font-bold text-white mb-4 flex items-center space-x-3">
              <Award className="text-blue-400" size={20} />
              <span>Quick Facts</span>
            </h4>
            <div className="space-y-3 text-sm lg:text-base">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <p className="text-gray-300">Associate Software Engineer @ MAQ Software</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                <p className="text-gray-300">200+ LeetCode problems solved</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                <p className="text-gray-300">Published researcher & upcoming author</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                <p className="text-gray-300">Former President of E-Cell/Srajan Club</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-specific contact actions */}
      <div className="mt-12 lg:hidden">
        <div className="grid grid-cols-2 gap-4">
          <a
            href={`mailto:${contactInfo.email}`}
            className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-xl font-semibold transition-all duration-200 text-center flex items-center justify-center space-x-2"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="bg-green-600 hover:bg-green-500 text-white p-4 rounded-xl font-semibold transition-all duration-200 text-center flex items-center justify-center space-x-2"
          >
            <Phone size={18} />
            <span>Call</span>
          </a>
        </div>
      </div>

      {/* Bottom spacing for mobile */}
      <div className="h-8 lg:h-0"></div>
    </div>
  );
};

export default ContactPage;