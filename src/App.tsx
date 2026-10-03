/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Page, Project } from './types';
import { CONTACT_INFO, PROJECTS } from './data/content';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { FreeDemoPage } from './pages/FreeDemoPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isEmailCopied, setIsEmailCopied] = useState<boolean>(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setIsEmailCopied(true);
    setToastMessage(`Copied ${CONTACT_INFO.email} to clipboard!`);
    setTimeout(() => {
      setIsEmailCopied(false);
    }, 3000);
  };

  const handleRequestDemoFromProject = (projectTitle: string) => {
    setCurrentPage('demo');
    setToastMessage(`Selected "${projectTitle}" for custom demo!`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-white flex flex-col font-sans selection:bg-[#00F5FF] selection:text-[#040d1a] relative">
      
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onCopyEmail={handleCopyEmail}
        isEmailCopied={isEmailCopied}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProject={(proj) => setSelectedProject(proj)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onOpenProject={(proj) => setSelectedProject(proj)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'demo' && (
          <FreeDemoPage />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onCopyEmail={handleCopyEmail}
            isEmailCopied={isEmailCopied}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onCopyEmail={handleCopyEmail}
        isEmailCopied={isEmailCopied}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloating />

      {/* Interactive Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestDemo={handleRequestDemoFromProject}
        />
      )}

      {/* Notification Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}

    </div>
  );
}
