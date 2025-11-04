export default function PredictionsView() {
  const predictions = [
    {
      theory: 'Integrated Information Theory',
      status: 'mixed' as const,
      color: '#f59e0b',
      prediction: 'Posterior cortex "hot zone" has maximum phi during consciousness',
      method: 'Measure integrated information in different brain regions using perturbational complexity index',
      evidence: 'PCI measures support it in some studies; others find consciousness without high posterior phi',
      next: 'Direct phi measurement in awake behaving subjects across all brain regions'
    },
    {
      theory: 'Global Workspace Theory',
      status: 'supported' as const,
      color: '#10b981',
      prediction: 'Conscious perception requires widespread cortical broadcasting',
      method: 'Compare subliminal versus conscious stimuli activation patterns',
      evidence: 'fMRI and EEG studies consistently show "global ignition" for conscious but not subliminal perception',
      next: 'Artificially induce global broadcasting without external stimulus'
    },
    {
      theory: 'Orchestrated Objective Reduction',
      status: 'disputed' as const,
      color: '#f97316',
      prediction: 'Anesthetics work by disrupting quantum coherence in microtubules',
      method: 'Measure quantum coherence in microtubules with and without anesthesia',
      evidence: 'Some anesthetic binding evidence but decoherence time problems remain unsolved',
      next: 'High-precision quantum measurements in living neural tissue'
    },
    {
      theory: 'Predictive Processing',
      status: 'supported' as const,
      color: '#10b981',
      prediction: 'Prediction errors modulate conscious content',
      method: 'Manipulate predictions and measure phenomenology changes',
      evidence: 'Rubber hand illusion, binocular rivalry, bistable perception all show prediction effects',
      next: 'Dissociate prediction from consciousness more cleanly with neural manipulation'
    },
    {
      theory: 'Higher-Order Theory',
      status: 'challenged' as const,
      color: '#ef4444',
      prediction: 'Prefrontal cortex damage eliminates consciousness',
      method: 'Lesion studies and TMS disruption of prefrontal areas',
      evidence: 'Many patients with extensive prefrontal damage retain rich phenomenal consciousness',
      next: 'More precise targeting of specific higher-order representational areas'
    },
    {
      theory: 'Panpsychism',
      status: 'untested' as const,
      color: '#64748b',
      prediction: 'No sharp threshold for consciousness in complexity scale',
      method: 'Search for consciousness markers in progressively simpler systems',
      evidence: 'Mostly philosophical; difficult to operationalize empirically',
      next: 'Develop consciousness measures applicable to very simple systems'
    }
  ];

  const hypotheses = [
    {
      title: 'IIT versus GWT Adversarial Test',
      hypothesis: 'Measure phi and broadcasting simultaneously during binocular rivalry. If high phi without broadcasting then IIT correct. If broadcasting without high phi then GWT correct.',
      method: 'Simultaneous perturbational complexity and EEG phase-locking measures during rivalry transitions',
      impact: 'Would definitively distinguish two leading theories'
    },
    {
      title: 'Panpsychism Boundary Test',
      hypothesis: 'If panpsychism is true, consciousness markers scale continuously without threshold. If emergence is true, there should be a discontinuity.',
      method: 'Measure behavioral flexibility, information integration, and predictive capability from insects to mammals',
      impact: 'Would inform the fundamental versus emergent debate'
    },
    {
      title: 'Quantum Coherence Correlation',
      hypothesis: 'If quantum theories are correct, coherence time in neural microtubules should correlate with conscious state richness.',
      method: 'Use nitrogen-vacancy diamond sensors to measure quantum coherence during waking, dreaming, meditation, and psychedelic states',
      impact: 'Would validate or refute quantum role in consciousness'
    },
    {
      title: 'Embodiment Necessity Test',
      hypothesis: 'Embodied theories predict consciousness quality depends on sensorimotor loops, not just computation.',
      method: 'Compare phenomenology between (a) active sensorimotor engagement, (b) passive observation, (c) brain-computer interface without body movement',
      impact: 'Would clarify role of body versus pure computation'
    },
    {
      title: 'AI Consciousness Marker Discovery',
      hypothesis: 'If multiple theories agree on certain markers (integration, broadcasting, prediction error), systems with ALL markers likely have consciousness.',
      method: 'Build AI systems with varying combinations of proposed markers; test for behavioral indicators of phenomenology',
      impact: 'Would create consensus markers for machine consciousness'
    }
  ];

  const statusStyles = {
    supported: { bg: '#dcfce7', text: '#15803d', border: '#86efac' },
    mixed: { bg: '#fef3c7', text: '#a16207', border: '#fde047' },
    disputed: { bg: '#fed7aa', text: '#c2410c', border: '#fdba74' },
    challenged: { bg: '#fecaca', text: '#b91c1c', border: '#fca5a5' },
    untested: { bg: '#f1f5f9', text: '#475569', border: '#cbd5e1' },
  };

  return (
    <div className="space-y-12">
      {/* Current Predictions */}
      <div className="space-y-6">
        {predictions.map((pred, idx) => (
          <div
            key={idx}
            className="neural-card rounded-2xl p-8 border-l-4"
            style={{ borderLeftColor: pred.color }}
          >
            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <h4 className="font-serif text-2xl" style={{ color: pred.color }}>
                {pred.theory}
              </h4>
              <span
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider font-mono"
                style={{
                  background: statusStyles[pred.status].bg,
                  color: statusStyles[pred.status].text,
                  border: `1px solid ${statusStyles[pred.status].border}`,
                }}
              >
                {pred.status}
              </span>
            </div>

            <p className="text-parchment mb-3">
              <strong>Prediction:</strong> {pred.prediction}
            </p>

            <p className="text-parchment/80 mb-3">
              <strong>Test method:</strong> {pred.method}
            </p>

            <p className="text-parchment/80 mb-6">
              <strong>Current evidence:</strong> {pred.evidence}
            </p>

            <div className="bg-cosmos-deep/60 rounded-lg p-4 border border-neural-gold/30">
              <strong className="text-neural-gold">Next step:</strong>{' '}
              <span className="text-parchment/80">{pred.next}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Novel Hypotheses */}
      <div className="neural-card rounded-2xl p-10 bg-gradient-to-br from-cosmos-deep to-cosmos-nebula">
        <h3 className="font-serif text-3xl text-neural-gold mb-8 text-center">
          Novel Testable Hypotheses
        </h3>

        <div className="space-y-6">
          {hypotheses.map((hyp, idx) => (
            <div
              key={idx}
              className="bg-cosmos-black/60 rounded-xl p-6 border border-neural-gold/20 hover:border-neural-gold/40 transition-colors"
            >
              <h5 className="font-serif text-xl text-neural-gold mb-4">
                {hyp.title}
              </h5>

              <p className="text-parchment/80 mb-3 leading-relaxed">
                <strong>Hypothesis:</strong> {hyp.hypothesis}
              </p>

              <p className="text-parchment/70 mb-4 text-sm">
                <strong>Method:</strong> {hyp.method}
              </p>

              <div className="bg-neural-gold/10 rounded-lg p-4 border-l-2 border-neural-gold">
                <strong className="text-neural-gold">Impact:</strong>{' '}
                <span className="text-parchment/80">{hyp.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
