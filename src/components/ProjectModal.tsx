import React from 'react';
import { X, CheckCircle, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { Project } from '../types';
import { CONTACT_INFO } from '../data/content';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestDemo: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestDemo,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#040d1a]/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl my-8 bg-[#0A192F] border border-[#00F5FF]/30 rounded-2xl shadow-[0_0_40px_rgba(0,245,255,0.25)] overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#112240] hover:bg-[#1f355b] text-slate-300 hover:text-white transition-colors border border-slate-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full bg-[#112240] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#00F5FF] tracking-wider uppercase">
                {project.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
                {project.title}
              </h3>
              <p className="text-xs text-slate-300 font-mono mt-0.5">
                Client: {project.client} · {project.country}
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#112240]/60 border border-slate-800">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl sm:text-2xl font-black text-[#00F5FF] font-display">
                  {metric.value}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-sm font-mono text-[#00F5FF] uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#112240]/40 border border-slate-800/80">
              <h5 className="text-xs font-mono text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                The Challenge
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#112240]/40 border border-slate-800/80">
              <h5 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                Our Engineering Solution
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Technologies & Tools Implemented
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-[#112240] text-slate-200 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Guarantee */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#112240] to-[#040d1a] border border-[#00F5FF]/20 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#00F5FF] shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">Upwork Verified Delivery</div>
                <div className="text-[11px] text-slate-400">100% Job Success score by Abdul Moeen</div>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onRequestDemo(project.title);
              }}
              className="px-4 py-2 rounded-lg bg-[#00F5FF] hover:bg-[#4df8ff] text-[#0A192F] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,245,255,0.4)]"
            >
              <span>Build A Similar Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
