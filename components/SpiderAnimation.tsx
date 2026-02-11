
import React, { useEffect, useState } from 'react';

const SpiderAnimation: React.FC = () => {
  const [step, setStep] = useState(0);
  const steps = [
    "Initializing Spiders...",
    "Crawling YouTube comments...",
    "Extracting Reddit threads...",
    "Scraping web reviews...",
    "Filtering spam and bots...",
    "Processing through AI Brain...",
    "Generating 360° Report..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-20">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-purple-500 border-b-transparent rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 flex items-center justify-center">
          <svg className="w-10 h-10 text-blue-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-medium text-blue-400 h-8 transition-all duration-500">
          {steps[step]}
        </h3>
        <p className="text-slate-400 mt-2">Our spiders are analyzing thousands of data points across the web.</p>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SpiderAnimation;
