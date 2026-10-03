import React, { useState } from 'react';
import { 
  Sparkles, 
  Calculator, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Mail, 
  ShieldCheck,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const FreeDemoPage: React.FC = () => {
  // Calculator States
  const [adSpend, setAdSpend] = useState<number>(1500);
  const [conversionRate, setConversionRate] = useState<number>(2.8);
  const [avgTicket, setAvgTicket] = useState<number>(65);

  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [businessType, setBusinessType] = useState('E-Commerce & Shopify');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Calculations
  // Estimate CPC ~$1.20
  const estimatedVisitors = Math.round(adSpend / 1.2);
  const estimatedConversions = Math.round((estimatedVisitors * (conversionRate / 100)));
  const projectedRevenue = Math.round(estimatedConversions * avgTicket);
  const projectedROAS = adSpend > 0 ? (projectedRevenue / adSpend).toFixed(1) : '0';

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `Hi Abdul Moeen,\n\nI want to claim my FREE Demo Homepage + Leads Plan!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCurrent Website: ${websiteUrl || 'New Business'}\nBusiness Type: ${businessType}\nProject Notes: ${notes}\n\nProjected Ad Spend: $${adSpend}/mo\nTarget Revenue: $${projectedRevenue}/mo`
    );

    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${waText}`, '_blank');
  };

  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* 1. Header & Hero Guarantee */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#112240] border border-[#00F5FF]/30 text-xs font-mono text-[#00F5FF]">
          <Sparkles className="w-4 h-4 text-[#00F5FF]" />
          <span>Zero-Risk Guarantee · Led by Abdul Moeen</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-display font-black text-white leading-tight">
          Claim Your Free Demo Homepage <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-cyan-300">
            + Custom Leads Strategy
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          "I will build a custom demo homepage for your business and prepare your exact customer acquisition funnel. You pay only if you like it. Zero upfront payment required."
        </p>
      </section>

      {/* 2. Four-Step Demo Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-[#00F5FF] font-bold">Step 01</span>
            <h3 className="text-base font-bold font-display text-white">
              Share Your Vision
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fill the simple form below with your brand details, goals, or existing website URL.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-[#00F5FF] font-bold">Step 02</span>
            <h3 className="text-base font-bold font-display text-white">
              48-Hour Demo Build
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Abdul Moeen crafts a customized, high-converting homepage mockup and architecture.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-[#00F5FF] font-bold">Step 03</span>
            <h3 className="text-base font-bold font-display text-white">
              Video Review &amp; Plan
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Receive a private Loom walkthrough showing the conversion layout &amp; ad strategy.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <span className="text-xs font-mono text-emerald-400 font-bold">Step 04</span>
            <h3 className="text-base font-bold font-display text-white">
              Pay Only If Satisfied
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              If you love the concept, we proceed with full sprint development. If not, you owe $0.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Interactive ROI & Lead Revenue Calculator */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[#00F5FF]/30 space-y-8">
          
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-[#00F5FF]/10 text-[#00F5FF] flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                Interactive Revenue &amp; ROAS Calculator
              </h2>
              <p className="text-xs text-slate-400">
                Simulate how our high-velocity funnels turn traffic into profitable sales.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Sliders */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Ad Spend */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300">Monthly Advertising Budget</span>
                  <span className="text-[#00F5FF] font-bold text-sm tabular-nums">
                    ${adSpend.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="10000"
                  step="100"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full accent-[#00F5FF] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$300</span>
                  <span>$5,000</span>
                  <span>$10,000</span>
                </div>
              </div>

              {/* Slider 2: Conversion Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300">Target Store Conversion Rate</span>
                  <span className="text-[#00F5FF] font-bold text-sm tabular-nums">
                    {conversionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="6.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full accent-[#00F5FF] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>0.8% (Avg Store)</span>
                  <span>2.8% (TRINOVA Optimized)</span>
                  <span>6.0% (High-Ticket)</span>
                </div>
              </div>

              {/* Slider 3: Average Order Value / Deal Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300">Average Order / Lead Value</span>
                  <span className="text-[#00F5FF] font-bold text-sm tabular-nums">
                    ${avgTicket}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="5"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full accent-[#00F5FF] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$20</span>
                  <span>$250</span>
                  <span>$500+</span>
                </div>
              </div>

            </div>

            {/* Right: Results Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#040d1a] border border-[#00F5FF]/30 space-y-6 text-center">
              
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-slate-400">
                  Projected Monthly Revenue
                </span>
                <div className="text-3xl sm:text-4xl font-display font-black text-[#00F5FF] tabular-nums">
                  ${projectedRevenue.toLocaleString()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                <div className="p-2.5 rounded-xl bg-[#112240] text-center">
                  <div className="text-xs font-mono text-slate-400">Est. Monthly Orders</div>
                  <div className="text-lg font-bold text-white tabular-nums mt-0.5">
                    {estimatedConversions}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#112240] text-center">
                  <div className="text-xs font-mono text-slate-400">Projected ROAS</div>
                  <div className="text-lg font-bold text-emerald-400 tabular-nums mt-0.5">
                    {projectedROAS}x
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400">
                Based on sub-second load times, 1-click checkout upsells &amp; server-side tracking.
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. The Free Demo Request Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[#00F5FF]/40 space-y-6">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
              Request Your Free Demo Homepage
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Direct submission to Abdul Moeen. Response guaranteed within 15 minutes.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Marcus Kensington"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Work Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. marcus@brand.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">WhatsApp / Phone Number *</label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +92 341 7497785"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Existing Website URL (if any)</label>
                <input
                  type="text"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="e.g. www.mybrand.com or 'New Idea'"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">Business Industry</label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none cursor-pointer"
              >
                <option value="Shopify & E-Commerce Store">Shopify &amp; D2C E-Commerce</option>
                <option value="Real Estate & High-Ticket Booking">Real Estate &amp; High-Ticket Booking</option>
                <option value="Hospitality & Restaurant">Hospitality &amp; Restaurant</option>
                <option value="B2B Wholesale & Commercial">B2B Wholesale &amp; Commercial</option>
                <option value="Local Service Clinic">Local Service Clinic / Health</option>
                <option value="Other Custom Project">Other Custom Project</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">Tell Us About Your Project &amp; What You Need</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="What are your goals? Are you looking for a redesign, higher conversion speed, or profitable ads?"
                className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#00F5FF] hover:bg-[#4df8ff] text-[#0A192F] font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,245,255,0.4)] flex items-center justify-center gap-2"
            >
              <span>Shall I send your free demo + leads plan?</span>
              <Send className="w-4 h-4" />
            </button>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs text-center space-y-2">
                <div className="font-bold">✓ Free Demo Request Dispatched!</div>
                <div>
                  Abdul Moeen will initiate your demo. You can also write directly to{' '}
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-white underline font-mono">
                    {CONTACT_INFO.email}
                  </a>.
                </div>
              </div>
            )}

          </form>

        </div>
      </section>

    </div>
  );
};
