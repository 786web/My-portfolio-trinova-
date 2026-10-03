import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const WhatsAppFloating: React.FC = () => {
  const message = encodeURIComponent(
    "Hi Abdul Moeen, I visited your TRINOVA website and would like to claim my Free Demo Homepage and Leads Plan."
  );

  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300 group"
      aria-label="Chat on WhatsApp with Abdul Moeen"
    >
      <MessageCircle className="w-5 h-5 fill-slate-950 shrink-0" />
      <span className="hidden sm:inline text-xs font-mono font-bold tracking-wider">
        WhatsApp ({CONTACT_INFO.phone})
      </span>
    </a>
  );
};
