/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-blue-700 hover:text-blue-900 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c0 1.66 4 3 10 0v-5"/>
  </svg>
);

const LeadershipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-blue-700 hover:text-blue-900 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const SkillsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-blue-700 hover:text-blue-900 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const WorldMapIcon = () => (
  <svg 
    className="absolute inset-0 w-full h-full object-cover text-blue-300 opacity-20 z-0"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 2048 1024" 
    fill="currentColor"
    aria-hidden="true"
    >
    <path d="M1024 413.2L614.4 204.8 204.8 413.2 204.8 822.8 614.4 1024 1024 822.8z M614.4 266.8L1024 471.6 1433.6 266.8 1024 61.4z M962.6 844.2L614.4 652.8 266.2 844.2 614.4 1024z M1085.4 844.2L1433.6 652.8 1781.8 844.2 1433.6 1024z M1024 532.5L1433.6 327.7 1843.2 532.5 1843.2 768 1433.6 972.8 1024 768z" />
    <path d="M962.6,844.2L614.4,652.8L266.2,844.2L614.4,1024L962.6,844.2z M1024,532.5L614.4,327.7L204.8,532.5L204.8,768L614.4,972.8 L1024,768L1024,532.5z M1085.4,844.2L1433.6,652.8L1781.8,844.2L1433.6,1024L1085.4,844.2z M1433.6,266.8L1024,471.6 L1024,61.4L1433.6,266.8z" />
  </svg>
);

const App: React.FC = () => {
  const skills = [
    "Education and Training",
    "Leadership and Management",
    "Vocational Training",
    "Skills Development",
    "Public–Private Partnerships",
    "VGCS",
    "Quality and Relevance",
    "Cooperative Training",
    "Apprenticeship",
    "TVET Policy and Strategy",
    "Job Fairs Events",
    "Consulting",
  ];

  return (
    <div className="min-h-screen w-full bg-gray-200 flex items-center justify-center p-2">
      {/* Container with LinkedIn banner aspect ratio (4:1) */}
      <div 
        className="w-full max-w-[1584px] bg-gradient-to-r from-white to-blue-200 text-blue-900 shadow-2xl rounded-lg overflow-hidden relative"
        style={{ aspectRatio: '4 / 1' }}
      >
        <WorldMapIcon />
        <div className="w-full h-full flex items-center justify-between p-6 md:p-10 relative z-10">
          
          {/* Left Content - Logos */}
          <div className="flex items-center">
            <div className="flex flex-col space-y-6">
              <GraduationCapIcon />
              <LeadershipIcon />
              <SkillsIcon />
            </div>
          </div>

          {/* Middle Content */}
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-900">
              Alemnew Shumye
            </h1>
            <p className="mt-2 text-md md:text-lg text-blue-800">
              B. Ed in English
            </p>
            <p className="text-md md:text-lg text-blue-800">
              MA in Educational Planning and Management
            </p>
            <p className="mt-4 text-lg md:text-xl font-semibold text-blue-900 tracking-wider">
              +251 918 340 358
            </p>
          </div>

          {/* Right Content */}
          <div className="flex items-center">
            <ul className="text-left space-y-1">
              {skills.map(skill => (
                <li key={skill} className="text-[10px] md:text-xs lg:text-sm text-blue-800 hover:text-blue-900 transition-colors duration-200 flex items-center gap-2">
                  <span>•</span>
                  <span className="font-semibold">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
