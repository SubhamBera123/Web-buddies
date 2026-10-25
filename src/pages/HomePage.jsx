import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { HomeStudioIntro } from '../components/home/HomeStudioIntro';
import { SelectedProjects } from '../components/home/SelectedProjects';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WhyWorkWithMe } from '../components/home/WhyWorkWithMe';
import { ProcessSection } from '../components/home/ProcessSection';
import { PricingOverview } from '../components/home/PricingOverview';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { EnquiryCTA } from '../components/home/EnquiryCTA';
import { Footer } from '../components/layout/Footer';
import { LiveDemoModal } from '../components/common/LiveDemoModal';
import { ProjectVideoModal } from '../components/common/ProjectVideoModal';
import { LaptopIntro } from '../components/home/LaptopIntro';
import { Interactive3DBackground } from '../components/common/Interactive3DBackground';
import { useTheme } from '../context/ThemeContext';
import { useScrollTop } from '../hooks/useScrollTop';

export const HomePage = () => {
  useScrollTop();
  const { theme, isLuxury, isFuturistic } = useTheme();
  const [selectedDemoProject, setSelectedDemoProject] = useState(null);
  const [selectedVideoProject, setSelectedVideoProject] = useState(null);

  const getPageBgClass = () => {
    if (isLuxury) {
      return 'bg-[#FAF8F5] text-[#1C1917] selection:bg-[#9E7B4F]/30 selection:text-[#1C1917]';
    }
    if (isFuturistic) {
      return 'bg-[#02040A] text-[#F0FDF4] selection:bg-[#00F0FF]/30 selection:text-[#00F0FF]';
    }
    return 'bg-[#050505] text-[#F5F3EF] selection:bg-[#B89458]/30 selection:text-[#D2B477]';
  };

  return (
    <div className={`min-h-screen ${getPageBgClass()} flex flex-col font-sans relative overflow-x-hidden transition-colors duration-500`}>
      {/* Interactive 3D Background System */}
      <Interactive3DBackground />

      {/* Interactive 3D Laptop Opening Intro Screen */}
      <LaptopIntro />

      {/* Global Fixed Navbar */}
      <Navbar />

      {/* 1 & 2. Compact Studio Introduction without conventional hero/navbar + Statement */}
      <HomeStudioIntro 
        onOpenLiveDemo={(project) => setSelectedDemoProject(project)}
        onOpenVideoModal={(project) => setSelectedVideoProject(project)}
      />

      {/* 5. Selected Projects */}
      <SelectedProjects 
        onOpenLiveDemo={(project) => setSelectedDemoProject(project)}
        onOpenVideoModal={(project) => setSelectedVideoProject(project)}
      />

      {/* 6. Services Overview */}
      <ServicesOverview />

      {/* 7. Why Work With Me */}
      <WhyWorkWithMe />

      {/* 8. Development Process */}
      <ProcessSection />

      {/* 9. Pricing Overview */}
      <PricingOverview />

      {/* 10. Genuine / Labeled Testimonials */}
      <TestimonialsSection />

      {/* 11. FAQ Accordion */}
      <FAQSection />

      {/* 12. Final Project Enquiry */}
      <EnquiryCTA />

      {/* 13. Professional Footer */}
      <Footer />

      {/* Global Interactive Demo Prototype Modal */}
      <LiveDemoModal 
        isOpen={Boolean(selectedDemoProject)} 
        onClose={() => setSelectedDemoProject(null)} 
        project={selectedDemoProject} 
      />

      {/* Global Project Video Walkthrough Modal */}
      <ProjectVideoModal
        isOpen={Boolean(selectedVideoProject)}
        onClose={() => setSelectedVideoProject(null)}
        project={selectedVideoProject}
      />
    </div>
  );
};
