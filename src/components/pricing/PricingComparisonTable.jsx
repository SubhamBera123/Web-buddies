import React from 'react';
import { Check, Minus } from 'lucide-react';
import { Badge } from '../common/Badge';

export const PricingComparisonTable = () => {
  const features = [
    { name: "Pages Included", starter: "1–3 Pages", business: "Up to 6 Pages", ecommerce: "Up to 12 Pages", custom: "Bespoke / Scalable" },
    { name: "Responsive Multi-Device Layout", starter: true, business: true, ecommerce: true, custom: true },
    { name: "Lead Contact & WhatsApp Integration", starter: true, business: true, ecommerce: true, custom: true },
    { name: "Custom UI/UX (Zero Pre-made Templates)", starter: false, business: true, ecommerce: true, custom: true },
    { name: "Framer Motion Interactive Animations", starter: false, business: true, ecommerce: true, custom: true },
    { name: "On-Page SEO & Schema Markup", starter: "Basic", business: "Advanced", ecommerce: "Advanced", custom: "Full Technical" },
    { name: "Product Catalogue & Variant Selectors", starter: false, business: false, ecommerce: true, custom: true },
    { name: "Shopping Cart & Checkout Flow", starter: false, business: false, ecommerce: true, custom: true },
    { name: "Payment Gateway Integration (Razorpay/Stripe)", starter: false, business: false, ecommerce: true, custom: true },
    { name: "Supabase User Auth & Profiles", starter: false, business: false, ecommerce: "Optional", custom: true },
    { name: "PostgreSQL Database with RLS Security", starter: false, business: false, ecommerce: true, custom: true },
    { name: "Custom Administrative Dashboard", starter: false, business: false, ecommerce: "Basic Order View", custom: "Full Bespoke Dashboard" },
    { name: "Third-Party REST API Integration", starter: false, business: false, ecommerce: "Standard", custom: true },
    { name: "Lighthouse 90+ Speed Optimization", starter: true, business: true, ecommerce: true, custom: true },
    { name: "Post-Launch Warranty Support", starter: "14 Days", business: "30 Days", ecommerce: "45 Days", custom: "60 Days" },
    { name: "100% Code & IP Ownership", starter: true, business: true, ecommerce: true, custom: true },
  ];

  const renderValue = (val) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check className="w-4 h-4 text-emerald-400 mx-auto" />
      ) : (
        <Minus className="w-4 h-4 text-slate-600 mx-auto" />
      );
    }
    return <span className="text-xs font-mono text-slate-300">{val}</span>;
  };

  return (
    <div className="glass-panel rounded-3xl overflow-hidden border border-slate-800 my-16">
      <div className="p-6 sm:p-8 border-b border-slate-800 bg-slate-900/50">
        <h3 className="text-xl sm:text-2xl font-bold text-white">Comprehensive Feature Comparison</h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Detailed matrix comparing architectural deliverables across each core package tier.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/80 text-xs">
              <th className="py-4 px-6 text-slate-300 font-bold uppercase tracking-wider">Features & Deliverables</th>
              <th className="py-4 px-4 text-center text-slate-300 font-bold uppercase tracking-wider">
                <div>Starter</div>
                <div className="text-[10px] text-blue-400 font-mono mt-0.5">₹4,999</div>
              </th>
              <th className="py-4 px-4 text-center text-slate-100 font-bold uppercase tracking-wider bg-blue-900/10 border-x border-blue-500/20">
                <div className="flex items-center justify-center gap-1">
                  <span>Business</span>
                  <Badge variant="blue" size="sm">Popular</Badge>
                </div>
                <div className="text-[10px] text-blue-400 font-mono mt-0.5">₹12,999</div>
              </th>
              <th className="py-4 px-4 text-center text-slate-300 font-bold uppercase tracking-wider">
                <div>E-Commerce</div>
                <div className="text-[10px] text-blue-400 font-mono mt-0.5">₹29,999</div>
              </th>
              <th className="py-4 px-4 text-center text-slate-300 font-bold uppercase tracking-wider">
                <div>Custom App</div>
                <div className="text-[10px] text-blue-400 font-mono mt-0.5">₹49,999</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 text-xs">
            {features.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                <td className="py-3.5 px-6 font-medium text-slate-200">{row.name}</td>
                <td className="py-3.5 px-4 text-center">{renderValue(row.starter)}</td>
                <td className="py-3.5 px-4 text-center bg-blue-900/5 border-x border-blue-500/20 font-medium">
                  {renderValue(row.business)}
                </td>
                <td className="py-3.5 px-4 text-center">{renderValue(row.ecommerce)}</td>
                <td className="py-3.5 px-4 text-center">{renderValue(row.custom)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
