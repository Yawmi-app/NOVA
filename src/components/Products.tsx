import ProductCard from './ProductCard';

const projects = [
  {
    number: '01',
    name: 'AUREL',
    category: 'Digital identity · 2025',
    description: 'A new language for modern ritual. AUREL brings considered simplicity to an everyday essential.',
    detail: 'Strategy / Identity / Digital',
    visual: 'halo' as const,
  },
  {
    number: '02',
    name: 'FORME',
    category: 'Art direction · 2024',
    description: 'An architectural study in presence, material and light—built to make space for the unexpected.',
    detail: 'Art direction / Campaign',
    visual: 'monolith' as const,
  },
  {
    number: '03',
    name: 'SOLACE',
    category: 'Brand experience · 2025',
    description: 'A softer kind of energy. A vivid identity designed around connection, care and quiet optimism.',
    detail: 'Positioning / Identity / Web',
    visual: 'bloom' as const,
  },
];

export default function Products() {
  return (
    <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
      <div className="section-heading" data-reveal>
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> Selected projects / 2024—26</p>
          <h2 id="work-title">A few things<br /><em>we’ve made.</em></h2>
        </div>
        <p className="section-intro">Distinct worlds, built with intention.<br />Explore each project to see what’s within.</p>
      </div>
      <div className="product-grid">
        {projects.map((project) => <ProductCard key={project.number} {...project} />)}
      </div>
      <div className="work-footnote" data-reveal>
        <span>01 — 03</span><span>Independent thinking, made tangible.</span><span>Scroll to explore ↓</span>
      </div>
    </section>
  );
}
