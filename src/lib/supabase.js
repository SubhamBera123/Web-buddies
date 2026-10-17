import { createClient } from '@supabase/supabase-js';
import { 
  INITIAL_PROJECTS, 
  INITIAL_SERVICES, 
  INITIAL_PRICING_PACKAGES, 
  INITIAL_FAQS, 
  INITIAL_TESTIMONIALS,
  SITE_CONFIG 
} from './constants';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('placeholder') &&
  supabaseUrl.startsWith('https://')
);

// Instantiate client if keys exist, otherwise provide safe fallback proxy
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Local storage keys for resilient mock/offline operation
const STORAGE_KEYS = {
  ENQUIRIES: 'nexuscraft_enquiries',
  PROJECTS: 'nexuscraft_projects',
  SERVICES: 'nexuscraft_services',
  PRICING: 'nexuscraft_pricing',
  FAQS: 'nexuscraft_faqs',
  TESTIMONIALS: 'nexuscraft_testimonials',
  SETTINGS: 'nexuscraft_settings',
  ADMIN_SESSION: 'nexuscraft_admin_session'
};

// Initialize localStorage fallback datasets if not already present
export const initializeLocalStorageData = () => {
  if (typeof window === 'undefined') return;

  if (!localStorage.getItem(STORAGE_KEYS.PROJECTS)) {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(INITIAL_PROJECTS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.SERVICES)) {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(INITIAL_SERVICES));
  }
  if (!localStorage.getItem(STORAGE_KEYS.PRICING)) {
    localStorage.setItem(STORAGE_KEYS.PRICING, JSON.stringify(INITIAL_PRICING_PACKAGES));
  }
  if (!localStorage.getItem(STORAGE_KEYS.FAQS)) {
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(INITIAL_FAQS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.TESTIMONIALS)) {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(INITIAL_TESTIMONIALS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(SITE_CONFIG));
  }
  if (!localStorage.getItem(STORAGE_KEYS.ENQUIRIES)) {
    // Seed with two realistic sample enquiries so the admin panel is immediately testable
    const initialSampleEnquiries = [
      {
        id: "enq-sample-1",
        fullName: "Vikram Malhotra",
        businessName: "Malhotra Logistics & Cold Chain",
        email: "v.malhotra@malhotralogistics.in",
        phone: "+91 98200 12345",
        serviceRequired: "Custom Web Application Development",
        estimatedBudget: "₹50,000 - ₹1,00,000",
        projectDeadline: "Within 1 Month",
        communicationMethod: "WhatsApp & Phone",
        projectDescription: "We need a custom dashboard to track 40 reefer trucks and allow clients to log in and view temperature logs.",
        referenceUrl: "https://example.com/demo",
        status: "New",
        createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
      },
      {
        id: "enq-sample-2",
        fullName: "Sarah Jenkins",
        businessName: "Aura Artisan Jewelry",
        email: "sarah@aurajewelry.co",
        phone: "+44 7700 900123",
        serviceRequired: "E-Commerce Website Development",
        estimatedBudget: "₹25,000 - ₹50,000",
        projectDeadline: "2-3 Weeks",
        communicationMethod: "Email",
        projectDescription: "Looking to launch our autumn handmade ring collection with Instagram integration and Razorpay/Stripe checkout.",
        referenceUrl: "",
        status: "Contacted",
        createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      }
    ];
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(initialSampleEnquiries));
  }
};

