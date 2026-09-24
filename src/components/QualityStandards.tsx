import React from 'react';
import { ShieldCheck, CheckCircle2, FileCheck, Layers, Gauge, Droplets } from 'lucide-react';

export const QualityStandards: React.FC = () => {
  const benchmarks = [
    {
      title: "100% Virgin Polymer Guarantee",
      description: "We use exclusively prime virgin LLDPE polymers from Dow and Reliance. Zero reprocessed plastic filler, ensuring consistent cling and crystal clear transparency.",
      icon: Layers,
      metric: "0% Reprocessed Scrap",
    },
    {
      title: "Digital Micrometer Gauge Calibration",
      description: "Every batch undergoes multi-point optical micrometer measurement to verify uniform gauge thickness across the entire roll width.",
      icon: Gauge,
      metric: "±1.5% Micron Tolerance",
    },
    {
      title: "Dart Drop Puncture Testing (ASTM D1709)",
      description: "High impact resistance prevents tearing when wrapping pallet corners with sharp metal sheet edges, wooden crate splinters, or casting burrs.",
      icon: ShieldCheck,
      metric: "> 350g Impact Rating",
    },
    {
      title: "Zero Adhesive Residue Guarantee",
      description: "Our surface protection films and BOPP tapes feature cross-linked water acrylic emulsion that withstands 60°C container heat without leaving sticky residue.",
      icon: Droplets,
      metric: "100% Residue-Free Peel",
    },
    {
      title: "Pre-Stretch Yield Testing",
      description: "Machine grade films are pre-stretched on high-speed wrappers up to 350%, verifying zero web breaks and lower consumption per pallet.",
      icon: CheckCircle2,
      metric: "Up to 350% Elongation",
    },
    {
      title: "Batch Certificate of Analysis (COA)",
      description: "We provide comprehensive COA documentation with every bulk consignment for ISO 9001 and IATF 16949 audit compliance.",
      icon: FileCheck,
      metric: "Audit-Ready COA Provided",
    },
  ];

  return (
    <section id="quality" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Quality Assurance Protocol
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Strict Material Testing & Gauge Calibration
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Unlike informal traders who supply under-weight rolls or diluted reprocessed scrap, Aggarwal Trade Link maintains rigorous physical test parameters on every lot.
          </p>
        </div>

        {/* Benchmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benchmarks.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">Standard Metric:</span>
                  <span className="font-mono text-xs font-bold text-emerald-700">
                    {item.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
