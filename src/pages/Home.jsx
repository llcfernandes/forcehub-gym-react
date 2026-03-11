import { useReveal } from '../hooks'
import Marquee    from '../components/Marquee'
import StatsBand  from '../components/StatsBand'
import { IMAGES } from '../utils/images'

const MODS = [
  { key:'muscles',    name:'Musculação',    tag:'Incluso',         desc:'2.000m² com Matrix, Life Fitness e Technogym. Treino via app.', span:true },
  { key:'crossfit',   name:'CrossFit',      tag:'Add-on R$80/mês', desc:'WODs diários com coaches CF L1 e L2.' },
  { key:'functional', name:'Personal',      tag:'Plano Elite',     desc:'Protocolo 100% individual com fisiologista.' },
  { key:'spinning',   name:'Spinning',      tag:'Incluso Premium', desc:'Sala com 40 bikes e sistema de som imersivo.' },
  { key:'yoga',       name:'Yoga & Pilates',tag:'Incluso Premium', desc:'Instrutores RYT-500 e aparelhos reformer.' },
]

const TESTIMONIALS = [
  { quote:'"Treinei em mais de 8 academias ao longo dos anos. A ForceHub é diferente em nível estrutural, humano e metodológico. Em 14 meses com o personal perdi 28kg e conquistei a melhor forma da minha vida."', name:'Rodrigo Mendes', role:'Aluno há 3 anos · Personal + Musculação', avatar:IMAGES.avatar1, big:true },
  { quote:'"As aulas de CrossFit transformaram minha relação com exercício. Antes era obrigação — agora é o melhor momento do meu dia."', name:'Patricia Silva', role:'CrossFit · 18 meses', avatar:IMAGES.avatar2 },
  { quote:'"Trabalho até meia-noite. Academia 24h com acesso biométrico foi exatamente o que eu precisava."', name:'Lucas Costa', role:'Musculação · 2 anos', avatar:IMAGES.avatar3 },
]

