import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Target, Zap, Laptop } from 'lucide-react';
import { DynamicIcon, formatINR } from '../../utils/formatters';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { useTheme } from '../../context/ThemeContext';

export const ServiceCard = ({ service, onRequestQuote }) => {
  const { isLuxury, isFuturistic } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const getContainerStyles = () => {
    if (isLuxury) {
      return 'bg-[#FFFFFF] border border-[#9E7B4F]/30 hover:border-[#9E7B4F] shadow-md hover:shadow-2xl';
    }
    if (isFuturistic) {
      return 'bg-[#060D1E]/95 border border-[#00F0FF]/35 hover:border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.12)] hover:shadow-[0_0_35px_rgba(0,240,255,0.3)]';
    }
    return 'glass-card border border-slate-800 hover:border-blue-500/50 shadow-xl hover:shadow-2xl';
  };

  return (
    <div 
      id={service.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        transform: isHovered ? 'perspective(1000px) translateY(-8px) scale(1.01)' : 'perspective(1000px) translateY(0px) scale(1)',
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease',
        transformStyle: 'preserve-3d'
      }}
      className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 relative group scroll-mt-28 ${getContainerStyles()}`}
    >
      {/* Dynamic 3D Specular Sheen */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: isLuxury
            ? `radial-gradient(circle 260px at ${mousePos.x}% ${mousePos.y}%, rgba(158,123,79,0.15), transparent 70%)`
            : isFuturistic
            ? `radial-gradient(circle 260px at ${mousePos.x}% ${mousePos.y}%, rgba(0,240,255,0.22), transparent 70%)`
            : `radial-gradient(circle 260px at ${mousePos.x}% ${mousePos.y}%, rgba(59,130,246,0.16), transparent 70%)`,
        }}
      />

      <div className="space-y-6 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              style={{
                transform: isHovered ? 'translateZ(18px) scale(1.08)' : 'translateZ(0px) scale(1)',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                isLuxury
                  ? 'bg-[#FAF8F5] border border-[#9E7B4F]/30 text-[#9E7B4F]'
                  : isFuturistic
                  ? 'bg-[#091328] border border-[#00F0FF]/40 text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
              }`}
            >
              <DynamicIcon name={service.iconName} className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className={`text-xl font-bold transition-colors ${
                  isLuxury ? 'text-[#1C1917] font-serif group-hover:text-[#9E7B4F]' : isFuturistic ? 'text-[#F0FDF4] font-cyber group-hover:text-[#00F0FF]' : 'text-white group-hover:text-blue-300'
                }`}>
                  {service.name}
                </h3>
                {service.popular && (
                  <Badge variant="blue" size="sm">Popular</Badge>
                )}
              </div>
              <span className={`text-xs font-mono ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'}`}>
                Service ID: {service.id}
              </span>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className={`text-[10px] block uppercase font-mono ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-500'}`}>
              Starting From
            </span>
            <span className={`text-lg font-bold font-mono ${isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-slate-200'}`}>
              {formatINR(service.startingPrice)}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className={`text-xs sm:text-sm leading-relaxed ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-300'}`}>
          {service.description}
        </p>

        {/* Target Audience */}
        {service.targetAudience && (
          <div className={`p-3.5 rounded-xl border space-y-1 ${
            isLuxury
              ? 'bg-[#FAF8F5] border-[#9E7B4F]/25 text-[#655E56]'
              : isFuturistic
              ? 'bg-[#091328] border-[#00F0FF]/30 text-[#7DD3FC]'
              : 'bg-slate-900/80 border border-slate-800/80 text-slate-300'
          }`}>
            <div className={`flex items-center gap-1.5 text-xs font-semibold ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'}`}>
              <Target className="w-3.5 h-3.5" />
              <span>Target Audience:</span>
            </div>
            <p className="text-xs leading-relaxed">
              {service.targetAudience}
            </p>
          </div>
        )}

        {/* Key Features & Business Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Key Features */}
          <div className="space-y-2">
            <h4 className={`text-xs font-bold flex items-center gap-1.5 uppercase tracking-wider font-mono ${
              isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-slate-200'
            }`}>
              <Zap className={`w-3.5 h-3.5 ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-amber-400'}`} />
              <span>Key Features</span>
            </h4>
            <ul className={`space-y-1.5 text-xs ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-300'}`}>
              {service.keyFeatures?.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-emerald-400'}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Benefits */}
          <div className="space-y-2">
            <h4 className={`text-xs font-bold flex items-center gap-1.5 uppercase tracking-wider font-mono ${
              isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-slate-200'
            }`}>
              <Sparkles className={`w-3.5 h-3.5 ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'}`} />
              <span>Business Benefits</span>
            </h4>
            <ul className={`space-y-1.5 text-xs ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-300'}`}>
              {service.businessBenefits?.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${isLuxury ? 'bg-[#9E7B4F]' : isFuturistic ? 'bg-[#00F0FF]' : 'bg-blue-400'}`}></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Relevant Tech Stack */}
        <div className="pt-2">
          <div className={`flex items-center gap-1.5 text-[11px] mb-2 ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'}`}>
            <Laptop className="w-3.5 h-3.5" />
            <span>Technologies Employed:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {service.technologies?.map((tech, i) => (
              <span key={i} className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                isLuxury
                  ? 'bg-[#FAF8F5] text-[#655E56] border-[#9E7B4F]/25'
                  : isFuturistic
                  ? 'bg-[#091328] text-[#00F0FF] border-[#00F0FF]/30'
                  : 'bg-slate-900 text-slate-300 border-slate-800'
              }`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className={`pt-6 border-t flex items-center justify-between gap-4 ${
        isLuxury ? 'border-[#9E7B4F]/20' : isFuturistic ? 'border-[#00F0FF]/25' : 'border-slate-800'
      }`}>
        <span className={`text-xs ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'}`}>
          Estimated starting investment: <strong className={`font-mono ${isLuxury ? 'text-[#9E7B4F] font-serif font-bold' : isFuturistic ? 'text-[#00F0FF]' : 'text-slate-200'}`}>{formatINR(service.startingPrice)}</strong>
        </span>
        <Button
          variant="primary"
          size="sm"
          icon={ArrowRight}
          iconPosition="right"
          onClick={() => onRequestQuote(service)}
        >
          {isLuxury ? 'Inquire for Scope' : isFuturistic ? 'Configure Module' : 'Request Quotation'}
        </Button>
      </div>
    </div>
  );
};
