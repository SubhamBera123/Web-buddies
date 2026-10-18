import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, CheckCircle } from 'lucide-react';
import { DynamicIcon, formatINR } from '../../utils/formatters';
import { Button } from '../common/Button';
import { useData } from '../../context/DataContext';

export const ServicesOverview = () => {
  const { services } = useData();
  // Display top 6 services on homepage
  const highlightServices = services.slice(0, 6);

  return (
    <section className="py-24 relative bg-[#050505] border-t border-white/10 overflow-hidden">
      {/* Background architectural dot texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#D2B477] uppercase tracking-wider block mb-2">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F3EF] tracking-tight">
              Engineered for Scale & Conversion
            </h2>
            <p className="text-sm sm:text-base text-[#A09B92] mt-2 max-w-xl leading-relaxed">
              Bespoke digital architecture crafted with clean code, modern UX, and zero template bloat.
            </p>
          </div>
          <Link to="/services" className="shrink-0">
            <Button variant="outline" size="md" icon={ArrowRight} iconPosition="right">
              View All 15 Services
            </Button>
          </Link>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightServices.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between group hover:border-[rgba(184,148,88,0.50)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8),0_0_20px_-2px_rgba(184,148,88,0.12)] hover:-translate-y-1 transition-all duration-300 bg-[#111214]"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#171819] border border-[rgba(184,148,88,0.30)] text-[#D2B477] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-[#B89458] group-hover:to-[#D2B477] group-hover:text-[#050505] transition-all duration-300 shadow-sm shadow-[#B89458]/10">
                  <DynamicIcon name={service.iconName} className="w-5 h-5" />
                </div>
                
                <h3 className="text-lg font-bold text-[#F5F3EF] group-hover:text-[#D2B477] transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#A09B92] mt-2 line-clamp-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features Preview */}
                <ul className="mt-4 space-y-1.5 text-xs text-[#A09B92]">
                  {service.keyFeatures?.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D2B477] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#A09B92] block uppercase font-mono">Starting From</span>
                  <span className="text-sm font-bold text-[#F5F3EF] font-mono">
                    {formatINR(service.startingPrice)}
                  </span>
                </div>
                <Link 
                  to={`/services#${service.id}`} 
                  className="text-xs font-semibold text-[#D2B477] hover:text-[#F5F3EF] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Scope</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
