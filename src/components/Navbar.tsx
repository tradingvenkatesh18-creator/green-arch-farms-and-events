import React, { useState, useEffect } from 'react';
import { Heart, Phone, Menu, X, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5A952]/25 shadow-[0_4px_25px_rgba(18,46,33,0.06)] py-3.5'
          : 'bg-[#0D1510]/80 backdrop-blur-sm border-b border-[#E5A952]/15 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo - Botanical Twig & Serif Lettering */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3.5 cursor-pointer group"
        >
          {/* Logo Signboard Image Container with Backlit Standoff Glow */}
          <div className={`relative flex items-center justify-center h-10 sm:h-11 w-24 sm:w-28 rounded-xl overflow-hidden border transition-all duration-300 ${
            isScrolled
              ? 'bg-[#122E21] border-[#E5A952]/70 shadow-[0_0_15px_rgba(229,169,82,0.45)]'
              : 'bg-[#15221B] border-[#E5A952] shadow-[0_0_22px_rgba(229,169,82,0.65)]'
          }`}>
            <img
              src="/brand-logo.png"
              alt="Greenarch Farms & Events"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className={`font-serif font-semibold text-lg sm:text-xl tracking-tight transition-colors ${
                isScrolled ? 'text-[#122E21]' : 'text-[#FAF7F2]'
              }`}>
                Greenarch
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5A952] animate-pulse" />
            </div>
            <p className={`text-[8.5px] tracking-[0.28em] uppercase font-sans font-bold transition-colors ${
              isScrolled ? 'text-[#122E21]/70' : 'text-[#EDE5D8]/70'
            }`}>
              FARMS &amp; EVENTS
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'amenities', label: 'Amenities' },
            { id: 'gallery', label: 'Gallery' },
            { id: 'videos', label: 'Video Tours' },
            { id: 'faqs', label: 'Stay FAQs' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-sans text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative py-1 hover:text-[#E5A952] cursor-pointer ${
                isScrolled ? 'text-[#122E21]/80 hover:text-[#122E21]' : 'text-[#FAF7F2]/85 hover:text-[#FAF7F2]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Buttons & Contact Badge */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Sourced Direct Call Button */}
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-[10px] font-sans font-bold uppercase tracking-wider transition-all duration-300 ${
              isScrolled
                ? 'border-[#122E21]/20 text-[#122E21] hover:border-[#122E21] hover:bg-[#122E21]/5'
                : 'border-[#E5A952]/40 text-[#FAF7F2] hover:bg-[#E5A952]/15 hover:border-[#E5A952]'
            }`}
            title="Direct Booking Desk"
          >
            <Phone className="w-3 h-3 text-[#E5A952]" />
            <span>{CONTACT_INFO.phoneDisplay}</span>
          </a>

          {/* Book Stay CTA with Glowing Amber Accent */}
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E5A952] bg-[#122E21] text-[#FAF7F2] font-sans text-[10px] font-bold uppercase tracking-[0.22em] hover:bg-[#E5A952] hover:text-[#122E21] transition-all duration-300 shadow-[0_0_15px_rgba(229,169,82,0.35)] hover:shadow-[0_0_22px_rgba(229,169,82,0.65)] active:scale-[0.98] cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E5A952]" />
            <span>Inquire Stay</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E5A952]/40 text-[#E5A952]"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-colors cursor-pointer ${
              isScrolled ? 'text-[#122E21]' : 'text-[#FAF7F2]'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0D1510]/98 border-b border-[#E5A952]/30 px-6 py-6 flex flex-col gap-5 text-[#FAF7F2] backdrop-blur-xl animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-2">
            {[
              { id: 'overview', label: 'Overview & Venue' },
              { id: 'amenities', label: 'Luxury Amenities' },
              { id: 'gallery', label: 'Photo & Video Gallery' },
              { id: 'videos', label: '20 Video Walkthroughs' },
              { id: 'faqs', label: 'Frequently Asked Questions' },
              { id: 'contact', label: 'Contact & Location' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#EDE5D8]/90 hover:text-[#E5A952] py-2.5 border-b border-[#1B3D2B]/50 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#E5A952]/40 bg-[#15221B] text-[#FAF7F2] text-xs font-sans font-bold uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#E5A952]" />
              <span>Call {CONTACT_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-[#E5A952] bg-[#E5A952] text-[#122E21] font-sans text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(229,169,82,0.5)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Inquire &amp; Contact</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

