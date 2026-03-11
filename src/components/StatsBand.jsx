import { useCounter } from '../hooks'

function StatCell({ target, suffix, label }) {
  const [count, ref] = useCounter(target)
  return (
    <div className="stat-cell reveal" ref={ref}>
      <div className="stat-big">
        {count.toLocaleString('pt-BR')}<span>{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function StatsBand() {
  return (
    <div className="stats-band">
      <div className="container">
        <div className="stats-inner">
          <StatCell target={5000} suffix="+" label="Alunos Ativos"           />
          <StatCell target={98}   suffix="%" label="Satisfação dos Alunos"   />
          <StatCell target={47}   suffix="+" label="Profissionais Certificados"/>
          <StatCell target={12}   suffix="+" label="Anos de Excelência"      />
        </div>
      </div>
    </div>
  )
}
