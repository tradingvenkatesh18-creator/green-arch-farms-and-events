import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GallerySection from './components/GallerySection';
import VideoToursSection from './components/VideoToursSection';
import { MediaItem } from './mediaData';
import {
  CONTACT_INFO,
  AMENITIES,
  EXPERIENCE_PACKAGES,
  COMFORT_SERVICES,
  FAQS,
  TESTIMONIALS
} from './data';
import {
  Waves,
  Home,
  Trees,
  UtensilsCrossed,
  Zap,
  Flame,
  Target,
  Tv,
  Gamepad2,
  Heart,
  ShieldCheck,
  Car,
  Sparkles,
  CloudRain,
  Trophy,
  Check,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle2,
  MessageSquare,
  Play,
  Film
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Waves,
  Home,
  Trees,
  UtensilsCrossed,
  Zap,
  Flame,
  Target,
  Tv,
  Gamepad2,
  Heart,
  ShieldCheck,
  Car,
  Sparkles,
  CloudRain,
  Trophy
};

export default function App() {
  const [copiedPlusCode, setCopiedPlusCode] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeModalMedia, setActiveModalMedia] = useState<MediaItem | null>(null);

  const copyPlusCode = () => {
    navigator.clipboard.writeText(CONTACT_INFO.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2000);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#122E21] font-sans selection:bg-[#E5A952]/30 selection:text-[#122E21]">
      {/* Sticky Header */}
      <Navbar />

      {/* 1. HERO SECTION - Illuminated Luxury Villa Backdrop */}
      <header className="relative min-h-[95vh] flex items-center justify-center bg-[#0D1510] text-[#FAF7F2] pt-24 pb-16 overflow-hidden">
        {/* Real Villa Architecture Background Image with Crisp Visibility */}
        <div className="absolute inset-0 z-0 opacity-85">
          <img
            src="/hero-estate.jpg"
            alt="Greenarch Farms - Luxury Villa & Pool Estate"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle Balanced Vignette for High Contrast & Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1510] via-[#0D1510]/35 to-[#0D1510]/50" />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Ambient Warm Golden Glow Accent */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E5A952]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center py-12">
          {/* LGBTQ+ & Sanctuary Indicator with Gold Amber Border */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5A952]/50 text-[#F3C77C] text-[10px] font-sans font-bold uppercase tracking-[0.25em] mb-4 bg-[#0D1510]/85 backdrop-blur-md glow-amber-sm shadow-lg">
            <Heart className="w-3.5 h-3.5 fill-[#E5A952]/20 stroke-[#E5A952]" />
            <span>Inclusive &amp; LGBTQ+ Welcoming Luxury Sanctuary</span>
          </div>

          {/* Real Media Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E5A952]/30 text-[#FAF7F2]/90 text-[9px] font-sans font-bold uppercase tracking-[0.2em] mb-6 bg-[#15221B]/80 backdrop-blur-sm">
            <Film className="w-3 h-3 text-[#E5A952]" />
            <span>55 Real Estate Photos &bull; 20 Walkthrough Video Tours</span>
          </div>

          {/* Botanical Branch Arch SVG Icon */}
          <div className="mb-3 text-[#E5A952] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            <svg className="w-20 sm:w-28 h-auto" viewBox="0 0 160 40" fill="none">
              <path
                d="M10 32 C 45 28, 90 16, 150 10"
                stroke="#E5A952"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path d="M35 27 C 30 16, 42 10, 50 14 C 50 22, 42 26, 35 27 Z" fill="#E5A952" />
              <path d="M65 21 C 65 8, 80 4, 88 10 C 86 19, 75 21, 65 21 Z" fill="#E5A952" />
              <path d="M100 15 C 105 4, 122 3, 126 10 C 122 18, 110 16, 100 15 Z" fill="#E5A952" />
              <path d="M75 22 C 80 32, 94 34, 95 27 C 90 21, 80 21, 75 22 Z" fill="#E5A952" />
            </svg>
          </div>

          {/* Majestic Hero Title with Text Shadow */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight max-w-4xl text-[#FAF7F2] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            Greenarch
          </h1>

          <div className="w-full flex items-center justify-center gap-3 sm:gap-4 my-3">
            <div className="h-[1px] bg-[#E5A952]/60 w-16 sm:w-24 shadow-sm" />
            <h2 className="font-sans text-xs sm:text-sm md:text-base text-[#F3C77C] font-bold uppercase tracking-[0.35em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              FARMS &amp; EVENTS
            </h2>
            <div className="h-[1px] bg-[#E5A952]/60 w-16 sm:w-24 shadow-sm" />
          </div>

          <p className="text-[#FAF7F2] text-sm sm:text-base max-w-2xl mt-4 leading-relaxed font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] bg-[#0D1510]/35 px-4 py-2 rounded-2xl backdrop-blur-[2px]">
            A sprawling 5-acre private luxury destination featuring 9 BHK AC rooms, 500-seat AC banquet hall, massive swimming pool, permanent stage, and sports adventure arena in Shamshabad, Hyderabad.
          </p>

          {/* Quick Metrics Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 w-full max-w-3xl mt-10">
            {[
              { label: '5-Acre Farmhouse', value: 'Private Destination' },
              { label: '9 BHK AC Rooms', value: 'Overnight Stays' },
              { label: '500-Seat AC Hall', value: 'Lawn + Stage' },
              { label: 'Sports & Adventure', value: 'Cricket, Bikes & Pool' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#15221B]/90 border border-[#E5A952]/25 rounded-xl p-4 text-center backdrop-blur-sm transition-all hover:border-[#E5A952] hover:shadow-[0_0_15px_rgba(229,169,82,0.2)]"
              >
                <span className="text-[9px] text-[#E5A952] font-bold uppercase tracking-[0.2em] block">
                  {stat.label}
                </span>
                <span className="text-xs text-[#FAF7F2] font-medium mt-1 block font-serif italic">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#E5A952] bg-[#E5A952] text-[#122E21] text-xs font-sans font-bold uppercase tracking-[0.25em] hover:bg-transparent hover:text-[#FAF7F2] transition-all duration-300 shadow-[0_0_25px_rgba(229,169,82,0.5)] active:scale-[0.98] cursor-pointer"
            >
              Inquire &amp; Reserve Stay
            </button>
            <a
              href="#videos"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#E5A952]/60 bg-[#15221B]/90 text-[#F3C77C] text-xs font-sans font-bold uppercase tracking-[0.22em] hover:border-[#E5A952] hover:bg-[#E5A952] hover:text-[#122E21] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(229,169,82,0.2)]"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch 20 Video Tours</span>
            </a>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#E5A952]/40 bg-[#15221B]/70 text-[#FAF7F2] text-xs font-sans font-bold uppercase tracking-[0.22em] hover:border-[#E5A952] hover:bg-[#122E21] transition-all duration-300 text-center"
            >
              75 Real Media Photos
            </a>
          </div>

          {/* Primary Phone & Inquiries */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-[#EDE5D8]/75">
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-[#E5A952] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#E5A952]" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <span className="text-[#E5A952]/40">•</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-[#E5A952] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#E5A952]" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. OVERVIEW SECTION */}
      <section id="overview" className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-[#E5A952]">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] font-sans text-[#122E21]">
              About the Farmstay
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-[#122E21]">
            A Sprawling 5-Acre Destination for Unforgettable Events &amp; Stays
          </h2>

          <p className="text-[#122E21]/80 text-sm md:text-base leading-relaxed font-light">
            Located just 15 minutes from Rajiv Gandhi International Airport in Chinna Golconda, Shamshabad,{' '}
            <strong>Greenarch Farms &amp; Events</strong> is a grand 5-acre private farm estate designed for unforgettable celebrations, corporate retreats, and overnight family getaways.
          </p>

          <p className="text-[#122E21]/80 text-sm md:text-base leading-relaxed font-light">
            With <strong>9 comfortable AC bedrooms</strong>, a <strong>500-seat AC banquet hall</strong>, expansive celebration lawns with a permanent stage, massive swimming pool, kids play area, and thrilling sports &amp; adventure activities—our estate offers complete privacy, safety, and personalized hospitality.
          </p>

          {/* Inclusive Safe Space Card */}
          <div className="p-6 md:p-8 rounded-2xl bg-[#F3ECE2] border border-[#E5A952]/40 flex gap-5 items-start shadow-sm">
            <div className="p-3 bg-[#FAF7F2] border border-[#E5A952]/50 text-[#122E21] rounded-xl shadow-sm">
              <Heart className="w-5 h-5 fill-[#E5A952]/20 stroke-[#122E21]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-normal text-[#122E21]">
                Proudly LGBTQ+ Friendly &amp; Inclusive Sanctuary
              </h3>
              <p className="text-[#122E21]/80 text-xs mt-2 leading-relaxed font-light">
                We believe hospitality should always be safe and celebratory. Greenarch Farms is fully committed to offering a respectful, judgment-free, and secure retreat. We proudly host queer celebrations, private romantic getaways, and inclusive events with personalized care.
              </p>
            </div>
          </div>
        </div>

        {/* Overview Feature Cards Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: '5-Acre Private Estate',
              desc: 'Expansive private farm with activity zones and peaceful corners.',
              icon: Trees
            },
            {
              title: '500-Seat AC Banquet',
              desc: 'Grand hall for birthdays, sangeet, haldi, weddings and corporate meets.',
              icon: Home
            },
            {
              title: 'Sports & Adventure',
              desc: 'Cricket box, basketball box, mini dirt bikes, track & tree bridge.',
              icon: Target
            },
            {
              title: 'Massive Swimming Pool',
              desc: 'Large crystal pool for daytime fun and poolside celebrations.',
              icon: Waves
            }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F3ECE2]/70 border border-[#E5A952]/25 transition-all duration-300 hover:border-[#E5A952] hover:shadow-[0_0_20px_rgba(229,169,82,0.2)] hover:bg-[#F3ECE2]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E5A952]/40 text-[#122E21] flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-5 h-5 text-[#122E21]" />
                </div>
                <h4 className="font-serif text-base font-semibold text-[#122E21]">{feature.title}</h4>
                <p className="text-[#122E21]/70 text-xs leading-relaxed mt-2 font-light">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. HIGH-RESOLUTION PROPERTY GALLERY (ALL 75 PHOTOS & VIDEOS) */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5A952] font-sans">
            Real Estate Photography &bull; 75 Authentic Media
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal mt-2 leading-tight text-[#122E21]">
            Comprehensive Resort Gallery
          </h2>
          <p className="text-[#122E21]/70 text-xs md:text-sm mt-3 leading-relaxed font-light">
            Browse through 55 high-resolution photographs and 20 video walkthroughs capturing the illuminated pool, 9 BHK AC bedrooms, suspended tree bridge, and 5-acre landscaped event grounds.
          </p>
        </div>

        <GallerySection
          initialActiveItem={activeModalMedia}
          onClearInitialItem={() => setActiveModalMedia(null)}
        />
      </section>

      {/* 4. EXCLUSIVE VIDEO WALKTHROUGHS SECTION (ALL 20 VIDEOS) */}
      <VideoToursSection
        onOpenVideoModal={(video) => setActiveModalMedia(video)}
      />

      {/* 5. CURATED AMENITIES & EXPERIENCES */}
      <section id="amenities" className="bg-[#F3ECE2]/60 py-20 md:py-32 border-y border-[#E5A952]/25">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5A952] font-sans">
              Official Property Highlights
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal mt-2 leading-tight text-[#122E21]">
              Curated Amenities &amp; Facilities
            </h2>
            <p className="text-[#122E21]/70 text-xs md:text-sm mt-3 leading-relaxed font-light">
              Explore the signature features that make Greenarch Farms Hyderabad’s premier farmstay and celebration venue.
            </p>
          </div>

          {/* 10 Signature Amenities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {AMENITIES.map((amenity) => {
              const Icon = iconMap[amenity.icon] || Home;
              return (
                <div
                  key={amenity.id}
                  className="group bg-[#FAF7F2] rounded-3xl border border-[#E5A952]/30 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#E5A952] hover:shadow-[0_0_30px_rgba(229,169,82,0.3)] hover:-translate-y-1.5"
                >
                  {amenity.imageUrl && (
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#15221B]">
                      <img
                        src={amenity.imageUrl}
                        alt={amenity.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1510]/80 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E5A952]/50 text-[#122E21] flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 text-[#122E21]" />
                      </div>
                      <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#122E21]/90 backdrop-blur-md border border-[#E5A952]/40 text-[#F3C77C] text-[9px] font-sans font-bold uppercase tracking-wider shadow-md">
                        {amenity.category}
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {!amenity.imageUrl && (
                        <div className="w-11 h-11 rounded-xl bg-[#F3ECE2] border border-[#E5A952]/40 text-[#122E21] flex items-center justify-center mb-4 shadow-sm">
                          <Icon className="w-5 h-5 text-[#122E21]" />
                        </div>
                      )}
                      <h3 className="font-serif text-lg font-bold text-[#122E21] uppercase tracking-wide group-hover:text-[#D8973C] transition-colors">
                        {amenity.name}
                      </h3>
                      <p className="text-[#122E21]/75 text-xs leading-relaxed mt-2.5 font-light">
                        {amenity.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#122E21]/10 flex justify-between items-center text-[9px] font-sans font-bold uppercase tracking-widest text-[#122E21]/60">
                      <span>Feature</span>
                      <span className="bg-[#EDE5D8] px-2.5 py-1 rounded-full border border-[#E5A952]/30 text-[#122E21] font-semibold">
                        {amenity.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Booking Formats / Experience Packages */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5A952] font-sans">
                Booking Formats
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-normal mt-2 text-[#122E21]">
                Customized Stay &amp; Event Experiences
              </h3>
              <p className="text-[#122E21]/70 text-xs md:text-sm mt-2 font-light">
                Tailor your reservation according to your group size and occasion.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXPERIENCE_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-[#FAF7F2] border border-[#E5A952]/35 rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all hover:border-[#E5A952] hover:shadow-[0_0_20px_rgba(229,169,82,0.25)]"
                >
                  <div>
                    <h4 className="font-sans text-xs font-bold text-[#122E21] uppercase tracking-wider pb-3 border-b border-[#122E21]/10">
                      {pkg.title}
                    </h4>
                    <p className="text-[#122E21]/75 text-xs leading-relaxed mt-4 font-light">
                      {pkg.description}
                    </p>
                  </div>
                  <button
                    onClick={scrollToContact}
                    className="mt-6 pt-4 border-t border-[#122E21]/10 text-left flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-widest text-[#E5A952] hover:text-[#122E21] transition-colors cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <span>→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Comfort & Hospitality Standards */}
          <div className="bg-[#FAF7F2] border border-[#E5A952]/35 rounded-2xl p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-2 text-[#E5A952] mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] font-sans text-[#122E21]">
                Hospitality Standards
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#122E21] ml-2">
                Comfort &amp; Services
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {COMFORT_SERVICES.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F3ECE2]/60 border border-[#E5A952]/20"
                >
                  <div className="w-5 h-5 rounded-full bg-[#122E21] text-[#E5A952] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs text-[#122E21] font-medium leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-14 flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5A952] font-sans">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal mt-2 leading-tight text-[#122E21]">
            Stay Policies &amp; Details
          </h2>
          <p className="text-[#122E21]/70 text-xs md:text-sm mt-3 leading-relaxed max-w-lg font-light">
            Answers to common questions about catering, music rules, directions, and celebration packages.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] border border-[#E5A952]/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#E5A952]"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-lg font-normal text-[#122E21] hover:text-[#E5A952] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`p-1.5 rounded-full border border-[#E5A952]/40 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#122E21] text-[#FAF7F2]'
                        : 'bg-[#F3ECE2] text-[#122E21]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs md:text-sm text-[#122E21]/85 leading-relaxed font-light border-t border-[#122E21]/10 pt-4 bg-[#F3ECE2]/40 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. CONTACT & LOCATION SECTION */}
      <section id="contact" className="bg-[#0D1510] text-[#FAF7F2] border-t border-[#E5A952]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-[#F3C77C]">
              <Sparkles className="w-4 h-4 text-[#E5A952]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] font-sans">
                Connect with Us
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight text-[#FAF7F2]">
              Let’s Plan Your Perfect Retreat
            </h2>

            <p className="text-[#EDE5D8]/75 text-xs sm:text-sm leading-relaxed font-light">
              Have specific event decoration ideas, chef requirements, or stay date questions? Our concierge team is ready to assist you.
            </p>

            <div className="space-y-6 text-xs text-[#FAF7F2] pt-4">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#15221B] border border-[#E5A952]/30 text-[#E5A952] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-[#E5A952] uppercase block font-bold tracking-widest font-sans">
                    Physical Address
                  </span>
                  <address className="not-italic font-medium leading-relaxed mt-1 text-[#FAF7F2]">
                    {CONTACT_INFO.address}
                  </address>
                  <div className="flex flex-wrap items-center gap-2.5 mt-3">
                    <span className="text-[9px] font-mono bg-[#15221B] text-[#F3C77C] px-2.5 py-1 rounded border border-[#E5A952]/20">
                      Plus Code: {CONTACT_INFO.plusCode}
                    </span>
                    <button
                      onClick={copyPlusCode}
                      className="px-3 py-1 text-[9px] font-sans font-bold uppercase tracking-wider border border-[#E5A952]/40 hover:bg-[#E5A952] hover:text-[#122E21] bg-transparent text-[#F3C77C] rounded transition-all flex items-center gap-1 cursor-pointer"
                    >
                      {copiedPlusCode ? 'Copied' : 'Copy Code'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Direct Phones */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#15221B] border border-[#E5A952]/30 text-[#E5A952] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-[#E5A952] uppercase block font-bold tracking-widest font-sans">
                    Direct Booking Lines
                  </span>
                  <div className="font-semibold text-[#FAF7F2] leading-relaxed mt-1 flex flex-col gap-1.5">
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="hover:text-[#E5A952] transition-colors flex items-center gap-2"
                    >
                      <span className="text-sm">{CONTACT_INFO.phoneDisplay}</span>
                      <span className="text-[9px] font-normal text-[#E5A952] bg-[#15221B] px-2 py-0.5 rounded border border-[#E5A952]/30">
                        Primary Signboard Number
                      </span>
                    </a>
                    <a
                      href={`tel:${CONTACT_INFO.phoneSecondary}`}
                      className="hover:text-[#E5A952] transition-colors flex items-center gap-2"
                    >
                      <span>{CONTACT_INFO.phoneSecondary}</span>
                      <span className="text-[9px] font-normal text-[#EDE5D8]/60">
                        (WhatsApp &amp; Support)
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#15221B] border border-[#E5A952]/30 text-[#E5A952] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-[#E5A952] uppercase block font-bold tracking-widest font-sans">
                    Official Email
                  </span>
                  <div className="font-semibold text-[#FAF7F2] leading-relaxed mt-1">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#E5A952] transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Preview */}
          <div className="lg:col-span-7 h-96 sm:h-[450px] rounded-2xl overflow-hidden border border-[#E5A952]/30 shadow-[0_0_40px_rgba(229,169,82,0.2)] relative group bg-[#15221B]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.218544833256!2d78.432095!3d17.183494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba34555555555%3A0x8888888888888888!2sChinna%20Golconda%2C%20Telangana%20501218!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Greenarch Farms & Events Interactive Google Map"
              className="absolute inset-0"
            />
            <div className="absolute bottom-4 left-4 bg-[#0D1510]/95 border border-[#E5A952]/40 px-5 py-4 rounded-xl shadow-xl max-w-xs text-xs flex flex-col gap-1.5 z-10 backdrop-blur-md">
              <span className="font-bold text-[#FAF7F2] uppercase tracking-wider text-[10px] font-sans">
                Greenarch Farms
              </span>
              <p className="text-[10px] text-[#EDE5D8]/70 leading-tight">
                Chinna Golconda, Hyderabad
              </p>
              <a
                href="https://maps.google.com/?q=Green+Arch+Farms+%26+Events+Chinna+Golconda"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-bold text-[#E5A952] hover:text-[#F3C77C] flex items-center gap-1 mt-1 font-sans uppercase tracking-widest"
              >
                <span>Driving Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GUEST EXPERIENCES & TESTIMONIALS */}
      <section className="bg-[#FAF7F2] py-20 md:py-32 border-t border-[#E5A952]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5A952] font-sans">
              Happy Guests
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal mt-2 text-[#122E21]">
              Guest Experiences at Greenarch
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#F3ECE2] p-6 rounded-2xl border border-[#E5A952]/30 shadow-sm flex flex-col justify-between transition-all hover:border-[#E5A952] hover:shadow-[0_0_25px_rgba(229,169,82,0.2)]"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-[#E5A952] mb-5 font-mono text-[10px] tracking-wider font-bold">
                    <span>★★★★★</span>
                    <span className="text-[#122E21]/60 font-sans">({t.rating}/5)</span>
                  </div>
                  <p className="text-[#122E21]/85 text-xs md:text-sm leading-relaxed italic font-light font-serif">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#122E21]/10 flex justify-between items-center text-xs">
                  <div>
                    <strong className="text-[#122E21] font-semibold block">{t.name}</strong>
                    <span className="text-[#122E21]/60 text-[9px] font-sans uppercase tracking-widest block mt-1">
                      {t.role}
                    </span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-[#E5A952]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#0D1510] text-[#EDE5D8]/80 border-t border-[#E5A952]/20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="h-11 w-28 rounded-xl overflow-hidden border border-[#E5A952]/40 shadow-[0_0_15px_rgba(229,169,82,0.3)] bg-[#15221B] flex items-center justify-center">
              <img src="/brand-logo.png" alt="Greenarch Farms & Events" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-[#FAF7F2] font-serif font-normal leading-none tracking-wide text-2xl">
                Greenarch
              </h3>
              <p className="text-[9px] text-[#F3C77C] uppercase tracking-[0.25em] mt-1.5 font-sans font-bold">
                FARMS &amp; EVENTS • SHAMSHABAD
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-1.5 text-xs text-[#FAF7F2] font-sans uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-[#E5A952]/20 stroke-[#E5A952]" />
              <span>Proudly LGBTQ+ Friendly Sanctuary</span>
            </div>
            <p className="text-[11px] text-[#EDE5D8]/60">{CONTACT_INFO.address}</p>
            <p className="text-[11px] text-[#E5A952] font-mono">
              {CONTACT_INFO.phoneDisplay} | {CONTACT_INFO.email}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-[#1B3D2B]/60 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#EDE5D8]/50 font-sans uppercase tracking-[0.15em]">
          <p>© {new Date().getFullYear()} Greenarch Farms &amp; Events. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#overview" className="hover:text-[#E5A952] transition-colors">Overview</a>
            <a href="#gallery" className="hover:text-[#E5A952] transition-colors">Gallery</a>
            <a href="#videos" className="hover:text-[#E5A952] transition-colors">Video Tours</a>
            <a href="#amenities" className="hover:text-[#E5A952] transition-colors">Amenities</a>
            <a href="#faqs" className="hover:text-[#E5A952] transition-colors">Stay FAQs</a>
            <a href="#contact" className="hover:text-[#E5A952] transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* 10. FLOATING ACTION CONTROLS */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
        <a
          href={`https://wa.me/919989336222?text=${encodeURIComponent(
            'Hi Greenarch Farms! I would like to inquire about booking availability.'
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#122E21] border border-[#E5A952] text-[#FAF7F2] hover:bg-[#E5A952] hover:text-[#122E21] transition-all duration-300 shadow-[0_0_20px_rgba(229,169,82,0.45)] cursor-pointer text-xs font-bold font-sans uppercase tracking-wider"
          title="Chat on WhatsApp (+91 9989336222)"
        >
          <MessageSquare className="w-4 h-4 text-[#E5A952] fill-current" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E5A952] text-[#122E21] border border-white/60 transition-all duration-300 shadow-[0_0_25px_rgba(229,169,82,0.6)] hover:scale-105 active:scale-95 cursor-pointer"
          title={`Call ${CONTACT_INFO.phoneDisplay}`}
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>
      </div>
    </div>
  );
}
