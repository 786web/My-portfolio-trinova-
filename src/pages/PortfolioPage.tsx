import React, { useState } from 'react';
import { Search, ArrowUpRight, Filter, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, Page } from '../types';
import { PROJECTS } from '../data/content';

interface PortfolioPageProps {
  onOpenProject: (project: Project) => void;
  onNavigate: (page: Page) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onOpenProject,
  onNavigate,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'shopify' | 'wordpress' | 'ecommerce' | 'leads'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'shopify', label: 'Shopify Plus' },
    { id: 'wordpress', label: 'WordPress ACF' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'leads', label: 'High-Ticket Leads' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesFilter =
      activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      project.country.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20 pt-8">
      
      {/* 1. Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.999, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-[#00F5FF] uppercase">
          Client Case Studies &amp; Delivered Platforms
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-black text-white">
          Engineered for Real Conversion
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Explore our recent live deployments across UK, USA, Dubai, and Pakistan. Each project solved a specific bottleneck to drive verifiable sales and leads.
        </p>
      </motion.section>

      {/* 2. Filter & Search Controls */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 0.999, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
          
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#112240] rounded-xl border border-slate-800 flex-wrap">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`relative px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                  activeFilter === tab.id
                    ? 'text-[#0A192F] font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {activeFilter === tab.id && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-[#00F5FF] rounded-lg -z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword or tech..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#112240] border border-slate-800 text-xs text-white placeholder-slate-400 focus:border-[#00F5FF] outline-none"
            />
          </div>

        </div>
      </motion.section>

      {/* 3. Projects Grid with Scroll-Triggered and Layout Animations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 glass-card rounded-2xl border border-slate-800"
          >
            <p className="text-slate-400 text-sm">
              No projects match your current search query.
            </p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#00F5FF] text-[#0A192F] text-xs font-bold font-mono uppercase"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                  transition={{
                    duration: 0.45,
                    delay: (idx % 3) * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-[#00F5FF]/50 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container */}
                    <div className="h-52 w-full bg-[#112240] relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-80" />

                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#040d1a]/80 text-[#00F5FF] text-[10px] font-mono border border-[#00F5FF]/20">
                        {project.country}
                      </div>

                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                        {project.metrics[0].value} {project.metrics[0].label}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 space-y-3">
                      <div className="text-xs font-mono text-[#00F5FF] uppercase">
                        {project.categoryLabel}
                      </div>
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-[#00F5FF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Metrics Row */}
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        {project.metrics.slice(0, 2).map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-2 rounded-lg bg-[#040d1a]/70 border border-slate-800 text-center"
                          >
                            <div className="text-xs font-bold text-[#00F5FF] font-display">
                              {m.value}
                            </div>
                            <div className="text-[10px] font-mono text-slate-400">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.techStack.slice(0, 3).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#112240] text-slate-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#112240] text-slate-400">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => onOpenProject(project)}
                      className="w-full py-2.5 rounded-xl bg-[#112240] hover:bg-[#00F5FF] hover:text-[#0A192F] text-xs font-mono font-bold tracking-wider uppercase transition-all border border-slate-700 flex items-center justify-center gap-1.5"
                    >
                      <span>View Full Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* 4. Bottom Offer */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="glass-card rounded-2xl p-8 border border-[#00F5FF]/30 text-center space-y-4">
          <Sparkles className="w-6 h-6 text-[#00F5FF] mx-auto" />
          <h3 className="text-2xl font-bold font-display text-white">
            Want A Similar High-Converting Store or Portal?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Abdul Moeen will build your custom demo homepage first with zero upfront commitment. You only proceed if you love the design and strategy.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('demo')}
              className="px-6 py-3 rounded-xl bg-[#00F5FF] hover:bg-[#4df8ff] text-[#0A192F] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,245,255,0.4)]"
            >
              Claim Your Free Demo Homepage
            </button>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Attribution Signature */}
      <div className="pt-4 text-center border-t border-slate-800/80 max-w-4xl mx-auto">
        <p className="text-xs font-mono text-slate-400 tracking-wider">
          created by:{' '}
          <span className="text-[#00F5FF] font-semibold">
            Abdulmoeen.io
          </span>
        </p>
      </div>

    </div>
  );
};

