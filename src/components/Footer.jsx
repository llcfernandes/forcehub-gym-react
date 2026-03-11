export default function Footer({ setPage }) {
  const go = (p) => { setPage(p); window.scrollTo(0, 0) }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">

          {/* Brand */}
          <div>
            <div className="footer-logo-row">
              <div className="footer-bolt">⚡</div>
              <span className="footer-brand-name">FORCEHUB</span>
            </div>
            <p className="footer-tagline">
              A academia de alta performance que redefine o padrão de treinamento.
              Método comprovado, resultados reais.
            </p>
            <div className="footer-socials">
              {['▶', '♪', '◉', '●'].map((s, i) => (
                <button key={i} className="footer-social">{s}</button>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="footer-col-title">Explore</div>
            <div className="footer-links">
              {[['home','Início'],['modalidades','Modalidades'],['estrutura','Estrutura'],['trainers','Trainers']].map(([p,l]) => (
                <button key={p} className="footer-link" onClick={() => go(p)}>{l}</button>
              ))}
            </div>
          </div>

          {/* Planos */}
          <div>
            <div className="footer-col-title">Planos</div>
            <div className="footer-links">
              {['Starter — R$89','Performance — R$149','Elite — R$349','Personal Trainer','Aula Experimental'].map((t, i) => (
                <button key={i} className="footer-link" onClick={() => go('planos')}>{t}</button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contato</div>
            {[
              ['📍','Endereço',   'Av. das Modalidades, 1000'],
              ['📱','WhatsApp',   '(00) 99999-0000'],
              ['⏰','Horário',    'Treino 24h · Recepção 6h–22h'],
              ['✉️','E-mail',    'contato@forcehub.com.br'],
            ].map(([icon, label, val]) => (
              <div key={label} className="footer-contact-row">
                <div className="footer-contact-icon">{icon}</div>
                <div>
                  <div className="footer-contact-label">{label}</div>
                  <div className="footer-contact-val">{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} ForceHub Performance Studio. Todos os direitos reservados. CREF: 012345-G/SP
          </p>
          <p className="footer-dev">
            Desenvolvido por <strong>Lucas Fernandes</strong> – Desenvolvedor Web
          </p>
        </div>
      </div>
    </footer>
  )
}
