'use client'

import { useEffect } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Events from '../components/Events'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function LandingPage() {
  useEffect(() => {
    // Smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId) {
          document.querySelector(targetId)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div dir="rtl" className="font-heebo bg-cream text-gray-800">
      <Header />
      <main>
        <About />
        <Events />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}
