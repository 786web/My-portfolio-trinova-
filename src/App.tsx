/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Page, Project } from './types';
import { CONTACT_INFO, PROJECTS } from './data/content';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import { AuthModal } from './components/AuthModal';
import { supabase } from './lib/supabase';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { FreeDemoPage } from './pages/FreeDemoPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { DashboardPage } from './pages/DashboardPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isEmailCopied, setIsEmailCopied] = useState<boolean>(false);

  // Authentication State
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<'admin' | 'client' | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  useEffect(() => {
    const loadUser = async (user: any) => {
      if (!user) {
        setCurrentUserEmail(null);
        setCurrentUserId(null);
        setUserRole(null);
        return;
      }
      setCurrentUserEmail(user.email || null);
      setCurrentUserId(user.id);
      const { data } = await supabase.from('profiles').select('role').eq('id', user.id).single();
      setUserRole(data?.role === 'admin' ? 'admin' : 'client');
    };
    supabase.auth.getSession().then(({ data }) => loadUser(data.session?.user || null));
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      void loadUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setCurrentUserEmail(null);
    setCurrentUserId(null);
    setUserRole(null);
    setCurrentPage('home');
    setToastMessage('Signed out successfully.');
  };

  const handleAuthSuccess = (email: string) => {
    setCurrentUserEmail(email);
    setToastMessage(`Welcome, ${email}!`);
  };

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
        currentUserEmail={currentUserEmail}
        onOpenAuth={handleOpenAuth}
        onSignOut={handleSignOut}
        userRole={userRole}
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

        {currentPage === 'dashboard' && currentUserId && userRole && (
          <DashboardPage userId={currentUserId} role={userRole} />
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

      {/* Authentication Modal (Login / Sign Up via Supabase) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        initialMode={authMode}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />

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
