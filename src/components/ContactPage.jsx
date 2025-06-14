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
    <div className="py-20 relative z-10">
      {/* Header */}
      <div className="mb-20">
        <h2 className="text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          Ready to collaborate or just want to say hello? 
          <br />
          I'm always excited to connect with fellow innovators.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-20">
        {/* Contact Information */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12">Get in Touch</h3>
          <div className="space-y-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.name !== "Email" && social.name !== "Phone" ? "_blank" : "_self"}
                rel={social.name !== "Email" && social.name !== "Phone" ? "noopener noreferrer" : ""}
                className="flex items-center space-x-6 p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-200 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-blue-500/50 transition-all">
                  <social.icon className={`${social.color} group-hover:scale-110 transition-transform`} size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm font-medium mb-1">{social.name}</p>
                  <p className="text-white text-lg font-medium group-hover:text-blue-300 transition-colors">{social.value}</p>
                </div>
              </a>
            ))}

            {/* Location */}
            <div className="flex items-center space-x-6 p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                <MapPin className="text-red-400" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Location</p>
                <p className="text-white text-lg font-medium">{contactInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements & Leadership */}
        <div>
          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400 transition-all duration-200 group">
            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
              Let's Build Something Amazing Together
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to chat about technology, 
              I'm always open to new opportunities and connections.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Send Message
              </a>
              <a
                href={`https://linkedin.com/in${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-gray-700 hover:border-gray-600"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;