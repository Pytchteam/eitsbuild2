import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  UploadCloud, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  MapPin, 
  DollarSign, 
  Phone, 
  Mail, 
  User, 
  FileText, 
  Sparkles, 
  X,
  FileCheck
} from 'lucide-react';
import { PARISHES_JAMAICA } from '../data/mockData';
import { QuoteFormData } from '../types';

interface QuoteBookingSectionProps {
  prefilledService?: string;
  onSubmitted?: () => void;
}

export const QuoteBookingSection: React.FC<QuoteBookingSectionProps> = ({ 
  prefilledService,
  onSubmitted 
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: 'Interior Finishing & Drywall',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    projectLocation: '',
    parish: 'Kingston',
    projectType: 'Residential',
    estimatedBudget: '$1,000,000 - $3,000,000 JMD',
    projectDescription: '',
    files: [],
  });

  const [simulatedFiles, setSimulatedFiles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReferenceId, setQuoteReferenceId] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceRequired: prefilledService }));
    }
  }, [prefilledService]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((f: File) => f.name);
      setSimulatedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setSimulatedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate unique reference number (e.g. EITS-2026-8942)
    const randomRef = `EITS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteReferenceId(randomRef);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF1F1F', '#DC2626', '#FFFFFF', '#000000'],
        });
      } catch (err) {
        console.log(err);
      }

      if (onSubmitted) onSubmitted();
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 relative bg-[#08080A] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-extrabold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Turnaround Quotations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            Request a Quote <span className="text-red-600">/ Book a Service</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Fill out the form below with your project scope in Jamaica. Our site engineers and estimators will review your requirements and provide an itemized proposal.
          </p>
        </div>

        {/* Main Booking Container */}
        <div className="max-w-4xl mx-auto">
          <div className="clay-card p-6 sm:p-10 lg:p-12 relative border border-white/15 shadow-2xl">
            
            {isSubmitted ? (
              <div className="py-12 px-4 text-center flex flex-col items-center animate-fadeIn">
                <div className="w-20 h-20 rounded-3xl red-gloss flex items-center justify-center text-white mb-6 shadow-2xl shadow-red-600/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <span className="text-xs font-extrabold uppercase tracking-widest text-red-500 mb-2">
                  Quote Request Dispatched
                </span>

                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-4">
                  Thank you for contacting E.I.T.S Construction &amp; Finishing Company.
                </h3>

                <p className="max-w-xl text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Your request has been received and our team will contact you shortly. We look forward to bringing your construction or finishing project to life with quality and precision.
                </p>

                <div className="gloss-block px-6 py-4 rounded-2xl border border-white/10 mb-8 max-w-md w-full flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Reference Number</span>
                    <span className="font-black text-white text-base tracking-wider text-red-400">{quoteReferenceId}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Service</span>
                    <span className="font-bold text-white text-xs">{formData.serviceRequired}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="red-gloss px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider text-white cursor-pointer"
                >
                  Submit Another Project Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Section 1: Contact Information */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-red-500 mb-4 flex items-center gap-2">
                    <User className="w-4 h-4" /> 1. Contact Information
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dennis Campbell"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="neomorph-input w-full text-xs sm:text-sm text-white py-3.5 px-4 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          placeholder="+1 (876) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="neomorph-input w-full text-xs sm:text-sm text-white py-3.5 px-4 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          placeholder="your.email@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="neomorph-input w-full text-xs sm:text-sm text-white py-3.5 px-4 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Project Specifications */}
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-red-500 mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> 2. Project Specifications
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Service Required *
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="neomorph-input w-full text-xs sm:text-sm text-gray-200 py-3.5 px-4 outline-none appearance-none cursor-pointer"
                      >
                        <option value="General Construction">General Construction</option>
                        <option value="Building Construction">Building Construction</option>
                        <option value="Renovations & Remodeling">Renovations & Remodeling</option>
                        <option value="Interior Finishing & Drywall">Interior Finishing & Drywall</option>
                        <option value="Painting & Texturing">Painting & Texturing</option>
                        <option value="Custom Tiling & Slab Work">Custom Tiling & Slab Work</option>
                        <option value="Flooring Systems">Flooring Systems</option>
                        <option value="Concrete Work & Driveways">Concrete Work & Driveways</option>
                        <option value="Roofing & Waterproofing">Roofing & Waterproofing</option>
                        <option value="Electrical Installation">Electrical Installation</option>
                        <option value="Plumbing & Drainage">Plumbing & Drainage</option>
                        <option value="Repairs & Maintenance">Repairs & Maintenance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Project Type *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                        className="neomorph-input w-full text-xs sm:text-sm text-gray-200 py-3.5 px-4 outline-none appearance-none cursor-pointer"
                      >
                        <option value="Residential">Residential Villa / Home</option>
                        <option value="Commercial">Commercial / Office / Retail</option>
                        <option value="Renovation">Complete Structural Renovation</option>
                        <option value="Finishing Only">Interior / Exterior Finishing Only</option>
                        <option value="Industrial">Industrial / Warehouse</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Estimated Budget (JMD/USD)
                      </label>
                      <select
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        className="neomorph-input w-full text-xs sm:text-sm text-gray-200 py-3.5 px-4 outline-none appearance-none cursor-pointer"
                      >
                        <option value="Under $500,000 JMD">Under $500,000 JMD (Minor / Repair)</option>
                        <option value="$500,000 - $1,500,000 JMD">$500,000 - $1,500,000 JMD (Tiling / Paint)</option>
                        <option value="$1,500,000 - $5,000,000 JMD">$1,500,000 - $5,000,000 JMD (Renovations)</option>
                        <option value="$5,000,000 - $15,000,000 JMD">$5,000,000 - $15,000,000 JMD (Major Remodel)</option>
                        <option value="$15,000,000+ JMD / $100k+ USD">$15,000,000+ JMD (New Construction)</option>
                      </select>
                    </div>

                  </div>
                </div>

                {/* Section 3: Location & Site Visit Timing */}
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-red-500 mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> 3. Location &amp; Scheduling
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Parish (Jamaica) *
                      </label>
                      <select
                        value={formData.parish}
                        onChange={(e) => setFormData({ ...formData, parish: e.target.value })}
                        className="neomorph-input w-full text-xs text-gray-200 py-3.5 px-4 outline-none appearance-none cursor-pointer"
                      >
                        {PARISHES_JAMAICA.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Specific City / Street
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Cherry Gardens, Barbican"
                        value={formData.projectLocation}
                        onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                        className="neomorph-input w-full text-xs text-white py-3.5 px-4 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="neomorph-input w-full text-xs text-white py-3.5 px-4 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Preferred Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="neomorph-input w-full text-xs text-gray-200 py-3.5 px-4 outline-none appearance-none cursor-pointer"
                      >
                        <option value="Morning (8:00 AM - 12:00 PM)">Morning (8 AM - 12 PM)</option>
                        <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12 PM - 4 PM)</option>
                        <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4 PM - 6 PM)</option>
                        <option value="Anytime">Flexible / Anytime</option>
                      </select>
                    </div>

                  </div>
                </div>

                {/* Section 4: Details & Upload Project Photos */}
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-red-500 mb-4 flex items-center gap-2">
                    <UploadCloud className="w-4 h-4" /> 4. Project Details &amp; Photo Uploads
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Project Description / Scope of Work *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please describe what you need built, renovated, tiled, or finished. Include approximate dimensions or special design preferences..."
                        value={formData.projectDescription}
                        onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                        className="neomorph-input w-full text-xs sm:text-sm text-white p-4 outline-none resize-none"
                      />
                    </div>

                    {/* File Upload Box */}
                    <div className="gloss-block p-6 rounded-2xl border-dashed border-2 border-white/20 text-center relative hover:border-red-500/50 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept="image/*,.pdf,.dwg"
                        onChange={handleFileUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-2xl stat-icon-3d flex items-center justify-center text-red-500">
                          <UploadCloud className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white uppercase block">
                            Drag &amp; Drop Project Photos or Architectural Blueprints
                          </span>
                          <span className="text-[11px] text-gray-400">
                            Supports JPG, PNG, PDF blueprints (Max 25MB)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Uploaded Files List */}
                    {simulatedFiles.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {simulatedFiles.map((file, idx) => (
                          <div
                            key={idx}
                            className="gloss-block px-3 py-1.5 rounded-xl text-xs flex items-center gap-2 text-gray-300 border border-white/10"
                          >
                            <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="truncate max-w-[150px]">{file}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(idx)}
                              className="text-gray-500 hover:text-red-400"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="red-gloss w-full py-5 rounded-2xl font-black uppercase text-sm sm:text-base tracking-widest text-white flex items-center justify-center gap-3 cursor-pointer shadow-2xl shadow-red-600/40 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Processing Quote Request...</span>
                    ) : (
                      <>
                        <span>Request a Quote</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-gray-400 mt-3">
                    🔒 Confidential client information. We respond promptly with estimated costings and site visit availability.
                  </p>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
