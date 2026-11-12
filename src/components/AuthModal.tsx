import React, { useEffect, useState } from 'react';
import { X, Mail, Lock, User, Sparkles, LogIn, UserPlus, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
  onSuccess: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
  onSuccess,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setErrorMsg(null);
      setSuccessNotice(null);
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessNotice(null);
    setLoading(true);

    try {
      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: fullName.trim(),
            },
            emailRedirectTo: window.location.origin,
          },
        });

        if (error) {
          setErrorMsg(error.message);
        } else {
          setSuccessNotice(
            data.session
              ? 'Account created and signed in successfully!'
              : 'Signup successful! Please confirm your email, then log in.'
          );
          if (data.session) {
            setTimeout(() => {
              onSuccess(email.trim());
              onClose();
            }, 900);
          }
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          setErrorMsg(error.message);
        } else if (data.user) {
          setSuccessNotice('Signed in successfully! Welcome back.');
          setTimeout(() => {
            onSuccess(data.user?.email || email.trim());
            onClose();
          }, 900);
        }
      }
    } catch (err: any) {
      setErrorMsg(err?.message || 'Authentication error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#040d1a]/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#0A192F] border border-[#00F5FF]/30 rounded-2xl shadow-[0_0_40px_rgba(0,245,255,0.25)] overflow-hidden text-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#112240] hover:bg-[#1f355b] text-slate-300 hover:text-white transition-colors border border-slate-700"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#112240] border border-[#00F5FF]/30 text-xs font-mono text-[#00F5FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRINOVA Client Portal</span>
          </div>
          <h2 className="text-2xl font-bold font-display text-white">
            {mode === 'login' ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p className="text-xs text-slate-400">
            {mode === 'login'
              ? 'Log in to track project proposals, demos & sprint updates'
              : 'Sign up to start your project with Abdul Moeen & TRINOVA'}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="grid grid-cols-2 p-1 bg-[#112240] rounded-xl border border-slate-800 mb-5 text-xs font-mono">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setErrorMsg(null);
            }}
            className={`py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-1.5 ${
              mode === 'login'
                ? 'bg-[#00F5FF] text-[#0A192F] shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Login</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('signup');
              setErrorMsg(null);
            }}
            className={`py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-1.5 ${
              mode === 'signup'
                ? 'bg-[#00F5FF] text-[#0A192F] shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Sign Up</span>
          </button>
        </div>

        {/* Alerts */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        {successNotice && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>{successNotice}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Marcus Kensington"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-xs placeholder-slate-500 focus:border-[#00F5FF] outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-xs placeholder-slate-500 focus:border-[#00F5FF] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#040d1a] border border-slate-700 text-white text-xs placeholder-slate-500 focus:border-[#00F5FF] outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#00F5FF] hover:bg-[#4df8ff] disabled:opacity-50 text-[#0A192F] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,245,255,0.4)] flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing with Supabase...</span>
              </>
            ) : mode === 'login' ? (
              <>
                <LogIn className="w-4 h-4" />
                <span>Log In</span>
              </>
            ) : (
              <>
                <UserPlus className="w-4 h-4" />
                <span>Create Account</span>
              </>
            )}
          </button>
        </form>

        {/* Footer Toggle text */}
        <div className="mt-5 text-center text-xs text-slate-400">
          {mode === 'login' ? (
            <span>
              Don't have an account yet?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('signup');
                  setErrorMsg(null);
                }}
                className="text-[#00F5FF] hover:underline font-semibold"
              >
                Sign up here
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setErrorMsg(null);
                }}
                className="text-[#00F5FF] hover:underline font-semibold"
              >
                Log in here
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
