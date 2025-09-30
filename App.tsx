/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const WaveBackground: React.FC = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden z-0" aria-hidden="true">
    <svg className="absolute bottom-0 left-0 w-full h-auto text-blue-200 opacity-50" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,149.3C672,117,768,107,864,128C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <svg className="absolute bottom-0 left-0 w-full h-auto text-blue-300 opacity-30" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="1" d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,218.7C840,245,960,267,1080,256C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
  </div>
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
    "Job Fairs",
    "Consulting",
  ];

  return (
    <div className="min-h-screen w-full bg-gray-200 flex items-center justify-center p-2">
      {/* Container with LinkedIn banner aspect ratio (4:1) */}
      <div 
        className="w-full max-w-[1584px] bg-gradient-to-r from-white to-blue-100 text-blue-900 shadow-2xl rounded-lg overflow-hidden relative"
        style={{ aspectRatio: '4 / 1' }}
      >
        <WaveBackground />
        <div className="w-full h-full grid grid-cols-3 gap-4 items-center p-2 md:p-3 relative z-10">
          
          {/* Left Icons */}
          <div className="flex flex-col items-center justify-center gap-4 text-blue-900">
            {/* Education Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3.5a1 1 0 00.028 1.838l7 3.5a1 1 0 00.732 0l7-3.5a1 1 0 00.028-1.838l-7-3.5zM3 9.333V14a1 1 0 001 1h12a1 1 0 001-1V9.333l-7 3.5-7-3.5z" />
            </svg>
            {/* TVET Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          {/* Middle - Personal Info */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-900">
              Alemnew Shumye
            </h1>
            <p className="mt-2 text-md md:text-lg text-blue-800">
              B. Ed in English
            </p>
            <p className="text-md md:text-lg text-blue-800">
              MA in Educational Planning and Management
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-lg md:text-xl font-semibold text-blue-900 tracking-wider">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 006.255 6.255l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+251 918 340 358</span>
            </div>
          </div>

          {/* Right - Skills */}
          <div className="flex justify-end items-start h-full">
            <ul className="flex flex-col">
              {skills.map(skill => (
                <li key={skill} className="text-sm md:text-base text-blue-800 hover:text-blue-900 transition-colors duration-200 flex items-center gap-2 leading-tight">
                  <span className="text-blue-400">•</span>
                  <span className="font-bold">{skill}</span>
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