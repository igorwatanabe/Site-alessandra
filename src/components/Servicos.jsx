import styles from './Servicos.module.css'

const services = [
  {
    icon: '🧠',
    title: 'Psicoterapia Individual',
    desc: 'Atendimento para adultos e adolescentes, focado no autoconhecimento, gestão emocional e superação de desafios pessoais.',
    delay: 'reveal-d1',
  },
  {
    icon: '💑',
    title: 'Avaliação Neuropsicológica',
    desc: 'Espaço para casais trabalharem a comunicação, resolverem conflitos e fortalecerem o vínculo afetivo com suporte profissional.',
    delay: 'reveal-d2',
  },
  {
    icon: '🎯',
    title: 'Reabilitação Neuropsicológica',
    desc: 'Auxílio na descoberta de aptidões, valores e caminhos profissionais de forma clara, consciente e personalizada.',
    delay: 'reveal-d3',
  },
  // {
  //   icon: '👨‍👩‍👧',
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
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
