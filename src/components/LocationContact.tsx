import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyInfo';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

export const LocationContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    material: 'LLDPE Stretch Film',
    monthlyVolume: '50-100 Rolls',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.phone.trim() || !formData.company.trim()) {
      setErrorMsg('Please fill in your name, company name, and phone number.');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please provide a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleForwardToWhatsApp = () => {
    const text = encodeURIComponent(
      `*New Factory RFQ - Aggarwal Trade Link*\n` +
      `----------------------------------------\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || 'N/A'}\n` +
      `Required Material: ${formData.material}\n` +
      `Estimated Volume: ${formData.monthlyVolume}\n` +
      `Specific Specs: ${formData.notes || 'Standard specifications'}\n` +
      `----------------------------------------\n` +
      `Please provide formal rates with GST invoice.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="location" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Physical Depot & Direct Sourcing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Our Bhiwadi Warehouse or Request Immediate Dispatch
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Located strategically in Bhiwadi next to Gaurav Path and UIT. Drop by for sample inspection or submit your company requirement below for instant rate confirmation.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Warehouse Details & Google Maps */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Information Card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-5 shadow-xs">
              
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono uppercase text-sky-700 font-bold">Central Distribution Depot</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Proprietor: <span className="text-slate-800 font-medium">{COMPANY_INFO.proprietor}</span> · Est. {COMPANY_INFO.establishedYear}
                </p>
              </div>

              {/* Address with icon */}
              <div className="flex items-start gap-3 text-xs">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-slate-700">
                  <p className="font-bold text-slate-900">{COMPANY_INFO.address.line1}</p>
                  <p>{COMPANY_INFO.address.line2}</p>
                  <p className="text-slate-600">
                    {COMPANY_INFO.address.landmark}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}
                  </p>
                  <p className="text-[11px] text-sky-700 font-mono mt-1 font-semibold">
                    Coverage: {COMPANY_INFO.address.industrialCluster}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3 text-xs">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-slate-700">
                  <p className="font-bold text-slate-900">Depot Dispatch Timings</p>
                  <p>{COMPANY_INFO.operatingHours.days}: <span className="font-mono text-slate-900 font-semibold">{COMPANY_INFO.operatingHours.hours}</span></p>
                  <p className="text-slate-500 text-[11px]">{COMPANY_INFO.operatingHours.sunday}</p>
                </div>
              </div>

              {/* Direct Calling & Contact lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="p-3 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center gap-2.5 text-xs text-slate-800 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Primary Direct Line</span>
                    <span className="font-mono font-bold text-slate-900">{COMPANY_INFO.phoneFormatted}</span>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.secondaryPhone}`}
                  className="p-3 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center gap-2.5 text-xs text-slate-800 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Alternative Depot Line</span>
                    <span className="font-mono font-bold text-slate-900">{COMPANY_INFO.secondaryPhoneFormatted}</span>
                  </div>
                </a>
              </div>

              {/* GST Identification */}
              <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-xs text-slate-600">
                <span>GSTIN (Input Tax Credit):</span>
                <span className="font-mono font-bold text-slate-900">{COMPANY_INFO.gstin}</span>
              </div>

            </div>

            {/* Interactive Map Visual & Direct Navigation Link */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-bold text-slate-900">Google Maps Location</span>
                </div>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sky-700 hover:text-sky-800 font-semibold flex items-center gap-1"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Clear Natural Google Map Embed */}
              <div className="relative w-full h-64 sm:h-72 bg-slate-100">
                <iframe
                  title="Aggarwal Trade Link Location on Google Maps"
                  src={`https://maps.google.com/maps?q=${COMPANY_INFO.embedCoordinates.lat},${COMPANY_INFO.embedCoordinates.lng}&t=m&z=15&output=embed&iwloc=near`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating GPS badge in light mode */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1.5 rounded-lg text-[11px] font-mono text-slate-800 shadow-md font-semibold">
                  📍 {COMPANY_INFO.embedCoordinates.lat.toFixed(5)}°N, {COMPANY_INFO.embedCoordinates.lng.toFixed(5)}°E
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Lead / RFQ Capture Form */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            
            <div className="border-b border-slate-200 pb-4">
              <div className="text-xs font-mono uppercase text-sky-700 font-bold">Quick Factory RFQ</div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Request Formal Company Quotation
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Receive our latest wholesale rate sheet with GST breakdown within 15 minutes during operating hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-10 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-slate-900">
                    RFQ Received Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="text-slate-900 font-bold">{formData.name}</span> ({formData.company}). Mr. Ashutosh Mittal or our dispatch coordinator will call you at <span className="font-mono text-sky-700 font-bold">{formData.phone}</span> shortly.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleForwardToWhatsApp}
                    className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send directly on WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        phone: '',
                        email: '',
                        material: 'LLDPE Stretch Film',
                        monthlyVolume: '50-100 Rolls',
                        notes: '',
                      });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-medium transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Company / Factory Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Haryana Auto Components Ltd"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Phone Number (Mobile) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98123 45678"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-mono shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="purchase@factory.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Packaging Item Needed
                    </label>
                    <select
                      value={formData.material}
                      onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-sky-500 shadow-xs"
                    >
                      <option value="LLDPE Manual Stretch Film">LLDPE Manual Stretch Film</option>
                      <option value="Machine Power Pre-Stretch Film">Machine Power Pre-Stretch Film</option>
                      <option value="BOPP Sealing Tapes (Clear/Brown)">BOPP Sealing Tapes (Clear/Brown)</option>
                      <option value="Custom Logo Printed BOPP Tape">Custom Logo Printed BOPP Tape</option>
                      <option value="PET Strapping Band & Metal Clips">PET Strapping Band & Metal Clips</option>
                      <option value="Air Bubble Cushioning Rolls">Air Bubble Cushioning Rolls</option>
                      <option value="EPE Foam Rolls & Corner Guards">EPE Foam Rolls & Corner Guards</option>
                      <option value="Corrugated Cartons (3/5/7-Ply)">Corrugated Cartons (3/5/7-Ply)</option>
                      <option value="Surface Protection Masking Film">Surface Protection Masking Film</option>
                      <option value="Complete Annual Packaging Contract">Complete Annual Packaging Contract</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Estimated Monthly Volume
                    </label>
                    <select
                      value={formData.monthlyVolume}
                      onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-sky-500 shadow-xs"
                    >
                      <option value="Trial Batch (10-25 Units)">Trial Batch (10-25 Units)</option>
                      <option value="50 - 200 Rolls / Month">50 - 200 Rolls / Month</option>
                      <option value="200 - 500 Rolls / Month">200 - 500 Rolls / Month</option>
                      <option value="500+ Rolls / Jumbo Pallets">500+ Rolls / Full Truckload (FTL)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Specific Size, Micron, or Delivery Instructions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Need 23 micron 500mm stretch film with 2-inch core for Bhiwadi Phase 2 plant..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 resize-none shadow-xs"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-70 shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting RFQ...' : 'Submit Official RFQ'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleForwardToWhatsApp}
                    className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
