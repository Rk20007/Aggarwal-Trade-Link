import React, { useState } from 'react';
import { Product } from '../data/products';
import { COMPANY_INFO } from '../data/companyInfo';
import { ProductVisual } from './ProductVisual';
import { X, Check, ShoppingCart, MessageSquare, ShieldCheck } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product, quantity?: number) => void;
  isInQuote: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToQuote,
  isInQuote,
}) => {
  const [quantity, setQuantity] = useState<number>(10);

  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Aggarwal Trade Link, I need a quotation for ${quantity} units of *${product.name}* (Category: ${product.categoryLabel}, Spec: ${product.micron}). Please share wholesale rates for delivery to our factory in Bhiwadi/NCR.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div className="relative bg-white border border-slate-200 rounded-2xl max-w-2xl w-full text-slate-900 shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-500 hover:text-slate-900 bg-white/90 rounded-xl hover:bg-slate-100 transition-colors shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Graphic Header */}
        <div className="relative">
          <ProductVisual
            category={product.category}
            id={product.id}
            name={product.name}
            className="h-44 sm:h-52"
          />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2 text-xs text-sky-700 font-bold mb-1">
              <span>{product.categoryLabel}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>MOQ: {product.moq}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{product.leadTime}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {product.name}
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-2">
              Engineering Specs & Tolerances
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="text-slate-500">Gauge / Micron:</span>
                <p className="font-mono font-bold text-slate-900">{product.micron}</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-500">Raw Material:</span>
                <p className="font-medium text-slate-800">{product.material}</p>
              </div>
              {product.specs.map((spec, i) => (
                <div key={i} className="space-y-0.5">
                  <span className="text-slate-500">{spec.label}:</span>
                  <p className="font-mono text-slate-800">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Standard Sizes Available */}
          <div>
            <h5 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
              Standard Available Sizes
            </h5>
            <div className="flex flex-wrap gap-2 text-xs">
              {product.standardSizes.map((size, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md font-mono text-slate-800 font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Target Industrial Applications */}
          <div>
            <h5 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">
              Factory Applications
            </h5>
            <div className="flex items-center gap-3 text-xs text-slate-700 flex-wrap">
              {product.applications.map((app, idx) => (
                <span key={idx} className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  <span>{app}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Quantity Selector & Action Strip */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Quantity Counter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Inquiry Qty:</span>
              <div className="flex items-center bg-slate-100 border border-slate-300 rounded-lg">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 5))}
                  className="px-3 py-1.5 text-xs text-slate-700 hover:text-slate-900 hover:bg-slate-200 rounded-l-lg font-bold"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-14 text-center bg-transparent text-xs font-mono font-bold text-slate-900 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 5)}
                  className="px-3 py-1.5 text-xs text-slate-700 hover:text-slate-900 hover:bg-slate-200 rounded-r-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Quote</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onAddToQuote(product, quantity);
                  onClose();
                }}
                className={`py-2.5 px-4 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
                  isInQuote
                    ? 'bg-sky-50 text-sky-700 border border-sky-200'
                    : 'bg-sky-600 text-white hover:bg-sky-700 shadow-xs'
                }`}
              >
                {isInQuote ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>In RFQ Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Add to RFQ Cart</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
