import React from 'react';
import { Mail, Phone, Clock, MapPin, MessageSquare, ArrowRight, ShieldCheck, Crown, Terminal } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../common/BrandIcons';
import { useData } from '../../context/DataContext';
import { useTheme } from '../../context/ThemeContext';

export const ContactInfoCard = () => {
  const { settings } = useData();
  const { theme, isLuxury, isFuturistic } = useTheme();

  return (
    <div className="space-y-6">
      {/* Studio Contact Card */}
      <div className={`rounded-3xl p-6 sm:p-8 border space-y-6 transition-all ${
        isLuxury
          ? 'bg-[#FFFFFF] border-[#9E7B4F]/30 shadow-md text-[#1C1917]'
          : isFuturistic
          ? 'bg-[#060D1E] border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,240,255,0.1)] text-[#F0FDF4]'
          : 'glass-panel border-slate-800 text-slate-100'
      }`}>
        <div>
          <span className={`text-xs font-mono font-semibold uppercase tracking-wider block mb-1 ${
            isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'
          }`}>
            {isLuxury ? 'Direct Dialogue Channels' : isFuturistic ? 'SECURE_COMM_CHANNELS' : 'Direct Communication Channels'}
          </span>
          <h3 className={`text-xl sm:text-2xl font-bold ${
            isLuxury ? 'text-[#1C1917] font-serif font-bold' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'
          }`}>
            {isLuxury ? 'Engage the Principals' : isFuturistic ? 'TERMINAL_INTERFACE' : 'Let’s Connect Directly'}
          </h3>
          <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${
            isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'
          }`}>
            Direct access to lead software architects Subham Bera & Rahul Kumar Singh. Reach out via WhatsApp or email for immediate engagement.
          </p>
        </div>

        {/* WhatsApp & Email Quick Action Blocks */}
        <div className="space-y-3">
          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${settings.whatsappNumber?.replace(/\+/g, '')}?text=Greetings%20${settings.agencyName},%20I%20wish%20to%20discuss%20a%20new%20web%20architecture%20project.`}
            target="_blank"
            rel="noreferrer"
            className={`p-4 rounded-2xl border transition-all flex items-center justify-between group block ${
              isLuxury
                ? 'bg-[#FAF8F5] border-[#9E7B4F]/35 hover:border-[#9E7B4F]'
                : isFuturistic
                ? 'bg-[#02040A] border-[#00F0FF]/40 hover:border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                : 'bg-emerald-950/20 border-emerald-500/30 hover:border-emerald-500/60'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                isLuxury ? 'bg-[#FFFFFF] text-[#9E7B4F] border border-[#9E7B4F]/30' : isFuturistic ? 'bg-[#060D1E] text-[#00F0FF] border border-[#00F0FF]/50' : 'bg-emerald-500/20 text-emerald-400'
              }`}>
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-[10px] font-mono uppercase tracking-wider block ${
                  isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-emerald-400'
                }`}>
                  WhatsApp Direct Channel
                </span>
                <span className={`text-sm font-bold transition-colors ${
                  isLuxury ? 'text-[#1C1917] group-hover:text-[#9E7B4F]' : isFuturistic ? 'text-[#F0FDF4] group-hover:text-[#00F0FF]' : 'text-white group-hover:text-emerald-300'
                }`}>
                  {settings.whatsappDisplay}
                </span>
              </div>
            </div>
            <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
              isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-emerald-400'
            }`} />
          </a>

          {/* Email Direct */}
          <a
            href={`mailto:${settings.email}`}
            className={`p-4 rounded-2xl border transition-all flex items-center justify-between group block ${
              isLuxury
                ? 'bg-[#FAF8F5] border-[#9E7B4F]/35 hover:border-[#9E7B4F]'
                : isFuturistic
                ? 'bg-[#02040A] border-[#00F0FF]/40 hover:border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                : 'bg-blue-950/20 border-blue-500/30 hover:border-blue-500/60'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                isLuxury ? 'bg-[#FFFFFF] text-[#9E7B4F] border border-[#9E7B4F]/30' : isFuturistic ? 'bg-[#060D1E] text-[#00F0FF] border border-[#00F0FF]/50' : 'bg-blue-500/20 text-blue-400'
              }`}>
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-[10px] font-mono uppercase tracking-wider block ${
                  isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'
                }`}>
                  Direct Studio Email
                </span>
                <span className={`text-sm font-bold transition-colors ${
                  isLuxury ? 'text-[#1C1917] group-hover:text-[#9E7B4F]' : isFuturistic ? 'text-[#F0FDF4] group-hover:text-[#00F0FF]' : 'text-white group-hover:text-blue-300'
                }`}>
                  {settings.email}
                </span>
              </div>
            </div>
            <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
              isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'
            }`} />
          </a>
        </div>

        {/* Studio Info List */}
        <div className={`space-y-3 pt-4 border-t text-xs ${
          isLuxury ? 'border-[#9E7B4F]/20 text-[#655E56]' : isFuturistic ? 'border-[#00F0FF]/25 text-[#7DD3FC]' : 'border-slate-800 text-slate-300'
        }`}>
          <div className="flex items-center gap-3">
            <Clock className={`w-4 h-4 shrink-0 ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'}`} />
            <div>
              <strong className={`block ${isLuxury ? 'text-[#1C1917]' : isFuturistic ? 'text-[#F0FDF4]' : 'text-white'}`}>Guaranteed Response Time:</strong>
              <span>{settings.turnaroundTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className={`w-4 h-4 shrink-0 ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-emerald-400'}`} />
            <div>
              <strong className={`block ${isLuxury ? 'text-[#1C1917]' : isFuturistic ? 'text-[#F0FDF4]' : 'text-white'}`}>Location & Availability:</strong>
              <span>{settings.location} • {settings.availabilityStatus}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className={`w-4 h-4 shrink-0 ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-purple-400'}`} />
            <div>
              <strong className={`block ${isLuxury ? 'text-[#1C1917]' : isFuturistic ? 'text-[#F0FDF4]' : 'text-white'}`}>Institutional Confidentiality:</strong>
              <span>Mutual non-disclosure agreements (NDAs) executed prior to architectural discovery</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className={`pt-4 border-t ${
          isLuxury ? 'border-[#9E7B4F]/20' : isFuturistic ? 'border-[#00F0FF]/25' : 'border-slate-800'
        }`}>
          <span className={`text-[11px] font-mono uppercase tracking-wider block mb-3 ${
            isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-slate-400'
          }`}>
            Verified Network Profiles
          </span>
          <div className="flex items-center gap-3">
            <a
              href={settings.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs transition-colors ${
                isLuxury
                  ? 'bg-[#FAF8F5] border-[#9E7B4F]/30 text-[#1C1917] hover:border-[#9E7B4F]'
                  : isFuturistic
                  ? 'bg-[#02040A] border-[#00F0FF]/35 text-[#00F0FF] hover:border-[#00F0FF]'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={settings.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs transition-colors ${
                isLuxury
                  ? 'bg-[#FAF8F5] border-[#9E7B4F]/30 text-[#1C1917] hover:border-[#9E7B4F]'
                  : isFuturistic
                  ? 'bg-[#02040A] border-[#00F0FF]/35 text-[#00F0FF] hover:border-[#00F0FF]'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-blue-400'
              }`}
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
