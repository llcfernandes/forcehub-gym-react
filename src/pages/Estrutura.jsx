import { useReveal } from '../hooks'
import Marquee  from '../components/Marquee'
import PageHero from '../components/PageHero'
import { IMAGES } from '../utils/images'

const GALLERY = [
  { key:'gym1',     label:'Área de Musculação'    },
  { key:'about',    label:'Zona de Peso Livre'    },
  { key:'gym3',     label:'Box de CrossFit'       },
  { key:'spinning', label:'Sala de Spinning'      },
  { key:'locker',   label:'Vestiário Premium'     },
  { key:'pool',     label:'Área de Recuperação'   },
  { key:'yoga',     label:'Estúdio Yoga & Pilates'},
  { key:'muaythai', label:'Academia de Lutas'     },
  { key:'gym2',     label:'Área Funcional'        },
]

const AMENITIES = [
  { icon:'⏰', title:'Acesso 24 Horas',        desc:'Biometria e cartão magnético. Monitoramento por câmeras em tempo real e segurança 24h.' },
  { icon:'🚿', title:'Vestiários Premium',      desc:'Armários com cadeado digital, chuveiros com aquecimento, secadores e amenities completos.' },
  { icon:'♨️', title:'Sauna Finlandesa',        desc:'Sauna a vapor e seca para 12 pessoas. Incluso nos planos Performance e Elite.' },
  { icon:'🅿️', title:'Estacionamento Coberto', desc:'60 vagas cobertas exclusivas para alunos, sem custo adicional. Monitoramento 24h.' },
  { icon:'📱', title:'App ForceHub',            desc:'Treinos em vídeo, agendamento de aulas, histórico de evolução e comunicação com trainer.' },
  { icon:'🥤', title:'Lanchonete Fitness',      desc:'Shakes proteicos, refeições pré e pós-treino, suplementos com desconto para alunos.' },
  { icon:'💆', title:'Sala de Recuperação',     desc:'Rolos de liberação miofascial, compressas de gelo e área de stretching supervisionada.' },
  { icon:'📊', title:'Avaliação Física',        desc:'Bioimpedância tetrapolar, medidas antropométricas e teste de capacidade funcional.' },
  { icon:'🌐', title:'Wi-Fi Premium',           desc:'Cobertura em 100% do espaço. 200Mbps para streaming dos treinos no app.' },
]

