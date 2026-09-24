import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { WorkflowAndToolkit } from './components/WorkflowAndToolkit';
import { Services } from './components/Services';
import { ContactSection } from './components/ContactSection';
import { GoogleMapSection } from './components/GoogleMapSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080b12] text-[#e2e8f0] relative selection:bg-[#3a86ff] selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Fullscreen Hero Section */}
        <Hero />

        {/* Featured Projects & Works (Videos & Graphics Showcase) */}
        <Portfolio />

        {/* Work Experience & Education */}
        <Experience />

        {/* Software Mastery: My Digital Toolkit */}
        <WorkflowAndToolkit />

        {/* Services & Offerings */}
        <Services />

        {/* Contact Section */}
        <ContactSection />

        {/* Embedded Google Map (Feni, Bangladesh) */}
        <GoogleMapSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
