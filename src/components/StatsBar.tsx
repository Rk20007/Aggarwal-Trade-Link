import React from 'react';
import { Award, Clock, Truck, Building2 } from 'lucide-react';

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200 py-10 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Stat 1 */}
          <div className="space-y-1 border-l-2 border-sky-600 pl-4">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-sky-600" />
              <span>Customer Rating</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-950 font-mono tabular-nums">
              4.8 <span className="text-lg text-slate-400 font-sans font-normal">/ 5.0</span>
            </div>
            <p className="text-xs text-slate-500">
              80+ verified Google & Justdial business reviews
            </p>
          </div>

          {/* Stat 2 */}
          <div className="space-y-1 border-l-2 border-emerald-600 pl-4">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Industry Track Record</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-950 font-mono tabular-nums">
              9+ <span className="text-lg text-slate-400 font-sans font-normal">Years</span>
            </div>
            <p className="text-xs text-slate-500">
              Established 2016 in Bhiwadi industrial region
            </p>
          </div>

          {/* Stat 3 */}
          <div className="space-y-1 border-l-2 border-amber-500 pl-4">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
              <Truck className="w-3.5 h-3.5 text-amber-600" />
              <span>Local Factory Transit</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-950 font-mono tabular-nums">
              &lt; 3 <span className="text-lg text-slate-400 font-sans font-normal">Hours</span>
            </div>
            <p className="text-xs text-slate-500">
              Same-day factory floor dispatch in Bhiwadi clusters
            </p>
          </div>

          {/* Stat 4 */}
          <div className="space-y-1 border-l-2 border-purple-600 pl-4">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5 text-purple-600" />
              <span>Active Plants Supplied</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-950 font-mono tabular-nums">
              500+ <span className="text-lg text-slate-400 font-sans font-normal">Factories</span>
            </div>
            <p className="text-xs text-slate-500">
              Auto OEMs, pharma plants, electronics & logistics
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
