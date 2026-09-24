import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-600 text-xs border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Mission (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center font-mono font-extrabold text-white text-sm shadow-xs">
                ATL
              </span>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                {COMPANY_INFO.name}
              </span>
            </div>
            
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Established in {COMPANY_INFO.establishedYear} under the leadership of {COMPANY_INFO.proprietor}. Dedicated manufacturer, wholesaler, and supply partner for industrial packaging materials across Bhiwadi, Khushkhera, Tapukara, and the greater National Capital Region.
            </p>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <p>GSTIN: <span className="font-mono text-slate-900 font-bold">{COMPANY_INFO.gstin}</span></p>
              <p>Rating: <span className="text-emerald-700 font-bold font-mono">4.8 / 5.0</span> (Verified B2B Wholesaler)</p>
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="#products" className="hover:text-sky-700 transition-colors">
                  LLDPE Stretch Film Rolls
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-sky-700 transition-colors">
                  BOPP Self-Adhesive Tapes
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-sky-700 transition-colors">
                  PET Strapping & Metal Clips
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-sky-700 transition-colors">
                  Air Bubble & EPE Foam
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-sky-700 transition-colors">
                  Industrial Corrugated Boxes
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-sky-700 transition-colors">
                  Surface Protection Films
                </a>
              </li>
            </ul>
          </div>

          {/* Clusters & Logistics (Col 4) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Industrial Coverage
            </h4>
            <ul className="space-y-2 text-slate-600 text-[11px]">
              <li>Bhiwadi Industrial Area (Phases I - IV)</li>
              <li>Khushkhera Industrial Cluster</li>
              <li>Tapukara & Karoli Industrial Area</li>
              <li>Chopanki Industrial Area</li>
              <li>Neemrana Japanese Industrial Zone</li>
              <li>Bawal & Rewari Industrial Estate</li>
              <li>Manesar & Gurugram Logistics Hubs</li>
            </ul>
          </div>

          {/* Direct Contact (Col 5) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Depot Contact
            </h4>
            <div className="space-y-2 text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-snug">
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}, Near {COMPANY_INFO.address.landmark}, Bhiwadi - 301019
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-sky-700 font-mono font-medium">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-sky-700">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Industrial packaging supplies and wholesale distribution.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 hover:text-slate-950 transition-colors font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
