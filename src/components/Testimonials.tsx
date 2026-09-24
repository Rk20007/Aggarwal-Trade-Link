import React from 'react';
import { REVIEWS } from '../data/reviews';
import { COMPANY_INFO } from '../data/companyInfo';
import { Star, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-200">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Verified Client Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Over 500 Manufacturing Facilities
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Read authentic feedback from plant heads, dispatch managers, and procurement officers across Bhiwadi, Khushkhera, and Chopanki industrial areas.
            </p>
          </div>

          {/* Aggregate Rating Scoreboard (Clean Light Card) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shrink-0 flex items-center gap-4 shadow-xs">
            <div className="text-center border-r border-slate-200 pr-4">
              <div className="text-3xl font-extrabold text-slate-950 font-mono tabular-nums">
                {COMPANY_INFO.rating.score}
              </div>
              <div className="flex items-center justify-center gap-0.5 mt-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
            </div>
            <div className="text-xs text-slate-700 space-y-0.5">
              <p className="font-bold text-slate-900">Aggarwal Trade Link</p>
              <p className="text-slate-500 font-mono text-[11px]">
                36 Google Reviews (4.7 ★) · 47 Justdial (4.8 ★)
              </p>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 hover:text-sky-800 font-semibold inline-block text-[11px] underline pt-0.5"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 space-y-4 flex flex-col justify-between shadow-xs hover:border-slate-300 hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                {/* Header line: Stars & Source */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  {/* Clean unboxed source */}
                  <span className="text-xs text-slate-500 font-mono font-medium">
                    {review.source} · {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Plant Info Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {review.companyRole} · {review.companyName}
                  </p>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5" />
                    <span>{review.location}</span>
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded font-semibold">
                    {review.highlightedSpec}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
