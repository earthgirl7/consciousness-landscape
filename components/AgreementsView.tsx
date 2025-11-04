export default function AgreementsView() {
  const agreements = [
    {
      title: 'Information Processing is Central',
      theories: 'IIT, Global Workspace, Predictive Processing, Computational theories',
      description: 'All agree that information dynamics matter for consciousness, though they differ on specifics (integration versus broadcast versus prediction).',
      testable: 'Manipulate information flow patterns and measure consciousness changes across different paradigms.'
    },
    {
      title: 'Body-Environment Coupling is Essential',
      theories: 'Embodied Cognition, Enactive, Extended Mind, Predictive Processing',
      description: 'Consciousness requires active engagement with environment, not merely brain in isolation.',
      testable: 'Compare consciousness quality in active versus passive conditions, sensory deprivation experiments.'
    },
    {
      title: 'Consciousness as Fundamental Property',
      theories: 'Panpsychism, Idealism, Some Monisms, Cosmopsychism',
      description: 'Consciousness doesn\'t emerge from non-conscious matter; it\'s already present in some form at fundamental levels.',
      testable: 'Look for consciousness markers in progressively simpler systems; determine where it "starts" (or doesn\'t).'
    },
    {
      title: 'Neural Activity as Necessary Condition',
      theories: 'Most Materialist theories, Some Quantum theories, Non-Reductive Physicalism',
      description: 'Brain states reliably correlate with conscious states across all these theoretical frameworks.',
      testable: 'Already well-tested through lesion studies, brain imaging, neural manipulation experiments.'
    },
    {
      title: 'Gradations in Consciousness',
      theories: 'IIT, Panpsychism, Some Monisms',
      description: 'Consciousness is not binary but exists on a spectrum from minimal to full consciousness.',
      testable: 'Measure consciousness markers across species, developmental stages, and brain states.'
    }
  ];

  return (
    <div className="space-y-8">
      {agreements.map((agreement, idx) => (
        <div
          key={idx}
          className="neural-card rounded-2xl p-8 border-l-4 border-l-neural-gold"
        >
          <h4 className="font-serif text-2xl text-neural-gold mb-4">
            {agreement.title}
          </h4>

          <p className="text-parchment/70 mb-3">
            <strong className="text-neural-gold/90">Converging theories:</strong>{' '}
            {agreement.theories}
          </p>

          <p className="text-parchment/80 mb-6 leading-relaxed">
            {agreement.description}
          </p>

          <div className="bg-cosmos-deep/60 rounded-lg p-6 border border-neural-gold/30">
            <strong className="text-neural-gold">Testable implication:</strong>{' '}
            <span className="text-parchment/80">{agreement.testable}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
