import { useState } from 'react'
import { useReveal } from '../hooks'
import Marquee  from '../components/Marquee'
import PageHero from '../components/PageHero'
import { IMAGES } from '../utils/images'

const FAQS = [
  ['Como funciona a semana grátis?', 'Basta preencher o formulário ou entrar em contato via WhatsApp. Você terá 7 dias com acesso completo ao plano Performance sem compromisso e sem dados de cartão.'],
  ['Há alguma taxa de matrícula?', 'Não. A ForceHub não cobra taxa de matrícula. O primeiro pagamento ocorre apenas após os 7 dias de teste, caso opte por continuar.'],
  ['Posso cancelar a qualquer momento?', 'Sim. Nenhum plano possui fidelidade ou multa de cancelamento. Basta comunicar com 10 dias de antecedência.'],
  ['Oferecem planos corporativos?', 'Sim. Para grupos acima de 5 pessoas há condições especiais. Entre em contato pelo WhatsApp para uma proposta personalizada.'],
  ['O estacionamento é realmente gratuito?', 'Sim. 60 vagas cobertas sem custo para alunos ativos. Monitoramento 24h por câmeras.'],
]

export default function Contato({ setPage }) {
  useReveal()
  const [form, setForm] = useState({ name:'', phone:'', email:'', plan:'Plano Performance – R$ 149/mês', goal:'', obs:'' })
  const [openFaq, setOpenFaq] = useState(null)

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const sendWA = () => {
    if (!form.name.trim()) { alert('Informe seu nome.'); return }
    let msg = `Olá!%20Quero%20agendar%20minha%20aula%20experimental%20gratuita.%0A%0A`
    msg += `*Nome:*%20${encodeURIComponent(form.name)}%0A`
    if (form.phone) msg += `*Tel:*%20${encodeURIComponent(form.phone)}%0A`
    if (form.email) msg += `*Email:*%20${encodeURIComponent(form.email)}%0A`
    msg += `*Plano:*%20${encodeURIComponent(form.plan)}%0A`
    if (form.goal) msg += `*Objetivo:*%20${encodeURIComponent(form.goal)}%0A`
    if (form.obs)  msg += `*Obs:*%20${encodeURIComponent(form.obs)}%0A`
    window.open(`https://wa.me/5500000000000?text=${msg}`, '_blank', 'noopener')
  }

  return (
    <>
      <PageHero img={IMAGES.hero} title="AGENDE SUA" accent="AULA GRÁTIS" breadcrumb="Contato" setPage={setPage} />
      <Marquee />

      {/* CONTACT LAYOUT */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1.45fr', gap:3, minHeight:640 }}>

        {/* LEFT — info */}
        <div className="reveal-left" style={{
          background:'linear-gradient(160deg,var(--g900) 0%,var(--g850) 100%)',
          padding:'80px 64px',
          display:'flex', flexDirection:'column', justifyContent:'space-between',
          position:'relative', overflow:'hidden'
        }}>
          {/* Ambient */}
          <div style={{ position:'absolute',top:-60,right:-60,width:240,height:240, background:'radial-gradient(circle,rgba(200,16,46,.1) 0%,transparent 70%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute',top:0,left:0,bottom:0,width:3, background:'linear-gradient(to bottom,var(--red),transparent)' }} />

          <div style={{ position:'relative', zIndex:1 }}>
            <div className="eyebrow">Informações</div>
            <div className="accent-line" />
            <h2 style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(2rem,4vw,3.2rem)', letterSpacing:2, marginBottom:44, lineHeight:.95 }}>
              VENHA NOS<br /><span style={{ color:'var(--red)' }}>CONHECER</span>
            </h2>

            {[
              ['📍','Endereço',  'Av. das Modalidades, 1000 – Centro'],
              ['📱','WhatsApp',  '(00) 99999-0000'],
              ['📞','Telefone',  '(00) 3456-7890'],
              ['✉️','E-mail',   'contato@forcehub.com.br'],
              ['⏰','Treino',    '24 horas · 365 dias por ano'],
              ['🏢','Recepção', 'Seg–Sex 6h–22h · Sáb 7h–20h'],
              ['🆔','CREF',      '012345-G/SP'],
            ].map(([icon,label,val]) => (
              <div key={label} style={{
                display:'flex', gap:16, alignItems:'flex-start', marginBottom:22,
                transition:'transform .25s var(--ease)'
              }}
                onMouseOver={e => e.currentTarget.style.transform='translateX(5px)'}
                onMouseOut={e  => e.currentTarget.style.transform=''}>
                <div style={{
                  width:40, height:40, flexShrink:0,
                  background:'rgba(200,16,46,.1)',
                  border:'1px solid rgba(200,16,46,.18)',
                  borderRadius:'var(--r)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'var(--red)', fontSize:15,
                  transition:'background .25s ease, box-shadow .25s ease'
                }}>{icon}</div>
                <div>
                  <div style={{ fontFamily:'var(--ff-cond)', fontSize:'.62rem', fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', color:'rgba(255,255,255,.28)', marginBottom:2 }}>{label}</div>
                  <div style={{ fontSize:'.9rem', color:'rgba(255,255,255,.78)', fontWeight:500 }}>{val}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ paddingTop:32, borderTop:'1px solid rgba(255,255,255,.06)', position:'relative', zIndex:1 }}>
            <div className="eyebrow" style={{ marginBottom:16 }}>Redes Sociais</div>
            <div style={{ display:'flex', gap:10 }}>
              {['Instagram','TikTok','YouTube'].map((s,i) => (
                <button key={i} style={{
                  padding:'10px 18px',
                  background:'rgba(255,255,255,.04)',
                  border:'1px solid rgba(255,255,255,.07)',
                  color:'rgba(255,255,255,.5)',
                  fontFamily:'var(--ff-cond)', fontSize:'.7rem', fontWeight:700, letterSpacing:2,
                  textTransform:'uppercase', borderRadius:'var(--r)', cursor:'pointer',
                  transition:'all .25s var(--ease)'
                }}
                  onMouseOver={e => { e.target.style.background='var(--red)'; e.target.style.borderColor='var(--red)'; e.target.style.color='#fff'; e.target.style.transform='translateY(-2px)' }}
                  onMouseOut={e  => { e.target.style.background='rgba(255,255,255,.04)'; e.target.style.borderColor='rgba(255,255,255,.07)'; e.target.style.color='rgba(255,255,255,.5)'; e.target.style.transform='' }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="reveal-right" style={{
          background:'linear-gradient(160deg,var(--g800) 0%,var(--g850) 100%)',
          padding:'80px 64px',
          position:'relative', overflow:'hidden'
        }}>
          <div style={{ position:'absolute',bottom:-80,left:-80,width:300,height:300, background:'radial-gradient(circle,rgba(200,16,46,.07) 0%,transparent 70%)', pointerEvents:'none' }} />

          <div style={{ fontFamily:'var(--ff-display)', fontSize:'2.6rem', letterSpacing:1.5, color:'#fff', marginBottom:8, lineHeight:.95 }}>Agendar Aula</div>
          <div style={{ fontSize:'.9rem', color:'rgba(255,255,255,.38)', marginBottom:40 }}>Primeira semana grátis. Sem cartão de crédito.</div>

          <div style={{ position:'relative', zIndex:1 }}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nome completo *</label>
                <input className="form-input" placeholder="Seu nome" value={form.name} onChange={set('name')} />
              </div>
              <div className="form-group">
                <label className="form-label">WhatsApp *</label>
                <input className="form-input" type="tel" placeholder="(00) 00000-0000" value={form.phone} onChange={set('phone')} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">E-mail</label>
              <input className="form-input" type="email" placeholder="seu@email.com" value={form.email} onChange={set('email')} />
            </div>
            <div className="form-group">
              <label className="form-label">Plano de interesse</label>
              <select className="form-select" value={form.plan} onChange={set('plan')}>
                <option>Plano Starter – R$ 89/mês</option>
                <option>Plano Performance – R$ 149/mês</option>
                <option>Plano Elite – R$ 349/mês</option>
                <option>Personal Trainer</option>
                <option>Quero conhecer primeiro</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Objetivo principal</label>
              <select className="form-select" value={form.goal} onChange={set('goal')}>
                <option value="">Selecione seu objetivo</option>
                <option>Perda de peso / Emagrecimento</option>
                <option>Ganho de massa muscular</option>
                <option>Condicionamento físico</option>
                <option>Performance esportiva</option>
                <option>Saúde e bem-estar</option>
                <option>Reabilitação</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Observações</label>
              <textarea className="form-textarea" placeholder="Horário preferido, lesões, dúvidas…" value={form.obs} onChange={set('obs')} />
            </div>

            <button onClick={sendWA} style={{
              display:'flex', alignItems:'center', justifyContent:'center', gap:12,
              width:'100%', padding:18,
              background:'linear-gradient(135deg,#e8152f,#8f0a20)',
              color:'#fff', fontFamily:'var(--ff-cond)', fontSize:'.9rem',
              fontWeight:700, letterSpacing:3, textTransform:'uppercase',
              border:'none', borderRadius:'var(--r)', cursor:'pointer',
              transition:'transform .28s var(--ease), box-shadow .28s ease',
              boxShadow:'0 4px 24px rgba(200,16,46,.4)',
              marginTop:8
            }}
              onMouseOver={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 10px 40px rgba(200,16,46,.55)' }}
              onMouseOut={e  => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 4px 24px rgba(200,16,46,.4)' }}>
              📱 Enviar pelo WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* MAP — styled grid */}
      <div style={{
        background:'var(--g900)', height:380,
        display:'flex', alignItems:'center', justifyContent:'center',
        position:'relative', overflow:'hidden'
      }}>
        <div style={{ position:'absolute',inset:0,
          backgroundImage:'linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)',
          backgroundSize:'44px 44px'
        }} />
        <div style={{ position:'absolute',inset:0,
          background:'radial-gradient(ellipse at center,rgba(200,16,46,.08) 0%,transparent 65%)'
        }} />
        <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',display:'flex',flexDirection:'column',alignItems:'center',zIndex:2 }}>
          <div style={{
            width:18, height:18,
            background:'var(--red)', borderRadius:'50%',
            boxShadow:'0 0 0 6px rgba(200,16,46,.22),0 0 0 14px rgba(200,16,46,.1)',
            animation:'pulseRed 2.5s ease-in-out infinite'
          }} />
          <div style={{ width:2, height:36, background:'linear-gradient(to bottom,var(--red),transparent)' }} />
          <div style={{
            background:'linear-gradient(135deg,#e8152f,#8f0a20)',
            color:'#fff', fontFamily:'var(--ff-cond)', fontSize:'.73rem',
            fontWeight:700, letterSpacing:2, padding:'7px 16px', marginTop:6,
            whiteSpace:'nowrap', boxShadow:'0 4px 16px rgba(200,16,46,.4)',
            borderRadius:'var(--r)'
          }}>FORCEHUB — Av. das Modalidades, 1000</div>
        </div>
      </div>

      {/* FAQ */}
      <section className="section" style={{ background:'var(--g900)' }}>
        <div className="container-sm">
          <div className="reveal" style={{ marginBottom:52 }}>
            <div className="eyebrow">Dúvidas</div>
            <div className="accent-line" />
            <h2 style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(2.2rem,4.5vw,3.8rem)', letterSpacing:2 }}>PERGUNTAS FREQUENTES</h2>
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
