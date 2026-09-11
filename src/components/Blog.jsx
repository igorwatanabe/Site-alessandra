import styles from './Blog.module.css'

const posts = [
  {
    emoji: '🧘',
    thumbClass: styles.thumb1,
    tag: 'Saúde Mental',
    title: 'Como a ansiedade afeta seu corpo e o que fazer',
    desc: 'Entenda os sinais físicos da ansiedade e descubra estratégias práticas para recuperar o equilíbrio emocional.',
    delay: 'reveal-d1',
  },
  {
    emoji: '💬',
    thumbClass: styles.thumb2,
    tag: 'Relacionamentos',
    title: 'Comunicação não-violenta: relações mais saudáveis',
    desc: 'Aprenda técnicas que transformam conflitos em oportunidades de crescimento e conexão genuína.',
    delay: 'reveal-d2',
  },
  {
    emoji: '🌱',
    thumbClass: styles.thumb3,
    tag: 'Autoconhecimento',
    title: 'Primeiros passos para o autoconhecimento',
    desc: 'Um guia acolhedor para quem quer iniciar a jornada de autodescoberta e se relacionar melhor consigo.',
    delay: 'reveal-d3',
  },
]

export default function Blog() {
  return (
    <section id="blog" className={styles.blog}>
      <div className="container">
        <div className={`${styles.blogHeadRow} reveal`}>
          <div>
            <p className="label">Conhecimento</p>
            <h2 className="display" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)' }}>
              Artigos &amp; Reflexões
            </h2>
          </div>
          <a href="#" className="btn btn-ghost">Ver todos</a>
        </div>

        <div className={styles.blogGrid}>
          {posts.map((p) => (
            <div key={p.title} className={`${styles.blogCard} reveal ${p.delay}`}>
              <div className={`${styles.blogThumb} ${p.thumbClass}`}>{p.emoji}</div>
              <div className={styles.blogBody}>
                <p className={styles.blogTag}>{p.tag}</p>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
