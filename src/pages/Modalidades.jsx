import { useState } from 'react'
import { useReveal } from '../hooks'
import Marquee   from '../components/Marquee'
import PageHero  from '../components/PageHero'
import { IMAGES } from '../utils/images'

const MODS = [
  { key:'muscles',   name:'Musculação',        tag:'Incluso em todos os planos',  price:'Incluso',          desc:'Área de 2.000m² com Matrix, Life Fitness e Technogym. Treino monitorado via app com planilha personalizada.', schedule:'24h / 7 dias', level:'Todos' },
  { key:'crossfit',  name:'CrossFit',           tag:'Box Afiliado CF-L3',          price:'R$ 80/mês add-on', desc:'Box afiliado com coaches CF Level 1, 2 e 3. WODs diários com scaling individual. Competições internas mensais.', schedule:'6h–22h · Seg a Sáb', level:'Intermediário+' },
  { key:'functional',name:'Personal Trainer',   tag:'Plano Elite',                 price:'R$ 349/mês',       desc:'Sessões individuais com personal CREF. Protocolo exclusivo, avaliação mensal, suporte WhatsApp e ajuste contínuo.', schedule:'Agendamento flexível', level:'Todos' },
  { key:'spinning',  name:'Spinning',           tag:'Incluso Premium+',            price:'Incluso',          desc:'Sala com 40 bikes Schwinn e som imersivo. Aulas temáticas, playlists exclusivas e monitoramento cardíaco.', schedule:'7h–21h · Seg a Sex', level:'Todos' },
  { key:'yoga',      name:'Yoga & Pilates',     tag:'Incluso Premium+',            price:'Incluso',          desc:'Estúdio 200m², instrutores RYT-500 e aparelhos reformer. Hatha, Vinyasa, Yin e Pilates solo.', schedule:'6h–20h · Seg a Sáb', level:'Todos' },
  { key:'muaythai',  name:'Muay Thai',          tag:'Add-on R$ 80/mês',            price:'R$ 80/mês',        desc:'Academia afiliada CBTM. Professores com graduação e experiência competitiva. Defesa pessoal e alto rendimento.', schedule:'7h–21h · Seg a Sex', level:'Todos' },
  { key:'boxing',    name:'Boxe Olímpico',      tag:'Add-on R$ 80/mês',            price:'R$ 80/mês',        desc:'Ring oficial, equipamentos premium. Técnica olímpica com treinadores experientes. Aulas individuais e em grupo.', schedule:'8h–20h · Seg a Sáb', level:'Todos' },
  { key:'nutrition', name:'Nutrição Esportiva', tag:'Consultoria',                 price:'R$ 150/consulta',  desc:'Nutricionistas esportivos parceiros. Anamnese completa, plano alimentar periodizado e acompanhamento mensal.', schedule:'Seg, Qua e Sex', level:'Todos' },
  { key:'gym3',      name:'Funcional Avançado', tag:'Incluso Premium+',            price:'Incluso',          desc:'400m² com kettlebells, TRX, battle ropes, sleds e levantamento olímpico. Treinos em grupo e individuais.', schedule:'6h–22h · 7 dias', level:'Intermediário+' },
]

const SCHEDULE = [
  ['Musculação',     '24h',                         '24h',         '24h', 'Todos',   true],
  ['CrossFit WOD',   '6h · 8h · 12h · 18h · 20h',  '7h · 9h · 11h','—',  'Inter.+', true],
  ['Spinning',       '6h30 · 12h · 18h · 19h30',   '8h · 10h',    '—',  'Todos',   true],
  ['Yoga / Vinyasa', '7h · 12h · 19h',             '9h · 11h',    '—',  'Todos',   true],
  ['Pilates',        '8h · 14h · 18h30',            '9h',          '—',  'Todos',   false],
  ['Muay Thai',      '7h · 12h · 18h · 20h',        '8h · 10h',    '—',  'Todos',   true],
  ['Boxe Olímpico',  '8h · 18h · 20h',              '9h · 11h',    '—',  'Todos',   true],
  ['Funcional',      '6h · 7h · 12h · 18h · 20h',   '7h · 9h',    '—',  'Todos',   true],
]