export default function Estrutura({ setPage }) {
  useReveal()
  const go = (p) => { setPage(p); window.scrollTo(0,0) }

  return (
    <>
      <PageHero img={IMAGES.gym1} title="NOSSA" accent="ESTRUTURA" breadcrumb="Estrutura" setPage={setPage} />
      <Marquee />

      {/* GALLERY masonry */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ marginBottom:56 }}>
            <div className="eyebrow">Galeria de Fotos</div>
            <div className="accent-line" />
            <h2 style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(2.2rem,4.5vw,4rem)', letterSpacing:2, lineHeight:.94 }}>
              +2.000M² DE <span style={{ color:'var(--red)' }}>PERFORMANCE</span>
            </h2>
            <p style={{ color:'rgba(255,255,255,.42)', fontSize:'.95rem', marginTop:14, maxWidth:480 }}>
              Cada metro quadrado projetado para maximizar seu desempenho e conforto.
            </p>
          </div>

          <div className="reveal d2" style={{ columns:3, gap:4, columnFill:'auto' }}>
            {GALLERY.map((g,i) => (
              <div key={i} style={{ breakInside:'avoid', marginBottom:4, overflow:'hidden', position:'relative', cursor:'pointer', borderRadius:'var(--r)' }}
                onMouseOver={e => {
                  e.currentTarget.querySelector('img').style.transform='scale(1.07)'
                  e.currentTarget.querySelector('img').style.filter='brightness(1.05)'
                  e.currentTarget.querySelector('.ov').style.opacity='1'
                }}
                onMouseOut={e => {
                  e.currentTarget.querySelector('img').style.transform=''
                  e.currentTarget.querySelector('img').style.filter=''
                  e.currentTarget.querySelector('.ov').style.opacity='0'
                }}>
                <img src={IMAGES[g.key]} alt={g.label} loading="lazy" style={{ width:'100%', display:'block', transition:'transform .75s var(--ease),filter .45s ease', filter:'brightness(.88) saturate(.95)' }} />
                <div className="ov" style={{
                  position:'absolute', inset:0,
                  background:'linear-gradient(to top,rgba(5,5,5,.88) 0%,rgba(200,16,46,.18) 100%)',
                  opacity:0, display:'flex', alignItems:'flex-end', justifyContent:'flex-start',
                  padding:16, transition:'opacity .35s ease'
                }}>
                  <span style={{ fontFamily:'var(--ff-cond)', fontSize:'.75rem', fontWeight:700, letterSpacing:3, textTransform:'uppercase', color:'rgba(255,255,255,.9)' }}>{g.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES grid */}
      <section className="section-sm" style={{ background:'linear-gradient(180deg,var(--g900) 0%,var(--g950) 100%)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom:52 }}>
            <div className="eyebrow">Comodidades</div>
            <div className="accent-line" />
            <h2 style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(2.2rem,4.5vw,4rem)', letterSpacing:2, lineHeight:.94 }}>
              TUDO QUE VOCÊ <span style={{ color:'var(--red)' }}>PRECISA</span>
            </h2>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }}>
            {AMENITIES.map((a,i) => (
              <div key={i} className={`reveal d${(i%3)+1}`} style={{
                background:'linear-gradient(145deg,var(--g800) 0%,var(--g850) 100%)',
                padding:'40px 36px', position:'relative', overflow:'hidden',
                borderTop:'2px solid rgba(255,255,255,.05)',
                transition:'transform .38s var(--ease), box-shadow .38s ease, border-top-color .3s ease',
                cursor:'default'
              }}
                onMouseOver={e => {
                  e.currentTarget.style.transform='translateY(-6px)'
                  e.currentTarget.style.boxShadow='0 20px 50px rgba(0,0,0,.6)'
                  e.currentTarget.style.borderTopColor='rgba(200,16,46,.65)'
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform=''
                  e.currentTarget.style.boxShadow=''
                  e.currentTarget.style.borderTopColor='rgba(255,255,255,.05)'
                }}>
                {/* Ambient */}
                <div style={{ position:'absolute',top:-30,right:-30,width:120,height:120, background:'radial-gradient(circle,rgba(200,16,46,.07) 0%,transparent 70%)', pointerEvents:'none' }} />
                <div style={{ fontSize:'2.2rem', marginBottom:20 }}>{a.icon}</div>
                <div style={{ fontFamily:'var(--ff-cond)', fontSize:'1.1rem', fontWeight:800, letterSpacing:.5, color:'#fff', marginBottom:10 }}>{a.title}</div>
                <div style={{ fontSize:'.875rem', color:'rgba(255,255,255,.42)', lineHeight:1.7 }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign:'center' }}>
        <div className="container reveal">
          <div className="eyebrow" style={{ justifyContent:'center' }}>Venha Conhecer</div>
          <div className="accent-line center" />
          <h2 style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(2.2rem,5.5vw,4.5rem)', letterSpacing:2, marginBottom:24, lineHeight:.95 }}>
            AGENDE UMA <span style={{ color:'var(--red)' }}>VISITA GUIADA</span>
          </h2>
          <p style={{ color:'rgba(255,255,255,.45)', marginBottom:40, fontSize:'1rem' }}>Conheça cada espaço pessoalmente com um de nossos coordenadores.</p>
          <button className="btn btn-red btn-lg" onClick={() => go('contato')}>Agendar Visita Grátis</button>
        </div>
      </section>
    </>
  )
}
