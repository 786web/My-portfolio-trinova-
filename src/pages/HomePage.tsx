import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  Laptop,
  Megaphone,
  CreditCard,
  Gauge,
  Send,
  Star,
  Quote,
  Activity,
  Terminal,
  Layers,
  Code
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page, Project } from '../types';
import { PROJECTS, TESTIMONIALS, CONTACT_INFO, HERO_ASSETS } from '../data/content';
import { HeroParticleCanvas } from '../components/HeroParticleCanvas';
import { PerformanceContrast } from '../components/PerformanceContrast';
import { saveLeadToSupabase } from '../lib/supabase';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenProject }) => {
  // Quick Form State
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickBiz, setQuickBiz] = useState('Shopify & E-Commerce Store');
  const [quickBudget, setQuickBudget] = useState('$600 - $1,500');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Rotating Dynamic Headlines
  const dynamicWords = [
    'High-ROAS Shopify Stores',
    'Custom WordPress Portals',
    'Sub-Second PageSpeed (99/100)',
    'Meta & Google Paid Funnels',
    'JazzCash & Stripe Checkouts'
  ];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIdx((prev) => (prev + 1) % dynamicWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [dynamicWords.length]);

  // Terminal active tab state
  const [terminalTab, setTerminalTab] = useState<'speed' | 'capi' | 'payments'>('speed');

  const featuredProjects = PROJECTS.filter((p) => p.featured);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setFormSubmitted(true);

    // Save lead to Supabase database
    await saveLeadToSupabase({
      name: quickName,
      phone: quickPhone,
      business_type: quickBiz,
      budget: quickBudget,
      source: 'quick_lead',
    });
    setIsSaving(false);

    const waText = encodeURIComponent(
      `Hi Abdul Moeen,\n\nName: ${quickName}\nPhone: ${quickPhone}\nBusiness: ${quickBiz}\nBudget: ${quickBudget}\n\nI want to claim my Free Demo Homepage.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${waText}`, '_blank');
  };

  return (
    <div className="space-y-24 pb-20 relative">
      
      {/* 1. HERO SECTION WITH PARTICLE CONSTELLATION CANVAS */}
      <section className="relative pt-10 lg:pt-16 pb-16 overflow-hidden min-h-[85vh] flex items-center">
        {/* Interactive Constellation Canvas */}
        <HeroParticleCanvas />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#00F5FF]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Proposition & Dynamic Headlines */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#112240]/80 border border-[#00F5FF]/30 text-xs font-mono text-[#00F5FF] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="font-semibold tracking-wide">
                  Abdulmoeen · Independent Web Developer · TRINOVA
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white leading-[1.08]">
                We Build Websites That Bring <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] via-[#4df8ff] to-sky-300 drop-shadow-[0_0_25px_rgba(0,245,255,0.4)]">
                  REAL Sales,
                </span>{' '}
                Not Just Clicks.
              </h1>

              {/* Dynamic Rotating Headline */}
              <div className="h-9 flex items-center">
                <p className="text-base sm:text-xl font-mono text-slate-300 flex items-center gap-2">
                  <span className="text-slate-500">&gt;</span> We engineer:
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWordIdx}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="text-[#00F5FF] font-bold"
                    >
                      {dynamicWords[currentWordIdx]}
                    </motion.span>
                  </AnimatePresence>
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl font-light leading-relaxed">
                Custom high-performance Shopify &amp; WordPress storefronts backed by hyper-targeted Meta &amp; Google ad funnels built to generate qualified leads and verified revenue.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('demo')}
                  className="px-8 py-4 rounded-xl bg-[#00F5FF] hover:bg-[#4df8ff] text-[#0A192F] font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(0,245,255,0.45)] hover:shadow-[0_0_35px_rgba(0,245,255,0.7)] flex items-center justify-center gap-2.5"
                >
                  <Zap className="w-4 h-4 fill-[#0A192F]" />
                  <span>Get Free Demo Homepage</span>
                </button>

                <button
                  onClick={() => onNavigate('portfolio')}
                  className="px-8 py-4 rounded-xl bg-[#112240] hover:bg-[#1f355b] border border-slate-700 hover:border-[#00F5FF]/60 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Case Studies</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* What You Can Expect */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-black font-display text-white tabular-nums">Responsive</div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">Mobile-first websites</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black font-display text-[#00F5FF] tabular-nums">Modern</div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">Clean user experiences</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black font-display text-emerald-400 tabular-nums">Direct</div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">Clear communication</div>
                </div>
              </div>

            </motion.div>

            {/* Right Column: Interactive Cockpit & Live Architecture Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-2xl border border-[#00F5FF]/40 bg-[#0A192F]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(0,245,255,0.25)] overflow-hidden">
                
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#112240] border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-300 font-semibold">
                      trinova-engine.config.ts
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Live Status: Ready
                  </span>
                </div>

                {/* Architecture Tabs */}
                <div className="grid grid-cols-3 border-b border-slate-800 text-xs font-mono text-center">
                  <button
                    onClick={() => setTerminalTab('speed')}
                    className={`py-2.5 transition-colors border-r border-slate-800 ${
                      terminalTab === 'speed'
                        ? 'text-[#00F5FF] bg-[#112240]/60 font-bold border-b-2 border-b-[#00F5FF]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Speed Engine
                  </button>
                  <button
                    onClick={() => setTerminalTab('capi')}
                    className={`py-2.5 transition-colors border-r border-slate-800 ${
                      terminalTab === 'capi'
                        ? 'text-[#00F5FF] bg-[#112240]/60 font-bold border-b-2 border-b-[#00F5FF]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    CAPI Funnel
                  </button>
                  <button
                    onClick={() => setTerminalTab('payments')}
                    className={`py-2.5 transition-colors ${
                      terminalTab === 'payments'
                        ? 'text-[#00F5FF] bg-[#112240]/60 font-bold border-b-2 border-b-[#00F5FF]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Gateways
                  </button>
                </div>

                {/* Tab Dynamic Content */}
                <div className="p-6 space-y-4">
                  
                  {terminalTab === 'speed' && (
                    <div className="space-y-4 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-[#040d1a] border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="text-slate-400">Mobile Google PageSpeed</div>
                          <div className="text-xl font-bold text-[#00F5FF]">99 / 100</div>
                        </div>
                        <div className="text-right">
                          <div className="text-slate-400">First Contentful Paint</div>
                          <div className="text-xl font-bold text-emerald-400">0.82s</div>
                        </div>
                      </div>

                      <div className="space-y-2 text-slate-300">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5FF]" />
                          <span>Custom Liquid theme · zero heavy app bloat</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5FF]" />
                          <span>Sub-second AJAX instant cart &amp; checkout drawer</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5FF]" />
                          <span>Lossless WebP image compression + Cloudflare CDN</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {terminalTab === 'capi' && (
                    <div className="space-y-4 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-[#040d1a] border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="text-slate-400">Attributed ROAS</div>
                          <div className="text-xl font-bold text-emerald-400">Demo metric</div>
                        </div>
                        <div className="text-right">
                          <div className="text-slate-400">Event Match Quality</div>
                          <div className="text-xl font-bold text-[#00F5FF]">9.4 / 10</div>
                        </div>
                      </div>

                      <div className="space-y-2 text-slate-300">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5FF]" />
                          <span>Server-Side Conversions API (bypasses iOS 14 blocking)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5FF]" />
                          <span>Intent-driven Google Search ad funnels &amp; PMax</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5FF]" />
                          <span>High-converting landing page A/B test setups</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {terminalTab === 'payments' && (
                    <div className="space-y-4 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-[#040d1a] border border-slate-800 grid grid-cols-2 gap-2 text-center">
                        <div className="p-2 rounded bg-[#112240] text-slate-200 font-bold">
                          Stripe &bull; Global
                        </div>
                        <div className="p-2 rounded bg-[#112240] text-red-400 font-bold">
                          JazzCash &bull; PK
                        </div>
                        <div className="p-2 rounded bg-[#112240] text-emerald-400 font-bold">
                          Easypaisa &bull; PK
                        </div>
                        <div className="p-2 rounded bg-[#112240] text-blue-400 font-bold">
                          PayPal &bull; USD
                        </div>
                      </div>

                      <div className="space-y-2 text-slate-300">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5FF]" />
                          <span>Frictionless 1-step checkout with instant verification</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5FF]" />
                          <span>Auto-converting multi-currency localization</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Terminal Footer CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('demo')}
                      className="w-full py-2.5 rounded-xl bg-[#00F5FF] hover:bg-[#4df8ff] text-[#0A192F] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                    >
                      <span>Claim Free Demo Homepage</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 2. FREE DEMO OPTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 border-2 border-[#00F5FF] bg-gradient-to-r from-[#040d1a] via-[#0A192F] to-[#040d1a] neon-border-glow">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F5FF] font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Free Demo Option
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                "I will build your custom demo homepage and show you the exact leads plan. You pay only if you love it."
              </h2>
              <p className="text-sm text-slate-300">
                No deposit needed. Experience our speed, conversion architecture, and design quality firsthand before spending a single dollar.
              </p>
            </div>

            <button
              onClick={() => onNavigate('demo')}
              className="px-6 py-3.5 rounded-xl bg-[#00F5FF] hover:bg-white text-[#0A192F] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,245,255,0.6)] shrink-0"
            >
              Claim Free Demo + Leads Plan
            </button>
          </div>
        </div>
      </section>

      {/* 3. DUAL-ENGINE CAPABILITIES (SERVICES PREVIEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00F5FF] uppercase">
            01. Dual-Engine Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-1">
            Engineering Meets Conversion
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Traffic without a high-converting site burns ad spend. A great site without high-intent traffic produces no revenue. We deliver both under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card A: Web Dev */}
          <div className="glass-card rounded-2xl p-8 border border-slate-800 hover:border-[#00F5FF]/40 transition-all space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#00F5FF]/10 text-[#00F5FF] flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-slate-400">Pillar 01 // Tech</span>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-display text-white">
                High-Velocity Web Development
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Custom Shopify &amp; WordPress builds optimized for sub-second speeds (95+ Core Web Vitals) and zero-friction checkouts.
              </p>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00F5FF] shrink-0" />
                <span>Custom Shopify Liquid Themes &amp; Instant AJAX Mini-Carts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00F5FF] shrink-0" />
                <span>Custom WordPress ACF Pro &amp; High-Ticket Booking Portals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00F5FF] shrink-0" />
                <span>Stripe, PayPal, JazzCash &amp; Easypaisa Payment Gateways</span>
              </li>
            </ul>

            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-mono text-[#00F5FF] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Explore All Web Services</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card B: Paid Ads & Leads */}
          <div className="glass-card rounded-2xl p-8 border border-slate-800 hover:border-[#00F5FF]/40 transition-all space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#00F5FF]/10 text-[#00F5FF] flex items-center justify-center">
                <Megaphone className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-slate-400">Pillar 02 // Growth</span>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-display text-white">
                Paid Acquisition &amp; Lead Generation
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Targeted Meta, TikTok, and Google Search campaigns with server-side CAPI tracking configured to bring buying customers.
              </p>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00F5FF] shrink-0" />
                <span>Meta Ads (Facebook &amp; Instagram) with CBO Scaling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00F5FF] shrink-0" />
                <span>Google Search Intent Ads for High-Ticket Client Booking</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00F5FF] shrink-0" />
                <span>Server-Side Tracking (Meta CAPI + Google Tag Manager)</span>
              </li>
            </ul>

            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-mono text-[#00F5FF] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Explore Paid Ads Funnels</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. PERFORMANCE CONTRAST WIDGET (DATA-DRIVEN PROOF) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PerformanceContrast onClaimDemo={() => onNavigate('demo')} />
      </section>

      {/* 5. FEATURED WORK WITH HOVER ELEVATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#00F5FF] uppercase">
              02. Proven Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-1">
              Featured Case Studies
            </h2>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="text-sm font-mono text-[#00F5FF] hover:underline flex items-center gap-1 self-start sm:self-auto font-medium"
          >
            <span>View All 6 Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-[#00F5FF]/50 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 w-full bg-[#112240] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-[#040d1a]/80 text-[#00F5FF] text-[10px] font-mono font-bold border border-[#00F5FF]/20">
                    {project.metrics[0].value} {project.metrics[0].label}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">
                    {project.categoryLabel}
                  </div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-[#00F5FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenProject(project)}
                  className="w-full py-2.5 rounded-xl bg-[#112240] hover:bg-[#00F5FF] hover:text-[#0A192F] text-xs font-mono font-bold tracking-wider uppercase transition-colors border border-slate-700 flex items-center justify-center gap-1.5"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. TECH MARQUEE */}
      <section className="py-8 bg-[#040d1a] border-y border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-around gap-8 text-xs font-mono text-slate-400 flex-wrap">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="text-[#00F5FF]">●</span> WORDPRESS &amp; ACF PRO
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="text-[#00F5FF]">●</span> SHOPIFY &amp; LIQUID
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="text-[#00F5FF]">●</span> REACT &amp; TAILWIND
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="text-[#00F5FF]">●</span> STRIPE &amp; JAZZCASH
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="text-[#00F5FF]">●</span> META CAPI SERVER TRACKING
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="text-[#00F5FF]">●</span> GOOGLE ADS &amp; PMAX
          </span>
        </div>
      </section>

      {/* 8. QUICK LEAD SUBMIT FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-8 border border-[#00F5FF]/30 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
              Claim Your Free Demo Homepage Today
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Send your project specs to Abdul Moeen. You only pay if you love the demo.
            </p>
          </div>

          <form onSubmit={handleQuickSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={quickName}
                  onChange={(e) => setQuickName(e.target.value)}
                  placeholder="e.g. Alex Henderson"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">WhatsApp / Phone *</label>
                <input
                  type="text"
                  required
                  value={quickPhone}
                  onChange={(e) => setQuickPhone(e.target.value)}
                  placeholder="e.g. +92 341 7497785"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Project Type</label>
                <select
                  value={quickBiz}
                  onChange={(e) => setQuickBiz(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none cursor-pointer"
                >
                  <option value="Shopify & E-Commerce Store">Shopify &amp; E-Commerce Store</option>
                  <option value="WordPress Custom Portal">WordPress Custom Portal</option>
                  <option value="Paid Ads & Lead Funnel">Paid Ads &amp; Lead Funnel</option>
                  <option value="Payment Gateway Integration">Payment Gateway Integration</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Estimated Budget</label>
                <select
                  value={quickBudget}
                  onChange={(e) => setQuickBudget(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none cursor-pointer"
                >
                  <option value="$100 / Rs 30,000">$100 / Rs 30,000 (Paid Acquired Leads)</option>
                  <option value="$200 / Rs 40,000">$200 / Rs 40,000 (Web Development)</option>
                  <option value="$300 / Rs 20,000">$300 / Rs 20,000 (Payment Gateway Setup)</option>
                  <option value="$500+ / Rs 100k+">$500+ / Rs 100k+ (Complete Enterprise Stack)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#00F5FF] hover:bg-[#4df8ff] text-[#0A192F] font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,245,255,0.4)] flex items-center justify-center gap-2"
            >
              <span>Submit &amp; Open WhatsApp Chat</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

          {formSubmitted && (
            <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs text-center font-medium">
              ✓ Demo request prepared! Opening WhatsApp chat with Abdul Moeen. You can also email us directly at <span className="font-mono text-white underline">{CONTACT_INFO.email}</span>.
            </div>
          )}
        </div>
      </section>

    </div>
  );
};
