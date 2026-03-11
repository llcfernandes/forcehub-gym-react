import { useState, useEffect } from 'react'
const LINKS = [
  { id: 'home',        label: 'Início'      },
  { id: 'modalidades', label: 'Modalidades' },
  { id: 'planos',      label: 'Planos'      },
  { id: 'estrutura',   label: 'Estrutura'   },
  { id: 'trainers',    label: 'Trainers'    },
  { id: 'contato',     label: 'Contato'     },
]

export default function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const go = (p) => { setPage(p); setOpen(false); window.scrollTo(0, 0) }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => go('home')}>
            <div className="nav-bolt">⚡</div>
            <div className="nav-brand">
              <div className="nav-name">FORCEHUB</div>
              <div className="nav-sub">Performance Studio</div>
            </div>
          </button>

          <div className="nav-links">
            {LINKS.map(l => (
              <button
                key={l.id}
                className={`nav-link${page === l.id ? ' active' : ''}`}
                onClick={() => go(l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button className="nav-cta-btn" onClick={() => go('contato')}>
            Aula Grátis
          </button>

          <button
            className={`nav-hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer${open ? ' open' : ''}`}>
        {LINKS.map(l => (
          <button key={l.id} className="drawer-link" onClick={() => go(l.id)}>
            {l.label.toUpperCase()}
          </button>
        ))}
        <button
          className="btn btn-red btn-lg"
          style={{ marginTop: 24 }}
          onClick={() => go('contato')}
        >
          Agendar Aula Grátis
        </button>
      </div>
    </>
  )
}
