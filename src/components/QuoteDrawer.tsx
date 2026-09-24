import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyInfo';
import { X, Trash2, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export interface QuoteItem {
  id: string;
  name: string;
  categoryLabel: string;
  micron: string;
  quantity: number;
  specsSummary?: string;
  estimatedCost?: number;
}

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, qty: number) => void;
  onClearQuote: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
  onClearQuote,
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('Bhiwadi Industrial Area');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSendViaWhatsApp = () => {
    if (items.length === 0) return;

    let itemsText = items
      .map(
        (it, idx) =>
          `${idx + 1}. *${it.name}* (${it.micron})\n   Qty: ${it.quantity} units ${
            it.specsSummary ? `· ${it.specsSummary}` : ''
          }`
      )
      .join('\n\n');

    const message = encodeURIComponent(
      `*Wholesale RFQ Inquiry - Aggarwal Trade Link*\n` +
      `----------------------------------------\n` +
      `Company: ${companyName || 'Factory Purchase Inquiry'}\n` +
      `Contact: ${contactName || 'Procurement Officer'}\n` +
      `Phone: ${phone || 'Available on WhatsApp'}\n` +
      `Delivery Location: ${deliveryLocation}\n` +
      `----------------------------------------\n` +
      `*Requested Items:*\n${itemsText}\n` +
      `----------------------------------------\n` +
      `Please confirm stock readiness and send commercial quotation with tax invoice.`
    );

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-slate-200 text-slate-900 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-sky-700 font-bold">B2B Quotation Cart</span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Bulk RFQ Requisition ({items.length} {items.length === 1 ? 'Item' : 'Items'})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-mono text-sm font-bold">
                  0
                </div>
                <p className="text-base text-slate-800 font-semibold">Your RFQ cart is empty</p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Browse our catalog and click "Add to RFQ" on stretch films, BOPP tapes, or PET strapping to assemble a bulk quotation.
                </p>
              </div>
            ) : isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Requisition Transmitted!</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We have logged your quotation request for <span className="text-slate-900 font-bold">{companyName || 'your factory'}</span>. Our dispatch executive will call <span className="font-mono text-sky-700 font-bold">{phone}</span> with the rate sheet.
                </p>
                <button
                  onClick={handleSendViaWhatsApp}
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Forward to WhatsApp for Immediate Rates</span>
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClearQuote();
                    onClose();
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Clear and Close Drawer
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start justify-between gap-3 text-xs"
                    >
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2 text-sky-700 font-semibold">
                          <span>{item.categoryLabel}</span>
                          <span aria-hidden="true" className="text-slate-300">·</span>
                          <span className="font-mono text-slate-700">{item.micron}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">
                          {item.name}
                        </h4>
                        {item.specsSummary && (
                          <p className="text-[11px] text-slate-500 font-mono">
                            {item.specsSummary}
                          </p>
                        )}
                        <div className="flex items-center gap-3 pt-2">
                          <span className="text-slate-500 font-medium">Batch Qty:</span>
                          <div className="flex items-center bg-white border border-slate-300 rounded-md shadow-2xs">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 5))}
                              className="px-2 py-0.5 text-slate-600 hover:text-slate-900 font-bold"
                            >
                              -
                            </button>
                            <span className="px-2 text-xs font-mono font-bold text-slate-900">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 5)}
                              className="px-2 py-0.5 text-slate-600 hover:text-slate-900 font-bold"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Company Contact Form for this RFQ */}
                <form id="rfq-drawer-form" onSubmit={handleSubmit} className="space-y-3 pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Factory & Contact Information
                  </span>

                  <div>
                    <label className="text-[11px] text-slate-600 font-medium block mb-1">Company / Factory Name *</label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Bhiwadi Precision Stampings"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-slate-600 font-medium block mb-1">Contact Person *</label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Mr. Sharma"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-600 font-medium block mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="98123 45678"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-mono shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-600 font-medium block mb-1">Factory Location</label>
                    <select
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-sky-500 shadow-xs"
                    >
                      <option value="Bhiwadi Industrial Area">Bhiwadi Industrial Area (Express)</option>
                      <option value="Khushkhera Industrial Area">Khushkhera Industrial Area</option>
                      <option value="Tapukara Industrial Area">Tapukara Industrial Area</option>
                      <option value="Chopanki Industrial Area">Chopanki Industrial Area</option>
                      <option value="Neemrana / Japanese Zone">Neemrana / Japanese Zone</option>
                      <option value="Bawal / Rewari">Bawal / Rewari</option>
                      <option value="Gurugram / Manesar">Gurugram / Manesar</option>
                    </select>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && !isSubmitted && (
            <div className="p-6 border-t border-slate-200 bg-white space-y-2.5">
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp with 1-Click</span>
              </button>

              <button
                type="submit"
                form="rfq-drawer-form"
                className="w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Requisition to Depot</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
