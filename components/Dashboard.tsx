
import React from 'react';
import { AnalysisResult, Comment } from '../types';
import SentimentGauge from './SentimentGauge';

interface DashboardProps {
  data: AnalysisResult;
  onReset: () => void;
}

const PlatformIcon: React.FC<{ platform: Comment['platform'] }> = ({ platform }) => {
  switch (platform) {
    case 'YouTube':
      return (
        <div className="w-6 h-6 flex items-center justify-center bg-red-600 rounded-full shrink-0 shadow-sm">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </div>
      );
    case 'Reddit':
      return (
        <div className="w-6 h-6 flex items-center justify-center bg-orange-600 rounded-full shrink-0 shadow-sm">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.687 0 1.25.562 1.25 1.25 0 .688-.563 1.25-1.25 1.25-.252 0-.486-.075-.684-.204-.038 3.107-3.56 5.621-7.854 5.621-4.293 0-7.816-2.514-7.854-5.621a1.233 1.233 0 0 1-.684.204c-.688 0-1.25-.562-1.25-1.25 0-.688.562-1.25 1.25-1.25.474 0 .894.182 1.203.489 1.192-.851 2.842-1.41 4.656-1.485l.863-4.043a.253.253 0 0 1 .188-.192l3.111.651c.063-.335.353-.591.705-.591zM9.25 11.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm5.5 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 16.5a4.03 4.03 0 0 1-3.35-1.78.25.25 0 0 1 .41-.285c.82 1.178 2.11 1.565 2.94 1.565.83 0 2.12-.387 2.94-1.565a.25.25 0 0 1 .41.285A4.03 4.03 0 0 1 12 16.5z"/></svg>
        </div>
      );
    case 'Facebook':
      return (
        <div className="w-6 h-6 flex items-center justify-center bg-[#1877F2] rounded-full shrink-0 shadow-sm">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </div>
      );
    case 'LinkedIn':
      return (
        <div className="w-6 h-6 flex items-center justify-center bg-[#0A66C2] rounded-full shrink-0 shadow-sm">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </div>
      );
    case 'X':
      return (
        <div className="w-6 h-6 flex items-center justify-center bg-black rounded-full shrink-0 shadow-sm border border-slate-700">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </div>
      );
    case 'Vimeo':
      return (
        <div className="w-6 h-6 flex items-center justify-center bg-[#1ab7ea] rounded-full shrink-0 shadow-sm">
          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.161 12.935 21 10.97 21c-1.214 0-2.246-1.119-3.093-3.359-.56-2.052-1.119-4.105-1.679-6.157-.653-2.427-1.353-3.641-2.1-3.641-.14 0-.63.293-1.469.878L1.61 7.62c.887-.77 1.773-1.54 2.658-2.31 1.214-1.026 2.147-1.564 2.8-1.61 1.54-.047 2.476.98 2.8 3.08.374 2.38.63 3.85.77 4.434.42 2.1.886 3.15 1.399 3.15.374 0 1.05-.63 2.029-1.89s1.493-2.263 1.54-3.034c.093-1.213-.327-1.82-1.259-1.82-.42 0-.84.094-1.26.28.84-2.753 2.45-4.13 4.829-4.13 1.773 0 2.613 1.213 2.52 3.64z"/></svg>
        </div>
      );
    default:
      return (
        <div className="w-6 h-6 flex items-center justify-center bg-slate-600 rounded-full shrink-0 shadow-sm">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
        </div>
      );
  }
};

const Dashboard: React.FC<DashboardProps> = ({ data, onReset }) => {
  const { report, sources } = data;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 animate-fadeIn">
      <div className="flex justify-between items-center bg-slate-800/30 p-4 rounded-xl backdrop-blur-sm border border-slate-700 shadow-xl">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Feedback Pulse Analysis
        </h2>
        <button
          onClick={onReset}
          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition-all border border-slate-600 active:scale-95"
        >
          Reset Engine
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <SentimentGauge score={report.sentimentScore} label={report.sentimentLabel} />
          
          <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 shadow-lg">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
              Pulse Overview
            </h3>
            <p className="text-slate-300 leading-relaxed italic">
              "{report.summary}"
            </p>
          </div>

          <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-purple-500 rounded-full"></span>
              Authentic Voices
            </h3>
            <div className="space-y-4">
              {report.topComments.map((comment, i) => (
                <div key={i} className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 space-y-2 hover:bg-slate-900/80 transition-colors">
                  <div className="flex items-center gap-2">
                    <PlatformIcon platform={comment.platform} />
                    <span className="text-xs font-bold text-slate-400 truncate">@{comment.author}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-500 ml-auto border border-slate-700">{comment.platform}</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-snug">
                    "{comment.text}"
                  </p>
                </div>
              ))}
              {report.topComments.length === 0 && (
                <p className="text-sm text-slate-500 italic">No direct quotes captured for this query.</p>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-950/20 rounded-2xl border border-green-500/30 shadow-inner">
              <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2 uppercase tracking-wide text-sm">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                The Good
              </h3>
              <ul className="space-y-3">
                {report.pros.map((pro, i) => (
                  <li key={i} className="flex gap-3 text-slate-200">
                    <span className="text-green-500 font-bold">•</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-red-950/20 rounded-2xl border border-red-500/30 shadow-inner">
              <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2 uppercase tracking-wide text-sm">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                The Bad
              </h3>
              <ul className="space-y-3">
                {report.cons.map((con, i) => (
                  <li key={i} className="flex gap-3 text-slate-200">
                    <span className="text-red-500 font-bold">•</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl border border-indigo-500/30 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-indigo-300 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Final Verdict
            </h3>
            <p className="text-lg text-slate-200 leading-relaxed font-medium">
              {report.verdict}
            </p>
          </div>

          <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">Verification Sources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sources.map((source, i) => (
                <a
                  key={i}
                  href={source.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg border border-slate-600 transition-all truncate text-xs text-blue-400 hover:text-blue-300"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  <span className="truncate">{source.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
