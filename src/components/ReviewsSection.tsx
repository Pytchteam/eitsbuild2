import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquarePlus, X, Quote } from 'lucide-react';
import { REVIEWS_DATA } from '../data/mockData';
import { CustomerReview } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>(REVIEWS_DATA);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    roleOrLocation: '',
    serviceUsed: 'Interior Finishing',
    rating: 5,
    comment: '',
  });
  const [submittedReview, setSubmittedReview] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const created: CustomerReview = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      roleOrLocation: newReview.roleOrLocation || 'Jamaica',
      serviceUsed: newReview.serviceUsed,
      rating: newReview.rating,
      date: 'Just now',
      comment: newReview.comment,
      verified: true,
    };

    setReviews([created, ...reviews]);
    setSubmittedReview(true);
    setTimeout(() => {
      setSubmittedReview(false);
      setReviewModalOpen(false);
      setNewReview({
        name: '',
        roleOrLocation: '',
        serviceUsed: 'Interior Finishing',
        rating: 5,
        comment: '',
      });
    }, 2000);
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 relative bg-[#09090C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              <span className="text-xs uppercase tracking-widest text-red-500 font-extrabold">
                Verified Client Feedback
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              5.0 Star <span className="text-red-600">Client Reviews</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-2xl">
              Read authentic feedback from homeowners, villa managers, and business directors who trust E.I.T.S for quality building and precision finishes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="gloss-block px-5 py-3 rounded-2xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl stat-icon-3d flex items-center justify-center font-black text-amber-400 text-sm">
                5.0
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-gray-300">24 Verified Google Reviews</span>
              </div>
            </div>

            <button
              onClick={() => setReviewModalOpen(true)}
              className="red-gloss px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider text-white flex items-center gap-2 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Leave a Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="clay-card gloss-block-interactive p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Rating Stars & Verified Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                      <CheckCircle className="w-3 h-3" /> Verified Project
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-white tracking-tight">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] text-gray-400 block">
                    {rev.roleOrLocation}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-red-500 bg-red-950/50 px-2.5 py-1 rounded-lg border border-red-500/20">
                  {rev.serviceUsed}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {reviewModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="clay-card max-w-lg w-full p-6 sm:p-8 relative border border-white/20">
            <button
              onClick={() => setReviewModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full gloss-block flex items-center justify-center text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedReview ? (
              <div className="py-8 text-center">
                <div className="w-14 h-14 rounded-2xl red-gloss mx-auto flex items-center justify-center text-white font-black text-2xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-black uppercase text-white mb-2">
                  Thank You For Your Review!
                </h3>
                <p className="text-xs text-gray-300">
                  Your feedback has been recorded and added to the E.I.T.S client showcase.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="mb-2">
                  <span className="text-[10px] text-red-500 font-extrabold uppercase tracking-widest block mb-1">
                    Client Testimonial
                  </span>
                  <h3 className="text-xl font-black uppercase text-white">
                    Share Your E.I.T.S Experience
                  </h3>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Dennis Green"
                    className="neomorph-input w-full text-xs text-white p-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                    Location / Parish
                  </label>
                  <input
                    type="text"
                    value={newReview.roleOrLocation}
                    onChange={(e) => setNewReview({ ...newReview, roleOrLocation: e.target.value })}
                    placeholder="e.g. Cherry Gardens, St. Andrew"
                    className="neomorph-input w-full text-xs text-white p-3 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                      Service Received
                    </label>
                    <select
                      value={newReview.serviceUsed}
                      onChange={(e) => setNewReview({ ...newReview, serviceUsed: e.target.value })}
                      className="neomorph-input w-full text-xs text-white p-3 outline-none"
                    >
                      <option value="General Construction">General Construction</option>
                      <option value="Interior Finishing">Interior Finishing</option>
                      <option value="Custom Tiling">Custom Tiling</option>
                      <option value="Renovations">Renovations</option>
                      <option value="Concrete Work">Concrete Work</option>
                      <option value="Roofing">Roofing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                      Star Rating
                    </label>
                    <div className="neomorph-input p-2.5 flex items-center justify-center gap-1 text-amber-400 cursor-pointer">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="hover:scale-125 transition-transform"
                        >
                          <Star className={`w-4 h-4 ${star <= newReview.rating ? 'fill-amber-400' : 'text-gray-600'}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">
                    Your Review
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Tell us about the quality, timeliness, and finishing on your project..."
                    className="neomorph-input w-full text-xs text-white p-3 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="red-gloss w-full py-3.5 rounded-xl font-black uppercase text-xs tracking-widest text-white mt-2 cursor-pointer"
                >
                  Submit Verified Review
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