export default function Home({ setPage }) {
  useReveal()
  const go = (p) => { setPage(p); window.scrollTo(0,0) }

  return (
    <>
      {/* ════════════════ HERO ════════════════ */}
      <section style={{
        position:'relative', height:'100vh', minHeight:760,
        display:'flex', flexDirection:'column', justifyContent:'flex-end',
        overflow:'hidden'
      }}>
        {/* BG image with subtle scale */}
        <img src={IMAGES.hero} alt="ForceHub" loading="eager" style={{
          position:'absolute', inset:0, width:'100%', height:'115%',
          objectFit:'cover', objectPosition:'center 20%',
          transform:'scale(1.04)', transition:'transform 12s ease',
          filter:'brightness(.85) contrast(1.08) saturate(1.1)'
        }} />

        {/* Multi-layer overlay — depth + red tint at bottom-left */}
        <div style={{ position:'absolute', inset:0, background:
          'linear-gradient(to bottom, rgba(5,5,5,.08) 0%, rgba(5,5,5,.28) 30%, rgba(5,5,5,.78) 68%, rgba(5,5,5,1) 100%)'
        }} />
        <div style={{ position:'absolute', inset:0, background:
          'linear-gradient(110deg, rgba(180,12,28,.22) 0%, transparent 45%)'
        }} />

        {/* Subtle horizontal lines for texture */}
        <div style={{ position:'absolute', inset:0, backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,.015) 0px, rgba(255,255,255,.015) 1px, transparent 1px, transparent 80px)',
          pointerEvents:'none'
        }} />

        {/* Vertical label */}
        <span style={{
          position:'absolute', right:36, top:'50%',
          transform:'translateY(-50%) rotate(90deg)',
          fontFamily:'var(--ff-cond)', fontSize:'.6rem', fontWeight:700,
          letterSpacing:5.5, textTransform:'uppercase',
          color:'rgba(255,255,255,.18)', whiteSpace:'nowrap', zIndex:2
        }}>FORCEHUB · PERFORMANCE STUDIO · EST. 2012</span>

        {/* Scroll cue */}
        <div style={{
          position:'absolute', left:36, bottom:130, zIndex:2,
          display:'flex', flexDirection:'column', alignItems:'center', gap:10
        }}>
          <div style={{
            width:1, height:60,
            background:'linear-gradient(to bottom, transparent, rgba(255,255,255,.4))',
            animation:'bounce 2.2s ease-in-out infinite'
          }} />
          <span style={{
            fontFamily:'var(--ff-cond)', fontSize:'.58rem', fontWeight:700,
            letterSpacing:4.5, textTransform:'uppercase',
            color:'rgba(255,255,255,.28)', writingMode:'vertical-rl'
          }}>Scroll</span>
        </div>

        {/* Content */}
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <div style={{ padding:'0 0 80px' }}>
            {/* Eyebrow */}
            <div style={{
              display:'flex', alignItems:'center', gap:14, marginBottom:26,
              animation:'fadeIn 1.1s ease .2s both'
            }}>
              <div style={{
                width:40, height:2,
                background:'linear-gradient(90deg,#e8152f,#8f0a20)',
                boxShadow:'0 0 12px rgba(200,16,46,.6)'
              }} />
              <span style={{
                fontFamily:'var(--ff-cond)', fontSize:'.74rem', fontWeight:700,
                letterSpacing:4.5, textTransform:'uppercase', color:'var(--red)'
              }}>Performance Studio · Desde 2012</span>
            </div>

            {/* Main H1 */}
            <h1 style={{
              fontFamily:'var(--ff-display)',
              fontSize:'clamp(4.8rem,13.5vw,14rem)',
              lineHeight:.86, letterSpacing:2, color:'#fff',
              animation:'fadeUp 1.1s var(--ease) .35s both',
              textShadow:'0 8px 60px rgba(0,0,0,.7)'
            }}>
              FORJADO<br />
              NO <span style={{
                color:'var(--red)',
                textShadow:'0 0 60px rgba(200,16,46,.5), 0 8px 40px rgba(0,0,0,.6)'
              }}>LIMITE</span><br />
              <span style={{ WebkitTextStroke:'2px rgba(255,255,255,.75)', color:'transparent' }}>
                DO POSSÍVEL
              </span>
            </h1>

            {/* Bottom row: desc + buttons */}
            <div style={{
              display:'flex', alignItems:'flex-end', justifyContent:'space-between',
              marginTop:48, gap:40, flexWrap:'wrap',
              animation:'fadeUp 1s var(--ease) .65s both'
            }}>
              <p style={{
                fontSize:'1.08rem', color:'rgba(255,255,255,.55)',
                maxWidth:400, lineHeight:1.82,
                borderLeft:'2px solid rgba(200,16,46,.5)',
                paddingLeft:18
              }}>
                Não é uma academia. É um sistema de transformação — método, tecnologia e acompanhamento de elite.
              </p>
              <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
                <button className="btn btn-red btn-lg" onClick={() => go('contato')}>Iniciar Transformação</button>
                <button className="btn btn-ghost btn-lg" onClick={() => go('modalidades')}>Ver Modalidades</button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar — glass */}
        <div style={{
          position:'relative', zIndex:2,
          display:'grid', gridTemplateColumns:'repeat(4,1fr)',
          borderTop:'1px solid rgba(255,255,255,.07)',
          background:'rgba(5,5,5,.55)',
          backdropFilter:'blur(20px)',
          animation:'fadeIn 1s ease 1.1s both'
        }}>
          {[['5.000+','Alunos Ativos'],['18+','Modalidades'],['24h','Acesso Total'],['12+','Anos de Excelência']].map(([v,l],i) => (
            <div key={i} style={{
              padding:'28px 36px',
              borderRight: i<3 ? '1px solid rgba(255,255,255,.07)' : 'none',
              position:'relative', overflow:'hidden',
              transition:'background .3s ease'
            }}
              onMouseOver={e => e.currentTarget.style.background='rgba(200,16,46,.06)'}
              onMouseOut={e  => e.currentTarget.style.background=''}
            >
              <div style={{
                fontFamily:'var(--ff-display)',
                fontSize:'clamp(1.9rem,3vw,2.8rem)',
                color:'#fff', letterSpacing:1, lineHeight:1,
                textShadow:'0 2px 20px rgba(0,0,0,.6)'
              }}>{v}</div>
              <div style={{
                fontFamily:'var(--ff-cond)', fontSize:'.68rem', fontWeight:600,
                letterSpacing:3, textTransform:'uppercase',
                color:'rgba(255,255,255,.32)', marginTop:5
              }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <Marquee />

      {/* ════════════════ SPLIT INTRO ════════════════ */}
      <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:680 }}>
        {/* Image side */}
        <div className="reveal-left" style={{ position:'relative', overflow:'hidden' }}>
          <img src={IMAGES.about} alt="ForceHub" loading="lazy" style={{
            width:'100%', height:'100%', minHeight:520,
            objectFit:'cover', objectPosition:'center 20%',
            transition:'transform 1.4s var(--ease), filter .6s ease',
            filter:'brightness(.88) contrast(1.08) saturate(1.05)',
            display:'block'
          }}
            onMouseOver={e => { e.target.style.transform='scale(1.06)'; e.target.style.filter='brightness(1) contrast(1.05) saturate(1.1)' }}
            onMouseOut={e  => { e.target.style.transform=''; e.target.style.filter='brightness(.88) contrast(1.08) saturate(1.05)' }}
          />
          {/* Diagonal overlay */}
          <div style={{
            position:'absolute', inset:0,
            background:'linear-gradient(135deg, transparent 55%, rgba(5,5,5,.5) 100%)',
            pointerEvents:'none'
          }} />
          {/* Badge */}
          <div style={{
            position:'absolute', bottom:44, left:44,
            background:'linear-gradient(135deg,#e8152f,#8f0a20)',
            color:'#fff', padding:'20px 28px',
            boxShadow:'0 12px 40px rgba(200,16,46,.45)',
          }}>
            <span style={{ fontFamily:'var(--ff-display)', fontSize:'3.2rem', lineHeight:1, display:'block' }}>12+</span>
            <span style={{ fontFamily:'var(--ff-cond)', fontSize:'.68rem', fontWeight:700, letterSpacing:3, textTransform:'uppercase', opacity:.88 }}>Anos transformando vidas</span>
          </div>
          {/* Corner accent */}
          <div style={{
            position:'absolute', top:0, right:0,
            width:4, height:'40%',
            background:'linear-gradient(to bottom,var(--red),transparent)',
          }} />
        </div>

        {/* Text side */}
        <div className="reveal-right" style={{
          padding:'88px 80px',
          display:'flex', flexDirection:'column', justifyContent:'space-between',
          background:'linear-gradient(160deg, var(--g900) 0%, var(--g850) 100%)',
          borderLeft:'1px solid rgba(255,255,255,.04)',
          position:'relative', overflow:'hidden'
        }}>
          {/* BG accent */}
          <div style={{
            position:'absolute', top:-80, right:-80,
            width:280, height:280,
            background:'radial-gradient(circle, rgba(200,16,46,.09) 0%, transparent 70%)',
            pointerEvents:'none'
          }} />

          <div style={{ position:'relative', zIndex:1 }}>
            <div className="eyebrow">Nossa Filosofia</div>
            <div className="accent-line" />
            <h2 style={{
              fontFamily:'var(--ff-display)',
              fontSize:'clamp(2.4rem,4.2vw,4.4rem)',
              letterSpacing:2, lineHeight:.92, color:'#fff', marginTop:16
            }}>
              MAIS QUE UMA<br />ACADEMIA.<br />
              <span style={{ color:'var(--red)', textShadow:'0 0 40px rgba(200,16,46,.35)' }}>UM SISTEMA.</span>
            </h2>
            <p style={{
              fontSize:'1.05rem', color:'rgba(255,255,255,.55)',
              lineHeight:1.8, maxWidth:480, marginTop:22
            }}>
              Na ForceHub, cada detalhe é projetado para maximizar sua performance. Da avaliação inicial ao protocolo mensal — ciência aplicada ao seu resultado.
            </p>
          </div>

          <div style={{ display:'flex', flexDirection:'column', marginTop:40, position:'relative', zIndex:1 }}>
            {[
              ['01','Avaliação de Alta Precisão','Bioimpedância, VO₂ máx e protocolo de 14 pontos para mapear sua condição atual.'],
              ['02','Método Periodizado','Planilhas elaboradas por fisiologistas e atualizadas mensalmente via app exclusivo.'],
              ['03','Equipe CREF Certificada','Todos com certificações nacionais e internacionais validadas e atualizadas.'],
              ['04','Dashboard de Evolução','Metas semanais, histórico e relatório mensal de progresso no app pessoal.'],
            ].map(([n,t,d], i) => (
              <div key={n} style={{
                display:'flex', gap:22, padding:'22px 0',
                borderBottom:'1px solid rgba(255,255,255,.05)',
                transition:'background .25s ease, padding-left .25s var(--ease)',
                cursor:'default', borderRadius:2
              }}
                onMouseOver={e => { e.currentTarget.style.paddingLeft='10px'; e.currentTarget.style.background='rgba(255,255,255,.02)' }}
                onMouseOut={e  => { e.currentTarget.style.paddingLeft='0'; e.currentTarget.style.background='' }}
              >
                <div style={{
                  fontFamily:'var(--ff-display)', fontSize:'1.6rem',
                  color:'rgba(200,16,46,.25)', flexShrink:0, width:34, paddingTop:2,
                  transition:'color .25s ease'
                }}>{n}</div>
                <div>
                  <div style={{ fontFamily:'var(--ff-cond)', fontSize:'1.02rem', fontWeight:700, letterSpacing:.5, color:'rgba(255,255,255,.9)', marginBottom:5 }}>{t}</div>
                  <div style={{ fontSize:'.875rem', color:'rgba(255,255,255,.42)', lineHeight:1.68 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginTop:38, position:'relative', zIndex:1 }}>
            <button className="btn btn-red" onClick={() => go('estrutura')}>Ver Estrutura</button>
            <button className="btn btn-ghost" onClick={() => go('trainers')}>Conhecer Trainers</button>
          </div>
        </div>
      </section>

      {/* ════════════════ MODALITIES MOSAIC ════════════════ */}
      <section className="section" style={{ background:'linear-gradient(180deg,var(--bg) 0%,var(--g950) 50%,var(--bg) 100%)' }}>
        <div className="container">
          <div className="reveal" style={{
            display:'flex', alignItems:'flex-end',
            justifyContent:'space-between', marginBottom:56,
            flexWrap:'wrap', gap:28
          }}>
            <div>
              <div className="eyebrow">O Que Oferecemos</div>
              <div className="accent-line" />
              <h2 style={{
                fontFamily:'var(--ff-display)',
                fontSize:'clamp(2.8rem,5.5vw,5rem)',
                letterSpacing:2, lineHeight:.92
              }}>NOSSAS<br /><span style={{ color:'var(--red)' }}>MODALIDADES</span></h2>
            </div>
            <div style={{ textAlign:'right' }}>
              <p style={{ color:'rgba(255,255,255,.45)', fontSize:'.95rem', maxWidth:300, marginBottom:22, lineHeight:1.75 }}>
                18 atividades para todos os objetivos, níveis e estilos de vida.
              </p>
              <button className="btn btn-outline-red" onClick={() => go('modalidades')}>Ver Todas →</button>
            </div>
          </div>
        </div>

        {/* Mosaic grid — asymmetric, gap-less */}
        <div className="reveal d2" style={{
          display:'grid',
          gridTemplateColumns:'2.2fr 1fr 1fr',
          gridTemplateRows:'400px 400px',
          gap:3,
          maxWidth:1360, margin:'0 auto', padding:'0 48px'
        }}>
          {MODS.map(m => <ModTile key={m.key} mod={m} onClick={() => go('modalidades')} />)}
        </div>
      </section>

      {/* ════════════════ MANIFESTO ════════════════ */}
      <div style={{
        background:'linear-gradient(135deg,#900b1f 0%,#C8102E 40%,#a80e28 70%,#6e0717 100%)',
        backgroundSize:'300% 300%',
        animation:'gradFlow 8s ease infinite',
        position:'relative', overflow:'hidden', padding:'160px 0'
      }}>
        {/* Watermark */}
        <div style={{
          position:'absolute', top:'50%', left:'50%',
          transform:'translate(-50%,-50%)',
          fontFamily:'var(--ff-display)',
          fontSize:'clamp(10rem,30vw,28rem)',
          color:'rgba(255,255,255,.055)',
          whiteSpace:'nowrap', pointerEvents:'none', letterSpacing:4,
          userSelect:'none'
        }}>FORCE</div>
        {/* Grid lines */}
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',
          backgroundSize:'60px 60px',
          pointerEvents:'none'
        }} />

        <div className="container">
          <div className="reveal-scale" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
            <div style={{
              fontFamily:'var(--ff-display)',
              fontSize:'clamp(2.4rem,6.5vw,7rem)',
              letterSpacing:2, color:'#fff', lineHeight:.92,
              maxWidth:1100, margin:'0 auto',
              textShadow:'0 4px 48px rgba(0,0,0,.4)'
            }}>
              O LIMITE QUE VOCÊ<br />
              <span style={{ WebkitTextStroke:'2px rgba(255,255,255,.45)', color:'transparent' }}>ACREDITA TER</span><br />
              NÃO EXISTE AQUI.
            </div>
            <div style={{
              marginTop:36,
              fontFamily:'var(--ff-cond)', fontSize:'.88rem', fontWeight:700,
              letterSpacing:5, textTransform:'uppercase', color:'rgba(255,255,255,.5)'
            }}>— A Filosofia ForceHub</div>
            <div style={{ marginTop:44 }}>
              <button className="btn btn-ghost btn-lg"
                style={{ borderColor:'rgba(255,255,255,.35)', backdropFilter:'blur(8px)' }}
                onClick={() => go('contato')}>Faça Parte →</button>
            </div>
          </div>
        </div>
      </div>

      <StatsBand />

      {/* ════════════════ TRAINERS STRIP ════════════════ */}
      <section className="section" style={{ background:'var(--g950)' }}>
        <div className="container" style={{ marginBottom:48 }}>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:24 }}>
            <div className="reveal">
              <div className="eyebrow">Nossa Equipe</div>
              <div className="accent-line" />
              <h2 style={{
                fontFamily:'var(--ff-display)',
                fontSize:'clamp(2.8rem,5.5vw,5rem)',
                letterSpacing:2, lineHeight:.92
              }}>TRAINERS<br /><span style={{ color:'var(--red)' }}>DE ELITE</span></h2>
            </div>
            <button className="btn btn-outline-red reveal d2" onClick={() => go('trainers')}>
              Ver Toda a Equipe →
            </button>
          </div>
        </div>

        {/* Horizontal scrollable strip */}
        <div style={{
          display:'flex', gap:3, overflowX:'auto', scrollbarWidth:'none',
          padding:'0 max(48px, calc((100vw - 1360px) / 2 + 48px))',
          scrollSnapType:'x mandatory'
        }}>
          {[
            { key:'trainer1', name:'Rafael Costa',  spec:'Musculação · Hipertrofia', certs:'CREF 001234-G/SP · CSCS' },
            { key:'trainer2', name:'Camila Torres', spec:'CrossFit · Funcional',     certs:'CrossFit L2 · CREF 005678' },
            { key:'trainer3', name:'Bruno Lima',    spec:'Muay Thai · MMA',          certs:'CBTM Faixa Preta · CREF' },
            { key:'trainer4', name:'Diego Martins', spec:'Spinning · Cardio',        certs:'Mad Dogg · CREF 003456' },
            { key:'trainer5', name:'Ana Beatriz',   spec:'Yoga · Pilates',           certs:'RYT 500 · CREF 002345' },
          ].map((t,i) => <TrainerCard key={t.key} t={t} delay={i+1} />)}
        </div>
      </section>

      {/* ════════════════ TESTIMONIALS ════════════════ */}
      <section className="section" style={{ paddingTop:0 }}>
        <div className="container" style={{ marginBottom:48 }}>
          <div className="reveal">
            <div className="eyebrow">Depoimentos</div>
            <div className="accent-line" />
            <h2 style={{
              fontFamily:'var(--ff-display)',
              fontSize:'clamp(2.8rem,5.5vw,5rem)',
              letterSpacing:2, lineHeight:.92
            }}>HISTÓRIAS<br /><span style={{ color:'var(--red)' }}>REAIS</span></h2>
          </div>
        </div>
        <div className="container">
          <div className="reveal" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3 }}>
            {TESTIMONIALS.map((t,i) => <TestiBlock key={i} t={t} />)}
          </div>
        </div>
      </section>

      {/* ════════════════ CTA BAND ════════════════ */}
      <div style={{ position:'relative', overflow:'hidden' }}>
        <img src={IMAGES.transform1} alt="" style={{
          width:'100%', height:620, objectFit:'cover', display:'block',
          filter:'brightness(.7) contrast(1.1) saturate(.9)',
          transform:'scale(1.04)', transition:'transform 10s ease'
        }} />
        {/* Multi-layer overlay */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(100deg,rgba(5,5,5,.97) 0%,rgba(5,5,5,.72) 55%,rgba(5,5,5,.3) 100%)' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(5,5,5,.6) 0%,transparent 50%)' }} />
        {/* Red diagonal glow */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(120deg,rgba(200,16,46,.18) 0%,transparent 40%)', mixBlendMode:'screen' }} />

        <div className="reveal" style={{
          position:'absolute', inset:0,
          display:'flex', flexDirection:'column', justifyContent:'center',
          padding:'0 max(80px, calc((100vw - 1360px)/2 + 80px))'
        }}>
          {/* Eyebrow */}
          <div style={{
            display:'flex', alignItems:'center', gap:12, marginBottom:20,
            fontFamily:'var(--ff-cond)', fontSize:'.72rem', fontWeight:700,
            letterSpacing:4.5, textTransform:'uppercase', color:'var(--red)'
          }}>
            <div style={{ width:22, height:2, background:'var(--red)', boxShadow:'0 0 8px rgba(200,16,46,.6)' }} />
            Oferta Exclusiva
          </div>
          <div style={{
            fontFamily:'var(--ff-display)',
            fontSize:'clamp(3.2rem,8.5vw,9rem)',
            letterSpacing:2, color:'#fff', lineHeight:.88,
            marginBottom:40, textShadow:'0 4px 48px rgba(0,0,0,.7)'
          }}>
            COMECE<br />
            <span style={{ WebkitTextStroke:'2px rgba(255,255,255,.28)', color:'transparent' }}>AGORA</span>
          </div>
          <p style={{
            fontSize:'1.08rem', color:'rgba(255,255,255,.55)',
            maxWidth:440, marginBottom:40, lineHeight:1.8,
            borderLeft:'2px solid rgba(200,16,46,.5)', paddingLeft:18
          }}>
            Primeira semana completamente gratuita. Sem burocracia, sem cartão.
          </p>
          <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
            <button className="btn btn-red btn-lg" onClick={() => go('contato')}>Agendar Aula Grátis</button>
            <button className="btn btn-ghost btn-lg" onClick={() => go('planos')}>Ver Planos e Preços</button>
          </div>
        </div>
      </div>
    </>
  )
}

