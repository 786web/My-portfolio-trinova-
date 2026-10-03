import React, { useState } from 'react';
import { 
  Laptop, 
  Megaphone, 
  CreditCard, 
  Gauge, 
  Check, 
  Clock, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Page } from '../types';
import { SERVICES, PRICING_PLANS, FAQS, CONTACT_INFO } from '../data/content';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Laptop className="w-6 h-6 text-[#00F5FF]" />;
      case 'lead-generation':
        return <Megaphone className="w-6 h-6 text-[#00F5FF]" />;
      case 'payments-checkout':
        return <CreditCard className="w-6 h-6 text-[#00F5FF]" />;
      case 'speed-cro':
        return <Gauge className="w-6 h-6 text-[#00F5FF]" />;
      default:
        return <Laptop className="w-6 h-6 text-[#00F5FF]" />;
    }
  };

  return (
    <div className="space-y-24 pb-20 pt-8">
      
      {/* 1. Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-mono font-bold tracking-widest text-[#00F5FF] uppercase">
          Engineering &amp; Growth Capabilities
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-black text-white">
          Services Built for Direct Revenue
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          We combine bespoke web engineering with performance marketing to create scalable customer acquisition engines for brands worldwide.
        </p>
      </section>

      {/* 2. Deep Dive Service Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SERVICES.map((srv, idx) => (
          <div
            key={srv.id}
            className="glass-card rounded-2xl p-8 sm:p-10 border border-slate-800 hover:border-[#00F5FF]/40 transition-all space-y-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#00F5FF]/10 border border-[#00F5FF]/30 flex items-center justify-center shrink-0">
                  {getServiceIcon(srv.id)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-wider">
                      {srv.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      // Pillar 0{idx + 1}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                    {srv.title}
                  </h2>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {srv.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 self-start lg:self-auto">
                <div className="text-left lg:text-right">
                  <div className="text-xs font-mono text-slate-400">Starting from</div>
                  <div className="text-2xl font-black text-[#00F5FF] font-display">
                    {srv.startingPrice}
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('demo')}
                  className="px-5 py-2.5 rounded-xl bg-[#00F5FF] hover:bg-[#4df8ff] text-[#0A192F] font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Request Demo
                </button>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
              {srv.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
                  Core Technical Capabilities
                </h3>
                <ul className="space-y-2.5">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#00F5FF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables & Timeline */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
                  What You Receive (Deliverables)
                </h3>
                <ul className="space-y-2.5">
                  {srv.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Clock className="w-4 h-4 text-[#00F5FF]" />
                  <span>Estimated Delivery Sprint: <strong className="text-white">{srv.timeline}</strong></span>
                </div>
              </div>

            </div>

            {/* Tech Tags */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-slate-400 uppercase mr-2">Technologies:</span>
              {srv.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-[#112240] text-slate-300 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}
      </section>

      {/* 3. Pricing Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00F5FF] uppercase">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-1">
            Choose Your Growth Sprint
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Every package is backed by our Free Demo Homepage guarantee. You see the work first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all ${
                plan.popular
                  ? 'bg-[#112240] border-2 border-[#00F5FF] shadow-[0_0_30px_rgba(0,245,255,0.25)] relative'
                  : 'glass-card border border-slate-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#00F5FF] text-[#0A192F] text-[11px] font-mono font-bold uppercase tracking-wider">
                  Most Popular for Scaling
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-display text-white">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {plan.bestFor}
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-black text-white tabular-nums">
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    / {plan.billingPeriod}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {plan.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    What's Included:
                  </span>
                  <ul className="space-y-2">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#00F5FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('demo')}
                  className={`w-full py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 ${
                    plan.popular
                      ? 'bg-[#00F5FF] hover:bg-[#4df8ff] text-[#0A192F] shadow-[0_0_20px_rgba(0,245,255,0.4)]'
                      : 'bg-[#112240] hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>Select &amp; Request Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00F5FF] uppercase">
            Got Questions?
          </span>
          <h2 className="text-3xl font-display font-black text-white mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl border border-slate-800 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#00F5FF]">0{idx + 1}</span>
                  <span className="text-sm font-semibold text-white">
                    {faq.question}
                  </span>
                </div>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#00F5FF] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 mt-1">
                  <div className="pt-3">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom Guarantee */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#112240] to-[#040d1a] border border-[#00F5FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-[#00F5FF] shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-white">Need a Custom Scope or Upwork Contract?</h4>
              <p className="text-xs text-slate-300">
                Contact Abdul Moeen directly via email ({CONTACT_INFO.email}) or WhatsApp for a customized quote.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-[#00F5FF] hover:bg-[#4df8ff] text-[#0A192F] font-bold text-xs uppercase tracking-wider transition-all shrink-0"
          >
            Contact Abdul Moeen
          </button>
        </div>
      </section>

    </div>
  );
};
