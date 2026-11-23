import { useState, type KeyboardEvent, type MouseEvent } from 'react';

type ProductCardProps = {
  number: string;
  name: string;
  category: string;
  description: string;
  detail: string;
  visual: 'halo' | 'monolith' | 'bloom';
};

export default function ProductCard({ number, name, category, description, detail, visual }: ProductCardProps) {
  const [flipped, setFlipped] = useState(false);

  const flip = () => setFlipped((value) => !value);
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      flip();
    }
  };
  const onClick = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest('a')) return;
    flip();
  };

  return (
    <article
      className={`product-card${flipped ? ' is-flipped' : ''}`}
      tabIndex={0}
      role="button"
      aria-label={`${name}. ${flipped ? 'Show front' : 'Show details'}`}
      aria-pressed={flipped}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <div className="product-card-inner">
        <div className="product-face product-front">
          <div className={`product-art art-${visual}`} aria-hidden="true">
            <span className="art-orbit orbit-a" />
            <span className="art-orbit orbit-b" />
            <span className="art-shape" />
            <span className="art-light" />
            <span className="art-caption">NOVA / OBJECT {number}</span>
          </div>
          <div className="product-meta">
            <div>
              <span className="product-category">{category}</span>
              <h3>{name}</h3>
            </div>
            <span className="card-arrow" aria-hidden="true">↗</span>
          </div>
          <span className="flip-hint">Tap to discover <span aria-hidden="true">↻</span></span>
        </div>
        <div className="product-face product-back" aria-hidden={flipped ? undefined : true}>
          <span className="back-number">{number}</span>
          <p className="eyebrow"><span className="eyebrow-line" /> {category}</p>
          <h3>{name}<br /><em>in focus.</em></h3>
          <p className="back-description">{description}</p>
          <p className="back-detail">{detail}</p>
          <span className="back-prompt">Tap to return <span aria-hidden="true">↻</span></span>
        </div>
      </div>
    </article>
  );
}
