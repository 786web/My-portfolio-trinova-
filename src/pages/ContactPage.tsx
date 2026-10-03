import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Briefcase, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface ContactPageProps {
  onCopyEmail: () => void;
  isEmailCopied: boolean;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onCopyEmail,
  isEmailCopied,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('E-Commerce & Shopify');
  const [budget, setBudget] = useState('$600 - $1,500');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `Hi Abdul Moeen,\n\nInquiry from TRINOVA Website:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness Type: ${businessType}\nBudget: ${budget}\nMessage: ${message}`
    );

    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${waText}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-20 pt-8">
      
      {/* 1. Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-mono font-bold tracking-widest text-[#00F5FF] uppercase">
          Direct Communications Hub
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-black text-white">
          Let's Build Something Exceptional
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Reach out directly to <strong className="text-white font-semibold">Abdul Moeen</strong> to claim your free demo homepage or discuss your web development and ad acquisition goals.
        </p>
      </section>

      {/* 2. Direct Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Official Email */}
          <div className="glass-card rounded-2xl p-6 border-2 border-[#00F5FF]/40 space-y-4 relative overflow-hidden group shadow-[0_0_25px_rgba(0,245,255,0.15)]">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#00F5FF]/15 text-[#00F5FF] flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                Official Inquiries
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">Primary Direct Email</h3>
              <p className="text-xs text-slate-400 mt-0.5">Checked daily by Abdul Moeen</p>
            </div>

            <div className="p-3 rounded-xl bg-[#040d1a] border border-slate-800 flex items-center justify-between gap-2">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-xs sm:text-sm font-mono text-[#00F5FF] hover:underline truncate font-semibold"
              >
                {CONTACT_INFO.email}
              </a>
              <button
                onClick={onCopyEmail}
                className="p-1.5 rounded-lg hover:bg-[#112240] text-slate-300 hover:text-white transition-colors shrink-0"
                title="Copy email address"
              >
                {isEmailCopied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Project%20Inquiry%20-%20TRINOVA`}
              className="w-full py-2.5 rounded-xl bg-[#00F5FF] hover:bg-[#4df8ff] text-[#0A192F] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
            >
              <span>Compose Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Direct WhatsApp */}
          <div className="glass-card rounded-2xl p-6 border border-emerald-500/30 space-y-4 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded font-bold">
                Fastest Response
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">Direct WhatsApp</h3>
              <p className="text-xs text-slate-400 mt-0.5">Average reply time: under 15 mins</p>
            </div>

            <div className="p-3 rounded-xl bg-[#040d1a] border border-slate-800">
              <span className="text-sm font-mono text-emerald-400 font-bold block">
                {CONTACT_INFO.phone}
              </span>
            </div>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Hi Abdul Moeen, I would like to discuss a project with TRINOVA.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Upwork Profile */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#112240] text-[#00F5FF] flex items-center justify-center border border-slate-700">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded">
                Top Rated Pro
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">Upwork Direct Contract</h3>
              <p className="text-xs text-slate-400 mt-0.5">100% Job Success score &amp; escrow safe</p>
            </div>

            <div className="p-3 rounded-xl bg-[#040d1a] border border-slate-800 text-xs font-mono text-slate-300">
              Contract with milestone protection
            </div>

            <a
              href={CONTACT_INFO.upworkProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#112240] hover:bg-[#1f355b] border border-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
            >
              <span>View Upwork Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 3. Detailed Contact & Proposal Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[#00F5FF]/30 space-y-6">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
              Send a Detailed Project Proposal
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Receive a comprehensive scope breakdown and free demo homepage proposal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Turner"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">WhatsApp / Phone *</label>
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
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Estimated Budget</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none cursor-pointer"
                >
                  <option value="$100 / Rs 30,000">$100 / Rs 30,000 (Paid Acquired Leads)</option>
                  <option value="$200 / Rs 40,000">$200 / Rs 40,000 (Web Development)</option>
                  <option value="$300 / Rs 20,000">$300 / Rs 20,000 (Payment Gateway Setup)</option>
                  <option value="$500+ / Rs 100k+">$500+ / Rs 100k+ (Complete Enterprise Stack)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">Business &amp; Project Type</label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none cursor-pointer"
              >
                <option value="Shopify & E-Commerce Store">Shopify &amp; D2C E-Commerce</option>
                <option value="WordPress Custom Platform">WordPress Custom Platform</option>
                <option value="Paid Ad Funnels (Meta / Google)">Paid Ad Funnels (Meta / Google)</option>
                <option value="Payment Gateway Integration (Stripe / JazzCash)">Payment Gateway Integration</option>
                <option value="Speed Optimization & CRO">Speed Optimization &amp; CRO</option>
                <option value="Other Custom Request">Other Custom Request</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">Project Scope / Requirements</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your brand, current challenges, target sales, or design requirements..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-sm focus:border-[#00F5FF] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#00F5FF] hover:bg-[#4df8ff] text-[#0A192F] font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,245,255,0.4)] flex items-center justify-center gap-2"
            >
              <span>Submit &amp; Open WhatsApp Conversation</span>
              <Send className="w-4 h-4" />
            </button>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs text-center space-y-2">
                <div className="font-bold">✓ Proposal Prepared!</div>
                <div>
                  Your inquiry is ready to send. You can also email us directly anytime at{' '}
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-white underline font-mono">
                    {CONTACT_INFO.email}
                  </a>.
                </div>
              </div>
            )}

          </form>

        </div>
      </section>

      {/* 4. Trust Summary */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#040d1a] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00F5FF]" />
            <span>Response guarantee: within 15 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Upwork Top Rated &bull; Escrow Protection Guaranteed</span>
          </div>
        </div>
      </section>

    </div>
  );
};