/* ── ModTile — mosaic card with layered hover ── */
function ModTile({ mod, onClick }) {
  const hoverOn = (e) => {
    const el = e.currentTarget
    el.querySelector('img').style.transform = 'scale(1.09)'
    el.querySelector('img').style.filter = 'brightness(1.05) saturate(1.1)'
    const desc = el.querySelector('.mod-desc')
    if (desc) { desc.style.maxHeight = '90px'; desc.style.opacity = '1' }
    const arrow = el.querySelector('.mod-arrow')
    if (arrow) { arrow.style.opacity = '1'; arrow.style.transform = 'scale(1) rotate(0deg)' }
    const body = el.querySelector('.mod-body')
    if (body) body.style.transform = 'none'
  }
  const hoverOff = (e) => {
    const el = e.currentTarget
    el.querySelector('img').style.transform = ''
    el.querySelector('img').style.filter = ''
    const desc = el.querySelector('.mod-desc')
    if (desc) { desc.style.maxHeight = '0'; desc.style.opacity = '0' }
    const arrow = el.querySelector('.mod-arrow')
    if (arrow) { arrow.style.opacity = '0'; arrow.style.transform = 'scale(.5) rotate(-15deg)' }
    const body = el.querySelector('.mod-body')
    if (body) body.style.transform = 'translateY(8px)'
  }

  return (
    <div onClick={onClick}
      style={{ position:'relative', overflow:'hidden', cursor:'pointer', gridRow:mod.span?'span 2':'auto' }}
      onMouseOver={hoverOn} onMouseOut={hoverOff}>
      <img src={IMAGES[mod.key]} alt={mod.name} style={{
        width:'100%', height:'100%', objectFit:'cover',
        transition:'transform .85s var(--ease), filter .55s ease',
        filter:'brightness(.88) saturate(.95)'
      }} />
      {/* Gradient overlay — richer */}
      <div style={{ position:'absolute', inset:0,
        background:'linear-gradient(to top, rgba(5,5,5,.97) 0%, rgba(5,5,5,.45) 45%, rgba(5,5,5,.06) 100%)'
      }} />
      {/* Top-right red accent on hover */}
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:3,
        background:'linear-gradient(90deg,var(--red),transparent)',
        transform:'scaleX(0)', transformOrigin:'left',
        transition:'transform .4s var(--ease)'
      }} className="mod-top-line" />

      {/* Arrow indicator */}
      <div className="mod-arrow" style={{
        position:'absolute', top:22, right:22,
        width:40, height:40,
        background:'linear-gradient(135deg,#e8152f,#8f0a20)',
        borderRadius:'50%',
        display:'flex', alignItems:'center', justifyContent:'center',
        fontSize:16, color:'#fff',
        opacity:0, transform:'scale(.5) rotate(-15deg)',
        transition:'all .4s var(--ease-back)',
        boxShadow:'0 4px 16px rgba(200,16,46,.5)'
      }}>→</div>

      <div className="mod-body" style={{
        position:'absolute', bottom:0, left:0, right:0,
        padding:'30px 34px',
        transform:'translateY(8px)',
        transition:'transform .45s var(--ease)'
      }}>
        <div style={{
          display:'inline-block',
          fontFamily:'var(--ff-cond)', fontSize:'.63rem', fontWeight:700,
          letterSpacing:2.5, textTransform:'uppercase',
          padding:'5px 13px', marginBottom:10, borderRadius:2,
          ...(mod.span
            ? { background:'linear-gradient(135deg,#e8152f,#8f0a20)', color:'#fff', boxShadow:'0 4px 12px rgba(200,16,46,.4)' }
            : { border:'1px solid rgba(255,255,255,.2)', color:'rgba(255,255,255,.6)', backdropFilter:'blur(4px)' }
          )
        }}>{mod.tag}</div>
        <div style={{
          fontFamily:'var(--ff-display)',
          fontSize:'clamp(1.9rem,3vw,2.8rem)',
          letterSpacing:1.5, color:'#fff', lineHeight:.96,
          textShadow:'0 2px 24px rgba(0,0,0,.7)'
        }}>{mod.name}</div>
        <div className="mod-desc" style={{
          fontSize:'.875rem', color:'rgba(255,255,255,.52)',
          lineHeight:1.68, marginTop:10,
          maxHeight:0, overflow:'hidden', opacity:0,
          transition:'max-height .45s var(--ease), opacity .45s ease'
        }}>{mod.desc}</div>
      </div>
    </div>
  )
}

