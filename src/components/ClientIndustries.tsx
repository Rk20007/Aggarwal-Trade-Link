import React from 'react';
import { TARGET_INDUSTRIES } from '../data/companyInfo';
import { ShieldCheck, Check } from 'lucide-react';

export const ClientIndustries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Industrial Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Packaging for Bhiwadi's Manufacturing Clusters
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Engineered packaging specifications tailored to the exact transit stresses, moisture protection, and export compliance of North India's industrial hubs.
          </p>
        </div>

        {/* Human Editorial Numbered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TARGET_INDUSTRIES.map((industry, index) => {
            const indexStr = `0${index + 1}.`;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 space-y-4 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  {/* Clean human editorial numbering */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-sky-700">
                      {indexStr} Sector
                    </span>
                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {industry.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] text-slate-600 font-mono flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-slate-900 font-medium">{industry.focusProducts}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
