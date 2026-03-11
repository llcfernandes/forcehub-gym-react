import { useReveal } from '../hooks'
import Marquee  from '../components/Marquee'
import PageHero from '../components/PageHero'
import { IMAGES } from '../utils/images'

const TRAINERS = [
  { key:'trainer1', name:'Rafael Costa',  spec:'Musculação & Hipertrofia', certs:'CREF 001234-G/SP · CSCS (NSCA) · Pós Fisiologia', exp:'9 anos · +200 alunos transformados' },
  { key:'trainer2', name:'Camila Torres', spec:'CrossFit & Funcional',     certs:'CrossFit Level 2 · CREF 005678-G/SP · Precision Nutrition', exp:'7 anos · Competidora Regional CF Games 2022/23' },
  { key:'trainer3', name:'Bruno Lima',    spec:'Muay Thai & MMA',          certs:'CBTM Faixa Preta · CREF 007890-G/SP · Coach MMA', exp:'14 anos · Ex-atleta profissional' },
  { key:'trainer4', name:'Diego Martins', spec:'Spinning & Cardio',        certs:'Mad Dogg Certified · CREF 003456-G/SP', exp:'6 anos · 3.500 aulas ministradas' },
  { key:'trainer5', name:'Ana Beatriz',   spec:'Yoga & Pilates',           certs:'RYT 500 (Yoga Alliance) · CREF 002345-G/SP', exp:'11 anos · Formada em Bali e Mumbai' },
  { key:'trainer6', name:'Marcos Souza',  spec:'Boxe & Condicionamento',   certs:'CBBOXE Coach A · CREF 008765-G/SP', exp:'8 anos · Ex-atleta Seleção Sub-23' },
]