/* ── TrainerCard — grayscale to color with line reveal ── */
function TrainerCard({ t, delay }) {
  return (
    <div className={`reveal d${delay}`}
      style={{ flexShrink:0, width:310, height:460, position:'relative', overflow:'hidden', cursor:'pointer', scrollSnapAlign:'start' }}
      onMouseOver={e => {
        e.currentTarget.querySelector('img').style.filter = 'grayscale(0%) brightness(1.05)'
        e.currentTarget.querySelector('img').style.transform = 'scale(1.07)'
        const line = e.currentTarget.querySelector('.tline')
        if (line) line.style.width = '50px'
        const info = e.currentTarget.querySelector('.t-info')
        if (info) info.style.transform = 'translateY(-6px)'
      }}
      onMouseOut={e => {
        e.currentTarget.querySelector('img').style.filter = 'grayscale(30%) brightness(.85)'
        e.currentTarget.querySelector('img').style.transform = ''
        const line = e.currentTarget.querySelector('.tline')
        if (line) line.style.width = '0'
        const info = e.currentTarget.querySelector('.t-info')
        if (info) info.style.transform = ''
      }}>
      <img src={IMAGES[t.key]} alt={t.name} style={{
        width:'100%', height:'100%', objectFit:'cover',
        filter:'grayscale(30%) brightness(.85)',
        transition:'all .75s var(--ease)'
      }} />
      {/* Gradient */}
      <div style={{ position:'absolute', inset:0,
        background:'linear-gradient(to top, rgba(5,5,5,.98) 0%, rgba(5,5,5,.3) 55%, transparent 100%)'
      }} />
      {/* Red top accent */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,var(--red),transparent)' }} />

      <div className="t-info" style={{ position:'absolute', bottom:0, left:0, right:0, padding:'28px 30px', transition:'transform .4s var(--ease)' }}>
        <div style={{ fontFamily:'var(--ff-cond)', fontSize:'1.25rem', fontWeight:900, color:'#fff', letterSpacing:.5 }}>{t.name}</div>
        <div style={{ fontSize:'.76rem', color:'var(--red)', fontWeight:700, letterSpacing:2, textTransform:'uppercase', fontFamily:'var(--ff-cond)', marginTop:3 }}>{t.spec}</div>
        <div style={{ fontSize:'.73rem', color:'rgba(255,255,255,.32)', marginTop:5 }}>{t.certs}</div>
        <div className="tline" style={{ width:0, height:2, background:'linear-gradient(90deg,var(--red),transparent)', marginTop:12, transition:'width .45s var(--ease)', boxShadow:'0 0 8px rgba(200,16,46,.5)' }} />
      </div>
    </div>
  )
}

