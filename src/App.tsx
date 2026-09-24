/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Product } from './data/products';
import { COMPANY_INFO } from './data/companyInfo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BulkQuoteCalculator } from './components/BulkQuoteCalculator';
import { ClientIndustries } from './components/ClientIndustries';
import { QualityStandards } from './components/QualityStandards';
import { Testimonials } from './components/Testimonials';
import { LocationContact } from './components/LocationContact';
import { QuoteDrawer, QuoteItem } from './components/QuoteDrawer';
import { Footer } from './components/Footer';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([
    {
      id: 'manual-stretch-film',
      name: 'LLDPE Manual Stretch Film Roll',
      categoryLabel: 'Stretch Film & Wrap',
      micron: '23 Micron',
      quantity: 25,
      specsSummary: '500mm width, 100% Virgin LLDPE, 2" Core',
    },
    {
      id: 'bopp-transparent-tape',
      name: 'BOPP Self-Adhesive Packing Tape',
      categoryLabel: 'Adhesive Tapes',
      micron: '45 Micron',
      quantity: 72,
      specsSummary: '48mm x 65m, Acrylic Adhesive Coating',
    }
  ]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToQuote = (product: Product, quantity = 10) => {
    setQuoteItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          categoryLabel: product.categoryLabel,
          micron: product.micron,
          quantity: quantity,
          specsSummary: `MOQ: ${product.moq} · ${product.material}`,
        },
      ];
    });
    setIsQuoteDrawerOpen(true);
  };

  const handleAddCalculatedItemToQuote = (item: {
    title: string;
    specs: string;
    quantity: number;
    unit: string;
    estimatedCost: number;
  }) => {
    setQuoteItems((prev) => [
      ...prev,
      {
        id: `calc-${Date.now()}`,
        name: item.title,
        categoryLabel: 'Custom Batch',
        micron: 'Configured',
        quantity: item.quantity,
        specsSummary: item.specs,
        estimatedCost: item.estimatedCost,
      },
    ]);
    setIsQuoteDrawerOpen(true);
  };

  const handleRemoveQuoteItem = (id: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQuoteQuantity = (id: string, qty: number) => {
    setQuoteItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const isInQuote = (productId: string) => {
    return quoteItems.some((item) => item.id === productId);
  };

  const scrollToLocationForm = () => {
    const el = document.getElementById('location');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Strict Top Bar Contract with Clean Light Styling */}
      <Navbar
        quoteCount={quoteItems.length}
        onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
        onOpenQuickRFQ={scrollToLocationForm}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Clean Light Warehouse Visual */}
        <Hero onOpenQuickRFQ={scrollToLocationForm} />

        {/* Quantified Adjacency Proof Metrics */}
        <StatsBar />

        {/* Complete Product Catalog with Clean Studio Product Cards */}
        <ProductCatalog
          onSelectProduct={handleSelectProduct}
          onAddToQuote={handleAddToQuote}
          isInQuote={isInQuote}
          onOpenCalculator={() => {
            const el = document.getElementById('calculator');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Interactive Bulk Packaging Cost & Weight Calculator */}
        <BulkQuoteCalculator onAddToRFQCart={handleAddCalculatedItemToQuote} />

        {/* Specialized Solutions for Manufacturing Sectors */}
        <ClientIndustries />

        {/* Quality Testing Benchmarks & ASTM Compliance */}
        <QualityStandards />

        {/* Attributable Reviews from Bhiwadi Industrial Cluster */}
        <Testimonials />

        {/* Depot Location on Google Maps & Direct Lead RFQ Form */}
        <LocationContact />
      </main>

      {/* Clean Light Footer */}
      <Footer />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToQuote={handleAddToQuote}
          isInQuote={isInQuote(selectedProduct.id)}
        />
      )}

      {/* RFQ Cart Slide-over Drawer */}
      <QuoteDrawer
        isOpen={isQuoteDrawerOpen}
        onClose={() => setIsQuoteDrawerOpen(false)}
        items={quoteItems}
        onRemoveItem={handleRemoveQuoteItem}
        onUpdateQuantity={handleUpdateQuoteQuantity}
        onClearQuote={handleClearQuote}
      />

      {/* Floating Speed Actions for Mobile & Quick Desktop Sourcing */}
      <aside aria-label="Quick contact" className="fixed bottom-4 right-4 z-30 flex items-center gap-2">
        <a
          href={COMPANY_INFO.whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
          title="Direct WhatsApp Chat"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold pl-0 group-hover:pl-2">
            WhatsApp Depot
          </span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="p-3 bg-sky-600 hover:bg-sky-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
          title="Direct Phone Call"
        >
          <Phone className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold pl-0 group-hover:pl-2">
            Call Warehouse
          </span>
        </a>
      </aside>
    </div>
  );
}