const FAQS = [
  ['Posso experimentar todas as modalidades gratuitamente?', 'Sim! A primeira semana dá acesso completo a todas as modalidades incluídas nos planos. CrossFit, Lutas e Boxe têm uma aula experimental específica.'],
  ['Qual a diferença dos planos em relação às modalidades?', 'Starter: musculação. Performance: todas as coletivas (spinning, yoga, funcional). Elite: tudo + personal. CrossFit e Lutas são add-ons.'],
  ['Preciso de experiência prévia?', 'Não. Todas as modalidades têm turmas para iniciantes e os profissionais fazem triagem na primeira aula para garantir segurança.'],
  ['Como funciona o agendamento?', 'Via app ForceHub (iOS e Android). Vagas abertas 72h antes com reserva confirmada. Lista de espera automática se lotar.'],
]

export default function Modalidades({ setPage }) {
  useReveal()
  const [openFaq, setOpenFaq] = useState(null)
  const go = (p) => { setPage(p); window.scrollTo(0,0) }

  return (
    <>
      <PageHero img={IMAGES.crossfit} title="NOSSAS" accent="MODALIDADES" breadcrumb="Modalidades" setPage={setPage} />
      <Marquee />

      {/* GRID */}
      <section className="section" style={{ background:'linear-gradient(180deg,var(--bg) 0%,var(--g950) 50%,var(--bg) 100%)' }}>
        <div className="container" style={{ marginBottom:56 }}>
          <div className="reveal" style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:24 }}>
            <div>
              <div className="eyebrow">18 Atividades Disponíveis</div>
              <div className="accent-line" />
              <p style={{ color:'rgba(255,255,255,.45)', fontSize:'1rem', marginTop:6 }}>Para todos os objetivos, níveis e estilos de vida.</p>
            </div>
            <button className="btn btn-red" onClick={() => go('contato')}>Agendar Aula Grátis</button>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }}>
          {MODS.map((m,i) => (
            <div key={m.key} className={`reveal d${(i%3)+1}`}
              style={{ position:'relative', overflow:'hidden', cursor:'pointer', aspectRatio:'3/4' }}
              onClick={() => go('contato')}
              onMouseOver={e => {
                e.currentTarget.querySelector('img').style.transform='scale(1.08)'
                e.currentTarget.querySelector('img').style.filter='brightness(1.05)'
                e.currentTarget.querySelector('.m-overlay').style.opacity='1'
              }}
              onMouseOut={e => {
                e.currentTarget.querySelector('img').style.transform=''
                e.currentTarget.querySelector('img').style.filter='brightness(.88)'
                e.currentTarget.querySelector('.m-overlay').style.opacity='0'
              }}>
              <img src={IMAGES[m.key]} alt={m.name} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .8s var(--ease),filter .5s ease', filter:'brightness(.88)' }} />
              <div style={{ position:'absolute',inset:0, background:'linear-gradient(to top,rgba(5,5,5,.97) 0%,rgba(5,5,5,.1) 60%)' }} />
              <div className="m-overlay" style={{ position:'absolute',inset:0, background:'linear-gradient(135deg,rgba(200,16,46,.16) 0%,transparent 55%)', opacity:0, transition:'opacity .4s ease' }} />
              {/* Top accent */}
              <div style={{ position:'absolute',top:0,left:0,right:0,height:3, background:'linear-gradient(90deg,var(--red),transparent)', opacity:.7 }} />

              <div style={{ position:'absolute',bottom:0,left:0,right:0,padding:'28px 30px' }}>
                <div style={{
                  display:'inline-block',
                  background:'linear-gradient(135deg,#e8152f,#8f0a20)',
                  color:'#fff', fontFamily:'var(--ff-cond)', fontSize:'.62rem',
                  fontWeight:700, letterSpacing:2.5, textTransform:'uppercase',
                  padding:'5px 13px', marginBottom:12, borderRadius:2,
                  boxShadow:'0 4px 14px rgba(200,16,46,.4)'
                }}>{m.tag}</div>
                <div style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(1.7rem,2.5vw,2.4rem)', letterSpacing:1.5, color:'#fff', lineHeight:.96, textShadow:'0 2px 20px rgba(0,0,0,.6)' }}>{m.name}</div>
                <div style={{ display:'flex', justifyContent:'space-between', marginTop:10, flexWrap:'wrap', gap:4 }}>
                  <span style={{ fontFamily:'var(--ff-cond)', fontSize:'.76rem', color:'rgba(255,255,255,.45)' }}>{m.schedule}</span>
                  <span style={{ fontFamily:'var(--ff-cond)', fontSize:'.78rem', fontWeight:700, color:'var(--red)' }}>{m.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="section-sm" style={{ background:'var(--g900)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom:52 }}>
            <div className="eyebrow">Grade de Horários</div>
            <div className="accent-line" />
            <h2 style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(2.2rem,4.5vw,3.8rem)', letterSpacing:2 }}>AGENDA SEMANAL</h2>
          </div>
          <div className="reveal d2" style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'collapse', minWidth:580 }}>
              <thead>
                <tr style={{ borderBottom:'2px solid rgba(255,255,255,.07)' }}>
                  {['Modalidade','Seg–Sex','Sábado','Domingo','Nível','Status'].map(h => (
                    <th key={h} style={{ fontFamily:'var(--ff-cond)', fontSize:'.7rem', fontWeight:700, letterSpacing:3, textTransform:'uppercase', padding:'15px 22px', textAlign:'left', color:'rgba(255,255,255,.32)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map(([name,seg,sab,dom,nivel,spots],i) => (
                  <tr key={i} style={{ borderBottom:'1px solid rgba(255,255,255,.04)', transition:'background .15s ease' }}
                    onMouseOver={ev => ev.currentTarget.style.background='rgba(255,255,255,.02)'}
                    onMouseOut={ev  => ev.currentTarget.style.background=''}>
                    <td style={{ fontFamily:'var(--ff-cond)', fontWeight:700, letterSpacing:.5, color:'rgba(255,255,255,.88)', fontSize:'.88rem', padding:'17px 22px' }}>{name}</td>
                    {[seg,sab,dom,nivel].map((v,j) => (
                      <td key={j} style={{ padding:'17px 22px', fontSize:'.875rem', color:'rgba(255,255,255,.58)' }}>{v}</td>
                    ))}
                    <td style={{ padding:'17px 22px' }}>
                      <span style={{
                        display:'inline-block', padding:'4px 12px', borderRadius:2,
                        fontFamily:'var(--ff-cond)', fontSize:'.68rem', fontWeight:700, letterSpacing:1.5, textTransform:'uppercase',
                        background: spots ? 'rgba(200,16,46,.14)' : 'rgba(255,255,255,.05)',
                        color: spots ? 'var(--red)' : 'rgba(255,255,255,.35)',
                        border: spots ? '1px solid rgba(200,16,46,.3)' : '1px solid rgba(255,255,255,.08)'
                      }}>
                        {spots ? 'Vagas' : 'Lista de espera'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background:'var(--black)' }}>
        <div className="container-sm">
          <div className="reveal" style={{ marginBottom:52 }}>
            <div className="eyebrow">Dúvidas Frequentes</div>
            <div className="accent-line" />
            <h2 style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(2.2rem,4.5vw,3.8rem)', letterSpacing:2 }}>PERGUNTAS</h2>
          </div>
          <div className="reveal d2">
            {FAQS.map(([q,a],i) => (
              <div key={i} className={`faq-item${openFaq===i?' faq-open':''}`}>
                <button className="faq-btn" onClick={() => setOpenFaq(openFaq===i ? null : i)}>
                  <span>{q}</span><span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
