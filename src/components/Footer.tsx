import React from 'react';
import { Mail, MessageCircle, Briefcase, ArrowUpRight, Copy, Check } from 'lucide-react';
import { Page } from '../types';
import { CONTACT_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onCopyEmail: () => void;
  isEmailCopied: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onCopyEmail,
  isEmailCopied,
}) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040d1a] border-t border-[#00F5FF]/15 pt-16 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Lead Bio */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left flex items-center gap-2 group focus:outline-none"
            >
              <span className="font-display font-extrabold text-2xl tracking-wider text-white group-hover:text-[#00F5FF] transition-colors">
                TRINOVA
              </span>
              <span className="w-2 h-2 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]" />
            </button>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Led by <span className="text-white font-medium">Abdul Moeen</span>, TRINOVA creates modern, responsive websites and digital experiences for businesses and individuals.
            </p>

            <div className="p-3.5 rounded-xl bg-[#112240]/40 border border-slate-800 text-xs font-mono space-y-1.5">
              <div className="flex items-center gap-2 text-[#00F5FF]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Independent web development · Client-focused delivery</span>
              </div>
              <div className="text-slate-400">
                Remote collaboration · Based in Pakistan
              </div>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-200 uppercase mb-4">
              Website Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-slate-400 hover:text-[#00F5FF] transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-slate-400 hover:text-[#00F5FF] transition-colors"
                >
                  Engineering & Ads Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="text-slate-400 hover:text-[#00F5FF] transition-colors"
                >
                  Portfolio & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('demo')}
                  className="text-[#4df8ff] hover:text-white transition-colors flex items-center gap-1 font-medium"
                >
                  <span>Free Demo Homepage</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-slate-400 hover:text-[#00F5FF] transition-colors"
                >
                  About Abdul Moeen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-slate-400 hover:text-[#00F5FF] transition-colors"
                >
                  Contact & Hire
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Communication Channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-200 uppercase mb-4">
              Direct Contact
            </h4>

            {/* Email Box */}
            <div className="p-3.5 rounded-xl bg-[#112240]/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Official Inquiries</span>
                <span className="text-emerald-400 font-semibold">Active</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm font-mono text-white hover:text-[#00F5FF] transition-colors truncate"
                >
                  {CONTACT_INFO.email}
                </a>
                <button
                  onClick={onCopyEmail}
                  className="p-1.5 rounded-md hover:bg-[#1f355b] text-slate-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {isEmailCopied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 text-xs font-mono font-bold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#112240] border border-slate-700 text-slate-200 hover:border-[#00F5FF] text-xs font-mono font-bold transition-all"
              >
                <Briefcase className="w-4 h-4 text-[#00F5FF]" />
                <span>Email</span>
              </a>
            </div>

            <div className="text-[11px] font-mono text-slate-400">
              Direct Phone: <span className="text-slate-200 font-semibold">{CONTACT_INFO.phone}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {currentYear} TRINOVA Digital Labs. All rights reserved.
          </div>
          <div className="text-slate-300 font-medium">
            Created by <span className="text-[#00F5FF] font-bold">Abdulmoeen</span>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('demo')}
              className="text-[#00F5FF] hover:underline"
            >
              Request Free Demo
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-white transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>

      </div>

      {/* Very Bottom Signature Bar */}
      <div className="mt-8 pt-3 pb-1 border-t border-slate-900/90 text-center">
        <p className="text-[11px] font-mono text-slate-500 tracking-wider">
          Created by <span className="text-[#00F5FF] font-bold">Abdulmoeen</span>
        </p>
      </div>
    </footer>
  );
};
