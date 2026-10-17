import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldAlert, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { INITIAL_MAINTENANCE_PLANS } from '../../lib/constants';
import { Button } from '../common/Button';

export const MaintenanceSection = () => {
  return (
    <div className="my-20 space-y-16">
      {/* Educational Notice: One-Time vs Recurring Expenses */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">Financial Transparency</span>
            <h3 className="text-xl font-bold text-white">One-Time Development Fees vs. Recurring Costs</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h4 className="font-bold text-white text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span>What You Pay Us (One-Time)</span>
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Our package fee covers 100% of the custom UI/UX design, engineering, mobile optimization, database integration, SEO tagging, deployment setup, and post-launch bug warranty.
            </p>
            <p className="text-slate-400">
              There are zero recurring licensing fees from us to keep your website live. Once completed, the code is 100% yours.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h4 className="font-bold text-white text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
              <span>Third-Party Direct Costs (Recurring)</span>
            </h4>
            <p className="text-slate-300 leading-relaxed">
              These are standard services you pay directly to providers (we assist in creating and configuring your accounts so you own them):
            </p>
            <ul className="space-y-1 text-slate-400 text-xs">
              <li>• <strong>Domain Name:</strong> ~₹800 - ₹1,200/year (Namecheap / Cloudflare / GoDaddy)</li>
              <li>• <strong>Cloud Hosting:</strong> Netlify / Vercel (Free tier for most starter & business sites)</li>
              <li>• <strong>Backend Database:</strong> Supabase (Generous free tier up to 500MB database & 50,000 monthly active users)</li>
              <li>• <strong>Payment Gateways:</strong> Standard 2% transaction fee only when you make a sale (Razorpay / Stripe)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Optional Maintenance Retainers */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-1">
            Optional Peace-of-Mind Support
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ongoing Maintenance & Engineering Retainers
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            No long-term contracts. Pause or cancel anytime. Keep your digital assets secure, fast, and continuously backed up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INITIAL_MAINTENANCE_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 flex flex-col justify-between space-y-6 ${
                plan.popular 
                  ? 'glass-panel-glow border-2 border-blue-500/50' 
                  : 'glass-card border border-slate-800'
              }`}
            >
              <div>
                {plan.popular && (
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-blue-600 text-white mb-2">
                    Recommended Retainer
                  </span>
                )}
                <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                <div className="text-2xl font-black text-slate-100 font-mono mt-2">
                  {plan.priceDisplay}
                </div>
                <p className="text-xs text-slate-400 mt-2">{plan.description}</p>

                <ul className="mt-5 space-y-2 text-xs text-slate-300">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <Link to={`/contact?service=${encodeURIComponent(`Maintenance: ${plan.name}`)}`}>
                  <Button variant={plan.popular ? "primary" : "secondary"} size="sm" className="w-full">
                    Enroll in {plan.name}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
