
import React from 'react';

interface SentimentGaugeProps {
  score: number;
  label: string;
}

const SentimentGauge: React.FC<SentimentGaugeProps> = ({ score, label }) => {
  const getStrokeColor = () => {
    if (score >= 70) return '#22c55e'; // green-500
    if (score >= 40) return '#eab308'; // yellow-500
    return '#ef4444'; // red-500
  };

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
      <div className="relative inline-flex items-center justify-center">
        <svg className="w-40 h-40 transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-slate-700"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke={getStrokeColor()}
            strokeWidth="12"
            strokeDasharray={circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-4xl font-bold">{score}</span>
          <span className="text-sm font-medium opacity-70 uppercase tracking-widest">Score</span>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold" style={{ color: getStrokeColor() }}>
          {label} Sentiment
        </p>
      </div>
    </div>
  );
};

export default SentimentGauge;
