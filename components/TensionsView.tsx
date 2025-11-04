export default function TensionsView() {
  const tensions = [
    {
      title: 'Eliminativism versus Integrated Information Theory',
      theory1: { name: 'Eliminativism', color: '#3b82f6' },
      theory2: { name: 'IIT', color: '#10b981' },
      centralTension: 'Does phenomenal consciousness even exist?',
      description: 'Eliminativism (Dennett, Frankish) denies phenomenal consciousness exists—it\'s an illusion. IIT (Tononi, Koch) makes consciousness fundamental and measurable with phi.',
      test: 'If phi reliably correlates with subjective reports, eliminativism fails. If consciousness reports are systematically unreliable, IIT\'s measurement is questioned.'
    },
    {
      title: 'Materialism versus Idealism',
      theory1: { name: 'Materialism', color: '#3b82f6' },
      theory2: { name: 'Idealism', color: '#a855f7' },
      centralTension: 'Ontological priority—what comes first?',
      description: 'Materialism: matter → consciousness. Idealism: consciousness → matter appearance.',
      test: 'Can consciousness exist without physical substrate? Can we find consciousness-only phenomena?'
    },
    {
      title: 'Global Workspace versus Integrated Information',
      theory1: { name: 'Global Workspace', color: '#3b82f6' },
      theory2: { name: 'IIT', color: '#10b981' },
      centralTension: 'Broadcasting versus integration',
      description: 'GWT (Baars, Dehaene): consciousness requires global broadcasting. IIT: consciousness IS integrated information—broadcasting not necessary.',
      test: 'Brain stimulation to create high phi without broadcasting = IIT correct. Broadcasting without integration = GWT correct.'
    },
    {
      title: 'Panpsychism versus Emergence Theories',
      theory1: { name: 'Panpsychism', color: '#f59e0b' },
      theory2: { name: 'Emergence', color: '#8b5cf6' },
      centralTension: 'The combination problem',
      description: 'How do micro-experiences combine into unified macro-experience? Emergence theories avoid this by having consciousness emerge from non-conscious matter.',
      test: 'Find evidence of micro-consciousness, or demonstrate genuine emergence of consciousness from non-conscious matter.'
    },
    {
      title: 'Quantum versus Classical Neural Theories',
      theory1: { name: 'Quantum', color: '#06b6d4' },
      theory2: { name: 'Classical', color: '#3b82f6' },
      centralTension: 'Decoherence timescales',
      description: 'Brain too warm and wet for quantum coherence (picoseconds) versus neural processing (milliseconds). Quantum theories claim it matters anyway.',
      test: 'Measure quantum coherence in neural tissue during consciousness. Manipulate coherence and test consciousness effects.'
    },
    {
      title: 'Higher-Order versus First-Order Theories',
      theory1: { name: 'Higher-Order', color: '#3b82f6' },
      theory2: { name: 'First-Order', color: '#8b5cf6' },
      centralTension: 'Necessity of meta-representation',
      description: 'Higher-order theories: need thoughts about perceptions for consciousness. First-order: perception itself is sufficient.',
      test: 'Patients with prefrontal damage but intact phenomenology challenge higher-order theories.'
    }
  ];

  return (
    <div className="space-y-8">
      {tensions.map((tension, idx) => (
        <div
          key={idx}
          className="neural-card rounded-2xl p-8 border-l-4"
          style={{ borderLeftColor: '#ef4444' }}
        >
          <h4 className="font-serif text-2xl text-neural-copper mb-6">
            {idx + 1}. {tension.title}
          </h4>

          {/* Theory tags */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span
              className="px-6 py-3 rounded-lg font-mono text-sm font-bold"
              style={{
                background: `${tension.theory1.color}30`,
                color: tension.theory1.color,
                border: `1px solid ${tension.theory1.color}60`,
              }}
            >
              {tension.theory1.name}
            </span>
            <span className="text-2xl text-neural-copper">⋈</span>
            <span
              className="px-6 py-3 rounded-lg font-mono text-sm font-bold"
              style={{
                background: `${tension.theory2.color}30`,
                color: tension.theory2.color,
                border: `1px solid ${tension.theory2.color}60`,
              }}
            >
              {tension.theory2.name}
            </span>
          </div>

          <p className="text-parchment mb-4">
            <strong className="text-neural-gold">Central Tension:</strong> {tension.centralTension}
          </p>

          <p className="text-parchment/80 mb-6 leading-relaxed">
            {tension.description}
          </p>

          <div className="bg-cosmos-deep/60 rounded-lg p-6 border border-neural-copper/30">
            <strong className="text-neural-copper">Empirical Test:</strong>{' '}
            <span className="text-parchment/80">{tension.test}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
