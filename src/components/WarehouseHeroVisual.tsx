import React from 'react';

export const WarehouseHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-gradient-to-b from-sky-50/80 via-white to-slate-100 border border-slate-200/90 shadow-xl">
      {/* Architectural warehouse perspective grid & ambient sun rays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Golden soft sunlight flare from top-right */}
      <div className="absolute -top-12 -right-12 w-80 h-80 bg-gradient-to-br from-amber-200/35 via-sky-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Warehouse Logistics SVG Artwork */}
      <svg
        viewBox="0 0 600 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Background Facility Walls & High Bay Windows */}
        <rect x="0" y="0" width="600" height="240" fill="url(#wallGradient)" />
        <line x1="0" y1="240" x2="600" y2="240" stroke="#cbd5e1" strokeWidth="2" />
        
        {/* Steel Columns / Racking Beams */}
        <line x1="80" y1="0" x2="80" y2="240" stroke="#94a3b8" strokeWidth="3" opacity="0.4" />
        <line x1="240" y1="0" x2="240" y2="240" stroke="#94a3b8" strokeWidth="3" opacity="0.4" />
        <line x1="420" y1="0" x2="420" y2="240" stroke="#94a3b8" strokeWidth="3" opacity="0.4" />

        {/* Clerestory Windows with Soft Sunlight */}
        <rect x="100" y="24" width="100" height="40" rx="4" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1.5" />
        <rect x="260" y="24" width="100" height="40" rx="4" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1.5" />
        <rect x="440" y="24" width="100" height="40" rx="4" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1.5" />
        
        {/* Sunbeams traversing down */}
        <polygon points="150,64 260,240 160,240 100,64" fill="url(#sunbeamGradient)" opacity="0.35" />
        <polygon points="310,64 420,240 320,240 260,64" fill="url(#sunbeamGradient)" opacity="0.35" />

        {/* Polished Epoxy Floor */}
        <rect x="0" y="240" width="600" height="200" fill="url(#epoxyFloorGradient)" />
        {/* Floor grid markings & pallet parking lines */}
        <line x1="60" y1="240" x2="0" y2="440" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="180" y1="240" x2="120" y2="440" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="340" y1="240" x2="320" y2="440" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="500" y1="240" x2="520" y2="440" stroke="#e2e8f0" strokeWidth="1.5" />

        {/* Pallet 1 (Left): Stacked Industrial Corrugated Cartons */}
        <g transform="translate(60, 190)">
          {/* Wooden Pallet Base */}
          <rect x="0" y="110" width="130" height="12" rx="2" fill="#d97706" opacity="0.85" />
          <rect x="10" y="122" width="20" height="8" fill="#b45309" />
          <rect x="55" y="122" width="20" height="8" fill="#b45309" />
          <rect x="100" y="122" width="20" height="8" fill="#b45309" />

          {/* Master Boxes */}
          <rect x="5" y="60" width="55" height="48" rx="2" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="5" y1="84" x2="60" y2="84" stroke="#d97706" strokeWidth="3" />
          <text x="14" y="100" fill="#92400e" fontSize="7" fontFamily="monospace" fontWeight="bold">5-PLY</text>

          <rect x="65" y="60" width="55" height="48" rx="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="65" y1="84" x2="120" y2="84" stroke="#d97706" strokeWidth="3" />
          <text x="74" y="100" fill="#92400e" fontSize="7" fontFamily="monospace" fontWeight="bold">HEAVY</text>

          {/* Upper Tier Box */}
          <rect x="35" y="12" width="60" height="46" rx="2" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="35" y1="35" x2="95" y2="35" stroke="#d97706" strokeWidth="3" />
          <text x="44" y="50" fill="#92400e" fontSize="7" fontFamily="monospace" fontWeight="bold">ATL KRAFT</text>
        </g>

        {/* Pallet 2 (Center-Right): Stacked Clear Stretch Film Rolls & Shrink Wrapped Pallet */}
        <g transform="translate(230, 150)">
          {/* Wooden Pallet Base */}
          <rect x="0" y="150" width="160" height="14" rx="2" fill="#d97706" opacity="0.9" />
          <rect x="15" y="164" width="25" height="10" fill="#b45309" />
          <rect x="68" y="164" width="25" height="10" fill="#b45309" />
          <rect x="120" y="164" width="25" height="10" fill="#b45309" />

          {/* Translucent Shrink Wrap Body Encasing stacked layers */}
          <rect x="10" y="20" width="140" height="128" rx="8" fill="url(#palletWrapGrad)" stroke="#38bdf8" strokeWidth="1.5" />
          
          {/* Visible Cylindrical Stretch Rolls Inside */}
          {/* Row 1 */}
          <rect x="20" y="80" width="26" height="60" rx="3" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1" />
          <ellipse cx="33" cy="80" rx="13" ry="5" fill="#fde68a" stroke="#d97706" strokeWidth="1" />
          
          <rect x="52" y="80" width="26" height="60" rx="3" fill="#f0f9ff" stroke="#7dd3fc" strokeWidth="1" />
          <ellipse cx="65" cy="80" rx="13" ry="5" fill="#fde68a" stroke="#d97706" strokeWidth="1" />

          <rect x="84" y="80" width="26" height="60" rx="3" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1" />
          <ellipse cx="97" cy="80" rx="13" ry="5" fill="#fde68a" stroke="#d97706" strokeWidth="1" />

          <rect x="116" y="80" width="26" height="60" rx="3" fill="#f0f9ff" stroke="#7dd3fc" strokeWidth="1" />
          <ellipse cx="129" cy="80" rx="13" ry="5" fill="#fde68a" stroke="#d97706" strokeWidth="1" />

          {/* Row 2 (Top Tier) */}
          <rect x="36" y="30" width="26" height="48" rx="3" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1" />
          <ellipse cx="49" cy="30" rx="13" ry="5" fill="#fde68a" stroke="#d97706" strokeWidth="1" />

          <rect x="68" y="30" width="26" height="48" rx="3" fill="#f0f9ff" stroke="#7dd3fc" strokeWidth="1" />
          <ellipse cx="81" cy="30" rx="13" ry="5" fill="#fde68a" stroke="#d97706" strokeWidth="1" />

          <rect x="100" y="30" width="26" height="48" rx="3" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1" />
          <ellipse cx="113" cy="30" rx="13" ry="5" fill="#fde68a" stroke="#d97706" strokeWidth="1" />

          {/* Green PET Strapping Band wrapping around pallet */}
          <line x1="8" y1="65" x2="152" y2="65" stroke="#059669" strokeWidth="3.5" />
          <line x1="8" y1="115" x2="152" y2="115" stroke="#059669" strokeWidth="3.5" />
          <rect x="75" y="63" width="10" height="7" rx="1" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
          <rect x="75" y="113" width="10" height="7" rx="1" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
        </g>

        {/* Foreground Right: Rolls of BOPP Packing Tapes & Bubble Wrap Spool */}
        <g transform="translate(425, 230)">
          {/* Air Bubble Roll (Large cylinder standing) */}
          <ellipse cx="60" cy="40" rx="42" ry="14" fill="#cffafe" stroke="#06b6d4" strokeWidth="1.5" />
          <rect x="18" y="40" width="84" height="90" fill="url(#bubbleRollGrad)" stroke="#06b6d4" strokeWidth="1.5" />
          <ellipse cx="60" cy="130" rx="42" ry="14" fill="#a5f3fc" stroke="#06b6d4" strokeWidth="1.5" />
          
          {/* Core Hole */}
          <ellipse cx="60" cy="40" rx="14" ry="5" fill="#e2e8f0" stroke="#0891b2" strokeWidth="1" />
          <text x="35" y="90" fill="#0e7490" fontSize="8" fontFamily="monospace" fontWeight="bold">AIR BUBBLE</text>

          {/* Stacks of BOPP Tape Rolls in front */}
          <g transform="translate(75, 75)">
            <ellipse cx="25" cy="12" rx="20" ry="7" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
            <rect x="5" y="12" width="40" height="14" fill="#b45309" stroke="#d97706" strokeWidth="1" />
            <ellipse cx="25" cy="26" rx="20" ry="7" fill="#d97706" stroke="#92400e" strokeWidth="1" />
            <ellipse cx="25" cy="12" rx="8" ry="3" fill="#ffffff" />

            <ellipse cx="25" cy="30" rx="20" ry="7" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
            <rect x="5" y="30" width="40" height="14" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
            <ellipse cx="25" cy="44" rx="20" ry="7" fill="#d97706" stroke="#92400e" strokeWidth="1" />
            <ellipse cx="25" cy="30" rx="8" ry="3" fill="#ffffff" />
          </g>
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="wallGradient" x1="0" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f8fafc" />
            <stop offset="1" stopColor="#e2e8f0" />
          </linearGradient>

          <linearGradient id="epoxyFloorGradient" x1="0" y1="240" x2="0" y2="440" gradientUnits="userSpaceOnUse">
            <stop stopColor="#cbd5e1" />
            <stop offset="0.4" stopColor="#e2e8f0" />
            <stop offset="1" stopColor="#f1f5f9" />
          </linearGradient>

          <linearGradient id="sunbeamGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fef08a" stopOpacity="0.4" />
            <stop offset="1" stopColor="#fef08a" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="palletWrapGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#bae6fd" stopOpacity="0.6" />
            <stop offset="0.5" stopColor="#f0f9ff" stopOpacity="0.3" />
            <stop offset="1" stopColor="#7dd3fc" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="bubbleRollGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#e0f2fe" />
            <stop offset="0.5" stopColor="#ffffff" />
            <stop offset="1" stopColor="#cffafe" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Status Badges in Light Mode */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 shadow-md px-3.5 py-2 rounded-xl flex items-center gap-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <div className="text-left">
          <p className="text-[11px] font-bold text-slate-900 leading-tight">Bhiwadi Central Depot</p>
          <p className="text-[10px] text-slate-500 font-mono">10,000+ MT Dispatched Ready</p>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 shadow-md px-3.5 py-2 rounded-xl flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-md bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-xs">
          ★
        </div>
        <div className="text-right">
          <p className="text-[11px] font-bold text-slate-900 leading-tight">4.8 / 5.0 Rating</p>
          <p className="text-[10px] text-emerald-700 font-medium">80+ Verified B2B Reviews</p>
        </div>
      </div>
    </div>
  );
};
