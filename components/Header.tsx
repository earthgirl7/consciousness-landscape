export default function Header() {
  return (
    <header className="relative px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
      {/* Main title - like opening a manuscript */}
      <div className="text-center space-y-6">
        {/* Decorative symbol */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 border border-neural-gold/30 rounded-full flex items-center justify-center neural-node">
            <div className="w-2 h-2 bg-neural-gold rounded-full animate-pulse-slow" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-parchment">
          The Landscape of
          <span className="block mt-2 text-neural-gold text-glow">Consciousness</span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-xl md:text-2xl text-parchment/70 italic tracking-wide">
          An Interactive Taxonomy & Hypothesis Generator
        </p>

        {/* Stats - minimal, elegant */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            { number: '10', label: 'Major Categories' },
            { number: '60+', label: 'Specific Theories' },
            { number: '6', label: 'Key Tensions' },
            { number: '5', label: 'Novel Hypotheses' },
          ].map((stat, i) => (
            <div
              key={i}
              className="neural-card rounded-lg p-6 text-center group"
            >
              <div className="font-serif text-4xl md:text-5xl text-neural-gold mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-parchment/60 uppercase tracking-wider font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-12 opacity-40">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-neural-gold" />
          <div className="w-1 h-1 bg-neural-gold rounded-full" />
          <div className="w-32 h-px bg-neural-gold" />
          <div className="w-1 h-1 bg-neural-gold rounded-full" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-neural-gold" />
        </div>
      </div>
    </header>
  );
}
