import React, { useState, useMemo } from 'react';
import { COMPANY_INFO } from '../data/companyInfo';
import { Calculator, MessageSquare, ArrowRight, CheckCircle2, Truck } from 'lucide-react';

interface BulkQuoteCalculatorProps {
  onAddToRFQCart: (item: {
    title: string;
    specs: string;
    quantity: number;
    unit: string;
    estimatedCost: number;
  }) => void;
}

export const BulkQuoteCalculator: React.FC<BulkQuoteCalculatorProps> = ({ onAddToRFQCart }) => {
  const [materialType, setMaterialType] = useState<'stretch' | 'bopp' | 'pet' | 'bubble' | 'boxes'>('stretch');
  const [gaugeMicron, setGaugeMicron] = useState<string>('23');
  const [quantity, setQuantity] = useState<number>(50);
  const [destination, setDestination] = useState<string>('bhiwadi');
  const [copiedNotice, setCopiedNotice] = useState<boolean>(false);

  // Dynamic estimate calculations based on industrial benchmarks
  const calculation = useMemo(() => {
    let unitName = 'Rolls';
    let baseRatePerUnit = 0;
    let weightPerUnit = 0;
    let specsSummary = '';

    switch (materialType) {
      case 'stretch':
        unitName = 'Rolls (500mm width)';
        const m = parseInt(gaugeMicron) || 23;
        weightPerUnit = 2.8;
        baseRatePerUnit = Math.round(135 * weightPerUnit);
        if (m > 25) baseRatePerUnit += 40;
        specsSummary = `500mm Manual Stretch Film, ${gaugeMicron} Micron, ~${weightPerUnit}kg net/roll`;
        break;

      case 'bopp':
        unitName = 'Rolls (48mm x 65m)';
        weightPerUnit = 0.22;
        baseRatePerUnit = 38;
        specsSummary = `48mm x 65m BOPP Adhesive Tape, ${gaugeMicron} Micron Acrylic Emulsion`;
        break;

      case 'pet':
        unitName = 'Coils (20 kg net)';
        weightPerUnit = 20;
        baseRatePerUnit = 2600;
        specsSummary = `15mm x 0.8mm PET Strapping Band, 20kg Coil, 950 kgf Break Strength`;
        break;

      case 'bubble':
        unitName = 'Rolls (1m x 100m)';
        weightPerUnit = 5.5;
        baseRatePerUnit = 850;
        specsSummary = `1.0m x 100m Air Bubble Roll, 10mm Bubble Diameter, Virgin LDPE`;
        break;

      case 'boxes':
        unitName = 'Boxes (Master Cartons)';
        weightPerUnit = 0.85;
        baseRatePerUnit = 42;
        specsSummary = `5-Ply Heavy Industrial Corrugated Shipping Box (Standard 18"x12"x12")`;
        break;
    }

    const subtotal = baseRatePerUnit * quantity;
    const gst = Math.round(subtotal * 0.18);
    const totalWithGst = subtotal + gst;
    const totalWeightKg = Math.round(weightPerUnit * quantity);

    let deliveryNote = 'Free factory delivery within Bhiwadi cluster';
    if (destination === 'khushkhera' || destination === 'tapukara') {
      deliveryNote = 'Same-day direct dispatch (Free on full truckload)';
    } else if (destination === 'neemrana' || destination === 'bawal') {
      deliveryNote = 'Next-morning scheduled freight dispatch';
    } else if (destination === 'ncr') {
      deliveryNote = 'Daily Delhi NCR courier & logistics route';
    }

    return {
      unitName,
      baseRatePerUnit,
      weightPerUnit,
      specsSummary,
      subtotal,
      gst,
      totalWithGst,
      totalWeightKg,
      deliveryNote,
    };
  }, [materialType, gaugeMicron, quantity, destination]);

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `*Wholesale Packaging RFQ - Aggarwal Trade Link*\n` +
      `----------------------------------------\n` +
      `Product: ${calculation.specsSummary}\n` +
      `Quantity: ${quantity} ${calculation.unitName}\n` +
      `Est. Consignment Weight: ~${calculation.totalWeightKg} kg\n` +
      `Delivery Location: ${destination.toUpperCase()} Cluster\n` +
      `Estimated Subtotal: ₹${calculation.subtotal.toLocaleString('en-IN')} (+ 18% GST)\n` +
      `----------------------------------------\n` +
      `Please provide formal company quotation with GST tax invoice.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleAddToCart = () => {
    onAddToRFQCart({
      title: calculation.specsSummary,
      specs: `${quantity} ${calculation.unitName} · Delivery to ${destination.toUpperCase()}`,
      quantity: quantity,
      unit: calculation.unitName,
      estimatedCost: calculation.totalWithGst,
    });
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 3000);
  };

  return (
    <section id="calculator" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Factory Procurement Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Interactive Bulk Packaging Cost & Weight Estimator
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            For plant managers and purchase officers in Bhiwadi, Khushkhera, Neemrana, and NCR. Configure your specifications to instantly simulate wholesale weights, volume, and quotation values.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Controls */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            
            {/* Step 1: Select Packaging Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                1. Select Material Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'stretch', label: 'LLDPE Stretch Film' },
                  { id: 'bopp', label: 'BOPP Packing Tape' },
                  { id: 'pet', label: 'PET Strapping Band' },
                  { id: 'bubble', label: 'Air Bubble Roll' },
                  { id: 'boxes', label: 'Corrugated Cartons' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setMaterialType(item.id as any);
                      if (item.id === 'stretch') setGaugeMicron('23');
                      if (item.id === 'bopp') setGaugeMicron('45');
                    }}
                    className={`p-3 text-xs font-semibold rounded-xl text-left transition-colors border ${
                      materialType === item.id
                        ? 'bg-sky-600 border-sky-600 text-white shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Specific Formulation / Micron */}
            {(materialType === 'stretch' || materialType === 'bopp') && (
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  2. Select Thickness / Micron Gauge
                </label>
                <div className="flex flex-wrap gap-2">
                  {materialType === 'stretch' ? (
                    ['17', '23', '29', '35', '50'].map((mic) => (
                      <button
                        key={mic}
                        type="button"
                        onClick={() => setGaugeMicron(mic)}
                        className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors border ${
                          gaugeMicron === mic
                            ? 'bg-sky-600 text-white font-bold border-sky-600 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {mic} Micron
                      </button>
                    ))
                  ) : (
                    ['38', '40', '42', '45', '50'].map((mic) => (
                      <button
                        key={mic}
                        type="button"
                        onClick={() => setGaugeMicron(mic)}
                        className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors border ${
                          gaugeMicron === mic
                            ? 'bg-sky-600 text-white font-bold border-sky-600 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {mic} Micron
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Quantity */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  3. Batch Quantity: <span className="font-mono text-sky-700">{quantity}</span> {calculation.unitName}
                </label>
                <span className="text-xs text-slate-500 font-mono font-medium">
                  ~{calculation.totalWeightKg} kg total
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">Quick batch preset:</span>
                {[20, 50, 100, 250, 500].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setQuantity(preset)}
                    className="px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[11px] font-mono font-medium text-slate-700"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Factory Destination */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                4. Select Plant / Delivery Zone
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-sky-500 shadow-xs"
              >
                <option value="bhiwadi">Bhiwadi Industrial Area (Phases I - IV) - Express 2h Delivery</option>
                <option value="khushkhera">Khushkhera Industrial Cluster - Same Day</option>
                <option value="tapukara">Tapukara Industrial Area - Same Day</option>
                <option value="chopanki">Chopanki Industrial Area - Express</option>
                <option value="neemrana">Neemrana / Japanese Zone - Next Morning</option>
                <option value="bawal">Bawal / Rewari Industrial Area - Next Morning</option>
                <option value="ncr">Gurugram / Manesar / Delhi NCR - Regular Fleet</option>
              </select>
            </div>

          </div>

          {/* Right: Dynamic Quotation Slip */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-6 shadow-md">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-sky-600" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                  Simulated Wholesale Slip
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded font-semibold">
                Live Wholesale Pricing
              </span>
            </div>

            {/* Configured Item Details */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-xs">
                <span className="text-slate-500 text-[11px] block font-medium">Selected Formulation:</span>
                <p className="font-bold text-slate-900 text-sm">
                  {calculation.specsSummary}
                </p>
                <div className="flex justify-between items-center pt-2 border-t border-slate-100 text-slate-600">
                  <span>Batch Volume:</span>
                  <span className="font-mono text-slate-900 font-bold">{quantity} {calculation.unitName}</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span>Gross Weight:</span>
                  <span className="font-mono text-slate-900 font-bold">~{calculation.totalWeightKg} kg</span>
                </div>
              </div>

              {/* Delivery info */}
              <div className="flex items-center gap-2 text-xs text-sky-800 bg-sky-50 border border-sky-200 p-3 rounded-xl font-medium">
                <Truck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{calculation.deliveryNote}</span>
              </div>

              {/* Price Breakdown */}
              <div className="pt-3 space-y-2 text-xs border-t border-slate-200">
                <div className="flex justify-between text-slate-600">
                  <span>Estimated Unit Rate:</span>
                  <span className="font-mono font-semibold text-slate-800">₹{calculation.baseRatePerUnit.toLocaleString('en-IN')} / unit</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Taxable Subtotal:</span>
                  <span className="font-mono font-semibold text-slate-800">₹{calculation.subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>GST (18% Input Credit):</span>
                  <span className="font-mono font-semibold text-slate-800">₹{calculation.gst.toLocaleString('en-IN')}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-slate-900">Estimated Total:</span>
                  <span className="text-2xl font-bold font-mono text-sky-700 tabular-nums">
                    ₹{calculation.totalWithGst.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500">
                  *Indicative wholesale pricing for planning. Final GST tax invoice issued based on daily polymer index.
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Lock Rates via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                {copiedNotice ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Added to RFQ Cart!</span>
                  </>
                ) : (
                  <>
                    <span>Add Estimate to RFQ List</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
