import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Target, Zap, Laptop } from 'lucide-react';
import { DynamicIcon, formatINR } from '../../utils/formatters';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const ServiceCard = ({ service, onRequestQuote }) => {
  return (
    <div 
      id={service.id} 
      className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-blue-500/40 transition-all duration-300 relative group scroll-mt-28"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <DynamicIcon name={service.iconName} className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {service.name}
                </h3>
                {service.popular && (
                  <Badge variant="blue" size="sm">Popular</Badge>
                )}
              </div>
              <span className="text-xs text-slate-400 font-mono">Service ID: {service.id}</span>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[10px] text-slate-500 block uppercase font-mono">Starting From</span>
            <span className="text-lg font-bold text-slate-200 font-mono">
              {formatINR(service.startingPrice)}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {service.description}
        </p>

        {/* Target Audience */}
        {service.targetAudience && (
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400">
              <Target className="w-3.5 h-3.5" />
              <span>Target Audience:</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {service.targetAudience}
            </p>
          </div>
        )}

        {/* Key Features & Business Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Key Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-200 flex items-center gap-1.5 uppercase tracking-wider font-mono">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Key Features</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {service.keyFeatures?.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Benefits */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-200 flex items-center gap-1.5 uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Business Benefits</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {service.businessBenefits?.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Relevant Tech Stack */}
        <div className="pt-2">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-2">
            <Laptop className="w-3.5 h-3.5" />
            <span>Technologies Employed:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {service.technologies?.map((tech, i) => (
              <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
        <span className="text-xs text-slate-400">
          Estimated starting investment: <strong className="text-slate-200 font-mono">{formatINR(service.startingPrice)}</strong>
        </span>
        <Button
          variant="primary"
          size="sm"
          icon={ArrowRight}
          iconPosition="right"
          onClick={() => onRequestQuote(service)}
        >
          Request Quotation
        </Button>
      </div>
    </div>
  );
};
