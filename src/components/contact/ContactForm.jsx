import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '../common/Button';
import { useData } from '../../context/DataContext';

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  businessName: z.string().optional(),
  email: z.string().email("Please provide a valid business email address"),
  phone: z.string().optional(),
  serviceRequired: z.string().min(1, "Please select the service required"),
  estimatedBudget: z.string().min(1, "Please choose your estimated budget"),
  projectDeadline: z.string().min(1, "Please select an estimated timeframe"),
  communicationMethod: z.string().default("Email"),
  projectDescription: z.string().min(10, "Please provide some project details (at least 10 characters)"),
  referenceUrl: z.string().optional(),
});

export const ContactForm = () => {
  const { services, submitEnquiry, settings } = useData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const location = useLocation();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      serviceRequired: "",
      estimatedBudget: "₹10,000 - ₹25,000",
      projectDeadline: "Within 2-3 Weeks",
      communicationMethod: "Email",
      projectDescription: "",
      referenceUrl: "",
    }
  });

  // Pre-fill parameters if query params exist (e.g. ?service=... or ?scope=... or ?package=...)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    const scopeParam = params.get('scope');
    const packageParam = params.get('package');

    if (serviceParam) {
      setValue("serviceRequired", serviceParam);
    } else if (packageParam) {
      setValue("serviceRequired", `Package: ${packageParam.toUpperCase()}`);
    }

    if (scopeParam) {
      setValue("projectDescription", decodeURIComponent(scopeParam));
    }
  }, [location.search, setValue]);

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const res = await submitEnquiry(formData);
      if (res.success) {
        setSubmissionStatus({
          type: 'success',
          data: formData
        });
        reset();
        try {
          confetti({
            particleCount: 80,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }
      } else {
        throw new Error(res.error || "Unable to submit enquiry at this time.");
      }
    } catch (err) {
      setSubmissionStatus({
        type: 'error',
        message: err.message || "An unexpected error occurred. Please contact us via WhatsApp directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-blue-500/30">
      {submissionStatus?.type === 'success' ? (
        <div className="py-12 px-4 text-center space-y-6 max-w-lg mx-auto animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
              Submission Confirmed
            </span>
            <h3 className="text-2xl font-bold text-white">
              Thank You, {submissionStatus.data.fullName}!
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Your project brief has been securely stored in our system. We are reviewing your requirements and will reach out via <strong className="text-white">{submissionStatus.data.communicationMethod}</strong> within <strong className="text-emerald-400">{settings.turnaroundTime}</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-left space-y-1.5 font-mono text-slate-300">
            <div><span className="text-slate-500">Service:</span> {submissionStatus.data.serviceRequired}</div>
            <div><span className="text-slate-500">Budget Range:</span> {submissionStatus.data.estimatedBudget}</div>
            <div><span className="text-slate-500">Target Timeline:</span> {submissionStatus.data.projectDeadline}</div>
          </div>

          <div className="pt-2">
            <Button
              variant="outline"
              size="md"
              onClick={() => setSubmissionStatus(null)}
            >
              Submit Another Project Brief
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block">
              Step 1 of 1 • Project Discovery Form
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              Tell Us About Your Project
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Fill in the details below for a comprehensive architectural scope and fixed-price quotation.
            </p>
          </div>

          {submissionStatus?.type === 'error' && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{submissionStatus.message}</span>
            </div>
          )}

          {/* Full Name & Business */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Elena Rostova"
                {...register("fullName")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-400 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Business Name <span className="text-slate-500">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Apex Horizon Capital"
                {...register("businessName")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="elena@apexhorizon.com"
                {...register("email")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {errors.email && (
                <p className="text-[11px] text-red-400 mt-1">{errors.email.message}</p>
              )}
            </div>

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

          {/* Service & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Service Required <span className="text-red-400">*</span>
              </label>
              <select
                {...register("serviceRequired")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">Select service required...</option>
                <optgroup label="Packages">
                  <option value="Package: Starter Website (₹4,999)">Package: Starter Website (₹4,999)</option>
                  <option value="Package: Business Website (₹12,999)">Package: Business Website (₹12,999 - Most Popular)</option>
                  <option value="Package: E-Commerce Store (₹29,999)">Package: E-Commerce Store (₹29,999)</option>
                  <option value="Package: Custom Web Application (₹49,999)">Package: Custom Web Application (₹49,999)</option>
                </optgroup>
                <optgroup label="Individual Services">
                  {services.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </optgroup>
              </select>
              {errors.serviceRequired && (
                <p className="text-[11px] text-red-400 mt-1">{errors.serviceRequired.message}</p>
              )}
            </div>

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
                <option value="₹25,000 - ₹50,000">Growth / E-Commerce Tier (₹25,000 - ₹50,000)</option>
                <option value="₹50,000 - ₹1,00,000">Custom Web App Tier (₹50,000 - ₹1,00,000)</option>
                <option value="₹1,00,000+">Enterprise Retainer (₹1,00,000+)</option>
              </select>
            </div>
          </div>

          {/* Timeline & Comm Method */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Target Project Deadline
              </label>
              <select
                {...register("projectDeadline")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="Urgent (Within 1-2 Weeks)">Urgent (Within 1-2 Weeks)</option>
                <option value="Within 2-3 Weeks">Standard (Within 2-3 Weeks)</option>
                <option value="Within 1 Month">Flexible (Within 1 Month)</option>
                <option value="Q4 Launch / Next Quarter">Next Quarter</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Preferred Communication Channel
              </label>
              <select
                {...register("communicationMethod")}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="Email">Email Communication</option>
                <option value="WhatsApp & Phone">WhatsApp & Phone</option>
                <option value="Google Meet">Google Meet Video Consultation</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              Project Description & Requirements <span className="text-red-400">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your company, current challenges, desired features (e.g. online booking, payment gateway, user auth), and any design inspirations..."
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
              Reference / Competitor Website URL <span className="text-slate-500">(Optional)</span>
            </label>
            <input
              type="url"
              placeholder="https://example.com/site-i-admire"
              {...register("referenceUrl")}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero spam guarantee • Strict client confidentiality</span>
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
              Send Project Enquiry
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
