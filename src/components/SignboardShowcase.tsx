import React, { useState } from 'react';
import { Phone, Mail, Sparkles, Lightbulb, Check, Copy, ExternalLink, ShieldCheck, Zap, Layers } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function SignboardShowcase() {
  const [lightMode, setLightMode] = useState<'warm' | 'soft' | 'day'>('warm');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [showSpecs, setShowSpecs] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const getGlowStyles = () => {
    switch (lightMode) {
      case 'warm':
        return {
          signBoxShadow: '0 0 35px rgba(245, 189, 108, 0.7), 0 0 80px rgba(229, 169, 82, 0.4), 0 0 120px rgba(229, 169, 82, 0.2)',
          wallGlow: 'radial-gradient(circle at 50% 50%, rgba(245, 189, 108, 0.35) 0%, rgba(229, 169, 82, 0.15) 50%, transparent 80%)',
          borderHighlight: 'rgba(255, 230, 180, 0.8)'
        };
      case 'soft':
        return {
          signBoxShadow: '0 0 20px rgba(245, 189, 108, 0.4), 0 0 45px rgba(229, 169, 82, 0.2)',
          wallGlow: 'radial-gradient(circle at 50% 50%, rgba(245, 189, 108, 0.2) 0%, rgba(229, 169, 82, 0.08) 50%, transparent 80%)',
          borderHighlight: 'rgba(255, 230, 180, 0.5)'
        };
      case 'day':
        return {
          signBoxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
          wallGlow: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          borderHighlight: 'rgba(255, 255, 255, 0.3)'
        };
    }
  };

  const glowStyle = getGlowStyles();

  return (
    <section className="relative bg-[#0D1510] text-[#FAF7F2] py-20 md:py-28 overflow-hidden border-y border-[#E5A952]/20">
      {/* Background Architectural Texture & Spotlights */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#1B3D2B_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E5A952]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1B3D2B]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E5A952]/40 bg-[#122E21]/80 text-[#F3C77C] text-[10px] font-sans font-bold uppercase tracking-[0.25em] mb-4 glow-amber-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Architectural Identity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#FAF7F2]">
            Signature Illuminated Landmark
          </h2>
          <p className="text-[#EDE5D8]/75 text-xs sm:text-sm mt-3 leading-relaxed font-light max-w-xl">
            Designed with warm white 3000K LED edge illumination, 10mm precision acrylic, and surgical SS 304 standoffs.
          </p>
        </div>

        {/* INTERACTIVE LIGHTING CONTROLS */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 bg-[#15221B]/90 p-2 border border-[#E5A952]/30 rounded-full backdrop-blur-md z-20">
          <span className="text-[10px] uppercase font-bold text-[#F3C77C] tracking-widest pl-3 flex items-center gap-1.5 font-sans">
            <Lightbulb className="w-3.5 h-3.5 text-[#E5A952]" />
            <span>Backlit LED Mood:</span>
          </span>
          {[
            { id: 'warm', label: '3000K Warm Amber Halo' },
            { id: 'soft', label: 'Dim Evening Ambient' },
            { id: 'day', label: 'Daylight Neutral' }
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setLightMode(mode.id as any)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                lightMode === mode.id
                  ? 'bg-[#E5A952] text-[#122E21] shadow-[0_0_15px_rgba(229,169,82,0.6)]'
                  : 'text-[#EDE5D8]/70 hover:text-[#FAF7F2] hover:bg-[#1B3D2B]/50'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* SIGNBOARD REPLICA CONTAINER */}
        <div className="relative w-full max-w-4xl p-4 sm:p-8 md:p-12 flex items-center justify-center">
          
          {/* Ambient Wall Wash Backlight */}
          <div
            className="absolute inset-2 sm:inset-4 transition-all duration-700 pointer-events-none rounded-2xl"
            style={{ background: glowStyle.wallGlow }}
          />

          {/* THE 10MM ACRYLIC BOARD */}
          <div
            className="relative w-full rounded-xl transition-all duration-500 overflow-hidden bg-[#FAF7F2] text-[#122E21] p-6 sm:p-10 md:p-12 border"
            style={{
              boxShadow: glowStyle.signBoxShadow,
              borderColor: glowStyle.borderHighlight
            }}
          >
            {/* 6 Stainless Steel (SS 304) Standoff Screws */}
            <div className="absolute top-4 left-4 standoff-bolt" title="SS 304 Standoff" />
            <div className="absolute top-4 right-4 standoff-bolt" title="SS 304 Standoff" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 standoff-bolt hidden sm:block" title="SS 304 Standoff" />
            <div className="absolute bottom-4 left-4 standoff-bolt" title="SS 304 Standoff" />
            <div className="absolute bottom-4 right-4 standoff-bolt" title="SS 304 Standoff" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 standoff-bolt hidden sm:block" title="SS 304 Standoff" />

            {/* Subtle Acrylic Bevel Edge Reflection */}
            <div className="absolute inset-0 pointer-events-none border border-white/80 rounded-xl" />
            <div className="absolute inset-[1px] pointer-events-none border border-[#122E21]/5 rounded-[11px]" />

            {/* INNER SIGN CONTENT */}
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-2 sm:py-4">
              
              {/* Botanical Twig & Leaf Logo Motif */}
              <div className="mb-1 text-[#122E21] flex justify-center">
                <svg
                  className="w-24 sm:w-32 md:w-40 h-auto overflow-visible"
                  viewBox="0 0 160 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Stem */}
                  <path
                    d="M10 40 C 45 35, 90 20, 150 12"
                    stroke="#122E21"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  {/* Leaf 1 */}
                  <path
                    d="M35 34 C 30 20, 42 12, 50 18 C 50 28, 42 33, 35 34 Z"
                    fill="#122E21"
                  />
                  {/* Leaf 2 */}
                  <path
                    d="M65 26 C 65 10, 80 5, 88 12 C 86 24, 75 26, 65 26 Z"
                    fill="#122E21"
                  />
                  {/* Leaf 3 */}
                  <path
                    d="M100 19 C 105 5, 122 4, 126 12 C 122 22, 110 20, 100 19 Z"
                    fill="#122E21"
                  />
                  {/* Leaf 4 (hanging downward) */}
                  <path
                    d="M75 28 C 80 40, 94 42, 95 34 C 90 26, 80 26, 75 28 Z"
                    fill="#122E21"
                  />
                  {/* Leaf 5 tip */}
                  <path
                    d="M130 14 C 140 6, 154 8, 155 14 C 148 18, 138 18, 130 14 Z"
                    fill="#122E21"
                  />
                </svg>
              </div>

              {/* BRAND TITLE: Greenarch */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#122E21] tracking-tight leading-none mb-1">
                Greenarch
              </h1>

              {/* SUBTITLE: FARMS & EVENTS */}
              <div className="w-full flex items-center justify-center gap-3 sm:gap-4 my-2 sm:my-3">
                <div className="flex-1 h-[1px] bg-[#122E21]/60 max-w-[80px] sm:max-w-[140px]" />
                <span className="font-sans text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-[#122E21] whitespace-nowrap">
                  FARMS &amp; EVENTS
                </span>
                <div className="flex-1 h-[1px] bg-[#122E21]/60 max-w-[80px] sm:max-w-[140px]" />
              </div>

              {/* Single Central Leaf accent */}
              <div className="my-1 text-[#122E21]">
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2 C 5 7, 5 14, 10 18 C 15 14, 15 7, 10 2 Z" />
                </svg>
              </div>

              {/* Bottom Divider Bar */}
              <div className="w-full h-[1px] bg-[#122E21]/40 my-3 sm:my-4 max-w-xl" />

              {/* SOURCED CONTACT PILLS */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#122E21] font-semibold w-full">
                
                {/* Phone Pill */}
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="group/phone flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#122E21]/20 hover:bg-[#122E21] hover:text-[#FAF7F2] transition-all duration-300"
                  title="Click to call +91 9989336222"
                >
                  <div className="w-6 h-6 rounded-full bg-[#122E21] text-[#FAF7F2] flex items-center justify-center group-hover/phone:bg-[#E5A952] group-hover/phone:text-[#122E21] transition-colors">
                    <Phone className="w-3 h-3 fill-current" />
                  </div>
                  <span className="font-sans tracking-wider text-xs sm:text-sm font-bold">
                    {CONTACT_INFO.phoneDisplay}
                  </span>
                </a>

                {/* Divider Line */}
                <span className="text-[#122E21]/40 hidden sm:inline text-lg font-light">|</span>

                {/* Email Pill */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="group/email flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#122E21]/20 hover:bg-[#122E21] hover:text-[#FAF7F2] transition-all duration-300"
                  title="Click to send email"
                >
                  <div className="w-6 h-6 rounded-full bg-[#122E21] text-[#FAF7F2] flex items-center justify-center group-hover/email:bg-[#E5A952] group-hover/email:text-[#122E21] transition-colors">
                    <Mail className="w-3 h-3" />
                  </div>
                  <span className="font-sans tracking-wide text-[11px] sm:text-xs font-semibold">
                    {CONTACT_INFO.email}
                  </span>
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* SIGNBOARD ENGINEERING SPECIFICATIONS EXPANDER */}
        <div className="mt-8 flex flex-col items-center w-full max-w-3xl">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#E5A952]/40 bg-[#122E21]/80 text-[#F3C77C] text-[10px] font-sans font-bold uppercase tracking-[0.2em] hover:bg-[#122E21] hover:border-[#E5A952] transition-all cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{showSpecs ? 'Hide Sign Specifications' : 'View Signboard Material Specifications'}</span>
          </button>

          {showSpecs && (
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 p-6 bg-[#15221B] border border-[#E5A952]/30 rounded-xl text-left animate-fade-in">
              <div className="p-3 bg-[#0D1510] border border-[#1B3D2B] rounded-lg">
                <span className="text-[9px] uppercase font-bold text-[#E5A952] block tracking-wider">Acrylic Panel</span>
                <strong className="text-xs text-[#FAF7F2] font-serif block mt-1">{CONTACT_INFO.signSpecs.sheet}</strong>
              </div>
              <div className="p-3 bg-[#0D1510] border border-[#1B3D2B] rounded-lg">
                <span className="text-[9px] uppercase font-bold text-[#E5A952] block tracking-wider">Backlit LEDs</span>
                <strong className="text-xs text-[#FAF7F2] font-serif block mt-1">{CONTACT_INFO.signSpecs.led}</strong>
              </div>
              <div className="p-3 bg-[#0D1510] border border-[#1B3D2B] rounded-lg">
                <span className="text-[9px] uppercase font-bold text-[#E5A952] block tracking-wider">Hardware</span>
                <strong className="text-xs text-[#FAF7F2] font-serif block mt-1">{CONTACT_INFO.signSpecs.mounting}</strong>
              </div>
              <div className="p-3 bg-[#0D1510] border border-[#1B3D2B] rounded-lg">
                <span className="text-[9px] uppercase font-bold text-[#E5A952] block tracking-wider">Dimensions</span>
                <strong className="text-xs text-[#FAF7F2] font-serif block mt-1">{CONTACT_INFO.signSpecs.dimensions}</strong>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}