// API Services wrapper with dual-mode support (Supabase live vs Local Mock)
export const dbService = {
  // Enquiries
  async submitEnquiry(enquiryData) {
    const payload = {
      ...enquiryData,
      id: `enq-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      status: 'New',
      createdAt: new Date().toISOString()
    };

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('enquiries')
          .insert([
            {
              full_name: payload.fullName,
              business_name: payload.businessName || null,
              email: payload.email,
              phone: payload.phone || null,
              service_required: payload.serviceRequired,
              estimated_budget: payload.estimatedBudget || null,
              project_deadline: payload.projectDeadline || null,
              communication_method: payload.communicationMethod || 'Email',
              project_description: payload.projectDescription,
              reference_url: payload.referenceUrl || null,
              status: 'New'
            }
          ])
          .select();

        if (error) throw error;
        return { success: true, data, isLive: true };
      } catch (err) {
        console.warn('Supabase insert failed, falling back to local storage:', err);
      }
    }

    // LocalStorage Fallback
    try {
      initializeLocalStorageData();
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.ENQUIRIES) || '[]');
      const updated = [payload, ...existing];
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(updated));
      return { success: true, data: payload, isLive: false };
    } catch (e) {
      console.error('LocalStorage write failed:', e);
      return { success: false, error: e.message };
    }
  },

  async getEnquiries() {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('enquiries')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          // Normalize column names
          return data.map(item => ({
            id: item.id,
            fullName: item.full_name,
            businessName: item.business_name,
            email: item.email,
            phone: item.phone,
            serviceRequired: item.service_required,
            estimatedBudget: item.estimated_budget,
            projectDeadline: item.project_deadline,
            communicationMethod: item.communication_method,
            projectDescription: item.project_description,
            referenceUrl: item.reference_url,
            status: item.status || 'New',
            createdAt: item.created_at
          }));
        }
      } catch (err) {
        console.warn('Supabase fetch failed, loading fallback:', err);
      }
    }

    initializeLocalStorageData();
    const stored = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
    return stored ? JSON.parse(stored) : [];
  },

  async updateEnquiryStatus(id, newStatus) {
    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase
          .from('enquiries')
          .update({ status: newStatus })
          .eq('id', id);
        if (error) console.error(error);
      } catch (err) {
        console.warn('Supabase update failed:', err);
      }
    }

    const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.ENQUIRIES) || '[]');
    const updated = stored.map(enq => enq.id === id ? { ...enq, status: newStatus } : enq);
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(updated));
    return updated;
  },

  async deleteEnquiry(id) {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('enquiries').delete().eq('id', id);
      } catch (err) {
        console.warn(err);
      }
    }

    const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.ENQUIRIES) || '[]');
    const filtered = stored.filter(enq => enq.id !== id);
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(filtered));
    return filtered;
  },

  // Projects
  async getProjects() {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('id', { ascending: true });
        if (!error && data && data.length > 0) return data;
      } catch (e) {
        console.warn('Supabase projects fetch error, fallback to initial:', e);
      }
    }
    initializeLocalStorageData();
    const stored = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return stored ? JSON.parse(stored) : INITIAL_PROJECTS;
  },

  async saveProjects(projectsList) {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projectsList));
    return projectsList;
  },

  // Services
  async getServices() {
    initializeLocalStorageData();
    const stored = localStorage.getItem(STORAGE_KEYS.SERVICES);
    return stored ? JSON.parse(stored) : INITIAL_SERVICES;
  },

  async saveServices(servicesList) {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(servicesList));
    return servicesList;
  },

  // Pricing
  async getPricingPackages() {
    initializeLocalStorageData();
    const stored = localStorage.getItem(STORAGE_KEYS.PRICING);
    return stored ? JSON.parse(stored) : INITIAL_PRICING_PACKAGES;
  },

  async savePricingPackages(packagesList) {
    localStorage.setItem(STORAGE_KEYS.PRICING, JSON.stringify(packagesList));
    return packagesList;
  },

  // FAQs
  async getFaqs() {
    initializeLocalStorageData();
    const stored = localStorage.getItem(STORAGE_KEYS.FAQS);
    return stored ? JSON.parse(stored) : INITIAL_FAQS;
  },

  async saveFaqs(faqsList) {
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(faqsList));
    return faqsList;
  },

  // Testimonials
  async getTestimonials() {
    initializeLocalStorageData();
    const stored = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
    return stored ? JSON.parse(stored) : INITIAL_TESTIMONIALS;
  },

  async saveTestimonials(testimonialsList) {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonialsList));
    return testimonialsList;
  },

  // Site Settings
  async getSettings() {
    initializeLocalStorageData();
    const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return stored ? JSON.parse(stored) : SITE_CONFIG;
  },

  async saveSettings(settings) {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    return settings;
  }
};
