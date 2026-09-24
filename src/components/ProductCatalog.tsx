import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES, Product } from '../data/products';
import { ProductVisual } from './ProductVisual';
import { Search, Plus, Check, FileText, ArrowRight } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  isInQuote: (productId: string) => boolean;
  onOpenCalculator: (productCategory: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToQuote,
  isInQuote,
  onOpenCalculator,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.tagline.toLowerCase().includes(query) ||
        product.micron.toLowerCase().includes(query) ||
        product.material.toLowerCase().includes(query) ||
        product.applications.some((app) => app.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-200">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Complete Industrial Inventory
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Packaging Supplies & Technical Specifications
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Procure direct from Bhiwadi's verified packaging supplier. Available in standard factory sizes or precision custom slitting with zero delay.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search micron, tape, strap..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-colors shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 font-medium"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors shrink-0 ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3 shadow-xs">
            <p className="text-base text-slate-800 font-semibold">
              No packaging materials match "{searchQuery}"
            </p>
            <p className="text-xs text-slate-500">
              Try searching for stretch film, BOPP tape, PET strap, or bubble rolls.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 text-xs font-semibold text-sky-700 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const inQuote = isInQuote(product.id);

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xs"
                >
                  <div>
                    {/* Visual Graphic */}
                    <div className="cursor-pointer" onClick={() => onSelectProduct(product)}>
                      <ProductVisual
                        category={product.category}
                        id={product.id}
                        name={product.name}
                      />
                    </div>

                    {/* Card Content Area */}
                    <div className="p-5 space-y-4">
                      {/* Clean Unboxed Metadata Line (NO PILLS) */}
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <span className="text-sky-700 font-bold">{product.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{product.leadTime}</span>
                        <span aria-hidden="true">·</span>
                        <span>MOQ: {product.moq}</span>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3
                          onClick={() => onSelectProduct(product)}
                          className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors cursor-pointer"
                        >
                          {product.name}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Technical Specs Key Values */}
                      <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">Gauge / Micron:</span>
                          <span className="font-mono text-slate-900 font-semibold">{product.micron}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">Material Grade:</span>
                          <span className="truncate max-w-[180px] text-right font-medium text-slate-800">{product.material}</span>
                        </div>
                      </div>

                      {/* Application Tags - Clean Unboxed */}
                      <div className="pt-2 text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-600">Applications: </span>
                        {product.applications.slice(0, 3).join(' · ')}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 pt-0 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 py-2.5 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-500" />
                      <span>Full Specs</span>
                    </button>

                    <button
                      onClick={() => onAddToQuote(product)}
                      className={`flex-1 py-2.5 px-3 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
                        inQuote
                          ? 'bg-emerald-600 text-white'
                          : 'bg-sky-600 text-white hover:bg-sky-700 shadow-xs'
                      }`}
                    >
                      {inQuote ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In RFQ Cart</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to RFQ</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Custom Sizing Callout in Light Theme */}
        <div className="mt-12 bg-white rounded-2xl border border-sky-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-lg font-bold text-slate-900">
              Need Custom Slit Widths or Special Micron Formulations?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Aggarwal Trade Link provides precision slitting for stretch films from 50mm up to 1000mm, printed branded BOPP tapes, and custom die-cut EPE foam cushions.
            </p>
          </div>

          <button
            onClick={() => onOpenCalculator('stretch-film')}
            className="px-5 py-3 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 shadow-xs"
          >
            <span>Launch Cost Estimator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
