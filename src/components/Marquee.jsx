const ITEMS = [
  'Musculação','CrossFit','Personal Trainer','Spinning','Muay Thai',
  'Jiu-Jitsu','Yoga','Pilates','Funcional','Open 24h','Sauna','Avaliação Física',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span className="marquee-item" key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}
