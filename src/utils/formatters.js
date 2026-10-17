import React from 'react';
import * as LucideIcons from 'lucide-react';

export const formatINR = (amount) => {
  if (typeof amount !== 'number') return amount;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export const truncateText = (text, maxLength = 120) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

// Safe Lucide Icon Renderer
export const DynamicIcon = ({ name, className = "w-6 h-6", ...props }) => {
  const IconComponent = LucideIcons[name] || LucideIcons.Globe;
  return React.createElement(IconComponent, { className, ...props });
};