export default function Trainers({ setPage }) {
  useReveal()
  const go = (p) => { setPage(p); window.scrollTo(0,0) }

  return (
    <>
      <PageHero img={IMAGES.trainer1} title="NOSSA" accent="EQUIPE" breadcrumb="Trainers" setPage={setPage} />
      <Marquee />

      <section className="section" style={{ background:'linear-gradient(180deg,var(--bg) 0%,var(--g950) 100%)' }}>
        <div className="container" style={{ marginBottom:56 }}>
          <div className="reveal" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:24 }}>
            <div>
              <div className="eyebrow">47 Profissionais Certificados</div>
              <div className="accent-line" />
              <h2 style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(2.2rem,4.5vw,4rem)', letterSpacing:2, lineHeight:.94 }}>
                TRAINERS DE <span style={{ color:'var(--red)' }}>ELITE</span>
              </h2>
            </div>
            <p style={{ color:'rgba(255,255,255,.42)', fontSize:'.95rem', maxWidth:360, lineHeight:1.75 }}>
              Todos os profissionais são CREF registrados, com certificações nacionais e internacionais atualizadas.
            </p>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }}>
          {TRAINERS.map((t,i) => (
            <div key={t.key} className={`reveal d${(i%3)+1}`}
              style={{ position:'relative', overflow:'hidden', cursor:'pointer', aspectRatio:'2/3' }}
              onMouseOver={e => {
                e.currentTarget.querySelector('img').style.filter='grayscale(0%) brightness(1.05)'
                e.currentTarget.querySelector('img').style.transform='scale(1.07)'
                e.currentTarget.querySelector('.tline').style.width='52px'
                e.currentTarget.querySelector('.texp').style.opacity='1'
                e.currentTarget.querySelector('.texp').style.transform='none'
                e.currentTarget.querySelector('.t-overlay').style.opacity='1'
              }}
              onMouseOut={e => {
                e.currentTarget.querySelector('img').style.filter='grayscale(22%) brightness(.86)'
                e.currentTarget.querySelector('img').style.transform=''
                e.currentTarget.querySelector('.tline').style.width='0'
                e.currentTarget.querySelector('.texp').style.opacity='0'
                e.currentTarget.querySelector('.texp').style.transform='translateY(5px)'
                e.currentTarget.querySelector('.t-overlay').style.opacity='0'
              }}>
              <img src={IMAGES[t.key]} alt={t.name} style={{ width:'100%', height:'100%', objectFit:'cover', filter:'grayscale(22%) brightness(.86)', transition:'all .8s var(--ease)' }} />
              {/* Base gradient */}
              <div style={{ position:'absolute',inset:0, background:'linear-gradient(to top,rgba(5,5,5,.98) 0%,rgba(5,5,5,.08) 55%)' }} />
              {/* Hover overlay */}
              <div className="t-overlay" style={{ position:'absolute',inset:0, background:'linear-gradient(135deg,rgba(200,16,46,.14) 0%,transparent 55%)', opacity:0, transition:'opacity .4s ease' }} />
              {/* Top line */}
              <div style={{ position:'absolute',top:0,left:0,right:0,height:3, background:'linear-gradient(90deg,var(--red),transparent)' }} />

              <div style={{ position:'absolute',bottom:0,left:0,right:0,padding:'30px 34px' }}>
                <div style={{ fontFamily:'var(--ff-cond)', fontSize:'1.35rem', fontWeight:900, color:'#fff', letterSpacing:.5 }}>{t.name}</div>
                <div style={{ fontSize:'.76rem', color:'var(--red)', fontWeight:700, letterSpacing:2, textTransform:'uppercase', fontFamily:'var(--ff-cond)', marginTop:3, textShadow:'0 0 12px rgba(200,16,46,.4)' }}>{t.spec}</div>
                <div style={{ fontSize:'.73rem', color:'rgba(255,255,255,.32)', marginTop:5 }}>{t.certs}</div>
                <div className="tline" style={{ width:0, height:2, background:'linear-gradient(90deg,var(--red),transparent)', marginTop:12, transition:'width .45s var(--ease)', boxShadow:'0 0 8px rgba(200,16,46,.5)' }} />
                <div className="texp" style={{ fontSize:'.76rem', color:'rgba(255,255,255,.38)', marginTop:7, opacity:0, transform:'translateY(5px)', transition:'all .4s var(--ease)' }}>{t.exp}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PADRÃO */}
      <section className="section-sm" style={{ background:'var(--g900)' }}>
        <div className="container" style={{ maxWidth:940 }}>
          <div className="reveal" style={{ textAlign:'center', marginBottom:52 }}>
            <div className="eyebrow" style={{ justifyContent:'center' }}>Nossa Exigência</div>
            <div className="accent-line center" />
            <h2 style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(2.2rem,4.5vw,3.8rem)', letterSpacing:2, lineHeight:.95 }}>
              PADRÃO <span style={{ color:'var(--red)' }}>FORCEHUB</span>
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }}>
            {[
              ['CREF Ativo','Registro obrigatório e atualizado no Conselho Regional de Educação Física.'],
              ['Atualização Contínua','Mínimo 40h de cursos e certificações por ano. Custeados pela ForceHub.'],
              ['Avaliação Trimestral','NPS de alunos, resultados documentados e revisão técnica interna.'],
            ].map(([title,desc],i) => (
              <div key={i} className={`reveal d${i+1}`} style={{
                background:'linear-gradient(145deg,var(--g800),var(--g850)',
                padding:'40px 36px', textAlign:'center',
                borderTop:'2px solid rgba(255,255,255,.05)',
                transition:'border-top-color .3s ease, transform .35s var(--ease)'
              }}
                onMouseOver={e => { e.currentTarget.style.borderTopColor='rgba(200,16,46,.6)'; e.currentTarget.style.transform='translateY(-4px)' }}
                onMouseOut={e  => { e.currentTarget.style.borderTopColor='rgba(255,255,255,.05)'; e.currentTarget.style.transform='' }}>
                <div style={{ fontFamily:'var(--ff-cond)', fontSize:'1.12rem', fontWeight:800, color:'#fff', marginBottom:12, letterSpacing:.5 }}>{title}</div>
                <div style={{ fontSize:'.875rem', color:'rgba(255,255,255,.42)', lineHeight:1.7 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign:'center' }}>
        <div className="container reveal">
          <h2 style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(2.2rem,5.5vw,4.5rem)', letterSpacing:2, marginBottom:24, lineHeight:.95 }}>
            AGENDE COM <span style={{ color:'var(--red)' }}>UM TRAINER</span>
          </h2>
          <p style={{ color:'rgba(255,255,255,.45)', marginBottom:40 }}>Aula experimental gratuita. Sem compromisso.</p>
          <button className="btn btn-red btn-lg" onClick={() => go('contato')}>Agendar Agora</button>
        </div>
      </section>
    </>
  )
}
