import React from 'react';

interface ProductVisualProps {
  category: string;
  id: string;
  name: string;
  className?: string;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({ category, id, name, className = "h-52" }) => {
  // Ultra-clean, bright, studio lighting product presentation with realistic textures and shadows
  switch (category) {
    case 'stretch-film':
      return (
        <div className={`relative w-full ${className} bg-gradient-to-b from-slate-50 via-sky-50/40 to-slate-100 flex items-center justify-center overflow-hidden border-b border-slate-200/80`}>
          {/* Studio soft spotlight circle */}
          <div className="absolute w-48 h-48 bg-sky-200/40 rounded-full blur-2xl pointer-events-none" />
          
          {/* Subtle grid pattern for precision engineering */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:16px_16px]" />

          {/* 3D Studio Roll Composition */}
          <div className="relative flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-300">
            {/* Soft ground shadow */}
            <div className="absolute -bottom-3 w-36 h-6 bg-slate-400/20 rounded-[50%] blur-md" />

            {/* Stretch Film Cylinder */}
            <div className="relative flex flex-col items-center">
              {/* Kraft Core Top */}
              <div className="w-24 h-7 bg-amber-200 rounded-[50%] border-2 border-amber-400 shadow-sm flex items-center justify-center z-20">
                <div className="w-12 h-3.5 bg-amber-900/80 rounded-[50%] border border-amber-950 shadow-inner" />
              </div>

              {/* Translucent High-Tensile Film Body */}
              <div className="w-24 h-32 -mt-3.5 bg-gradient-to-r from-sky-100/90 via-white to-sky-100/95 rounded-b-[24px] border-x border-b border-sky-300/80 shadow-md relative overflow-hidden backdrop-blur-sm">
                {/* Specular gloss highlights */}
                <div className="absolute inset-y-0 left-2 w-3 bg-gradient-to-r from-white/90 to-transparent" />
                <div className="absolute inset-y-0 right-4 w-1.5 bg-white/70" />
                <div className="absolute top-7 inset-x-0 h-[1px] bg-sky-300/60" />
                <div className="absolute top-15 inset-x-0 h-[1px] bg-sky-300/60" />
                <div className="absolute top-23 inset-x-0 h-[1px] bg-sky-300/60" />

                {/* Studio label */}
                <div className="absolute bottom-3 inset-x-0 text-center">
                  <span className="font-mono text-[9px] font-bold text-sky-800 bg-sky-100/90 border border-sky-200 px-1.5 py-0.5 rounded shadow-xs">
                    {id.includes('machine') ? 'POWER 350%' : '100% VIRGIN LLDPE'}
                  </span>
                </div>
              </div>
            </div>

            {/* Cling drape film */}
            <div className="absolute -right-8 top-10 w-20 h-24 bg-gradient-to-r from-sky-400/20 via-sky-200/30 to-transparent skew-y-6 border-t border-sky-300/60 pointer-events-none" />
          </div>

          <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-sky-700 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>High Dart Impact Resistance</span>
          </div>
        </div>
      );

    case 'tapes':
      return (
        <div className={`relative w-full ${className} bg-gradient-to-b from-amber-50/50 via-slate-50 to-amber-100/30 flex items-center justify-center overflow-hidden border-b border-slate-200/80`}>
          <div className="absolute w-48 h-48 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#d977060a_1px,transparent_1px),linear-gradient(to_bottom,#d977060a_1px,transparent_1px)] bg-[size:16px_16px]" />

          <div className="relative flex items-center gap-3 scale-95 group-hover:scale-100 transition-transform duration-300">
            {/* Ground shadow */}
            <div className="absolute -bottom-2 w-44 h-6 bg-amber-900/10 rounded-[50%] blur-md" />

            {/* Clear Transparent Tape Roll */}
            <div className="relative flex flex-col items-center">
              <div className="w-20 h-6 bg-amber-200 rounded-[50%] border border-amber-300 flex items-center justify-center z-10 shadow-xs">
                <div className="w-10 h-3 bg-amber-950/70 rounded-[50%]" />
              </div>
              <div className="w-20 h-18 -mt-3 bg-gradient-to-r from-amber-100/70 via-white to-amber-200/60 rounded-b-[18px] border-x border-b border-amber-300 shadow-sm relative overflow-hidden backdrop-blur-xs">
                <div className="absolute inset-y-0 left-2 w-2.5 bg-white/90" />
                <div className="absolute bottom-2 inset-x-0 text-center text-[9px] font-mono font-bold text-amber-800">
                  CLEAR 45µ
                </div>
              </div>
            </div>

            {/* Brown Kraft Packing Tape Roll */}
            <div className="relative flex flex-col items-center -ml-4 translate-y-3">
              <div className="w-22 h-6 bg-amber-800 rounded-[50%] border border-amber-600 flex items-center justify-center z-10 shadow-xs">
                <div className="w-11 h-3 bg-amber-950 rounded-[50%]" />
              </div>
              <div className="w-22 h-18 -mt-3 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 rounded-b-[18px] border-x border-b border-amber-800 shadow-md relative overflow-hidden">
                <div className="absolute inset-y-0 left-3 w-2 bg-amber-400/40" />
                <div className="absolute bottom-2 inset-x-0 text-center text-[9px] font-mono font-bold text-amber-100">
                  {id.includes('custom') ? 'CUSTOM PRINT' : 'BROWN KRAFT'}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-amber-800 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Acrylic Emulsion High Tack</span>
          </div>
        </div>
      );

    case 'strapping':
      return (
        <div className={`relative w-full ${className} bg-gradient-to-b from-emerald-50/50 via-slate-50 to-emerald-100/30 flex items-center justify-center overflow-hidden border-b border-slate-200/80`}>
          <div className="absolute w-48 h-48 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0596690a_1px,transparent_1px),linear-gradient(to_bottom,#0596690a_1px,transparent_1px)] bg-[size:16px_16px]" />

          <div className="relative flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-300">
            <div className="absolute -bottom-2 w-40 h-6 bg-emerald-950/10 rounded-[50%] blur-md" />

            {/* Green PET Coil */}
            <div className="relative flex flex-col items-center">
              <div className="w-28 h-8 bg-slate-700 rounded-[50%] border-2 border-emerald-500 flex items-center justify-center z-10 shadow-xs">
                <div className="w-14 h-4 bg-slate-900 rounded-[50%]" />
              </div>
              <div className="w-28 h-22 -mt-4 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 rounded-b-[24px] border-x border-b border-emerald-600 shadow-md relative overflow-hidden flex flex-col justify-center items-center">
                <div className="w-full h-1 bg-emerald-800/60 my-0.5" />
                <div className="w-full h-1 bg-emerald-800/60 my-0.5" />
                <div className="w-full h-1 bg-emerald-800/60 my-0.5" />
                <span className="font-mono text-[10px] font-bold text-white mt-1">
                  {id.includes('metal') ? 'STEEL SEALS' : 'PET 950 KGF'}
                </span>
              </div>
            </div>

            {/* Steel Serrated Clips Preview */}
            <div className="absolute -right-5 bottom-1 bg-slate-100 rounded-md p-2 border border-slate-300 shadow-md flex flex-col gap-1">
              <div className="w-7 h-1.5 bg-slate-400 rounded-xs" />
              <div className="w-7 h-1.5 bg-slate-300 rounded-xs" />
              <div className="w-7 h-1.5 bg-slate-400 rounded-xs" />
            </div>
          </div>

          <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-emerald-800 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>Anti-Rust & Tensile Certified</span>
          </div>
        </div>
      );

    case 'cushioning':
      return (
        <div className={`relative w-full ${className} bg-gradient-to-b from-cyan-50/50 via-slate-50 to-sky-100/30 flex items-center justify-center overflow-hidden border-b border-slate-200/80`}>
          <div className="absolute w-48 h-48 bg-cyan-200/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b20a_1px,transparent_1px),linear-gradient(to_bottom,#0891b20a_1px,transparent_1px)] bg-[size:16px_16px]" />

          {/* Crisp dimensional bubble wrap grid */}
          <div className="relative p-3.5 bg-white/90 border border-cyan-200 rounded-2xl shadow-md scale-95 group-hover:scale-100 transition-transform duration-300">
            <div className="grid grid-cols-4 gap-2.5">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-100 via-sky-50 to-cyan-200/70 border border-cyan-300/80 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_2px_4px_rgba(6,182,212,0.1)]"
                >
                  <div className="w-2 h-2 rounded-full bg-white -mt-1 -ml-1 shadow-xs" />
                </div>
              ))}
            </div>
            <div className="mt-2.5 text-center">
              <span className="text-[10px] font-mono font-bold text-cyan-800 uppercase tracking-wider bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                {id.includes('epe') ? 'EPE Closed-Cell Foam' : 'Multi-Layer Barrier Bubble'}
              </span>
            </div>
          </div>

          <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-cyan-800 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>Impact & Vibration Dampening</span>
          </div>
        </div>
      );

    case 'boxes':
      return (
        <div className={`relative w-full ${className} bg-gradient-to-b from-orange-50/50 via-slate-50 to-amber-100/30 flex items-center justify-center overflow-hidden border-b border-slate-200/80`}>
          <div className="absolute w-48 h-48 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c0a_1px,transparent_1px),linear-gradient(to_bottom,#ea580c0a_1px,transparent_1px)] bg-[size:16px_16px]" />

          <div className="relative flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-300">
            <div className="absolute -bottom-2 w-36 h-6 bg-amber-950/10 rounded-[50%] blur-md" />

            {/* Industrial Corrugated Box */}
            <div className="relative w-34 h-26 bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 rounded-sm border border-amber-400 shadow-md flex flex-col justify-between p-2.5">
              <div className="flex justify-between items-center text-[9px] font-mono text-amber-900 border-b border-amber-300 pb-1 font-semibold">
                <span>3/5/7 PLY KRAFT</span>
                <span>32 BF</span>
              </div>
              <div className="space-y-1 text-center">
                <div className="inline-block px-2 py-0.5 bg-amber-800 text-white rounded text-[9px] font-mono font-bold shadow-xs">
                  HEAVY INDUSTRIAL
                </div>
              </div>
              <div className="flex justify-between items-center text-[8px] font-mono text-amber-900 font-medium">
                <span>↑ THIS WAY UP</span>
                <span>AGGARWAL TRADE</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-amber-900 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-600" />
            <span>High Edge Crush (ECT) Tested</span>
          </div>
        </div>
      );

    case 'protection':
      return (
        <div className={`relative w-full ${className} bg-gradient-to-b from-blue-50/50 via-slate-50 to-blue-100/30 flex items-center justify-center overflow-hidden border-b border-slate-200/80`}>
          <div className="absolute w-48 h-48 bg-blue-200/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb0a_1px,transparent_1px),linear-gradient(to_bottom,#2563eb0a_1px,transparent_1px)] bg-[size:16px_16px]" />

          <div className="relative flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-300">
            <div className="absolute -bottom-2 w-36 h-6 bg-slate-400/20 rounded-[50%] blur-md" />

            <div className="relative w-34 h-26 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 rounded border border-slate-300 shadow-md overflow-hidden">
              <div className="absolute inset-0 bg-blue-500 flex items-center justify-center text-[10px] font-mono font-bold text-white tracking-wider">
                PEEL SURFACE FILM
              </div>
              <div className="absolute top-0 right-0 w-14 h-14 bg-white shadow-md -translate-y-7 translate-x-7 rotate-45 border border-slate-300" />
            </div>
          </div>

          <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-blue-800 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Zero Adhesive Residue</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative w-full ${className} bg-slate-50 flex items-center justify-center overflow-hidden border-b border-slate-200/80`}>
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-mono text-sm font-bold mb-2">
              B2B
            </div>
            <p className="text-xs font-mono text-slate-700 font-semibold">{name}</p>
          </div>
          <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-slate-600 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Industrial Grade Ready Stock</span>
          </div>
        </div>
      );
  }
};
