/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import MenuSection from './components/MenuSection';
import Reviews from './components/Reviews';
import ContactLocation from './components/ContactLocation';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import AdminImageManager from './components/AdminImageManager';

export default function App() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen font-sans text-[#1A1A1A] selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <MenuSection />
      <Reviews />
      <ContactLocation />
      <FAQ />
      <FooterCTA />
      <AdminImageManager />
    </div>
  );
}
