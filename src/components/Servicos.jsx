import styles from './Servicos.module.css'

const services = [
  {
    image: '/card1.png',
    imageAlt: 'Ilustração do serviço de psicoterapia individual',
    title: 'Psicoterapia Individual',
    desc: 'Acompanhamento individual e acolhedor voltado para o autoconhecimento, oferecendo suporte para transições e desafios.',
    delay: 'reveal-d1',
  },
  {
    image: '/card2.png',
    imageAlt: 'Ilustração do serviço de avaliação neuropsicológica',
    title: 'Avaliação Neuropsicológica',
    desc: 'Mapeamento do funcionamento cognitivo e emocional para identificar as potencialidades e dificuldades, auxiliando no diagnóstico e processo terapêutico.',
    delay: 'reveal-d2',
  },
  {
    image: '/card3.png',
    imageAlt: 'Ilustração do serviço de reabilitação neuropsicológica',
    title: 'Reabilitação Neuropsicológica',
    desc: 'Intervenção personalizada para treino, adaptação e recuperação de funções cognitivas, visando a autonomia e melhoria na qualidade de vida.',
    delay: 'reveal-d3',
  },
  // {
  //   number: '04',
  //   title: 'Terapia Familiar',
  //   desc: 'Suporte para famílias que enfrentam conflitos ou mudanças, promovendo harmonia, compreensão e vínculos mais saudáveis.',
  //   delay: 'reveal-d4',
  // },
]

export default function Servicos() {
  return (
    <section id="servicos" className={styles.servicos}>
      <div className="container">
        <div
          className="section-head reveal"
          style={{ textAlign: 'center', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}
        >
          <p className="label">O que ofereço</p>
          <h2 className="display" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', marginBottom: 12 }}>
            Meus Serviços
          </h2>
          <p style={{ color: 'var(--mid)', fontSize: '.95rem' }}>
            Atendimentos presenciais e online, adaptados à sua realidade.
          </p>
        </div>

        <div className={styles.servicosGrid}>
          {services.map((s) => (
            <div key={s.title} className={`${styles.card} reveal ${s.delay}`}>
              <div className={styles.cardAccent} />
              <img className={styles.cardImage} src={s.image} alt={s.imageAlt} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
