export interface Product {
  id: string;
  name: string;
  category: 'stretch-film' | 'tapes' | 'strapping' | 'cushioning' | 'boxes' | 'protection' | 'tools';
  categoryLabel: string;
  tagline: string;
  description: string;
  micron: string;
  standardSizes: string[];
  material: string;
  moq: string;
  leadTime: string;
  applications: string[];
  specs: { label: string; value: string }[];
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'manual-stretch-film',
    name: 'LLDPE Manual Stretch Film Roll',
    category: 'stretch-film',
    categoryLabel: 'Stretch Film & Wrap',
    tagline: 'High-elongation manual pallet wrapping with superior cling and puncture resistance',
    description: 'Manufactured from 100% virgin LLDPE raw material using multi-layer cast extrusion technology. Engineered for manual carton bundling and pallet wrapping across Bhiwadi logistics and warehouse hubs.',
    micron: '23 Micron (Standard) / 12-50 Micron (Custom)',
    standardSizes: ['100mm (4")', '150mm (6")', '500mm (20")', '1000mm (40")'],
    material: '100% Virgin Dow / Reliance LLDPE polymer',
    moq: '10 Rolls / 1 Box',
    leadTime: 'Same Day in Bhiwadi / 24h NCR',
    applications: ['Pallet stabilization', 'Dust & moisture protection', 'Carton grouping', 'Auto-parts transit'],
    specs: [
      { label: 'Elongation at Break', value: '≥ 300%' },
      { label: 'Tensile Strength', value: '35 - 45 MPa' },
      { label: 'Core Diameter', value: '2" or 3" Heavy Duty Kraft Core' },
      { label: 'Roll Weight', value: '2 kg, 2.5 kg, 3 kg, 4 kg net' },
      { label: 'Puncture Resistance', value: 'High Dart Drop Tested (ASTM D1709)' },
      { label: 'Cling Type', value: 'One-side cling (no pallet sticking)' }
    ],
    featured: true
  },
  {
    id: 'machine-stretch-film',
    name: 'Machine Grade Power Pre-Stretch Film',
    category: 'stretch-film',
    categoryLabel: 'Stretch Film & Wrap',
    tagline: 'High-speed automated wrapping with up to 350% power pre-stretch capability',
    description: 'Designed for automatic turntable and rotary arm pallet wrapping machines in continuous industrial production lines. Delivers optimal yield, reducing wrapping cost per pallet by up to 40%.',
    micron: '29 - 35 Micron High Performance',
    standardSizes: ['500mm x 1500m', '500mm x 1800m'],
    material: 'Super-Hexene / Metallocene LLDPE',
    moq: '5 Rolls (Jumbo / Machine spool)',
    leadTime: '1-2 Days',
    applications: ['High-speed automated packaging', 'Heavy beverage and metal pallets', 'Export palletizing'],
    specs: [
      { label: 'Stretch Ratio', value: 'Up to 350% Power Stretch' },
      { label: 'Tear Resistance', value: 'Exceptional transverse tear limit' },
      { label: 'Core Size', value: '76mm (3") standard machine core' },
      { label: 'Uniform Gauge', value: '±1.5% micro-calibrated' }
    ],
    featured: true
  },
  {
    id: 'bopp-transparent-tape',
    name: 'BOPP Self-Adhesive Packing Tape (Clear & Brown)',
    category: 'tapes',
    categoryLabel: 'Adhesive Tapes',
    tagline: 'High-tack carton sealing tape with solvent-free acrylic water-based adhesive',
    description: 'Premium biaxially oriented polypropylene (BOPP) tape with thick emulsion acrylic coating. Withstands extreme temperature fluctuations in transit without lifting or peeling.',
    micron: '40, 42, 45, 50 Micron',
    standardSizes: ['24mm (1")', '48mm (2")', '72mm (3") | Length: 65m, 100m, 650m'],
    material: 'Biaxially Oriented Polypropylene Film + Acrylic Emulsion',
    moq: '72 Rolls (1 Carton)',
    leadTime: 'Immediate Ready Stock',
    applications: ['Heavy carton sealing', 'Export consignment packing', 'Warehouse dispatch', 'Cold storage bundling'],
    specs: [
      { label: 'Adhesive Coating', value: '20 - 28 Micron pure acrylic' },
      { label: 'Peel Adhesion', value: '≥ 7.5 N / 25mm' },
      { label: 'Shear Strength', value: '> 48 hours static hold' },
      { label: 'Elongation', value: '140%' }
    ],
    featured: true
  },
  {
    id: 'custom-printed-tape',
    name: 'Custom Logo Printed BOPP Tape',
    category: 'tapes',
    categoryLabel: 'Adhesive Tapes',
    tagline: 'Tamper-evident branded packaging with up to 4-color high-definition flexo printing',
    description: 'Transform every shipped carton into a high-visibility branding asset while securing your goods against pilferage. Custom printed with company logo, handling warnings, or barcode markings.',
    micron: '45 - 55 Micron Heavy Duty',
    standardSizes: ['48mm x 65m', '48mm x 100m', '72mm x 100m'],
    material: 'Corona-treated BOPP with anti-rub ink coating',
    moq: '288 Rolls (Minimum Custom Print Batch)',
    leadTime: '5-7 Days post artwork approval',
    applications: ['Brand protection', 'Security & anti-theft sealing', 'E-commerce dispatch', 'Pharma tamper verification'],
    specs: [
      { label: 'Printing Colors', value: '1, 2, 3 or 4 Spot Colors' },
      { label: 'Print Clarity', value: 'High DPI Micro-Flexographic' },
      { label: 'Tape Colors', value: 'Clear, White, Brown, Red, Yellow background' }
    ]
  },
  {
    id: 'pet-strap-roll',
    name: 'High Tensile PET Strapping Band',
    category: 'strapping',
    categoryLabel: 'Strapping & Clips',
    tagline: 'High-strength polyester strap replacing steel bands at 50% lower weight and cost',
    description: 'Engineered for heavy industrial pallet bundling, metal ingots, brick packaging, and export machinery. Offers shock-absorbing elongation memory with zero rust staining on products.',
    micron: '0.6mm - 1.2mm Thickness',
    standardSizes: ['12mm x 0.6mm', '15mm x 0.8mm', '16mm x 0.8mm', '19mm x 1.0mm'],
    material: 'Virgin High-Molecular Polyester (PET)',
    moq: '1 Roll (20 kg Coil)',
    leadTime: 'Immediate Stock',
    applications: ['Steel coils & pipes', 'Auto component crating', 'Lumber & plywood', 'Corrugated palletizing'],
    specs: [
      { label: 'Break Strength', value: '350 kgf to 950 kgf' },
      { label: 'Surface Finish', value: 'Diamond Embossed or Smooth' },
      { label: 'Core Dimensions', value: '406mm x 150mm standard dispenser core' },
      { label: 'Tool Compatibility', value: 'Friction weld battery tools, pneumatic & manual' }
    ],
    featured: true
  },
  {
    id: 'metal-packing-clips',
    name: 'Serrated Heavy-Gauge Metal Packing Clips',
    category: 'strapping',
    categoryLabel: 'Strapping & Clips',
    tagline: 'Zinc-plated anti-slip strapping seals for maximum joint retention',
    description: 'Precision-stamped galvanized steel clips with internal serrated grip teeth designed to lock PET and PP straps securely under extreme transit vibration.',
    micron: '0.7mm - 1.0mm Cold Rolled Steel',
    standardSizes: ['12mm', '15mm', '19mm Heavy Duty'],
    material: 'Zinc Galvanized Cold-Rolled Carbon Steel',
    moq: '1000 Pieces / Box',
    leadTime: 'Immediate Stock',
    applications: ['Manual strapping clamp', 'Heavy load tie-downs', 'Pallet strapping lock'],
    specs: [
      { label: 'Joint Efficiency', value: '> 80% strap breaking strength' },
      { label: 'Corrosion Resistance', value: 'Electro-galvanized anti-rust finish' },
      { label: 'Grip Profile', value: 'Positive locking bidirectional teeth' }
    ]
  },
  {
    id: 'air-bubble-roll',
    name: 'Virgin Air Bubble Roll & Protective Pouches',
    category: 'cushioning',
    categoryLabel: 'Protective Foam & Bubble',
    tagline: 'Multi-layer bubble film providing impact resistance and shock dampening',
    description: 'Double-layer and three-layer LDPE bubble film manufactured with barrier bubble technology to prevent air loss under sustained compression. Ideal for fragile automotive lenses and glassware.',
    micron: '40 GSM (Light) to 120 GSM (Heavy Industrial)',
    standardSizes: ['Width: 0.5m, 1.0m, 1.5m | Length: 100m'],
    material: '100% Virgin Low-Density Polyethylene (LDPE)',
    moq: '2 Rolls',
    leadTime: 'Same Day in Bhiwadi',
    applications: ['Electronic component packing', 'Automotive lighting & mirrors', 'Sanitaryware protection', 'E-commerce wrap'],
    specs: [
      { label: 'Bubble Diameter', value: '10mm (Standard) or 25mm (Large Bubble)' },
      { label: 'Bubble Height', value: '3.5mm - 4.2mm' },
      { label: 'Variants Available', value: 'Standard Clear, Pink Anti-Static, Cut Pouches' }
    ],
    featured: true
  },
  {
    id: 'epe-foam-rolls',
    name: 'EPE Foam Rolls & Corner Protectors',
    category: 'cushioning',
    categoryLabel: 'Protective Foam & Bubble',
    tagline: 'Closed-cell expanded polyethylene foam for anti-scratch surface cushioning',
    description: 'Non-abrasive, waterproof, and chemically inert closed-cell foam. Prevents scratching on powder-coated sheet metal, polished automotive panels, furniture, and delicate components.',
    micron: '0.8mm, 1mm, 2mm, 3mm, 5mm up to 20mm',
    standardSizes: ['1.0m x 100m', '1.2m x 100m', 'Custom slit widths'],
    material: 'Expanded Polyethylene (EPE) Closed Cell',
    moq: '2 Rolls',
    leadTime: 'Same Day in Bhiwadi',
    applications: ['Powder-coated metal parts', 'Appliance body wrap', 'Electronic PCB padding', 'Edge & corner protectors'],
    specs: [
      { label: 'Density', value: '20 - 24 kg/m³' },
      { label: 'Thermal Insulation', value: '0.035 W/mK' },
      { label: 'Water Absorption', value: '< 0.01% by volume' }
    ]
  },
  {
    id: 'corrugated-boxes',
    name: 'Industrial Corrugated Boxes (3/5/7 Ply)',
    category: 'boxes',
    categoryLabel: 'Cartons & Boxes',
    tagline: 'Heavy-gauge kraft shipping cartons with high bursting factor and stackability',
    description: 'Custom manufactured corrugated boxes engineered to survive drop impacts and high-humidity warehouse stacking. Available with custom printing, partition dividers, and die-cut shapes.',
    micron: '120 - 250 GSM Kraft Paper',
    standardSizes: ['Custom fabricated to exact customer dimensions'],
    material: 'Virgin Kraft Paper with semi-chemical fluting (B-flute, C-flute, BC-flute)',
    moq: '500 Boxes',
    leadTime: '3-4 Working Days',
    applications: ['Export shipments', 'Master shipping containers', 'Automotive parts dispatch', 'FMCG goods'],
    specs: [
      { label: 'Bursting Factor (BF)', value: '16 BF to 32 BF' },
      { label: 'Edge Crush Test (ECT)', value: '32 to 55 lbs/in' },
      { label: 'Ply Options', value: '3-Ply (Single Wall), 5-Ply (Double Wall), 7-Ply (Triple Wall)' }
    ]
  },
  {
    id: 'surface-protection-film',
    name: 'Self-Adhesive Surface Protection Film',
    category: 'protection',
    categoryLabel: 'Surface Protection',
    tagline: 'Zero-residue peeling film for stainless steel, glass, and aluminum profiles',
    description: 'Specially formulated PE film with controlled low to medium tack adhesive that leaves zero glue residue upon removal even after months of sun and weather exposure.',
    micron: '35 to 80 Micron',
    standardSizes: ['600mm, 1000mm, 1220mm, 1250mm x 100m / 500m'],
    material: 'Corona Treated Polyethylene Film + Removable Acrylic Glue',
    moq: '5 Rolls',
    leadTime: '1-2 Days',
    applications: ['Stainless steel sheets (BA/2B finish)', 'Aluminum composite panels (ACP)', 'Architectural glass', 'UPVC profiles'],
    specs: [
      { label: 'Peel Strength', value: '50 - 300 g/25mm (Customized tack)' },
      { label: 'UV Resistance', value: 'Up to 6 Months outdoor' },
      { label: 'Residue Test', value: '100% Zero Adhesive Transfer' }
    ]
  },
  {
    id: 'strapping-tools',
    name: 'Manual & Battery Strapping Tools',
    category: 'tools',
    categoryLabel: 'Strapping & Tools',
    tagline: 'Heavy-duty tensioners, sealers, and friction welders for seamless strapping',
    description: 'Complete packaging tooling solutions including manual ratchet tensioners, heavy duty sealers, and handheld portable friction welding machines for high-speed operation.',
    micron: 'N/A (Tooling)',
    standardSizes: ['Compatible with 12mm - 19mm Straps'],
    material: 'Drop-forged hardened alloy steel / Industrial composite body',
    moq: '1 Unit',
    leadTime: 'Immediate Stock with 1-Year Service Support',
    applications: ['Heavy warehouse packing', 'Workshop strapping stations', 'Outdoors loading bays'],
    specs: [
      { label: 'Tensioning Force', value: 'Up to 2800 N' },
      { label: 'Sealing Method', value: 'Friction Heat Weld / Steel Clip Crimp' },
      { label: 'Warranty', value: '12 Months Mechanical Warranty' }
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Packaging Supplies' },
  { id: 'stretch-film', label: 'Stretch Films & Wraps' },
  { id: 'tapes', label: 'BOPP & Packing Tapes' },
  { id: 'strapping', label: 'PET Straps & Clips' },
  { id: 'cushioning', label: 'Air Bubble & EPE Foam' },
  { id: 'boxes', label: 'Corrugated Cartons' },
  { id: 'protection', label: 'Surface Protection' },
  { id: 'tools', label: 'Packaging Tools' },
] as const;
