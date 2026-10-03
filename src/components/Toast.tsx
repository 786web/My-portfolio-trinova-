import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#112240] border border-[#00F5FF]/50 text-white rounded-xl shadow-[0_0_25px_rgba(0,245,255,0.3)] animate-bounce duration-300">
      <CheckCircle2 className="w-5 h-5 text-[#00F5FF] shrink-0" />
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-white p-1"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
