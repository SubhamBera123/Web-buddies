import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Layers } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col justify-center items-center px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
        <Layers className="w-8 h-8" />
      </div>

      <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-2">
        Error 404
      </span>

      <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
        Page Not Located
      </h1>

      <p className="text-sm text-slate-400 max-w-md mb-8 leading-relaxed">
        The URL you navigated to does not exist or has been relocated within the NexusCraft architecture.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/">
          <Button variant="primary" size="md" icon={Home}>
            Return to Homepage
          </Button>
        </Link>
        <Link to="/portfolio">
          <Button variant="secondary" size="md">
            Explore Portfolio Demos
          </Button>
        </Link>
      </div>
    </div>
  );
};
