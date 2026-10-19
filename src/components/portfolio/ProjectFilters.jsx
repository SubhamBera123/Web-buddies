import React from 'react';
import { Search, X } from 'lucide-react';

export const ProjectFilters = ({
  categories = [],
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalCount,
  filteredCount
}) => {
  return (
    <div className="space-y-5 mb-10">
      {/* Search Bar & Project Count Telemetry */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-[#A09B92] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects, stack (React, Supabase)..."
            className="w-full bg-[#0D0E12] border border-white/10 hover:border-[#B89458]/40 focus:border-[#D2B477] rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-[#F5F3EF] placeholder-[#A09B92]/60 focus:outline-none transition-colors shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A09B92] hover:text-[#F5F3EF] transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Counter Pill */}
        <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-[#111215] border border-white/10 text-xs text-[#A09B92] font-mono shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>
            Displaying <strong className="text-[#F5F3EF]">{filteredCount}</strong> of <strong className="text-[#D2B477]">{totalCount}</strong> interactive prototypes
          </span>
        </div>
      </div>

      {/* Category Filter Pills with Scroll */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-gradient-to-r from-[#B89458] to-[#D2B477] text-[#050505] shadow-md shadow-[#B89458]/20 font-bold border border-[#D2B477]'
              : 'bg-[#111215] text-[#A09B92] hover:text-[#F5F3EF] hover:bg-[#1a1c22] border border-white/10 hover:border-[#B89458]/40'
          }`}
        >
          All Industries ({totalCount})
        </button>

        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => onSelectCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-[#B89458] to-[#D2B477] text-[#050505] shadow-md shadow-[#B89458]/20 font-bold border border-[#D2B477]'
                  : 'bg-[#111215] text-[#A09B92] hover:text-[#F5F3EF] hover:bg-[#1a1c22] border border-white/10 hover:border-[#B89458]/40'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
