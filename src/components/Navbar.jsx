'use client'
import { useEffect, useRef } from 'react'
import styles from './Navbar.module.css'
import Logo from './Logo'

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const onScroll = () => {
      nav.style.boxShadow = window.scrollY > 20 ? '0 2px 20px rgba(44,44,44,.1)' : ''
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="navbar" className={styles.nav} ref={navRef}>
      <div className={styles.navInner}>
        <a href="#inicio" className={styles.navLogo}>
          <Logo color="#7A9E8E" />
          <div>
            <div className={styles.navLogoText}>Alessandra Takenaka</div>
            <div className={styles.navLogoSub}>Psicóloga Clínica</div>
          </div>
        </a>

        <ul className={styles.navLinks}>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#blog">Artigos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <a href="#contato" className={`btn btn-primary ${styles.navCta}`}>
          Agendar Sessão
        </a>

        <button
          className={styles.hamburger}
          id="ham"
          aria-label="Menu"
          onClick={() => {
            const menu = document.getElementById('mobileMenu')
            const ham = document.getElementById('ham')
            const isOpen = menu?.classList.toggle('open')
            ham?.classList.toggle('open', isOpen)
            document.body.style.overflow = isOpen ? 'hidden' : ''
          }}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
