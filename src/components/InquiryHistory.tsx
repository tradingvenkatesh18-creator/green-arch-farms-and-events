import React, { useState, useEffect } from 'react';
import { BookingInquiry } from '../types';
import { Clipboard, Check, Calendar, Trash2, MessageSquare, Clock, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface InquiryHistoryProps {
  refreshTrigger: number;
}

export default function InquiryHistory({ refreshTrigger }: InquiryHistoryProps) {
  const [inquiries, setInquiries] = useState<BookingInquiry[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const loadInquiries = () => {
    try {
      const raw = localStorage.getItem('green_arch_inquiries');
      if (raw) {
        const parsed: (BookingInquiry & { expiresAt?: number })[] = JSON.parse(raw);
        const now = Date.now();
        const valid = parsed.filter(item => !item.expiresAt || item.expiresAt > now);
        setInquiries(valid);
      } else {
        setInquiries([]);
      }
    } catch (err) {
      console.error('Failed to load inquiries', err);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, [refreshTrigger]);

  const copyToClipboard = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const deleteInquiry = (id: string) => {
    if (window.confirm('Are you sure you want to remove this booking inquiry from your local session?')) {
      try {
        const raw = localStorage.getItem('green_arch_inquiries');
        if (raw) {
          const current: BookingInquiry[] = JSON.parse(raw);
          const updated = current.filter(item => item.id !== id);
          localStorage.setItem('green_arch_inquiries', JSON.stringify(updated));
          loadInquiries();
        }
      } catch (err) {
        console.error('Failed to delete inquiry', err);
      }
    }
  };

  if (inquiries.length === 0) {
    return (
      <div className="bg-[#F3ECE2]/70 border border-[#E5A952]/30 rounded-2xl p-10 text-center max-w-lg mx-auto shadow-sm">
        <div className="w-12 h-12 bg-[#FAF7F2] border border-[#E5A952]/40 rounded-full flex items-center justify-center mx-auto text-[#122E21] mb-4 shadow-sm">
          <Clock className="w-5 h-5 text-[#E5A952]" />
        </div>
        <h4 className="font-serif text-xl font-normal text-[#122E21]">No Active Inquiries Saved Yet</h4>
        <p className="text-[#122E21]/70 text-xs leading-relaxed mt-2 font-light">
          Use the Custom Stay Estimator above to calculate rates and submit a booking inquiry. Your submitted requests will appear here instantly.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
      <div className="flex justify-between items-baseline border-b border-[#122E21]/10 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#E5A952]" />
          <span className="text-[10px] font-bold text-[#122E21] uppercase tracking-[0.25em] font-sans">
            Your Submitted Inquiries ({inquiries.length})
          </span>
        </div>
        <span className="text-[10px] text-[#122E21]/60 font-sans uppercase tracking-wider">Stored locally</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {inquiries.map((inquiry) => (
          <div
            key={inquiry.id}
            className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5A952]/30 flex flex-col justify-between gap-5 transition-all duration-300 hover:border-[#E5A952] hover:shadow-[0_0_20px_rgba(229,169,82,0.25)]"
          >
            <div>
              {/* Header with Inquiry ID & status */}
              <div className="flex items-center justify-between border-b border-[#122E21]/10 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-xs font-bold text-[#122E21] bg-[#EDE5D8] px-2 py-0.5 rounded">{inquiry.id}</span>
                  <button
                    onClick={() => copyToClipboard(inquiry.id)}
                    className="p-1 text-[#122E21]/60 hover:text-[#122E21] transition-colors cursor-pointer"
                    title="Copy Booking ID"
                  >
                    {copiedId === inquiry.id ? (
                      <Check className="w-3.5 h-3.5 text-[#122E21]" />
                    ) : (
                      <Clipboard className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                
                <span className="text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E5A952]/20 border border-[#E5A952]/40 text-[#122E21] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A952] animate-pulse" />
                  {inquiry.status}
                </span>
              </div>

              {/* Details List */}
              <div className="space-y-2 text-xs text-[#122E21]/85">
                <p className="flex justify-between items-baseline border-b border-[#122E21]/5 pb-1.5">
                  <span>Guest Name:</span>
                  <strong className="text-[#122E21] font-semibold">{inquiry.name}</strong>
                </p>
                <p className="flex justify-between items-baseline border-b border-[#122E21]/5 pb-1.5">
                  <span>Stay Type:</span>
                  <strong className="text-[#122E21] font-semibold capitalize font-serif">{inquiry.stayType.replace('_', ' ')}</strong>
                </p>
                <p className="flex justify-between items-baseline border-b border-[#122E21]/5 pb-1.5">
                  <span>Dates:</span>
                  <strong className="text-[#122E21] font-semibold flex items-center gap-1.5 font-sans">
                    <Calendar className="w-3.5 h-3.5 text-[#E5A952]" />
                    {inquiry.checkInDate} — {inquiry.checkOutDate}
                  </strong>
                </p>
                <p className="flex justify-between items-baseline border-b border-[#122E21]/5 pb-1.5">
                  <span>Guests Count:</span>
                  <strong className="text-[#122E21] font-semibold">{inquiry.guests} Guests</strong>
                </p>
                {inquiry.addons.length > 0 && (
                  <p className="flex justify-between items-baseline pb-0.5">
                    <span>Add-ons:</span>
                    <strong className="text-[#122E21] font-semibold text-right">
                      {inquiry.addons.map(a => a === 'bonfire_bbq' ? 'Bonfire' : a === 'private_chef' ? 'Chef' : 'Decor').join(', ')}
                    </strong>
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between border-t border-[#122E21]/10 pt-4">
              <div>
                <span className="text-[9px] text-[#122E21]/60 uppercase block font-semibold tracking-widest font-sans">Estimated Quote</span>
                <span className="text-lg font-serif font-bold text-[#122E21]">₹{inquiry.totalPrice.toLocaleString()}</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/919989336222?text=${encodeURIComponent(`Hi Greenarch Farms! Checking status on my booking inquiry ID: ${inquiry.id}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 text-[#FAF7F2] bg-[#122E21] hover:bg-[#E5A952] hover:text-[#122E21] rounded-lg transition-all border border-[#E5A952]/40 shadow-sm"
                  title="WhatsApp Support"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <button
                  onClick={() => deleteInquiry(inquiry.id)}
                  className="p-2.5 text-rose-700 hover:bg-rose-700 hover:text-white rounded-lg transition-all border border-rose-200 cursor-pointer"
                  title="Remove Inquiry"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

