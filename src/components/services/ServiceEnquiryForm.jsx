import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';
import { useData } from '../../context/DataContext';

const enquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name (at least 2 characters)"),
  businessName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  serviceRequired: z.string().min(1, "Please select the service required"),
  estimatedBudget: z.string().min(1, "Please select your estimated budget range"),
  projectDeadline: z.string().min(1, "Please select a target deadline"),
  communicationMethod: z.string().default("Email"),
  projectDescription: z.string().min(10, "Please provide at least a brief description of your project requirements (10+ characters)"),
  referenceUrl: z.string().optional(),
});

export const ServiceEnquiryForm = ({ preselectedService = "" }) => {
  const { services, submitEnquiry, settings } = useData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      serviceRequired: preselectedService || "",
      estimatedBudget: "₹15,000 - ₹30,000",
      projectDeadline: "Within 2-3 Weeks",
      communicationMethod: "Email",
      projectDescription: "",
      referenceUrl: "",
    }
  });

  useEffect(() => {
    if (preselectedService) {
      setValue("serviceRequired", preselectedService);
    }
  }, [preselectedService, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const res = await submitEnquiry(data);
      if (res.success) {
        setSubmissionResult({
          type: 'success',
          message: `Thank you, ${data.fullName}! Your project inquiry for ${data.serviceRequired} has been received. We will analyze your requirements and get back to you within 4–6 business hours.`
        });
        reset();
        try {
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // graceful fallback
        }
      } else {
        throw new Error(res.error || "Submission failed");
      }
    } catch (err) {
      setSubmissionResult({
        type: 'error',
        message: err.message || "Could not submit inquiry at this moment. Please reach out directly via WhatsApp."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="enquiry-form" className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-blue-500/30 scroll-mt-28">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-1">
          Direct Scope Consultation
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Request a Custom Service Quotation
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-2">
          Select your desired service, tell us about your goals, and receive a transparent milestone breakdown within 4–6 hours.
        </p>
      </div>

      {submissionResult?.type === 'success' ? (
        <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 max-w-xl mx-auto animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-white">Inquiry Successfully Dispatched!</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {submissionResult.message}
          </p>
          <div className="pt-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setSubmissionResult(null)}
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto">
          {submissionResult?.type === 'error' && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-300 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{submissionResult.message}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Vikram Malhotra"
                {...register("fullName")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-400 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Business Name */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Company / Brand Name <span className="text-slate-500">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Malhotra Logistics Pvt Ltd"
                {...register("businessName")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Work Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                {...register("email")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {errors.email && (
                <p className="text-[11px] text-red-400 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Phone / WhatsApp <span className="text-slate-500">(Optional)</span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                {...register("phone")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Service Required Dropdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Required Service <span className="text-red-400">*</span>
              </label>
              <select
                {...register("serviceRequired")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">Select a service category...</option>
                {services.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name} (from ₹{s.startingPrice.toLocaleString('en-IN')})
                  </option>
                ))}
              </select>
              {errors.serviceRequired && (
                <p className="text-[11px] text-red-400 mt-1">{errors.serviceRequired.message}</p>
              )}
            </div>

            {/* Estimated Budget */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Estimated Budget Range <span className="text-red-400">*</span>
              </label>
              <select
                {...register("estimatedBudget")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="Under ₹10,000">Starter Tier (Under ₹10,000)</option>
                <option value="₹10,000 - ₹25,000">Business Tier (₹10,000 - ₹25,000)</option>
                <option value="₹25,000 - ₹50,000">Growth / E-Commerce (₹25,000 - ₹50,000)</option>
                <option value="₹50,000 - ₹1,00,000">Custom Full-Stack Web App (₹50,000 - ₹1,00,000)</option>
                <option value="₹1,00,000+">Enterprise Retainer / Large Scale (₹1,00,000+)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Project Deadline */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Target Launch Timeline
              </label>
              <select
                {...register("projectDeadline")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="Urgent (Within 1 Week)">Urgent (Within 1 Week)</option>
                <option value="Within 2-3 Weeks">Standard (Within 2-3 Weeks)</option>
                <option value="Within 1 Month">Flexible (Within 1 Month)</option>
                <option value="Planning Phase / Next Quarter">Exploratory / Next Quarter</option>
              </select>
            </div>

            {/* Communication Preference */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Preferred Communication Channel
              </label>
              <select
                {...register("communicationMethod")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="Email">Email Communication</option>
                <option value="WhatsApp & Phone">WhatsApp & Phone Call</option>
                <option value="Google Meet Video">Google Meet Video Consultation</option>
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              Project Description & Goals <span className="text-red-400">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Describe your business, what functionality you need (e.g. payment gateway, booking system, user login), and any specific design preferences..."
              {...register("projectDescription")}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-y"
            ></textarea>
            {errors.projectDescription && (
              <p className="text-[11px] text-red-400 mt-1">{errors.projectDescription.message}</p>
            )}
          </div>

          {/* Reference URL */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              Reference Website / Competitor Link <span className="text-slate-500">(Optional)</span>
            </label>
            <input
              type="url"
              placeholder="https://example.com/site-i-like"
              {...register("referenceUrl")}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Response guaranteed within {settings.turnaroundTime}</span>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              icon={Send}
              iconPosition="right"
              className="w-full sm:w-auto font-bold shadow-lg shadow-blue-500/25"
            >
              Submit Project Inquiry
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
