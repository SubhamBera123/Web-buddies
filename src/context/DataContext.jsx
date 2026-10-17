import React, { createContext, useContext, useState, useEffect } from 'react';
import { dbService, isSupabaseConfigured } from '../lib/supabase';
import { 
  INITIAL_PROJECTS, 
  INITIAL_SERVICES, 
  INITIAL_PRICING_PACKAGES, 
  INITIAL_FAQS, 
  INITIAL_TESTIMONIALS,
  SITE_CONFIG 
} from '../lib/constants';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [services, setServices] = useState(INITIAL_SERVICES);
  const [pricingPackages, setPricingPackages] = useState(INITIAL_PRICING_PACKAGES);
  const [faqs, setFaqs] = useState(INITIAL_FAQS);
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS);
  const [settings, setSettings] = useState(SITE_CONFIG);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    const loadAllData = async () => {
      try {
        const [proj, serv, price, faqList, testList, sett, enqList] = await Promise.all([
          dbService.getProjects(),
          dbService.getServices(),
          dbService.getPricingPackages(),
          dbService.getFaqs(),
          dbService.getTestimonials(),
          dbService.getSettings(),
          dbService.getEnquiries()
        ]);

        if (proj?.length) setProjects(proj);
        if (serv?.length) setServices(serv);
        if (price?.length) setPricingPackages(price);
        if (faqList?.length) setFaqs(faqList);
        if (testList?.length) setTestimonials(testList);
        if (sett) setSettings(sett);
        if (enqList) setEnquiries(enqList);
      } catch (err) {
        console.error('Failed to load initial studio data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  // Enquiry actions
  const submitEnquiry = async (formData) => {
    const result = await dbService.submitEnquiry(formData);
    if (result.success) {
      const refreshed = await dbService.getEnquiries();
      setEnquiries(refreshed);
    }
    return result;
  };

  const updateEnquiryStatus = async (id, newStatus) => {
    const updated = await dbService.updateEnquiryStatus(id, newStatus);
    setEnquiries(updated);
  };

  const deleteEnquiry = async (id) => {
    const updated = await dbService.deleteEnquiry(id);
    setEnquiries(updated);
  };

  // Pricing actions
  const updatePackagePrice = async (packageId, newPrice) => {
    const updated = pricingPackages.map(pkg => {
      if (pkg.id === packageId) {
        return {
          ...pkg,
          price: Number(newPrice),
          priceDisplay: `₹${Number(newPrice).toLocaleString('en-IN')}`
        };
      }
      return pkg;
    });
    setPricingPackages(updated);
    await dbService.savePricingPackages(updated);
  };

  // Project actions
  const saveProject = async (projectData) => {
    let updated;
    const exists = projects.find(p => p.id === projectData.id);
    if (exists) {
      updated = projects.map(p => p.id === projectData.id ? { ...p, ...projectData } : p);
    } else {
      updated = [{ ...projectData, id: projectData.id || `proj-${Date.now()}` }, ...projects];
    }
    setProjects(updated);
    await dbService.saveProjects(updated);
    return updated;
  };

  const deleteProject = async (id) => {
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    await dbService.saveProjects(updated);
    return updated;
  };

  // Settings action
  const updateSettings = async (newSettings) => {
    const merged = { ...settings, ...newSettings };
    setSettings(merged);
    await dbService.saveSettings(merged);
    return merged;
  };

  return (
    <DataContext.Provider value={{
      projects,
      services,
      pricingPackages,
      faqs,
      testimonials,
      settings,
      enquiries,
      loading,
      isSupabaseConnected: isSupabaseConfigured,
      submitEnquiry,
      updateEnquiryStatus,
      deleteEnquiry,
      updatePackagePrice,
      saveProject,
      deleteProject,
      updateSettings
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
