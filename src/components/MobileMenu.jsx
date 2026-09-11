import styles from './MobileMenu.module.css'

export default function MobileMenu() {
  return (
    <div className={styles.mobileMenu} id="mobileMenu">
      <a href="#sobre" className={styles.mobileLink}>Sobre Mim</a>
      <a href="#servicos" className={styles.mobileLink}>Serviços</a>
      <a href="#depoimentos" className={styles.mobileLink}>Depoimentos</a>
      <a href="#blog" className={styles.mobileLink}>Artigos</a>
      <a href="#contato" className={styles.mobileLink}>Contato</a>
      <a href="#contato" className="btn btn-primary" style={{ marginTop: 20 }}>
        Agendar Sessão
      </a>
    </div>
  )
}
