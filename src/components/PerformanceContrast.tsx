import React, { useState } from 'react';
import { Gauge, Zap, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PerformanceContrastProps {
  onClaimDemo: () => void;
}

export const PerformanceContrast: React.FC<PerformanceContrastProps> = ({ onClaimDemo }) => {
  const [activeMode, setActiveMode] = useState<'trinova' | 'typical'>('trinova');

  return (
    <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[#00F5FF]/30 space-y-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00F5FF]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#00F5FF] uppercase">
            Data-Backed Performance Contrast
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
            Why Standard Sites Burn 60% of Your Ad Spend
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
            Every 100ms of latency reduces conversions by 7%. Compare a bloated template with our streamlined high-velocity build.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#040d1a] rounded-xl border border-slate-800 shrink-0 self-start md:self-auto">
          <button
            onClick={() => setActiveMode('typical')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
              activeMode === 'typical'
                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Typical Bloated Site</span>
          </button>

          <button
            onClick={() => setActiveMode('trinova')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
              activeMode === 'trinova'
                ? 'bg-[#00F5FF] text-[#0A192F] font-bold shadow-[0_0_15px_rgba(0,245,255,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>TRINOVA Architecture</span>
          </button>
        </div>
      </div>

      {/* Dynamic Metrics Comparison Grid */}
      <motion.div
        key={activeMode}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        
        {/* Metric 1: PageSpeed Score */}
        <div
          className={`p-5 rounded-2xl border transition-all ${
            activeMode === 'trinova'
              ? 'bg-[#112240] border-[#00F5FF]/40 shadow-[0_0_20px_rgba(0,245,255,0.15)]'
              : 'bg-red-950/20 border-red-900/40'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Google PageSpeed</span>
            <Gauge className={`w-4 h-4 ${activeMode === 'trinova' ? 'text-[#00F5FF]' : 'text-red-400'}`} />
          </div>
          <div
            className={`text-3xl sm:text-4xl font-black font-display mt-3 tabular-nums ${
              activeMode === 'trinova' ? 'text-[#00F5FF]' : 'text-red-400'
            }`}
          >
            {activeMode === 'trinova' ? '99/100' : '34/100'}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            {activeMode === 'trinova'
              ? 'Near-instant Core Web Vitals rating on both mobile and desktop.'
              : 'Fails Google mobile benchmarks; penalized in search & ad quality score.'}
          </p>
        </div>

        {/* Metric 2: Load Time */}
        <div
          className={`p-5 rounded-2xl border transition-all ${
            activeMode === 'trinova'
              ? 'bg-[#112240] border-[#00F5FF]/40 shadow-[0_0_20px_rgba(0,245,255,0.15)]'
              : 'bg-red-950/20 border-red-900/40'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Page Load Speed</span>
            <Zap className={`w-4 h-4 ${activeMode === 'trinova' ? 'text-emerald-400' : 'text-red-400'}`} />
          </div>
          <div
            className={`text-3xl sm:text-4xl font-black font-display mt-3 tabular-nums ${
              activeMode === 'trinova' ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {activeMode === 'trinova' ? '0.9s' : '4.6s'}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            {activeMode === 'trinova'
              ? 'Instant visual load; zero layout shift; shoppers never wait.'
              : '53% of mobile visitors abandon page before load completes.'}
          </p>
        </div>

        {/* Metric 3: Checkout Bounce Rate */}
        <div
          className={`p-5 rounded-2xl border transition-all ${
            activeMode === 'trinova'
              ? 'bg-[#112240] border-[#00F5FF]/40 shadow-[0_0_20px_rgba(0,245,255,0.15)]'
              : 'bg-red-950/20 border-red-900/40'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Visitor Bounce Rate</span>
            <TrendingUp className={`w-4 h-4 ${activeMode === 'trinova' ? 'text-[#00F5FF]' : 'text-red-400'}`} />
          </div>
          <div
            className={`text-3xl sm:text-4xl font-black font-display mt-3 tabular-nums ${
              activeMode === 'trinova' ? 'text-white' : 'text-red-400'
            }`}
          >
            {activeMode === 'trinova' ? '21%' : '71%'}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            {activeMode === 'trinova'
              ? '79% of paid visitors engage deeply with the product catalog.'
              : 'Huge drop-off rates on paid traffic before seeing product value.'}
          </p>
        </div>

        {/* Metric 4: Projected Return on Ad Spend */}
        <div
          className={`p-5 rounded-2xl border transition-all ${
            activeMode === 'trinova'
              ? 'bg-[#112240] border-[#00F5FF]/40 shadow-[0_0_20px_rgba(0,245,255,0.15)]'
              : 'bg-red-950/20 border-red-900/40'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Effective ROAS</span>
            <CheckCircle2 className={`w-4 h-4 ${activeMode === 'trinova' ? 'text-emerald-400' : 'text-red-400'}`} />
          </div>
          <div
            className={`text-3xl sm:text-4xl font-black font-display mt-3 tabular-nums ${
              activeMode === 'trinova' ? 'text-emerald-400' : 'text-slate-400'
            }`}
          >
            {activeMode === 'trinova' ? '3.8x - 4.4x' : '1.2x (Barely Even)'}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            {activeMode === 'trinova'
              ? 'Server-side CAPI tracking + 1-click upsells produce high profitability.'
              : 'High cost per acquisition eats all product margins.'}
          </p>
        </div>

      </motion.div>

      {/* Bottom Conversion Action */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs font-mono text-slate-300 text-center sm:text-left">
          ⚡ Free audit included: We evaluate your current store load time &amp; conversion leaks during the demo.
        </div>
        <button
          onClick={onClaimDemo}
          className="px-6 py-3 rounded-xl bg-[#00F5FF] hover:bg-[#4df8ff] text-[#0A192F] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,245,255,0.4)] flex items-center gap-2 shrink-0"
        >
          <span>Get Free Speed &amp; Leads Audit</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
