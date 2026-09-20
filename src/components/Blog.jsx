import styles from "./Blog.module.css";

const instagramProfileUrl = "https://www.instagram.com/psi.aletakenaka/";

// Edite ou substitua estes objetos para incluir posts fixos no blog.
const posts = [
  {
    image: "/post1.jpeg",
    imageAlt: "Instagram",
    href: "https://www.instagram.com/p/DZGMDMtEasZ/?stkn=anlhMzlkMmtlemFy",
    thumbClass: styles.thumb1,
    tag: "Instagram",
    caption: (
      <>
        Quantas vezes você já se pegou tentando segurar um momento bom, com medo
        de que ele acabasse?
        <br />
        Quantas vezes você já se pegou tentando acabar logo com um desconforto,
        fazendo ele sumir o mais rápido possível?
        <br />
        Praticar mindfulness/atenção plena não é sobre estar sempre relaxado ou
        ignorar as dificuldades.
        <br />
        É sobre aprender a estar presente no aqui e agora, entendendo que os
        momentos vão passar, sejam eles bons ou ruins.
        <br />
        Quando paramos de lutar contra o desconforto, ele perde o poder de nos
        dominar.
        <br />
        Quando paramos de nos apegar obsessivamente ao conforto, passamos a
        aproveitá-lo com mais leveza.
        <br />
        Tudo muda, tudo passa 🌻
      </>
    ),
    date: "02 de junho de 2026",
    dateValue: "2026-06-02",
    delay: "reveal-d2",
  },
  {
    image: "/post2.jpeg",
    imageAlt: "Instagram",
    href: "https://www.instagram.com/p/DVzFMp_D5Y_/?stkn=MWl5aXF0NHFjbzUxbw==",
    thumbClass: styles.thumb2,
    tag: "Instagram · Mindfulness",
    caption: (
      <>
        Já ouviu falar de mindfulness/atenção plena? <br />
        É uma prática de meditação, focada do presente.
        <br />
        A atenção plena não é sobre esvaziar a mente ou não pensar em nada. É
        sobre perceber o aqui e agora, suas sensações, seus pensamentos e o
        ambiente, sem nenhum tipo de julgamento. Na atenção plena, não existe
        "certo ou errado". Uma forma de desacelerar no meio desse mundo cheio de
        estímulos.
        <br />
        Já foi comprovado que a prática de atenção plena traz diversos
        benefícios pra saúde mental e consequentemente, física.
      </>
    ),
    date: "12 de março de 2026",
    dateValue: "2026-03-12",
    delay: "reveal-d3",
  },
  {
    image: "/post3.jpeg",
    imageAlt: "Instagram",
    href: "https://www.instagram.com/p/DVra1Kej-7J/?stkn=b29kbjRjM3RtamZ1",
    thumbClass: styles.thumb3,
    tag: "Instagram",
    caption: (
      <>
        Você já se sentiu sufocado pelos próprios pensamentos?
        <br />
        Na TCC, aprendemos a observar esses pensamentos e perceber que eles são
        passageiros e nem sempre são verdadeiros.
        <br />
        Seus pensamentos não te definem e não são permanentes.
        <br />
        Eles vão e voltam, assim como as nuvens no céu.
        <br />
      </>
    ),
    date: "09 de março de 2026",
    dateValue: "2026-03-09",
    delay: "reveal-d1",
  },
];

export default function Blog() {
  return (
    <section id="blog" className={styles.blog}>
      <div className="container">
        <div className={`${styles.blogHeadRow} reveal`}>
          <div>
            <p className="label">Conhecimento</p>
            <h2
              className="display"
              style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)" }}
            >
              Reflexões
            </h2>
          </div>
          <a
            href={instagramProfileUrl}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver todos
          </a>
        </div>

        <div className={styles.blogGrid}>
          {posts.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className={`${styles.blogCard} reveal ${p.delay}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles.blogThumb} ${p.thumbClass}`}>
                <img src={p.image} alt={p.imageAlt} />
                <span className={styles.blogThumbOverlay} aria-hidden="true" />
              </div>
              <div className={styles.blogBody}>
                <p className={styles.blogTag}>{p.tag}</p>
                <p className={styles.blogCaption}>{p.caption}</p>
                <time dateTime={p.dateValue} className={styles.blogDate}>
                  {p.date}
                </time>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
