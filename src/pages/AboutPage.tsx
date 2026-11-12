import React from 'react';
import { 
  ShieldCheck, 
  Code2, 
  Award, 
  Globe, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  MessageCircle,
  Briefcase
} from 'lucide-react';
import { Page } from '../types';
import { CONTACT_INFO, HERO_ASSETS } from '../data/content';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* 1. Header & Lead Profile */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-mono font-bold tracking-widest text-[#00F5FF] uppercase">
          About TRINOVA &amp; Leadership
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-black text-white">
          Meet Abdul Moeen
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Senior Web Developer &amp; Performance Marketer trusted by founders across the UK, USA, UAE, and Pakistan to engineer high-velocity digital revenue engines.
        </p>
      </section>

      {/* 2. Story & Dual Expertise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#00F5FF]/30 shadow-[0_0_30px_rgba(0,245,255,0.2)] bg-[#112240]">
              <img
                src={HERO_ASSETS.agencyHero}
                alt="Abdul Moeen - TRINOVA Digital Labs"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card border border-[#00F5FF]/20">
                <div className="text-sm font-bold text-white">Abdul Moeen</div>
                <div className="text-xs font-mono text-[#00F5FF]">Founder &amp; Principal Solutions Engineer</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#112240] text-xs font-mono text-[#00F5FF]">
              <Award className="w-4 h-4 text-[#00F5FF]" />
              <span>Independent Web Developer</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
              Why TRINOVA? The Intersection of Code &amp; Conversions
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Most digital agencies suffer from a critical divide: developers build websites without understanding customer psychology or advertising cost-per-click, while marketers run ad campaigns to slow, unoptimized landing pages that leak conversions.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At TRINOVA, we bridge that divide. Every Shopify and WordPress platform is constructed with obsessive speed optimization (performance-conscious development) and seamless 1-click checkout mechanisms, configured directly to convert incoming traffic from Meta, Google, and TikTok.
            </p>

            {/* Core Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="p-3.5 rounded-xl bg-[#112240] border border-slate-800 text-center">
                <div className="text-2xl font-bold font-display text-[#00F5FF] tabular-nums">Responsive</div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">Mobile-first design</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#112240] border border-slate-800 text-center">
                <div className="text-2xl font-bold font-display text-white tabular-nums">Modern</div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">Clean interfaces</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#112240] border border-slate-800 text-center">
                <div className="text-2xl font-bold font-display text-emerald-400 tabular-nums">Direct</div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">Client communication</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. The 4-Step Sprint Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00F5FF] uppercase">
            Sprint Methodology
          </span>
          <h2 className="text-3xl font-display font-black text-white mt-1">
            How We Deliver in 7 to 14 Days
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#00F5FF]/10 text-[#00F5FF] flex items-center justify-center font-mono font-bold text-sm">
              01
            </div>
            <h3 className="text-base font-bold font-display text-white">
              Deep Technical Audit
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We audit your existing funnel, check Core Web Vitals, track bounce points, and identify CAC reduction opportunities.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#00F5FF]/10 text-[#00F5FF] flex items-center justify-center font-mono font-bold text-sm">
              02
            </div>
            <h3 className="text-base font-bold font-display text-white">
              Free Demo Prototype
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Abdul Moeen builds a live demo homepage with your exact brand assets. You review the conversion flow with zero financial commitment.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#00F5FF]/10 text-[#00F5FF] flex items-center justify-center font-mono font-bold text-sm">
              03
            </div>
            <h3 className="text-base font-bold font-display text-white">
              High-Velocity Production
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clean, modular coding with mobile-first responsiveness, payment gateway integration, and server-side tracking configurations.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#00F5FF]/10 text-[#00F5FF] flex items-center justify-center font-mono font-bold text-sm">
              04
            </div>
            <h3 className="text-base font-bold font-display text-white">
              Launch &amp; Scaling Sprints
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We deploy the site to your production domain, run ad traffic funnels, and test continuous conversion rate optimizations.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Technical Stack Matrix */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold font-display text-white">
              Verified Technical Stack &amp; Tooling
            </h3>
            <p className="text-xs text-slate-400">
              Only battle-tested, modern, and production-ready technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-[#040d1a] border border-slate-800">
              <div className="text-sm font-bold text-white">WordPress &amp; ACF Pro</div>
              <div className="text-[11px] font-mono text-[#00F5FF] mt-0.5">Custom PHP, Zero Bloat</div>
            </div>
            <div className="p-4 rounded-xl bg-[#040d1a] border border-slate-800">
              <div className="text-sm font-bold text-white">Shopify &amp; Liquid</div>
              <div className="text-[11px] font-mono text-[#00F5FF] mt-0.5">Plus Themes &amp; AJAX</div>
            </div>
            <div className="p-4 rounded-xl bg-[#040d1a] border border-slate-800">
              <div className="text-sm font-bold text-white">React &amp; TypeScript</div>
              <div className="text-[11px] font-mono text-[#00F5FF] mt-0.5">High-Speed Frontends</div>
            </div>
            <div className="p-4 rounded-xl bg-[#040d1a] border border-slate-800">
              <div className="text-sm font-bold text-white">Meta CAPI &amp; GTM</div>
              <div className="text-[11px] font-mono text-[#00F5FF] mt-0.5">Server-Side Tracking</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct Connect CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#112240] to-[#040d1a] border border-[#00F5FF]/30 text-center space-y-4">
          <h3 className="text-2xl font-bold font-display text-white">
            Ready to Build a High-Yield Web Platform?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Get directly in touch with Abdul Moeen via email at <span className="font-mono text-[#00F5FF]">{CONTACT_INFO.email}</span> or via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('demo')}
              className="px-6 py-3 rounded-xl bg-[#00F5FF] hover:bg-[#4df8ff] text-[#0A192F] font-bold text-xs uppercase tracking-wider transition-all"
            >
              Get Free Demo Homepage
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-[#112240] hover:bg-[#1f355b] border border-slate-700 text-white font-semibold text-xs transition-all"
            >
              View Contact Channels
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
