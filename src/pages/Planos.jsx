import { useReveal } from '../hooks'
import Marquee  from '../components/Marquee'
import PageHero from '../components/PageHero'
import { IMAGES } from '../utils/images'

const PLANS = [
  {
    name: 'Starter', desc: 'Para quem está começando a jornada', price: 89, featured: false,
    features: ['Área de musculação 24h','Avaliação física inicial','Planilha de treino personalizada','App ForceHub','Estacionamento gratuito','1 parceiro por dia'],
  },
  {
    name: 'Performance', desc: 'O mais completo para evolução contínua', price: 149, featured: true, tag: 'Mais Popular',
    features: ['Tudo do Starter','Todas as coletivas (spinning, yoga, funcional)','Acesso biométrico 24h','Vestiário premium + sauna','Avaliação física mensal','Desconto 15% em suplementos','Congelamento 30 dias/ano','Suporte nutricional básico'],
  },
  {
    name: 'Elite', desc: 'Performance máxima com acompanhamento total', price: 349, featured: false,
    features: ['Tudo do Performance','8 sessões de personal trainer/mês','Consultoria nutricional esportiva','Protocolo por fisiologista','Dashboard avançado','Suporte WhatsApp com trainer','Toalha e amenities','Acesso a eventos exclusivos'],
  },
]

const COMPARE = [
  ['Musculação 24h',     true,  true,  true ],
  ['Acesso biométrico',  true,  true,  true ],
  ['App de treinos',     true,  true,  true ],
  ['Aulas coletivas',    false, true,  true ],
  ['Sauna premium',      false, true,  true ],
  ['Avaliação mensal',   false, true,  true ],
  ['Personal trainer',   false, false, true ],
  ['Nutricionista',      false, false, true ],
  ['Protocolo exclusivo',false, false, true ],
  ['Suporte WhatsApp',   false, false, true ],
]

