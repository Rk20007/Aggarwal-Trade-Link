import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyInfo';
import { Phone, MessageSquare, ShoppingCart, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  quoteCount: number;
  onOpenQuoteDrawer: () => void;
  onOpenQuickRFQ: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  quoteCount,
  onOpenQuoteDrawer,
  onOpenQuickRFQ,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-xs">
      {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (4-6 text nav links) — Zone 3 (Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark in display face */}
        <a 
          href="#" 
          className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 hover:text-sky-600 transition-colors whitespace-nowrap flex items-center gap-2.5"
        >
          <span className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center font-mono font-extrabold text-white text-base shadow-xs">
            ATL
          </span>
          <span className="font-extrabold tracking-tight text-slate-900">Aggarwal Trade Link</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#products" className="hover:text-sky-600 transition-colors">
            Catalog & Specs
          </a>
          <a href="#calculator" className="hover:text-sky-600 transition-colors">
            Cost Estimator
          </a>
          <a href="#industries" className="hover:text-sky-600 transition-colors">
            Industries
          </a>
          <a href="#quality" className="hover:text-sky-600 transition-colors">
            Quality Lab
          </a>
          <a href="#reviews" className="hover:text-sky-600 transition-colors">
            Reviews
          </a>
          <a href="#location" className="hover:text-sky-600 transition-colors">
            Warehouse Location
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          {/* Quick Phone Call affordance */}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-sky-700 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
            title="Call Bhiwadi Depot"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span className="font-mono">{COMPANY_INFO.phoneFormatted}</span>
          </a>

          {/* RFQ Drawer Trigger with Counter */}
          <button
            onClick={onOpenQuoteDrawer}
            className="relative p-2.5 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2 text-xs font-semibold border border-slate-200"
            aria-label="View RFQ Quotation List"
          >
            <ShoppingCart className="w-4 h-4 text-sky-600" />
            <span className="hidden md:inline">RFQ Cart</span>
            {quoteCount > 0 && (
              <span className="bg-sky-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full font-mono">
                {quoteCount}
              </span>
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenQuickRFQ}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shadow-xs flex items-center gap-1.5"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-950 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-600 transition-colors"
            >
              Catalog & Specs
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-600 transition-colors"
            >
              Cost Estimator
            </a>
            <a
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-600 transition-colors"
            >
              Industries Served
            </a>
            <a
              href="#quality"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-600 transition-colors"
            >
              Quality & Testing Standards
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-600 transition-colors"
            >
              Verified Reviews (4.8 ★)
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-sky-600 transition-colors"
            >
              Warehouse & Location Map
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              Call Bhiwadi Depot: {COMPANY_INFO.phoneFormatted}
            </a>
            <a
              href={COMPANY_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
              Direct WhatsApp Inquiries
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
