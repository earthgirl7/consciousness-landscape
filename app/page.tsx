'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import SpectrumView from '@/components/SpectrumView';
import TensionsView from '@/components/TensionsView';
import AgreementsView from '@/components/AgreementsView';
import PredictionsView from '@/components/PredictionsView';

type View = 'spectrum' | 'tensions' | 'agreements' | 'predictions';

export default function Home() {
  const [activeView, setActiveView] = useState<View>('spectrum');

  return (
    <main className="min-h-screen pb-20">
      <Header />
      <Navigation activeView={activeView} onViewChange={setActiveView} />

      {/* Content area */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mt-12">
        <div className="neural-card rounded-2xl p-8 md:p-12 min-h-[600px]">
          <h2 className="font-serif text-4xl md:text-5xl text-parchment mb-4">
            {activeView === 'spectrum' && 'The Theoretical Spectrum'}
            {activeView === 'tensions' && 'Fundamental Tensions'}
            {activeView === 'agreements' && 'Points of Convergence'}
            {activeView === 'predictions' && 'Empirical Predictions'}
          </h2>

          <p className="text-parchment/70 text-lg mb-8">
            {activeView === 'spectrum' && 'From purely physical to purely mental ontologies'}
            {activeView === 'tensions' && 'Where theories fundamentally disagree'}
            {activeView === 'agreements' && 'Where theories find common ground despite differences'}
            {activeView === 'predictions' && 'Current status of testable predictions and novel hypotheses'}
          </p>

          {/* Views */}
          {activeView === 'spectrum' && <SpectrumView />}
          {activeView === 'tensions' && <TensionsView />}
          {activeView === 'agreements' && <AgreementsView />}
          {activeView === 'predictions' && <PredictionsView />}
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 md:px-12 max-w-7xl mx-auto mt-16">
        <div className="neural-card rounded-2xl p-8 text-center">
          <h3 className="font-serif text-2xl text-parchment mb-4">Research Foundation</h3>
          <p className="text-parchment/70 text-sm leading-relaxed max-w-3xl mx-auto">
            <strong>Primary source:</strong> Robert Lawrence Kuhn (2024). "A landscape of consciousness: Toward a taxonomy of explanations and implications." <em>Progress in Biophysics and Molecular Biology</em>, Vol. 190, pp. 28–169.
          </p>
        </div>
      </footer>
    </main>
  );
}
