import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, ShieldCheck, Clock, Crown, Terminal } from 'lucide-react';
import { Button } from '../common/Button';
import { useData } from '../../context/DataContext';
import { useTheme } from '../../context/ThemeContext';

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
  const { theme, isLuxury, isFuturistic } = useTheme();
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
      setValue("serviceRequired", `Package: ${packageParam}`);
    } else if (scopeParam) {
      setValue("serviceRequired", `Custom Scope: ${scopeParam}`);
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

  const getContainerClass = () => {
    if (isLuxury) {
      return 'bg-[#FFFFFF] border-2 border-[#9E7B4F]/40 shadow-xl rounded-3xl p-6 sm:p-10 text-[#1C1917]';
    }
    if (isFuturistic) {
      return 'bg-[#060D1E] border-2 border-[#00F0FF]/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] rounded-3xl p-6 sm:p-10 font-mono text-[#F0FDF4]';
    }
    return 'glass-panel-glow rounded-3xl p-6 sm:p-10 border border-blue-500/30 text-white';
  };

  const getInputClass = () => {
    if (isLuxury) {
      return 'w-full bg-[#FAF8F5] border border-[#9E7B4F]/30 rounded-xl px-4 py-2.5 text-sm text-[#1C1917] placeholder-[#A09B92] focus:outline-none focus:border-[#9E7B4F] transition-colors';
    }
    if (isFuturistic) {
      return 'w-full bg-[#02040A] border border-[#00F0FF]/40 rounded-xl px-4 py-2.5 text-sm text-[#F0FDF4] placeholder-[#38BDF8]/50 focus:outline-none focus:border-[#00F0FF] transition-colors font-mono';
    }
    return 'w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors';
  };

  const getLabelClass = () => {
    if (isLuxury) return 'text-xs font-serif font-semibold text-[#1C1917] block mb-1.5';
    if (isFuturistic) return 'text-xs font-mono font-semibold text-[#00F0FF] block mb-1.5';
    return 'text-xs font-semibold text-slate-300 block mb-1.5';
  };

  return (
    <div className={getContainerClass()}>
      {submissionStatus?.type === 'success' ? (
        <div className="py-12 px-4 text-center space-y-6 max-w-lg mx-auto animate-fadeIn">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto border ${
            isLuxury ? 'bg-[#FAF8F5] text-[#9E7B4F] border-[#9E7B4F]' : isFuturistic ? 'bg-[#091328] text-[#00F0FF] border-[#00F0FF]' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
          }`}>
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div>
            <span className={`text-xs font-mono uppercase tracking-wider block mb-1 ${
              isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-emerald-400'
            }`}>
              Submission Confirmed
            </span>
            <h3 className={`text-2xl font-bold ${isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'}`}>
              Thank You, {submissionStatus.data.fullName}!
            </h3>
            <p className={`text-sm mt-2 leading-relaxed ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-300'}`}>
              Your project brief has been securely stored in our system. We are reviewing your requirements and will reach out via <strong className={isLuxury ? 'text-[#1C1917]' : isFuturistic ? 'text-[#00F0FF]' : 'text-white'}>{submissionStatus.data.communicationMethod}</strong> within <strong className={isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-emerald-400'}>{settings.turnaroundTime}</strong>.
            </p>
          </div>

          <div className={`p-4 rounded-xl border text-xs text-left space-y-1.5 font-mono ${
            isLuxury ? 'bg-[#FAF8F5] border-[#9E7B4F]/25 text-[#1C1917]' : isFuturistic ? 'bg-[#02040A] border-[#00F0FF]/40 text-[#7DD3FC]' : 'bg-slate-900 border-slate-800 text-slate-300'
          }`}>
            <div><span className={isLuxury ? 'text-[#9E7B4F]' : 'text-slate-500'}>Service:</span> {submissionStatus.data.serviceRequired}</div>
            <div><span className={isLuxury ? 'text-[#9E7B4F]' : 'text-slate-500'}>Budget Range:</span> {submissionStatus.data.estimatedBudget}</div>
            <div><span className={isLuxury ? 'text-[#9E7B4F]' : 'text-slate-500'}>Target Timeline:</span> {submissionStatus.data.projectDeadline}</div>
          </div>

          <div className="pt-2">
            <Button
              variant="outline"
              size="md"
              onClick={() => setSubmissionStatus(null)}
              className={isLuxury ? 'border-[#9E7B4F] text-[#1C1917] font-serif' : isFuturistic ? 'border-[#00F0FF] text-[#00F0FF]' : ''}
            >
              Submit Another Project Brief
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className={`border-b pb-4 ${isLuxury ? 'border-[#9E7B4F]/20' : isFuturistic ? 'border-[#00F0FF]/25' : 'border-slate-800'}`}>
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider block ${
              isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'
            }`}>
              {isLuxury ? 'Atelier Discovery · Confidential Brief' : isFuturistic ? 'PROTOCOL_STEP_01 // DISCOVERY' : 'Step 1 of 1 • Project Discovery Form'}
            </span>
            <h3 className={`text-xl font-bold mt-1 ${isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'}`}>
              Tell Us About Your Vision
            </h3>
            <p className={`text-xs mt-1 ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'}`}>
              Fill in the parameters below for comprehensive architectural scope planning and a fixed-price quotation.
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
              <label className={getLabelClass()}>
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Elena Rostova"
                {...register("fullName")}
                className={getInputClass()}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-400 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className={getLabelClass()}>
                Business / Enterprise <span className={isLuxury ? 'text-[#9E7B4F]' : 'text-slate-500'}>(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Apex Horizon Capital"
                {...register("businessName")}
                className={getInputClass()}
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={getLabelClass()}>
                Business Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="elena@apexhorizon.com"
                {...register("email")}
                className={getInputClass()}
              />
              {errors.email && (
                <p className="text-[11px] text-red-400 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className={getLabelClass()}>
                Phone / WhatsApp <span className={isLuxury ? 'text-[#9E7B4F]' : 'text-slate-500'}>(Optional)</span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                {...register("phone")}
                className={getInputClass()}
              />
            </div>
          </div>

          {/* Service & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={getLabelClass()}>
                Service / Discipline Required <span className="text-red-400">*</span>
              </label>
              <select
                {...register("serviceRequired")}
                className={getInputClass()}
              >
                <option value="">Select scope...</option>
                <optgroup label="Core Retainer Packages">
                  <option value="Package: Starter Website (₹4,999)">Package: Starter Website (₹4,999)</option>
                  <option value="Package: Business Website (₹12,999)">Package: Business Website (₹12,999 - Most Popular)</option>
                  <option value="Package: E-Commerce Store (₹29,999)">Package: E-Commerce Store (₹29,999)</option>
                  <option value="Package: Custom Web Application (₹49,999)">Package: Custom Web Application (₹49,999)</option>
                </optgroup>
                <optgroup label="Specialized Disciplines">
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
              <label className={getLabelClass()}>
                Estimated Investment Range <span className="text-red-400">*</span>
              </label>
              <select
                {...register("estimatedBudget")}
                className={getInputClass()}
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
              <label className={getLabelClass()}>
                Target Delivery Window
              </label>
              <select
                {...register("projectDeadline")}
                className={getInputClass()}
              >
                <option value="Urgent (Within 1-2 Weeks)">Urgent (Within 1-2 Weeks)</option>
                <option value="Within 2-3 Weeks">Standard (Within 2-3 Weeks)</option>
                <option value="Within 1 Month">Flexible (Within 1 Month)</option>
                <option value="Q4 Launch / Next Quarter">Next Quarter</option>
              </select>
            </div>

            <div>
              <label className={getLabelClass()}>
                Preferred Communication Channel
              </label>
              <select
                {...register("communicationMethod")}
                className={getInputClass()}
              >
                <option value="Email">Email Communication</option>
                <option value="WhatsApp & Phone">WhatsApp & Phone</option>
                <option value="Google Meet">Google Meet Video Consultation</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className={getLabelClass()}>
              Project Description & Requirements <span className="text-red-400">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Detail your operational goals, current challenges, technical specs, and any aesthetic references..."
              {...register("projectDescription")}
              className={`${getInputClass()} resize-y`}
            ></textarea>
            {errors.projectDescription && (
              <p className="text-[11px] text-red-400 mt-1">{errors.projectDescription.message}</p>
            )}
          </div>

          {/* Reference URL */}
          <div>
            <label className={getLabelClass()}>
              Reference / Benchmark Digital Property <span className={isLuxury ? 'text-[#9E7B4F]' : 'text-slate-500'}>(Optional)</span>
            </label>
            <input
              type="url"
              placeholder="https://example.com/aesthetic-benchmark"
              {...register("referenceUrl")}
              className={getInputClass()}
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className={`flex items-center gap-2 text-xs ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'}`}>
              <ShieldCheck className={`w-4 h-4 ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-emerald-400'}`} />
              <span>Zero spam guarantee • Strict NDA client confidentiality</span>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              icon={Send}
              iconPosition="right"
              className={`w-full sm:w-auto font-bold ${
                isLuxury
                  ? 'bg-[#1C1917] hover:bg-[#9E7B4F] text-[#FAF8F5] font-serif border border-[#9E7B4F]'
                  : isFuturistic
                  ? 'bg-[#00F0FF] hover:bg-[#38BDF8] text-[#02040A] font-cyber shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                  : 'shadow-lg shadow-blue-500/25'
              }`}
            >
              {isLuxury ? 'Transmit Commission Brief' : isFuturistic ? '[EXECUTE_TRANSMISSION]' : 'Send Project Enquiry'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
