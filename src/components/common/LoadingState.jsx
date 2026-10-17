import React from 'react';
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const LoadingState = ({ message = "Loading content...", className = "" }) => (
  <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-2 border-blue-500/20 animate-ping absolute inset-0"></div>
      <Loader2 className="w-12 h-12 text-blue-500 animate-spin relative" />
    </div>
    <p className="mt-4 text-sm font-medium text-slate-400">{message}</p>
  </div>
);

export const ErrorState = ({
  title = "Something went wrong",
  message = "An error occurred while loading this section. Please try again.",
  onRetry,
  className = ""
}) => (
  <div className={`glass-panel rounded-2xl p-8 text-center max-w-md mx-auto my-8 border border-red-500/20 ${className}`}>
    <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto mb-4">
      <AlertCircle className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-semibold text-slate-100 mb-2">{title}</h3>
    <p className="text-sm text-slate-400 mb-6">{message}</p>
    {onRetry && (
      <Button variant="outline" size="sm" onClick={onRetry}>
        Try Again
      </Button>
    )}
  </div>
);

export const SuccessMessage = ({
  title = "Success!",
  message = "Your action was completed successfully.",
  actionText,
  onAction,
  className = ""
}) => (
  <div className={`glass-panel-glow rounded-2xl p-8 text-center max-w-lg mx-auto my-6 border border-emerald-500/30 ${className}`}>
    <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4">
      <CheckCircle2 className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
    <p className="text-sm text-slate-300 mb-6 leading-relaxed">{message}</p>
    {actionText && onAction && (
      <Button variant="primary" size="md" onClick={onAction}>
        {actionText}
      </Button>
    )}
  </div>
);
