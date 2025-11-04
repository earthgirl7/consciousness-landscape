'use client';

import { useState } from 'react';

type View = 'spectrum' | 'tensions' | 'agreements' | 'predictions';

interface NavigationProps {
  activeView: View;
  onViewChange: (view: View) => void;
}

export default function Navigation({ activeView, onViewChange }: NavigationProps) {
  const views = [
    { id: 'spectrum' as View, label: 'Spectrum', symbol: '◈' },
    { id: 'tensions' as View, label: 'Tensions', symbol: '⋈' },
    { id: 'agreements' as View, label: 'Agreements', symbol: '◇' },
    { id: 'predictions' as View, label: 'Predictions', symbol: '◆' },
  ];

  return (
    <nav className="px-6 md:px-12 py-6 max-w-7xl mx-auto">
      <div className="neural-card rounded-2xl p-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => onViewChange(view.id)}
              className={`
                relative px-6 py-4 rounded-xl font-mono text-sm uppercase tracking-widest
                transition-all duration-300
                ${
                  activeView === view.id
                    ? 'bg-neural-gold/20 text-neural-gold border border-neural-gold/40'
                    : 'text-parchment/60 hover:text-parchment/90 hover:bg-cosmos-nebula'
                }
              `}
            >
              <span className="mr-2 text-base">{view.symbol}</span>
              {view.label}

              {/* Active indicator */}
              {activeView === view.id && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-neural-gold rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
