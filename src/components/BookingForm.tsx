import React, { useState, useEffect } from 'react';
import { PRICE_RATES } from '../data';
import { BookingInquiry } from '../types';
import { Calendar, Users, Check, Flame, Utensils, Sparkles, Send, Sparkle, AlertCircle, RefreshCw } from 'lucide-react';

interface BookingFormProps {
  onInquirySubmitted: () => void;
}

export default function BookingForm({ onInquirySubmitted }: BookingFormProps) {
  const [stayType, setStayType] = useState<'overnight' | 'day_outing' | 'event_package'>('overnight');
  
  // Set default dates: checkin = tomorrow, checkout = day after tomorrow
  const getTomorrowString = (offset = 1) => {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d.toISOString().split('T')[0];
  };

  const [checkInDate, setCheckInDate] = useState<string>(getTomorrowString(1));
  const [checkOutDate, setCheckOutDate] = useState<string>(getTomorrowString(2));
  const [guests, setGuests] = useState<number>(8);
  const [addons, setAddons] = useState<string[]>([]);
  
  // Contact details
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  
  // States for UI flow
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<BookingInquiry | null>(null);
  const [formError, setFormError] = useState<string>('');

  // Sourced active rates
  const activeRate = PRICE_RATES.find(r => r.stayType === stayType) || PRICE_RATES[0];

  // Recalculate check-out date automatically if stay type is day outing (same day)
  useEffect(() => {
    if (stayType === 'day_outing') {
      setCheckOutDate(checkInDate);
    } else if (checkInDate === checkOutDate) {
      // Overnight must be at least 1 night
      const nextDay = new Date(checkInDate);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOutDate(nextDay.toISOString().split('T')[0]);
    }
  }, [stayType, checkInDate]);

  // Pricing Calculation Engine
  const calculatePricing = () => {
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    
    // Calculate difference in nights/days
    const diffTime = Math.abs(end.getTime() - start.getTime());
    let duration = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (stayType === 'day_outing') {
      duration = 1; // Always 1 day
    } else if (duration < 1) {
      duration = 1;
    }

    let baseTotal = 0;
    const datesList: Date[] = [];
    
    // Generate dates representing overnight stays or days
    if (stayType === 'day_outing') {
      datesList.push(start);
    } else {
      for (let i = 0; i < duration; i++) {
        const currentDate = new Date(start);
        currentDate.setDate(start.getDate() + i);
        datesList.push(currentDate);
      }
    }

    // Determine weekday vs weekend rate for each date
    let weekdayCount = 0;
    let weekendCount = 0;
    
    datesList.forEach(date => {
      const day = date.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
      // Friday and Saturday nights are weekend rates for overnight.
      // Saturday and Sunday are weekend rates for Day Outings.
      if (stayType === 'day_outing') {
        if (day === 0 || day === 6) {
          weekendCount++;
        } else {
          weekdayCount++;
        }
      } else {
        // Overnight: Friday and Saturday nights count as Weekend
        if (day === 5 || day === 6) {
          weekendCount++;
        } else {
          weekdayCount++;
        }
      }
    });

    const weekdayRate = activeRate.weekdayRate;
    const weekendRate = activeRate.weekendRate;
    
    baseTotal = (weekdayCount * weekdayRate) + (weekendCount * weekendRate);

    // Extra guests surcharges
    let extraGuestCharge = 0;
    if (stayType === 'overnight' && guests > 16) {
      // 1000 per additional guest per night
      extraGuestCharge = (guests - 16) * 1000 * duration;
    } else if (stayType === 'day_outing' && guests > 20) {
      // 500 per additional guest for day outing
      extraGuestCharge = (guests - 20) * 500 * duration;
    }

    // Addons prices
    let addonsTotal = 0;
    addons.forEach(addon => {
      if (addon === 'bonfire_bbq') {
        addonsTotal += 2500;
      } else if (addon === 'private_chef') {
        addonsTotal += 5000 * duration;
      } else if (addon === 'decor') {
        addonsTotal += 25000;
      }
    });

    // Security Deposit (Refundable)
    const securityDeposit = stayType === 'day_outing' ? 5000 : 10000;

    const grandTotal = baseTotal + extraGuestCharge + addonsTotal;

    return {
      duration,
      weekdayCount,
      weekendCount,
      baseTotal,
      extraGuestCharge,
      addonsTotal,
      securityDeposit,
      grandTotal
    };
  };

  const {
    duration,
    weekdayCount,
    weekendCount,
    baseTotal,
    extraGuestCharge,
    addonsTotal,
    securityDeposit,
    grandTotal
  } = calculatePricing();

  const handleAddonToggle = (addonId: string) => {
    if (addons.includes(addonId)) {
      setAddons(addons.filter(a => a !== addonId));
    } else {
      setAddons([...addons, addonId]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Sanitization & Security Validations
    const trimmedName = name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      setFormError('Please enter your full name (minimum 2 characters).');
      return;
    }

    const cleanedPhone = phone.replace(/[\s\-\(\)\+]/g, '');
    const phoneDigits = cleanedPhone.startsWith('91') && cleanedPhone.length === 12 ? cleanedPhone.slice(2) : cleanedPhone;
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneDigits)) {
      setFormError('Please enter a valid 10-digit mobile number (e.g. 9876543210).');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      setFormError('Please enter a valid email address (e.g. name@example.com).');
      return;
    }

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      const inquiryId = 'GAB-' + Math.floor(100000 + Math.random() * 900000);
      const newInquiry: BookingInquiry = {
        id: inquiryId,
        name,
        phone,
        email,
        stayType,
        checkInDate,
        checkOutDate,
        guests,
        addons,
        totalPrice: grandTotal,
        status: 'Pending Review',
        createdAt: new Date().toLocaleDateString()
      };

      // Save to localStorage with automatic 7-day retention expiry
      try {
        const existingRaw = localStorage.getItem('green_arch_inquiries');
        let existing: (BookingInquiry & { expiresAt?: number })[] = existingRaw ? JSON.parse(existingRaw) : [];
        const now = Date.now();
        // Evict expired entries older than 7 days
        existing = existing.filter(item => !item.expiresAt || item.expiresAt > now);
        existing.unshift({
          ...newInquiry,
          expiresAt: now + (7 * 24 * 60 * 60 * 1000)
        });
        localStorage.setItem('green_arch_inquiries', JSON.stringify(existing));
      } catch (err) {
        console.error('Failed to write to storage', err);
      }

      setIsSubmitting(false);
      setSubmittedInquiry(newInquiry);
      onInquirySubmitted();
    }, 1500);
  };

  const resetForm = () => {
    setSubmittedInquiry(null);
    setName('');
    setPhone('');
    setEmail('');
    setAddons([]);
    setGuests(8);
    setStayType('overnight');
    setCheckInDate(getTomorrowString(1));
    setCheckOutDate(getTomorrowString(2));
  };

  // Pre-formatted mailto / WhatsApp link
  const getWhatsAppLink = (inquiry: BookingInquiry) => {
    const text = `Hi Greenarch Farms & Events! I just submitted a booking inquiry (ID: ${inquiry.id}) for an ${inquiry.stayType.toUpperCase()} stay.
Name: ${inquiry.name}
Dates: ${inquiry.checkInDate} to ${inquiry.checkOutDate}
Guests: ${inquiry.guests}
Estimated Quote: ₹${inquiry.totalPrice.toLocaleString()}

Please confirm availability and booking details!`;
    return `https://wa.me/919989336222?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full bg-[#FAF7F2] rounded-2xl border border-[#E5A952]/30 shadow-[0_10px_40px_rgba(18,46,33,0.06)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
           {/* SUCCESS STATE */}
      {submittedInquiry ? (
        <div className="lg:col-span-12 p-8 md:p-16 flex flex-col items-center text-center bg-[#FAF7F2] animate-fade-in">
          <div className="w-16 h-16 bg-[#122E21] text-[#FAF7F2] rounded-full flex items-center justify-center mb-6 border border-[#E5A952]/50 shadow-[0_0_20px_rgba(229,169,82,0.4)]">
            <Check className="w-8 h-8 stroke-[2]" />
          </div>
          
          <span className="text-[10px] font-bold text-[#122E21] tracking-[0.2em] uppercase bg-[#E5A952]/20 px-4 py-1.5 border border-[#E5A952]/40 rounded-full">
            Inquiry Generated Successfully
          </span>
          
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#122E21] mt-6 max-w-lg leading-tight">
            We've Received Your Inquiry, {submittedInquiry.name.split(' ')[0]}!
          </h3>
          
          <p className="text-[#122E21]/80 text-sm max-w-md mt-3 leading-relaxed font-light">
            Your booking reference is <strong className="text-[#122E21] font-bold font-mono bg-[#EDE5D8] px-2 py-0.5 rounded">{submittedInquiry.id}</strong>. We have saved these details in your local session.
          </p>

          <div className="w-full max-w-md bg-[#F3ECE2] border border-[#E5A952]/30 rounded-xl p-6 my-8 text-left shadow-sm">
            <div className="border-b border-[#122E21]/10 pb-4 mb-4 flex justify-between items-center">
              <span className="text-[10px] font-bold text-[#122E21] uppercase tracking-[0.15em] font-sans">Stay Receipt Summary</span>
              <span className="text-xs text-[#122E21]/60 font-mono">{submittedInquiry.createdAt}</span>
            </div>
            
            <div className="space-y-4 text-xs text-[#122E21]/90">
              <div className="flex justify-between border-b border-[#122E21]/5 pb-2">
                <span>Stay Type:</span>
                <span className="font-bold text-[#122E21] capitalize font-serif text-sm">{submittedInquiry.stayType.replace('_', ' ')}</span>
              </div>
              <div className="flex justify-between border-b border-[#122E21]/5 pb-2">
                <span>Check-In:</span>
                <span className="font-medium text-[#122E21]">{submittedInquiry.checkInDate} (2:00 PM)</span>
              </div>
              <div className="flex justify-between border-b border-[#122E21]/5 pb-2">
                <span>Check-Out:</span>
                <span className="font-medium text-[#122E21]">{submittedInquiry.checkOutDate} (11:00 AM)</span>
              </div>
              <div className="flex justify-between border-b border-[#122E21]/5 pb-2">
                <span>Total Duration:</span>
                <span className="font-bold text-[#122E21]">{duration} {stayType === 'day_outing' ? 'Day' : duration === 1 ? 'Night' : 'Nights'}</span>
              </div>
              <div className="flex justify-between border-b border-[#122E21]/5 pb-2">
                <span>Guest Count:</span>
                <span className="font-bold text-[#122E21]">{submittedInquiry.guests} Guests</span>
              </div>
              {submittedInquiry.addons.length > 0 && (
                <div className="flex justify-between border-b border-[#122E21]/5 pb-2">
                  <span>Add-on Experiences:</span>
                  <span className="font-medium text-[#122E21] text-right">{submittedInquiry.addons.length} selected</span>
                </div>
              )}
              <div className="pt-2 flex justify-between items-center text-sm">
                <span className="font-bold text-[#122E21] uppercase tracking-wider text-[10px]">Estimated Total Due:</span>
                <span className="font-serif font-bold text-[#122E21] text-2xl">₹{submittedInquiry.totalPrice.toLocaleString()}</span>
              </div>
              <p className="text-[9.5px] text-[#122E21]/60 leading-tight text-center pt-4 font-light">
                *Refundable security deposit is collected separately at check-in.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <a
              href={getWhatsAppLink(submittedInquiry)}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl border border-[#E5A952] bg-[#122E21] text-[#FAF7F2] text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#E5A952] hover:text-[#122E21] shadow-[0_0_15px_rgba(229,169,82,0.4)]"
            >
              <span>WhatsApp Connect</span>
            </a>
            
            <button
              onClick={resetForm}
              className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl border border-[#122E21]/30 bg-transparent text-[#122E21] hover:border-[#122E21] text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-all cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>New Quote</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* LEFT PANEL: CONFIGURATION FORM */}
          <form onSubmit={handleFormSubmit} className="lg:col-span-7 p-6 md:p-10 flex flex-col gap-8">
            <div className="border-b border-[#122E21]/10 pb-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E5A952]" />
                <span className="text-[10px] font-bold text-[#E5A952] uppercase tracking-[0.25em] font-sans">Transparent Estimator</span>
              </div>
              <h3 className="font-serif text-3xl font-normal text-[#122E21] tracking-wide">Custom Stay &amp; Event Calculator</h3>
              <p className="text-[#122E21]/70 text-xs mt-2 leading-relaxed font-light">
                Calculate real-time pricing and generate booking inquiry details.
              </p>
            </div>

            {/* Form Error Alert */}
            {formError && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2 animate-fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{formError}</span>
              </div>
            )}

            {/* Select Stay Type */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-bold text-[#122E21] uppercase tracking-[0.25em]">
                1. Select Stay Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'overnight', name: 'Overnight', desc: 'Full Villa stay' },
                  { id: 'day_outing', name: 'Day Outing', desc: '8h Day picnic' },
                  { id: 'event_package', name: 'Grand Event', desc: 'Lawn & Villa' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setStayType(type.id as any)}
                    className={`p-4 rounded-xl border text-left flex flex-col transition-all cursor-pointer ${
                      stayType === type.id
                        ? 'bg-[#122E21] border-[#E5A952] text-[#FAF7F2] shadow-[0_0_15px_rgba(229,169,82,0.35)]'
                        : 'bg-[#F3ECE2]/60 border-[#122E21]/15 text-[#122E21] hover:border-[#E5A952] hover:bg-[#F3ECE2]'
                    }`}
                  >
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider">{type.name}</span>
                    <span className={`text-[10px] mt-1.5 leading-tight ${stayType === type.id ? 'text-[#F3C77C]' : 'text-[#122E21]/70'} font-serif font-light`}>{type.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#122E21] uppercase tracking-[0.25em] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#E5A952]" />
                  <span>Check-In Date</span>
                </label>
                <input
                  type="date"
                  min={getTomorrowString(1)}
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#122E21]/20 text-xs text-[#122E21] focus:border-[#E5A952] focus:ring-1 focus:ring-[#E5A952] bg-white/70 transition-all outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#122E21] uppercase tracking-[0.25em] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#E5A952]" />
                  <span>Check-Out Date</span>
                </label>
                <input
                  type="date"
                  min={checkInDate}
                  disabled={stayType === 'day_outing'}
                  value={stayType === 'day_outing' ? checkInDate : checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#122E21]/20 text-xs text-[#122E21] focus:border-[#E5A952] focus:ring-1 focus:ring-[#E5A952] bg-white/70 disabled:bg-[#122E21]/5 disabled:text-[#122E21]/50 disabled:border-[#122E21]/10 transition-all outline-none"
                />
              </div>
            </div>

            {/* Number of Guests Slider */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-[#122E21] uppercase tracking-[0.25em] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#E5A952]" />
                  <span>Number of Guests</span>
                </label>
                <span className="text-[10px] font-sans font-bold text-[#122E21] uppercase tracking-wider bg-[#EDE5D8] border border-[#E5A952]/40 px-3 py-1 rounded-full">
                  {guests} Guests
                </span>
              </div>
              <input
                type="range"
                min="1"
                max={stayType === 'event_package' ? '500' : '35'}
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full accent-[#122E21] cursor-pointer h-2 bg-[#122E21]/10 appearance-none rounded-lg"
              />
              <span className="text-[10px] text-[#122E21]/70 leading-normal font-light">
                {stayType === 'overnight' && guests > 16 && (
                  <span className="text-[#122E21] font-semibold">Over limit: Additional ₹1,000 per extra guest/night applies (max 25).</span>
                )}
                {stayType === 'day_outing' && guests > 20 && (
                  <span className="text-[#122E21] font-semibold">Over limit: Additional ₹500 per extra guest applies.</span>
                )}
                {stayType === 'event_package' && guests > 150 && (
                  <span>Large Gathering. Standard event facilities support up to 500 visitors.</span>
                )}
                {guests <= 16 && stayType === 'overnight' && 'Fits fully within standard 16-guest overnight pricing.'}
              </span>
            </div>

            {/* Custom Experiences / Addons */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-bold text-[#122E21] uppercase tracking-[0.25em]">
                2. Enhance Your Stay (Optional Add-ons)
              </label>
              <div className="space-y-3">
                {[
                  {
                    id: 'bonfire_bbq',
                    name: 'Cozy Bonfire & BBQ Station Setup',
                    price: '₹2,500 flat',
                    desc: 'Fresh premium firewood and charcoal bags, skewers, and grill grates prepared for you.',
                    icon: Flame
                  },
                  {
                    id: 'private_chef',
                    name: 'Hired Private Chef experience',
                    price: '₹5,000 / day',
                    desc: 'Local cooking chef preparing authentic farmstay-style breakfasts, lunches, and grills.',
                    icon: Utensils
                  },
                  {
                    id: 'decor',
                    name: 'Event Stage Decor & Fairy Lighting',
                    price: '₹25,000 flat',
                    desc: 'Spectacular canopy fairy-lighting and premium entry green arch setup across the lawns.',
                    icon: Sparkles
                  }
                ].map((addon) => {
                  const IconComponent = addon.icon;
                  const isChecked = addons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => handleAddonToggle(addon.id)}
                      className={`p-4 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#EDE5D8]/80 border-[#E5A952] shadow-sm'
                          : 'bg-white/50 border-[#122E21]/15 hover:border-[#E5A952]'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        isChecked ? 'bg-[#122E21] border-[#122E21] text-[#FAF7F2]' : 'border-[#122E21]/30 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[2.5]" />}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline gap-2">
                          <span className="text-xs font-bold text-[#122E21] font-serif">{addon.name}</span>
                          <span className="text-[10px] font-sans font-bold text-[#E5A952] tracking-wider shrink-0">{addon.price}</span>
                        </div>
                        <p className="text-[10px] text-[#122E21]/70 leading-relaxed mt-1 font-light">{addon.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Details Form */}
            <div className="flex flex-col gap-4 pt-6 border-t border-[#122E21]/10">
              <label className="text-[10px] font-bold text-[#122E21] uppercase tracking-[0.25em]">
                3. Your Contact Details
              </label>
              
              <div className="flex flex-col gap-1.5">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#122E21]/20 text-xs text-[#122E21] focus:border-[#E5A952] focus:ring-1 focus:ring-[#E5A952] bg-white/70 transition-all outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number (e.g., 9989336222)"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-4 py-3 rounded-xl border border-[#122E21]/20 text-xs text-[#122E21] focus:border-[#E5A952] focus:ring-1 focus:ring-[#E5A952] bg-white/70 transition-all outline-none"
                />
                
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#122E21]/20 text-xs text-[#122E21] focus:border-[#E5A952] focus:ring-1 focus:ring-[#E5A952] bg-white/70 transition-all outline-none"
                />
              </div>
            </div>
          </form>

          {/* RIGHT PANEL: DYNAMIC RECEIPT & SUBMIT */}
          <div className="lg:col-span-5 bg-[#F3ECE2] border-t lg:border-t-0 lg:border-l border-[#E5A952]/30 p-6 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 text-[#122E21]">
                <Sparkle className="w-4 h-4 text-[#E5A952] fill-[#E5A952]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans">Real-Time Quote Summary</span>
              </div>

              {/* Package Tagline */}
              <div className="bg-[#FAF7F2] border border-[#E5A952]/30 p-5 rounded-xl mb-6 shadow-sm">
                <span className="text-[9px] uppercase font-bold text-[#E5A952] tracking-[0.2em] font-sans">Active Choice</span>
                <h4 className="font-serif text-xl font-normal text-[#122E21] mt-1">{activeRate.name}</h4>
                <p className="text-[11px] text-[#122E21]/80 mt-1.5 leading-relaxed font-light">{activeRate.tagline}</p>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-xs text-[#122E21]/80">
                <div className="flex justify-between items-baseline border-b border-[#122E21]/10 pb-3">
                  <span>Stay Duration:</span>
                  <span className="font-bold text-[#122E21] text-right font-serif text-sm">
                    {duration} {stayType === 'day_outing' ? 'Day' : duration === 1 ? 'Night' : 'Nights'}
                    <span className="text-[9px] block text-[#122E21]/60 font-sans tracking-wide uppercase font-normal mt-0.5">
                      ({weekdayCount} weekday, {weekendCount} weekend)
                    </span>
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-[#122E21]/10 pb-3">
                  <span>Base Accommodation Rate:</span>
                  <span className="font-bold text-[#122E21]">₹{baseTotal.toLocaleString()}</span>
                </div>

                {extraGuestCharge > 0 && (
                  <div className="flex justify-between items-center border-b border-[#122E21]/10 pb-3">
                    <span>Extra Guests Charge ({guests} total):</span>
                    <span className="font-bold text-[#122E21]">₹{extraGuestCharge.toLocaleString()}</span>
                  </div>
                )}

                {addonsTotal > 0 && (
                  <div className="flex justify-between items-center border-b border-[#122E21]/10 pb-3">
                    <span>Experience Add-ons Total:</span>
                    <span className="font-bold text-[#122E21]">₹{addonsTotal.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between items-center border-b border-[#122E21]/10 pb-3">
                  <span>Refundable Security Deposit:</span>
                  <span className="font-bold text-[#122E21]">₹{securityDeposit.toLocaleString()}</span>
                </div>
                <p className="text-[9.5px] text-[#122E21]/60 leading-relaxed font-light">
                  *Collected at check-in and fully returned within 3 hours of satisfactory check-out.
                </p>
              </div>
            </div>

            {/* Total Section & CTA */}
            <div className="mt-10 pt-6 border-t border-[#122E21]/10 flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-[#122E21] uppercase tracking-[0.2em]">Estimated Due:</span>
                <div className="text-right">
                  <span className="text-3xl font-serif font-bold text-[#122E21]">₹{grandTotal.toLocaleString()}</span>
                  <span className="text-[9px] block text-[#122E21]/60 font-sans tracking-wide uppercase mt-1 font-light">Inclusive of all standard amenities</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleFormSubmit}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl border border-[#E5A952] bg-[#122E21] text-[#FAF7F2] text-[10px] font-sans font-bold uppercase tracking-[0.25em] transition-all hover:bg-[#E5A952] hover:text-[#122E21] shadow-[0_0_15px_rgba(229,169,82,0.35)] hover:shadow-[0_0_25px_rgba(229,169,82,0.6)] disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Generating Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Booking Inquiry</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
