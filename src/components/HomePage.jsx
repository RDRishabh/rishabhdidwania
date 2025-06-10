import React, { useState, useEffect } from "react";

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
  return (
    <div className="min-h-screen flex items-center relative">
      <div className="max-w-4xl relative z-10">
        {/* Achievement Badge */}
        <div className="flex items-center space-x-3 mb-12">
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">R</span>
            </div>
          </div>
          <span className="text-gray-400 text-sm">
            Doubled growth in 6 months with MAQ Software.
          </span>
        </div>

        {/* Main Headline */}
        <div className="mb-12">
          <h1 className="text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
            I'm Rishabh, creating tech
            <br />
            magic from the pulse of
            <br />
            <span className="text-gray-500">digital innovation.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl text-gray-400 mb-16 max-w-2xl leading-relaxed">
          I specialize in creating visually stunning
          <br />
          full-stack applications that leave a lasting impression.
        </p>

        {/* CTA Button */}
        <div className="flex items-center space-x-6 mb-20">
          <button 
            onClick={() => setActiveSection("contact")}
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3.5 rounded-xl flex items-center space-x-2 transition-all duration-200 border border-gray-700 hover:border-gray-600">
            <span className="text-sm">⚡</span>
            <span className="font-medium">Contact me</span>
          </button>
          <span className="text-gray-500 font-medium">{currentTime}</span>
        </div>

        {/* Trusted By Section */}
        {/* <div>
          <p className="text-gray-500 mb-8 font-medium">Trusted by the best</p>
          <div className="flex items-center space-x-12 text-gray-600">
            {[
              { name: 'MAQ Software', symbol: '◐' },
              { name: 'Sense Original', symbol: '✦' },
              { name: 'PSIT Kanpur', symbol: '◑' },
              { name: 'E-Cell PSIT', symbol: '△' }
            ].map((org) => (
              <div key={org.name} className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-300">{org.symbol}</span>
                </div>
                <span className="font-medium">{org.name}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
