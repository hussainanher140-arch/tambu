/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStackTicker } from './components/TechStackTicker';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectCalculator } from './components/ProjectCalculator';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { LogoStudioModal } from './components/LogoStudioModal';
import { Language, Project, Service } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLogoStudioOpen, setIsLogoStudioOpen] = useState(false);
  const [prefilledScope, setPrefilledScope] = useState<{
    packageTitle: string;
    addOns: string[];
    totalCost: number;
    timeline: string;
  } | null>(null);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: Service) => {
    setPrefilledScope({
      packageTitle: service.title,
      addOns: [],
      totalCost: parseInt(service.startingPrice.replace(/\D/g, ''), 10) || 350,
      timeline: service.turnaround,
    });
    scrollToSection('contact');
  };

  const handleSendScopeToContact = (scope: {
    packageTitle: string;
    addOns: string[];
    totalCost: number;
    timeline: string;
  }) => {
    setPrefilledScope(scope);
    scrollToSection('contact');
  };

  const handleInquireSimilar = (projectTitle: string) => {
    setPrefilledScope({
      packageTitle: `Project similar to: ${projectTitle}`,
      addOns: [],
      totalCost: 400,
      timeline: '5-7 Days',
    });
    scrollToSection('contact');
  };

  return (
    <div className={`min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-neutral-950 ${lang === 'bn' ? 'font-bangla' : ''}`}>
      {/* Subtle Scroll Reading Progress Bar at the very top */}
      <ScrollProgressBar />

      {/* Top sticky navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenEstimator={() => scrollToSection('estimator')}
        onOpenContact={() => scrollToSection('contact')}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onExploreWork={() => scrollToSection('portfolio')}
          onOpenEstimator={() => scrollToSection('estimator')}
          onOpenContact={() => scrollToSection('contact')}
        />

        {/* Marquee Ticker */}
        <TechStackTicker />

        {/* Services Suite */}
        <ServicesSection
          lang={lang}
          onSelectService={handleSelectService}
          onOpenEstimator={() => scrollToSection('estimator')}
        />

        {/* Selected Portfolio Work */}
        <PortfolioSection
          lang={lang}
          onOpenCaseStudy={(proj) => setSelectedProject(proj)}
          onOpenLogoStudio={() => setIsLogoStudioOpen(true)}
        />

        {/* Interactive Cost & Timeline Estimator */}
        <ProjectCalculator
          lang={lang}
          onSendToContact={handleSendScopeToContact}
        />

        {/* About Salman Mohammad Tarek with authentic photos & timeline */}
        <AboutSection
          lang={lang}
          onOpenContact={() => scrollToSection('contact')}
        />

        {/* Client Endorsements & Reviews */}
        <TestimonialsSection lang={lang} />

        {/* FAQs */}
        <FaqSection lang={lang} />

        {/* Contact & Consultation Hub */}
        <ContactSection
          lang={lang}
          prefilledScope={prefilledScope}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Case Study Drawer Modal */}
      <CaseStudyModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
        onInquireSimilar={handleInquireSimilar}
      />

      {/* Interactive Logo Studio Modal */}
      <LogoStudioModal
        isOpen={isLogoStudioOpen}
        lang={lang}
        onClose={() => setIsLogoStudioOpen(false)}
        onBookLogo={() => {
          setPrefilledScope({
            packageTitle: 'Logo & Brand Identity Pack',
            addOns: ['Stationery & Mockup Suite'],
            totalCost: 150,
            timeline: '3 Days',
          });
          scrollToSection('contact');
        }}
      />
    </div>
  );
}
