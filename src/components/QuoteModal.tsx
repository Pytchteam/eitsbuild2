import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, User, Phone, Mail, FileText, MapPin, DollarSign, Sparkles } from 'lucide-react';
import { PARISHES_JAMAICA, SERVICES_DATA } from '../data/mockData';
import confetti from 'canvas-confetti';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Interior Finishing & Drywall',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService);
  const [parish, setParish] = useState('Kingston');
  const [budget, setBudget] = useState('$1,000,000 - $3,000,000 JMD');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#FF1F1F', '#DC2626', '#FFFFFF', '#000000'],
        });
      } catch (err) {
        console.log(err);
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="clay-card max-w-xl w-full p-6 sm:p-8 relative border border-white/20 my-8 shadow-2xl">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full gloss-block flex items-center justify-center text-gray-300 hover:text-white hover:border-red-500 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-3xl red-gloss flex items-center justify-center text-white mb-4 shadow-xl shadow-red-600/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-black uppercase tracking-widest text-red-500 mb-1">
              Request Received
            </span>

            <h3 className="font-display text-2xl font-black uppercase text-white mb-3">
              Thank You for Reaching Out to E.I.T.S!
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
              Thank you for contacting E.I.T.S Construction &amp; Finishing Company. Your request has been received and our team will contact you shortly.
            </p>

            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="red-gloss px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider text-white cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-red-500" />
                <span className="text-[10px] text-red-500 font-extrabold uppercase tracking-widest">
                  Quick Quote / Booking
                </span>
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white tracking-tight">
                Request a Quote from E.I.T.S
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Get a rapid itemized estimate for construction or interior finishing in Jamaica.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Wayne Brown"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="neomorph-input w-full text-xs text-white p-3.5 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (876) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="neomorph-input w-full text-xs text-white p-3.5 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="neomorph-input w-full text-xs text-white p-3.5 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="neomorph-input w-full text-xs text-white p-3.5 outline-none appearance-none"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                    Parish (Jamaica)
                  </label>
                  <select
                    value={parish}
                    onChange={(e) => setParish(e.target.value)}
                    className="neomorph-input w-full text-xs text-white p-3.5 outline-none appearance-none"
                  >
                    {PARISHES_JAMAICA.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                  Project Description / Scope *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us what you want built, renovated, or finished..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="neomorph-input w-full text-xs text-white p-3 outline-none resize-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="red-gloss w-full py-4 rounded-2xl font-black uppercase text-xs tracking-widest text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-600/30"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Submit Quote Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
