
import React, { useState } from 'react';
import { analyzeFeedback } from './services/geminiService';
import { AnalysisResult } from './types';
import SpiderAnimation from './components/SpiderAnimation';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await analyzeFeedback(query);
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Failed to analyze feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setQuery('');
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-12 max-w-7xl mx-auto">
      {/* Header */}
      <header className="w-full text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white flex flex-col md:block">
          360° <span className="text-blue-500">PULSE</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
          Deep sentiment analysis engine. Aggregating honesty from across the social sphere.
        </p>
      </header>

      {/* Main Content Area */}
      {!result && !loading ? (
        <div className="w-full max-w-2xl bg-slate-800/50 p-8 rounded-3xl border border-slate-700 shadow-2xl backdrop-blur-md">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="search" className="block text-sm font-medium text-slate-400 ml-1">
                Enter Query (Product, Person, or Brand)
              </label>
              <div className="relative group">
                <input
                  id="search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. Meta Quest 3, Shark Tank India, Joe Rogan"
                  className="w-full px-6 py-4 bg-slate-900 border-2 border-slate-700 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all text-lg group-hover:border-slate-600"
                />
                <button
                  type="submit"
                  disabled={!query.trim()}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  Analyze
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest pt-6 border-t border-slate-700/50">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                YouTube
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                Reddit
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse border border-slate-600"></span>
                X
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#0A66C2] rounded-full animate-pulse"></span>
                LinkedIn
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                Facebook
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                Messenger
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#1ab7ea] rounded-full animate-pulse"></span>
                Vimeo
              </div>
            </div>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm text-center">
              {error}
            </div>
          )}
        </div>
      ) : loading ? (
        <SpiderAnimation />
      ) : (
        result && <Dashboard data={result} onReset={handleReset} />
      )}

      {/* Footer Info */}
      {!result && (
        <div className="mt-16 text-center text-slate-500 text-sm max-w-lg space-y-4">
          <p>Our AI spiders crawl public threads, professional networks, and social discussions to give you the most accurate "No-BS" report on the web.</p>
          <div className="flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
             <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700">9 Platforms</span>
             <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700">Real-time Grounding</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
