import React, { useState } from 'react';
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
import { useScrollTop } from '../hooks/useScrollTop';

export const HomePage = () => {
  useScrollTop();
  const [selectedDemoProject, setSelectedDemoProject] = useState(null);
  const [selectedVideoProject, setSelectedVideoProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans">
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
