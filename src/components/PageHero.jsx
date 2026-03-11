import { useEffect, useRef } from 'react'

export default function PageHero({ img, title, accent, breadcrumb, setPage }) {
  const imgRef = useRef(null)

  /* Subtle parallax on scroll */
  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return
      const y = window.scrollY * 0.28
      imgRef.current.style.transform = `scale(1.08) translateY(${y}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page-hero">
      <div className="page-hero-media">
        <img ref={imgRef} src={img} alt={title} style={{ transform:'scale(1.08)' }} />
      </div>
      <div className="page-hero-grad" />

      {/* Corner accent */}
      <div style={{
        position:'absolute', top:0, right:0,
        width:240, height:3,
        background:'linear-gradient(to left,var(--red),transparent)',
        zIndex:2
      }} />

      <div className="container">
        <div className="page-hero-content">
          <div className="breadcrumb">
            <button className="bc-item" onClick={() => { setPage('home'); window.scrollTo(0,0) }}>Início</button>
            <span className="bc-sep">›</span>
            <span className="bc-item bc-active">{breadcrumb}</span>
          </div>
          <h1 className="page-h1">
            {title}<br />
            <span style={{
              color:'var(--red)',
              textShadow:'0 0 60px rgba(200,16,46,.45)'
            }}>{accent}</span>
          </h1>
        </div>
      </div>
    </div>
  )
}