/* ── TestiBlock — testimonial card ── */
function TestiBlock({ t }) {
  return (
    <div style={{
      background: t.big ? 'linear-gradient(145deg,var(--g800) 0%,var(--g850) 100%)' : 'linear-gradient(145deg,var(--g900) 0%,var(--g850) 100%)',
      padding: t.big ? '56px 52px' : '44px 44px',
      gridRow: t.big ? 'span 2' : 'auto',
      position:'relative', overflow:'hidden',
      borderTop:'1px solid rgba(255,255,255,.05)',
      transition:'transform .4s var(--ease)',
    }}
      onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'}
      onMouseOut={e  => e.currentTarget.style.transform = ''}
    >
      {/* Ambient glow */}
      <div style={{
        position:'absolute', top:-40, right:-40,
        width:180, height:180,
        background:'radial-gradient(circle, rgba(200,16,46,.08) 0%, transparent 70%)',
        pointerEvents:'none'
      }} />
      {/* Red top border */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg,var(--red),transparent)', opacity:.5 }} />

      <div style={{
        fontFamily:'var(--ff-display)',
        fontSize: t.big ? '7.5rem' : '4.5rem',
        color:'var(--red)', lineHeight:.5, opacity:.2,
        marginBottom:28, userSelect:'none'
      }}>"</div>
      <p style={{
        fontSize: t.big ? '1.22rem' : '.97rem',
        color:'rgba(255,255,255,.72)',
        lineHeight:1.88, fontStyle:'italic', marginBottom:32,
        position:'relative', zIndex:1
      }}>{t.quote}</p>
      <div style={{ display:'flex', alignItems:'center', gap:14, position:'relative', zIndex:1 }}>
        <img src={t.avatar} alt={t.name} style={{
          width:50, height:50, borderRadius:'50%',
          objectFit:'cover', border:'2px solid var(--red)',
          flexShrink:0, boxShadow:'0 4px 16px rgba(200,16,46,.3)'
        }} />
        <div>
          <div style={{ color:'var(--red)', fontSize:11, marginBottom:4, letterSpacing:1 }}>★★★★★</div>
          <div style={{ fontFamily:'var(--ff-cond)', fontSize:'.97rem', fontWeight:800, color:'#fff', letterSpacing:.5 }}>{t.name}</div>
          <div style={{ fontSize:'.76rem', color:'rgba(255,255,255,.36)', marginTop:1 }}>{t.role}</div>
        </div>
      </div>
    </div>
  )
}
