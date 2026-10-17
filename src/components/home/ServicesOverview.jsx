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
    <section className="py-20 relative bg-[#0B0F19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-2">
              Capabilities & Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Web Development Engineered for Growth
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              From fast conversion-optimized business websites to robust custom full-stack web applications, every project is built from scratch with clean code, responsive layouts, and no bloated plugins.
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
              className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group hover:border-blue-500/40 transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <DynamicIcon name={service.iconName} className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features Preview */}
                <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                  {service.keyFeatures?.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase font-mono">Starting From</span>
                  <span className="text-sm font-bold text-slate-200 font-mono">
                    {formatINR(service.startingPrice)}
                  </span>
                </div>
                <Link 
                  to={`/services#${service.id}`} 
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
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
