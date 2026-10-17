import React from 'react';
import { Mail, Phone, Clock, MapPin, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { Github, Linkedin, Twitter } from '../common/BrandIcons';
import { useData } from '../../context/DataContext';

export const ContactInfoCard = () => {
  const { settings } = useData();

  return (
    <div className="space-y-6">
      {/* Studio Contact Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
        <div>
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-1">
            Direct Communication Channels
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Let’s Connect Directly
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Prefer a direct conversation? You are speaking with the lead engineer directly. Reach out via WhatsApp or email for instant questions.
          </p>
        </div>

        {/* WhatsApp & Email Quick Action Blocks */}
        <div className="space-y-3">
          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${settings.whatsappNumber?.replace(/\+/g, '')}?text=Hi%20${settings.agencyName},%20I%20would%20like%20to%20discuss%20a%20new%20web%20project.`}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex items-center justify-between group block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-emerald-400 font-mono uppercase tracking-wider block">WhatsApp Direct Chat</span>
                <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {settings.whatsappDisplay}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Email Direct */}
          <a
            href={`mailto:${settings.email}`}
            className="p-4 rounded-2xl bg-blue-950/20 border border-blue-500/30 hover:border-blue-500/60 transition-all flex items-center justify-between group block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-blue-400 font-mono uppercase tracking-wider block">Official Studio Email</span>
                <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                  {settings.email}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Studio Info List */}
        <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <strong className="text-white block">Guaranteed Response Time:</strong>
              <span className="text-slate-400">{settings.turnaroundTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <strong className="text-white block">Availability & Location:</strong>
              <span className="text-slate-400">{settings.location} • {settings.availabilityStatus}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
            <div>
              <strong className="text-white block">Confidentiality Assured:</strong>
              <span className="text-slate-400">Mutual NDAs available upon request before project kickoff</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="pt-4 border-t border-slate-800">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
            Social Profiles & Open Source
          </span>
          <div className="flex items-center gap-3">
            <a
              href={settings.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-2 text-xs"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={settings.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-colors flex items-center gap-2 text-xs"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={settings.twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-colors flex items-center gap-2 text-xs"
            >
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
