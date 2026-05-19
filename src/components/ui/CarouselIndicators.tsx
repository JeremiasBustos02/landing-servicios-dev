interface CarouselIndicatorsProps {
  total: number;
  active: number;
  onChange: (index: number) => void;
}

export function CarouselIndicators({ total, active, onChange }: CarouselIndicatorsProps) {
  return (
    <div className="indicators-container">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`indicator-dot ${
            active === index ? 'indicator-active' : 'indicator-inactive'
          }`}
          aria-label={`Ir a la diapositiva ${index + 1}`}
        />
      ))}
    </div>
  )
}