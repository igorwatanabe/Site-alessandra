import Navbar from '../components/Navbar'
import MobileMenu from '../components/MobileMenu'
import Hero from '../components/Hero'
import Sobre from '../components/Sobre'
import Servicos from '../components/Servicos'
import Depoimentos from '../components/Depoimentos'
import Blog from '../components/Blog'
import Contato from '../components/Contato'
import Footer from '../components/Footer'
import RevealObserver from '../components/RevealObserver'

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Depoimentos />
        <Blog />
        <Contato />
      </main>
      <Footer />
      <RevealObserver />
    </>
  )
}
