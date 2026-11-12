import React, { useState } from 'react';
import { Sparkles, MessageCircle, Mail, Menu, X, ArrowUpRight, Copy, Check, LogIn, UserPlus, LogOut, User } from 'lucide-react';
import { Page } from '../types';
import { CONTACT_INFO } from '../data/content';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onCopyEmail: () => void;
  isEmailCopied: boolean;
  currentUserEmail?: string | null;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onSignOut: () => void;
  userRole?: 'admin' | 'client' | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onCopyEmail,
  isEmailCopied,
  currentUserEmail,
  onOpenAuth,
  onSignOut,
  userRole,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: Page; label: string; highlight?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'demo', label: 'Free Demo', highlight: true },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    ...(currentUserEmail ? [{ id: 'dashboard' as Page, label: userRole === 'admin' ? 'Admin Panel' : 'My Dashboard' }] : []),
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification Trust Strip */}
      <div className="w-full bg-[#040d1a] border-b border-[#00F5FF]/15 py-1.5 px-4 text-xs font-mono text-slate-300 flex items-center justify-between z-50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#4df8ff]">
            <span className="flex items-center gap-1.5 font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              INDEPENDENT WEB DEVELOPER · OPEN FOR PROJECTS
            </span>
            <span className="text-slate-600 hidden lg:inline">|</span>
            <span className="hidden lg:inline text-xs text-slate-300">
              🟢 Available for New Client Sprints
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs">
            <button
              onClick={onCopyEmail}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#00F5FF] transition-colors"
              title="Click to copy email address"
            >
              <Mail className="w-3.5 h-3.5 text-[#00F5FF]" />
              <span className="font-mono">{CONTACT_INFO.email}</span>
              {isEmailCopied ? (
                <Check className="w-3 h-3 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3 text-slate-500" />
              )}
            </button>
            <span className="text-slate-600">|</span>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header (Top Bar Contract: 3 Zones) */}
      <header className="sticky top-0 z-40 glass-nav transition-all duration-300 border-b border-[#00F5FF]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Single Text Element Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00F5FF]/20 to-[#112240] border border-[#00F5FF]/40 flex items-center justify-center group-hover:border-[#00F5FF] transition-all">
              <span className="font-display font-black text-xl text-[#00F5FF]">T</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-2xl tracking-wider text-white group-hover:text-[#00F5FF] transition-colors">
                TRINOVA
              </span>
              <span className="w-2 h-2 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]" />
            </div>
          </button>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors ${
                    isActive
                      ? 'text-[#00F5FF] font-semibold'
                      : 'text-slate-300 hover:text-[#00F5FF]'
                  } ${link.highlight && !isActive ? 'text-[#4df8ff]' : ''}`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.highlight && <Sparkles className="w-3.5 h-3.5 text-[#00F5FF]" />}
                    {link.label}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00F5FF] rounded-full shadow-[0_0_8px_#00F5FF]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 Primary Actions + Login / Sign Up */}
          <div className="hidden sm:flex items-center gap-2.5">
            {currentUserEmail ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#112240] border border-[#00F5FF]/30 text-xs font-mono text-slate-200">
                  <User className="w-3.5 h-3.5 text-[#00F5FF]" />
                  <span className="max-w-[120px] truncate">{currentUserEmail}</span>
                </div>
                <button
                  onClick={onSignOut}
                  title="Sign out"
                  className="p-2 rounded-full text-slate-400 hover:text-red-400 hover:bg-[#112240] transition-colors border border-slate-700/60"
                  aria-label="Sign out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAuth('login')}
                  className="px-3 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-white hover:bg-[#112240] transition-colors flex items-center gap-1"
                >
                  <LogIn className="w-3.5 h-3.5 text-[#00F5FF]" />
                  <span>Log In</span>
                </button>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-[#0A192F] bg-[#00F5FF] hover:bg-[#4df8ff] transition-all shadow-[0_0_12px_rgba(0,245,255,0.3)] flex items-center gap-1"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Sign Up</span>
                </button>
              </div>
            )}

            <button
              onClick={() => handleNavClick('demo')}
              className="px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-[#112240] hover:bg-[#1f355b] text-[#00F5FF] border border-[#00F5FF]/40 hover:border-[#00F5FF] shadow-sm transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>Free Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-[#00F5FF] p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-card border-x-0 border-t border-[#00F5FF]/20 px-6 py-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left py-2 text-base font-medium transition-colors ${
                  currentPage === link.id
                    ? 'text-[#00F5FF] font-bold'
                    : 'text-slate-200 hover:text-[#00F5FF]'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Mobile Auth actions */}
            <div className="pt-3 border-t border-slate-800 space-y-2">
              {currentUserEmail ? (
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#112240] border border-slate-700">
                  <span className="text-xs font-mono text-slate-300 truncate">{currentUserEmail}</span>
                  <button
                    onClick={() => {
                      onSignOut();
                      setMobileMenuOpen(false);
                    }}
                    className="text-xs font-mono text-red-400 hover:underline flex items-center gap-1"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      onOpenAuth('login');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-2.5 rounded-lg bg-[#112240] border border-slate-700 text-xs font-mono text-slate-200 font-semibold flex items-center justify-center gap-1.5"
                  >
                    <LogIn className="w-3.5 h-3.5 text-[#00F5FF]" />
                    <span>Log In</span>
                  </button>
                  <button
                    onClick={() => {
                      onOpenAuth('signup');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-2.5 rounded-lg bg-[#00F5FF] text-[#0A192F] text-xs font-mono font-bold flex items-center justify-center gap-1.5"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Sign Up</span>
                  </button>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-2">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#112240] border border-slate-700 text-xs font-mono text-slate-200"
              >
                <Mail className="w-3.5 h-3.5 text-[#00F5FF]" />
                <span>{CONTACT_INFO.email}</span>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
