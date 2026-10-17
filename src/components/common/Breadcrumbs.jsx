import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs = ({ items = [], className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs md:text-sm text-slate-400 ${className}`}>
      <ol className="flex items-center space-x-2">
        <li>
          <Link 
            to="/" 
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {isLast || !item.href ? (
                <span className="text-slate-200 font-medium">{item.label}</span>
              ) : (
                <Link 
                  to={item.href} 
                  className="hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
