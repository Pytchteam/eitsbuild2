import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { REVIEWS_DATA } from '../data/mockData';
import { CustomerReview } from '../types';
import { 
  Star, ShieldCheck, CheckCircle2, MessageSquare, Plus, 
  Sparkles, ThumbsUp, UserCheck, Filter, X, Send 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReviewsPageProps {
  onOpenQuote: (serviceName?: string) => void;
  onNavigate: (page: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenQuote, onNavigate }) => {
  const [reviewsList, setReviewsList] = useState<CustomerReview[]>(REVIEWS_DATA);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [writeReviewOpen, setWriteReviewOpen] = useState(false);
  
  // Review form state
  const [authorName, setAuthorName] = useState('');
  const [location, setLocation] = useState('');
  const [serviceUsed, setServiceUsed] = useState('Interior Finishing & Drywall');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filterOptions = [
    { id: 'all', label: 'All Reviews (24)' },
    { id: 'finishing', label: 'Finishing & Drywall' },
    { id: 'tiling', label: 'Tiling & Flooring' },
    { id: 'renovation', label: 'Renovations' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredReviews = reviewsList.filter((rev) => {
    if (selectedFilter === 'all') return true;
    return rev.serviceUsed.toLowerCase().includes(selectedFilter.toLowerCase()) ||
           rev.comment.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newRev: CustomerReview = {
        id: `rev-${Date.now()}`,
        name: authorName,
        roleOrLocation: location || 'Kingston, Jamaica',
        rating: rating,
        date: 'Just now',
        comment: comment,
        verified: true,
        serviceUsed: serviceUsed,
      };

      setReviewsList([newRev, ...reviewsList]);
      setIsSubmitting(false);
      setWriteReviewOpen(false);

      // Reset form
      setAuthorName('');
      setLocation('');
      setComment('');

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF2E2E', '#FBBF24', '#FFFFFF'],
        });
      } catch (err) {
        console.log(err);
      }
    }, 800);
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Page Header */}
      <PageHeader
        badge="Verified Jamaican Testimonials"
        title="5.0 Star Rated By"
        highlightedWord="Clients"
        description="Read firsthand feedback from Jamaican homeowners, corporate developers, villa owners, and property managers who trusted E.I.T.S with their construction and finishing."
        currentPage="Reviews"
        onNavigate={onNavigate}
        ctaText="Leave a Review"
        onCtaClick={() => setWriteReviewOpen(true)}
      />

      <section className="py-12 lg:py-20 relative bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Trust Score Header Summary */}
          <div className="clay-card p-8 sm:p-10 rounded-[36px] border border-white/10 mb-12 bg-gradient-to-r from-[#141418] via-[#0E0E12] to-[#141418]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Score Breakdown */}
              <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <span className="font-display text-5xl sm:text-6xl font-black text-white">5.0</span>
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-400 mt-1">24 Google Reviews</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  100% verified Jamaican client satisfaction rating for quality, turnaround, and cleanliness.
                </p>
              </div>

              {/* Center Ratings Breakdown */}
              <div className="md:col-span-5 space-y-2">
                {[
                  { star: '5 Stars', pct: '100%', count: 24 },
                  { star: '4 Stars', pct: '0%', count: 0 },
                  { star: '3 Stars', pct: '0%', count: 0 },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs">
                    <span className="w-14 font-bold text-gray-300">{row.star}</span>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: row.pct }} />
                    </div>
                    <span className="w-8 text-right font-bold text-gray-400">{row.count}</span>
                  </div>
                ))}
              </div>

              {/* Right CTA to write review */}
              <div className="md:col-span-3 flex flex-col justify-center items-center md:items-end">
                <button
                  onClick={() => setWriteReviewOpen(true)}
                  className="red-gloss px-6 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider text-white flex items-center gap-2 shadow-lg shadow-red-600/30 hover:scale-105 transition-transform cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Write a Review</span>
                </button>
              </div>

            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {filterOptions.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedFilter === f.id
                      ? 'red-gloss text-white shadow-lg shadow-red-600/30'
                      : 'gloss-block text-gray-300 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <span className="text-xs font-bold text-gray-400">
              Showing {filteredReviews.length} Reviews
            </span>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="clay-card p-6 sm:p-7 rounded-[32px] flex flex-col justify-between group hover:border-red-500/50 transition-all duration-300 relative"
              >
                <div>
                  {/* Top Bar: Stars + Date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-gray-400">
                      {rev.date}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-black uppercase text-white tracking-tight group-hover:text-red-400 transition-colors">
                      {rev.name}
                    </h4>
                    <span className="text-[11px] font-semibold text-gray-400 block">
                      {rev.roleOrLocation}
                    </span>
                    <span className="text-[10px] text-red-500 font-extrabold uppercase mt-0.5 block">
                      Service: {rev.serviceUsed}
                    </span>
                  </div>

                  {rev.verified && (
                    <div className="gloss-block p-1.5 rounded-xl text-emerald-400" title="Verified Customer">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Quote Teaser */}
          <div className="mt-16 text-center clay-card p-10 rounded-[36px] border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2">
              Join Our Growing List of <span className="text-red-600">Satisfied Clients</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mb-6">
              Experience the E.I.T.S difference on your next residential, commercial, or renovation project in Jamaica.
            </p>
            <button
              onClick={() => onOpenQuote()}
              className="red-gloss px-8 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white hover:scale-105 transition-transform cursor-pointer"
            >
              Request a Free Site Estimate
            </button>
          </div>

        </div>
      </section>

      {/* Leave a Review Modal */}
      {writeReviewOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="clay-card max-w-lg w-full p-6 sm:p-8 relative border border-white/20 my-8 shadow-2xl rounded-[32px]">
            
            <button
              onClick={() => setWriteReviewOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full gloss-block flex items-center justify-center text-gray-300 hover:text-white hover:border-red-500 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <span className="text-[10px] text-red-500 font-extrabold uppercase tracking-widest block mb-1">
                  Client Feedback
                </span>
                <h3 className="font-display text-2xl font-black uppercase text-white tracking-tight">
                  Leave a Review for E.I.T.S
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Share your experience with our construction, renovation, or finishing team.
                </p>
              </div>

              {/* Rating selection */}
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1.5">
                  Rating: {rating} of 5 Stars
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="cursor-pointer p-1 transition-transform hover:scale-125"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jason Myers"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="neomorph-input w-full text-xs text-white p-3.5 outline-none rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                    Location / Parish *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Norbrook, St. Andrew"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="neomorph-input w-full text-xs text-white p-3.5 outline-none rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                    Service Completed
                  </label>
                  <select
                    value={serviceUsed}
                    onChange={(e) => setServiceUsed(e.target.value)}
                    className="neomorph-input w-full text-xs text-white p-3.5 outline-none rounded-xl"
                  >
                    <option value="Interior Finishing & Drywall">Interior Finishing & Drywall</option>
                    <option value="Custom Tiling & Slab Work">Custom Tiling & Slab Work</option>
                    <option value="Building Construction">Building Construction</option>
                    <option value="Renovations & Remodeling">Renovations & Remodeling</option>
                    <option value="Painting & Texturing">Painting & Texturing</option>
                    <option value="Roofing & Waterproofing">Roofing & Waterproofing</option>
                    <option value="Concrete Work & Driveways">Concrete Work & Driveways</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                  Your Review / Experience *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe the quality of work, cleanliness, punctuality, and overall satisfaction..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="neomorph-input w-full text-xs text-white p-3 outline-none rounded-xl resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="red-gloss w-full py-4 rounded-2xl font-black uppercase text-xs tracking-widest text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-600/30"
                >
                  {isSubmitting ? (
                    <span>Publishing Review...</span>
                  ) : (
                    <>
                      <span>Submit Verified Review</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};
