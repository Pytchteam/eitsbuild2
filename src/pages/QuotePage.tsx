import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { QuoteBookingSection } from '../components/QuoteBookingSection';
import { ShieldCheck, Phone, Mail, MapPin, Clock, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

interface QuotePageProps {
  initialService?: string;
  onNavigate: (page: string) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({ initialService = 'Interior Finishing & Drywall', onNavigate }) => {
  return (
    <div className="flex flex-col flex-1">
      {/* Page Header */}
      <PageHeader
        badge="Direct Booking &amp; Estimation"
        title="Request a Detailed"
        highlightedWord="Quote"
        description="Tell us about your residential or commercial project. Get an itemized estimate, bill of quantities, and schedule a site visit with our Jamaican engineering team."
        currentPage="Get a Quote"
        onNavigate={onNavigate}
      />

      <div className="bg-[#08080A]">
        {/* Main Quote Booking Interactive Form Section */}
        <QuoteBookingSection prefilledService={initialService} />

        {/* Supporting Guarantees */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="clay-card p-8 sm:p-12 rounded-[36px] border border-white/10 bg-gradient-to-r from-[#121216] via-[#0E0E12] to-[#121216]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl stat-icon-3d flex items-center justify-center text-red-500 shrink-0">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-black uppercase text-white">Itemized Bill of Quantities</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Transparent cost breakdowns covering material volume, transport, labor rates, and milestone disbursements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl stat-icon-3d flex items-center justify-center text-red-500 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-black uppercase text-white">Free Site Assessment</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Senior Jamaican project supervisors visit your site in any parish to measure dimensions and inspect conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl stat-icon-3d flex items-center justify-center text-red-500 shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-black uppercase text-white">Milestone Sign-Offs</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    You inspect and sign off on each milestone before any staged disbursement is released.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
