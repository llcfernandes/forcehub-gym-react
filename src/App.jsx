import { useState } from 'react'
import Nav        from './components/Nav'
import Footer     from './components/Footer'
import Home       from './pages/Home'
import Modalidades from './pages/Modalidades'
import Planos     from './pages/Planos'
import Estrutura  from './pages/Estrutura'
import Trainers   from './pages/Trainers'
import Contato    from './pages/Contato'

const PAGES = {
  home:        Home,
  modalidades: Modalidades,
  planos:      Planos,
  estrutura:   Estrutura,
  trainers:    Trainers,
  contato:     Contato,
}

export default function App() {
  const [page, setPage] = useState('home')
  const Page = PAGES[page] || Home

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <div style={{ paddingTop: 'var(--nav)' }}>
        <Page setPage={setPage} />
      </div>
      <Footer setPage={setPage} />
    </>
  )
}
