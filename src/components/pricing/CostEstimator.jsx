import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, Info, RotateCcw, Sparkles } from 'lucide-react';
import { formatINR } from '../../utils/formatters';
import { Button } from '../common/Button';

export const CostEstimator = () => {
  // Types
  const websiteTypes = [
    { id: 'landing', name: 'High-Conversion Landing Page', base: 4999, defaultPages: 1 },
    { id: 'business', name: 'Standard Business Website', base: 12999, defaultPages: 5 },
    { id: 'ecommerce', name: 'E-Commerce Storefront', base: 24999, defaultPages: 8 },
    { id: 'webapp', name: 'Custom Web Application', base: 39999, defaultPages: 10 },
  ];

  const [selectedType, setSelectedType] = useState('business');
  const [pages, setPages] = useState(5);
  const [features, setFeatures] = useState({
    ecommerce: false,
    booking: false,
    auth: false,
    cmsAdmin: false,
    advancedSeo: true,
    speedAudit: true,
    maintenance: false,
  });

  const featureOptions = [
    { key: 'ecommerce', label: 'E-Commerce Cart, Products & Payment Gateway', price: 15000, desc: 'Full shopping cart, inventory view & Razorpay/Stripe checkout' },
    { key: 'booking', label: 'Automated Booking & Appointment Calendar', price: 8000, desc: 'Realtime slot scheduler with SMS/Email reminders' },
    { key: 'auth', label: 'User Authentication & Member Accounts', price: 9000, desc: 'Supabase email/social login & protected user profiles' },
    { key: 'cmsAdmin', label: 'Bespoke CMS / Control Admin Dashboard', price: 12000, desc: 'Custom portal to manage products, enquiries & content' },
    { key: 'advancedSeo', label: 'Advanced Technical SEO & Schema.org Markup', price: 4500, desc: 'JSON-LD rich snippets, sitemaps, and search console setup' },
    { key: 'speedAudit', label: 'Sub-Second Speed & Core Web Vitals Tuning', price: 3500, desc: '90+ Google mobile score guarantee & image optimization' },
    { key: 'maintenance', label: 'Include 1st Month Dedicated Maintenance Care', price: 2999, desc: 'Weekly backups, uptime monitoring & priority developer hours' },
  ];

  const toggleFeature = (key) => {
    setFeatures(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Pricing calculation logic
  const calculation = useMemo(() => {
    const currentType = websiteTypes.find(t => t.id === selectedType) || websiteTypes[1];
    let total = currentType.base;

    // Page calculations (over base allowance)
    const extraPages = Math.max(0, pages - currentType.defaultPages);
    const pageCost = extraPages * 1200;
    total += pageCost;

    // Feature additions
    let featuresTotal = 0;
    featureOptions.forEach(opt => {
      if (features[opt.key]) {
        featuresTotal += opt.price;
      }
    });

    total += featuresTotal;

    return {
      typeBase: currentType.base,
      pageCost,
      featuresTotal,
      grandTotal: total,
      lowEstimate: Math.round(total * 0.95),
      highEstimate: Math.round(total * 1.15)
    };
  }, [selectedType, pages, features]);

  const handleReset = () => {
    setSelectedType('business');
    setPages(5);
    setFeatures({
      ecommerce: false,
      booking: false,
      auth: false,
      cmsAdmin: false,
      advancedSeo: true,
      speedAudit: true,
      maintenance: false,
    });
  };

  const currentTypeObj = websiteTypes.find(t => t.id === selectedType);

  return (
    <div id="calculator" className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-blue-500/40 my-16 scroll-mt-28">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Estimate Your Project Scope in Real Time
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Configure your exact architectural requirements and get an instant indicative budget breakdown.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="self-start md:self-auto flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Calculator</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* 1. Website Type */}
          <div>
            <label className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono block mb-3">
              Step 1: Choose Website or Application Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {websiteTypes.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => {
                      setSelectedType(type.id);
                      setPages(type.defaultPages);
                    }}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600/15 border-blue-500 text-white shadow-md shadow-blue-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold">{type.name}</span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-blue-400"></span>}
                    </div>
                    <span className="text-xs text-slate-400 block mt-1">
                      Includes {type.defaultPages} base pages • Base {formatINR(type.base)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Number of Pages Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
                Step 2: Total Number of Pages
              </label>
              <span className="text-sm font-mono font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                {pages} {pages === 1 ? 'Page' : 'Pages'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
              className="w-full accent-blue-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
              <span>1 Page (Landing)</span>
              <span>5 Pages (Standard)</span>
              <span>10 Pages</span>
              <span>20+ Pages (Enterprise)</span>
            </div>
          </div>

          {/* 3. Feature Add-ons */}
          <div>
            <label className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono block mb-3">
              Step 3: Select Required Features & Integrations
            </label>
            <div className="space-y-2.5">
              {featureOptions.map((opt) => {
                const isChecked = Boolean(features[opt.key]);
                return (
                  <div
                    key={opt.key}
                    onClick={() => toggleFeature(opt.key)}
                    className={`p-3.5 rounded-xl border flex items-start justify-between gap-3 cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-blue-600/10 border-blue-500/40 text-slate-100'
                        : 'bg-slate-900/50 border-slate-800/80 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                        isChecked ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700 bg-slate-950'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <span className={`text-xs sm:text-sm font-semibold ${isChecked ? 'text-white' : 'text-slate-300'}`}>
                          {opt.label}
                        </span>
                        <p className="text-[11px] text-slate-400 mt-0.5">{opt.desc}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-400 shrink-0">
                      +{formatINR(opt.price)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Summary Card (5 cols) */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-mono font-semibold text-slate-300 uppercase">
                Scope Calculation Breakdown
              </span>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                Indicative Estimate
              </span>
            </div>

            {/* Line items */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Base Platform ({currentTypeObj?.name})</span>
                <span className="font-mono">{formatINR(calculation.typeBase)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Page Layouts ({pages} total)</span>
                <span className="font-mono">+{formatINR(calculation.pageCost)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Selected Add-on Integrations</span>
                <span className="font-mono">+{formatINR(calculation.featuresTotal)}</span>
              </div>
            </div>

            {/* Total Estimated Range */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <span className="text-xs text-slate-400 uppercase font-mono tracking-wider block">
                Estimated Investment Range:
              </span>
              <div className="text-3xl font-black text-white font-mono text-gradient-blue">
                {formatINR(calculation.lowEstimate)} – {formatINR(calculation.highEstimate)}
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                Typical indicative midpoint: <strong className="text-slate-200">{formatINR(calculation.grandTotal)}</strong> one-time development fee.
              </p>
            </div>

            {/* Transparency Disclaimer */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                This calculation is an automated indicative estimate. The actual quotation will be tailored to your precise design and architectural specifications with guaranteed fixed milestones.
              </span>
            </div>

            {/* CTA Button */}
            <div className="space-y-2">
              <Button
                variant="primary"
                size="lg"
                className="w-full font-bold shadow-lg shadow-blue-500/25"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => {
                  const scopeDesc = `Cost Estimator Scope: ${currentTypeObj?.name} (${pages} pages). Selected features: ${Object.keys(features).filter(k => features[k]).join(', ')}. Calculated estimate: ${formatINR(calculation.grandTotal)}.`;
                  window.location.href = `/contact?scope=${encodeURIComponent(scopeDesc)}`;
                }}
              >
                Request Quotation for this Scope
              </Button>
              <p className="text-[10px] text-center text-slate-500">
                Takes 2 minutes • No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
