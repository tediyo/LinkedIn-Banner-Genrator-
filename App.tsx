/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const CircuitBackground: React.FC = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1584 396" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#e0f2fe', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <rect width="1584" height="396" fill="url(#grad1)" />
            {/* Faint circuit pattern */}
            <g stroke="#dbeafe" strokeWidth="2" strokeOpacity="0.5">
                <path d="M 200 50 L 400 50 L 400 150 L 600 150" fill="none" />
                <path d="M 100 250 L 300 250 L 300 350 L 500 350" fill="none" />
                <path d="M 800 80 L 1000 80 L 1000 200" fill="none" />
                <path d="M 1200 300 L 1400 300 L 1400 100" fill="none" />
                <path d="M 1500 200 L 1300 200 L 1300 280 L 1100 280" fill="none" />
                <path d="M 0 120 L 150 120" fill="none" />
                <path d="M 1584 320 L 1450 320" fill="none" />
            </g>
            {/* Orange nodes for emphasis */}
            <g fill="#fed7aa">
                <circle cx="400" cy="50" r="4" />
                <circle cx="400" cy="150" r="4" />
                <circle cx="300" cy="250" r="4" />
                <circle cx="300" cy="350" r="4" />
                <circle cx="1000" cy="80" r="4" />
                <circle cx="1400" cy="300" r="4" />
                <circle cx="1300" cy="200" r="4" />
                <circle cx="1100" cy="280" r="4" />
            </g>
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
        className="w-full max-w-[1584px] bg-slate-50 text-slate-800 shadow-2xl rounded-lg overflow-hidden relative"
        style={{ aspectRatio: '4 / 1' }}
      >
        <CircuitBackground />
        <div className="w-full h-full grid grid-cols-3 gap-4 items-stretch py-1 px-2 md:py-2 md:px-3 relative z-10">
          
          {/* Left Icons */}
          <div className="flex flex-col items-center justify-center gap-4 text-blue-600">
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
          <div className="flex flex-col items-center justify-center text-center px-4 relative">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-blue-900">
              Alemnew Shumye
            </h1>
            <p className="mt-2 text-md md:text-lg text-blue-900">
              B. Ed in English
            </p>
            <p className="text-md md:text-lg text-blue-900">
              MA in Educational Planning and Management
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-lg md:text-xl font-semibold text-blue-800 tracking-wider">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 006.255 6.255l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+251 918 340 358</span>
            </div>
             <div className="absolute top-1/2 right-0 h-4/5 w-0.5 bg-orange-500 transform -translate-y-1/2" />
          </div>

          {/* Right - Skills */}
          <div className="flex justify-end items-center h-full">
            <ul className="flex flex-col">
              {skills.map(skill => (
                <li key={skill} className="text-xs hover:opacity-80 transition-opacity duration-200 flex items-center gap-1.5 leading-none">
                  <span className="text-blue-600 text-xs font-bold">•</span>
                  <span className="font-bold text-blue-800">{skill}</span>
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