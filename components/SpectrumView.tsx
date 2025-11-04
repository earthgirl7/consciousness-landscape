'use client';

import { useState } from 'react';
import { categories, type Category, type CategoryId } from '@/lib/data';

export default function SpectrumView() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <div>
      {/* Spectrum bar - constellation style */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            className="neural-node group relative flex-1 min-w-[120px] py-8 px-4 rounded-xl transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(180deg, ${category.color}20 0%, ${category.color}10 100%)`,
              borderLeft: `3px solid ${category.color}`,
            }}
          >
            <div className="text-center">
              <div
                className="font-serif text-lg mb-2 font-semibold"
                style={{ color: category.color }}
              >
                {category.name.replace(' Theories', '').replace(' Theory', '')}
              </div>
              <div className="text-xs text-parchment/50 font-mono">{category.count}</div>
            </div>

            {/* Glow effect on hover */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              style={{
                background: `radial-gradient(circle at center, ${category.color}30 0%, transparent 70%)`,
                filter: 'blur(20px)',
              }}
            />
          </button>
        ))}
      </div>

      {/* Spectrum labels */}
      <div className="flex justify-between mb-12 text-sm text-parchment/50 font-mono">
        <span>← Pure Physical ⬢</span>
        <span>⬡ Pure Mental →</span>
      </div>

      {/* Category details */}
      {selectedCategory && (
        <div
          className="neural-card rounded-2xl p-8 animate-in fade-in duration-500"
          style={{ borderLeftColor: selectedCategory.color, borderLeftWidth: '4px' }}
        >
          <h3
            className="font-serif text-3xl mb-4"
            style={{ color: selectedCategory.color }}
          >
            {selectedCategory.name}
          </h3>
          <p className="text-parchment/70 mb-8 leading-relaxed">
            {selectedCategory.description}
          </p>

          <h4 className="text-parchment text-lg font-semibold mb-6">
            Key Theories & Proponents
          </h4>

          <div className="space-y-4">
            {selectedCategory.theories.map((theory, idx) => (
              <div
                key={idx}
                className="bg-cosmos-deep/40 border-l-2 rounded-lg p-6 hover:bg-cosmos-nebula/40 transition-colors duration-300"
                style={{ borderLeftColor: selectedCategory.color }}
              >
                <div
                  className="font-serif text-xl font-semibold mb-2"
                  style={{ color: selectedCategory.color }}
                >
                  {theory.name}
                </div>
                <div className="text-sm text-parchment/60 mb-3 font-mono">
                  <strong>Proponents:</strong> {theory.proponents}
                </div>
                <div className="text-parchment/80 leading-relaxed">
                  <strong>Core claim:</strong> {theory.claim}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!selectedCategory && (
        <div className="text-center py-16 text-parchment/40">
          <div className="text-6xl mb-4">◈</div>
          <p className="font-serif text-xl">Select a category above to explore theories</p>
        </div>
      )}
    </div>
  );
}
