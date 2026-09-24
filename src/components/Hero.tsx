import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo';
import { WarehouseHeroVisual } from './WarehouseHeroVisual';
import { ShieldCheck, Truck, Clock, ArrowRight, MessageSquare, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenQuickRFQ: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuickRFQ }) => {
  return (
    <section className="relative bg-gradient-to-b from-white via-sky-50/20 to-slate-50/60 text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Background Engineering Blueprint Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Soft atmospheric glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[300px] bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-18 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Proposition & Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed regional trust metadata kicker (NO PILL BADGE) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
              <span className="text-sky-700 font-bold uppercase tracking-wider">Bhiwadi Industrial Belt</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Gaurav Path, Opp. UIT</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Est. {COMPANY_INFO.establishedYear}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700 font-semibold">Verified GST Wholesaler</span>
            </div>

            {/* Unmistakable Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance">
              Industrial Packaging Materials Engineered for Heavy Manufacturing
            </h1>

            {/* Concrete value proposition */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Manufacturers, stockists, and wholesale distributors of high-tensile 
              <span className="text-slate-900 font-semibold"> LLDPE stretch film</span>, 
              <span className="text-slate-900 font-semibold"> BOPP packing tapes</span>, 
              <span className="text-slate-900 font-semibold"> PET strapping</span>, 
              <span className="text-slate-900 font-semibold"> EPE foam</span>, and 
              <span className="text-slate-900 font-semibold"> air bubble cushioning</span>. 
              Same-day factory dispatch across Bhiwadi, Khushkhera, Tapukara, and NCR industrial clusters.
            </p>

            {/* Direct CTA Action Cluster */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenQuickRFQ}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Request Wholesale Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Claim-to-Proof Verification Strip */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-semibold">
                  <Truck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>2-Hour Local Delivery</span>
                </div>
                <p className="text-[11px] text-slate-500">Dedicated supply van fleet in Bhiwadi</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Virgin LLDPE</span>
                </div>
                <p className="text-[11px] text-slate-500">Dow & Reliance virgin grade polymers</p>
              </div>

              <div className="space-y-1 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-slate-900 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Custom Slitting & Widths</span>
                </div>
                <p className="text-[11px] text-slate-500">Precision micron and core sizing</p>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Light Warehouse Visual */}
          <div className="lg:col-span-5">
            <WarehouseHeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