export default function Planos({ setPage }) {
  useReveal()
  const go = (p) => { setPage(p); window.scrollTo(0, 0) }
  const sendWA = (plan) => {
    const msg = `Olá!%20Quero%20saber%20mais%20sobre%20o%20Plano%20${encodeURIComponent(plan)}.`
    window.open(`https://wa.me/5500000000000?text=${msg}`, '_blank', 'noopener')
  }

  return (
    <>
      <PageHero img={IMAGES.gym1} title="ESCOLHA SEU" accent="PLANO" breadcrumb="Planos" setPage={setPage} />
      <Marquee />

      {/* PLANS */}
      <section className="section" style={{ background:'linear-gradient(180deg,var(--bg) 0%,var(--g950) 100%)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign:'center', marginBottom:72 }}>
            <div className="eyebrow" style={{ justifyContent:'center' }}>Planos & Preços</div>
            <div className="accent-line center" />
            <h2 style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(2.6rem,5.5vw,4.5rem)', letterSpacing:2, lineHeight:.95 }}>
              SEM FIDELIDADE.<br /><span style={{ color:'var(--red)' }}>CANCELE QUANDO QUISER.</span>
            </h2>
          </div>

          <div className="reveal d2" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3, maxWidth:1100, margin:'0 auto' }}>
            {PLANS.map((p, i) => (
              <div key={p.name}
                className={`d${i+1}`}
                style={{
                  background: p.featured
                    ? 'linear-gradient(160deg,#1d0407 0%,#130305 100%)'
                    : 'linear-gradient(160deg,var(--g800) 0%,var(--g850) 100%)',
                  padding:'48px 40px',
                  position:'relative',
                  border: p.featured ? '2px solid rgba(200,16,46,.55)' : '2px solid transparent',
                  boxShadow: p.featured ? '0 0 80px rgba(200,16,46,.2),0 24px 60px rgba(0,0,0,.7)' : '0 8px 32px rgba(0,0,0,.5)',
                  transition:'transform .4s var(--ease), box-shadow .4s ease',
                  overflow:'hidden',
                }}
                onMouseOver={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow=p.featured?'0 0 100px rgba(200,16,46,.3),0 32px 80px rgba(0,0,0,.8)':'0 20px 60px rgba(0,0,0,.7)' }}
                onMouseOut={e  => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=p.featured?'0 0 80px rgba(200,16,46,.2),0 24px 60px rgba(0,0,0,.7)':'0 8px 32px rgba(0,0,0,.5)' }}
              >
                {/* BG ambient */}
                {p.featured && <div style={{ position:'absolute',top:-60,right:-60,width:220,height:220, background:'radial-gradient(circle,rgba(200,16,46,.18) 0%,transparent 70%)', pointerEvents:'none' }} />}

                {p.tag && (
                  <div style={{
                    position:'absolute', top:-15, left:'50%', transform:'translateX(-50%)',
                    background:'linear-gradient(135deg,#e8152f,#8f0a20)',
                    color:'#fff', fontFamily:'var(--ff-cond)', fontSize:'.7rem',
                    fontWeight:700, letterSpacing:2.5, textTransform:'uppercase',
                    padding:'7px 20px', whiteSpace:'nowrap',
                    boxShadow:'0 4px 16px rgba(200,16,46,.45)'
                  }}>{p.tag}</div>
                )}

                {/* Top accent line */}
                <div style={{ position:'absolute',top:0,left:0,right:0,height:3, background: p.featured ? 'linear-gradient(90deg,#e8152f,#8f0a20)' : 'rgba(255,255,255,.04)' }} />

                <div style={{ fontFamily:'var(--ff-display)', fontSize:'2.2rem', letterSpacing:2, color:'#fff', marginBottom:6 }}>{p.name}</div>
                <div style={{ fontSize:'.85rem', color:'rgba(255,255,255,.42)', marginBottom:32, lineHeight:1.55 }}>{p.desc}</div>

                <div style={{ display:'flex', alignItems:'flex-end', gap:4, marginBottom:32 }}>
                  <span style={{ fontFamily:'var(--ff-cond)', fontSize:'.95rem', fontWeight:700, paddingBottom:11, color:p.featured?'var(--red)':'rgba(255,255,255,.45)' }}>R$</span>
                  <span style={{ fontFamily:'var(--ff-display)', fontSize:'4.5rem', lineHeight:1, color:p.featured?'var(--red)':'#fff', textShadow:p.featured?'0 0 40px rgba(200,16,46,.4)':'' }}>{p.price}</span>
                  <span style={{ fontSize:'.85rem', paddingBottom:11, color:'rgba(255,255,255,.3)' }}>/mês</span>
                </div>

                <hr style={{ border:'none', borderTop:`1px solid ${p.featured?'rgba(200,16,46,.2)':'rgba(255,255,255,.06)'}`, marginBottom:28 }} />

                <ul style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:36 }}>
                  {p.features.map((f,i) => (
                    <li key={i} style={{ display:'flex', alignItems:'center', gap:11, fontSize:'.875rem', color:'rgba(255,255,255,.72)' }}>
                      <span style={{
                        width:20, height:20, flexShrink:0,
                        background:p.featured?'rgba(200,16,46,.22)':'rgba(255,255,255,.07)',
                        borderRadius:'50%',
                        display:'flex', alignItems:'center', justifyContent:'center',
                        fontSize:10, color:p.featured?'var(--red)':'rgba(255,255,255,.5)',
                        border:`1px solid ${p.featured?'rgba(200,16,46,.35)':'rgba(255,255,255,.08)'}`
                      }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button onClick={() => sendWA(p.name)} style={{
                  display:'flex', alignItems:'center', justifyContent:'center', gap:10,
                  width:'100%', padding:16,
                  background: p.featured ? 'linear-gradient(135deg,#e8152f,#8f0a20)' : 'transparent',
                  color: p.featured ? '#fff' : 'var(--red)',
                  border: `1px solid ${p.featured?'transparent':'rgba(200,16,46,.4)'}`,
                  fontFamily:'var(--ff-cond)', fontSize:'.85rem', fontWeight:700, letterSpacing:2.5,
                  textTransform:'uppercase', borderRadius:'var(--r)', cursor:'pointer',
                  transition:'all .28s var(--ease)',
                  boxShadow: p.featured ? '0 4px 20px rgba(200,16,46,.35)' : 'none',
                }}
                  onMouseOver={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow=p.featured?'0 8px 32px rgba(200,16,46,.5)':'0 6px 20px rgba(200,16,46,.2)' }}
                  onMouseOut={e  => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=p.featured?'0 4px 20px rgba(200,16,46,.35)':'none' }}
                >📱 Assinar {p.name}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section className="section-sm" style={{ background:'var(--g900)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom:52 }}>
            <div className="eyebrow">Comparativo</div>
            <div className="accent-line" />
            <h2 style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(2.2rem,4vw,3.5rem)', letterSpacing:2 }}>COMPARE OS PLANOS</h2>
          </div>
          <div className="reveal d2" style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'collapse', minWidth:500 }}>
              <thead>
                <tr style={{ borderBottom:'2px solid rgba(255,255,255,.08)' }}>
                  <th style={{ width:'40%', fontFamily:'var(--ff-cond)', fontSize:'.72rem', fontWeight:700, letterSpacing:3, textTransform:'uppercase', padding:'18px 24px', textAlign:'left', color:'rgba(255,255,255,.35)' }}>Benefício</th>
                  {['Starter','Performance','Elite'].map((h,i) => (
                    <th key={h} style={{ fontFamily:'var(--ff-cond)', fontSize:'.72rem', fontWeight:700, letterSpacing:3, textTransform:'uppercase', padding:'18px 24px', textAlign:'left', color:i===1?'var(--red)':'rgba(255,255,255,.35)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([label,s,per,e], i) => (
                  <tr key={i} style={{ borderBottom:'1px solid rgba(255,255,255,.04)', transition:'background .15s ease' }}
                    onMouseOver={ev => ev.currentTarget.style.background='rgba(255,255,255,.02)'}
                    onMouseOut={ev  => ev.currentTarget.style.background=''}>
                    <td style={{ fontFamily:'var(--ff-cond)', fontSize:'.85rem', fontWeight:600, color:'rgba(255,255,255,.72)', letterSpacing:.5, padding:'17px 24px' }}>{label}</td>
                    {[s,per,e].map((v,j) => (
                      <td key={j} style={{ padding:'17px 24px', background:j===1?'rgba(200,16,46,.03)':'' }}>
                        {v ? <span style={{ color:'#4ade80', fontSize:15, textShadow:'0 0 8px rgba(74,222,128,.4)' }}>✓</span>
                           : <span style={{ color:'rgba(255,255,255,.18)', fontSize:14 }}>—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td style={{ fontFamily:'var(--ff-cond)', fontSize:'.9rem', fontWeight:800, color:'#fff', padding:'17px 24px' }}>Preço mensal</td>
                  {[['R$ 89',false],['R$ 149',true],['R$ 349',false]].map(([v,h],i) => (
                    <td key={i} style={{ padding:'17px 24px', fontFamily:'var(--ff-cond)', fontWeight:h?800:700, color:h?'var(--red)':'rgba(255,255,255,.65)', fontSize:h?'1rem':'.9rem', background:i===1?'rgba(200,16,46,.03)':'' }}>{v}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background:'linear-gradient(135deg,#900b1f 0%,#C8102E 50%,#6e0717 100%)', backgroundSize:'200% 200%', animation:'gradFlow 6s ease infinite', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'50px 50px',pointerEvents:'none' }} />
        <div className="container reveal" style={{ position:'relative', zIndex:1 }}>
          <h2 style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(2.8rem,6.5vw,5.5rem)', letterSpacing:2, color:'#fff', marginBottom:24, textShadow:'0 4px 40px rgba(0,0,0,.4)', lineHeight:.95 }}>
            PRIMEIRA SEMANA<br />
            <span style={{ WebkitTextStroke:'2px rgba(255,255,255,.38)', color:'transparent' }}>COMPLETAMENTE GRÁTIS</span>
          </h2>
          <p style={{ color:'rgba(255,255,255,.68)', fontSize:'1.1rem', marginBottom:40 }}>Sem cartão de crédito. Sem compromisso. Só você e o seu primeiro treino.</p>
          <button className="btn btn-white btn-lg" onClick={() => go('contato')}>Agendar Agora</button>
        </div>
      </section>
    </>
  )
}
