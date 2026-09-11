import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className="container">
        <div className={styles.heroInner}>
          <div className={`${styles.heroText} reveal`}>
            <span className={styles.heroTag}>🌿 CRP 06/167012</span>
            <h1 className={`display ${styles.h1}`}>
              Aprender a viver com mais <em className={styles.em}>presença</em>{" "}
              é o primeiro passo para{" "}
              <em className={styles.em}>ressignificar</em> a sua história
            </h1>
            <p className={styles.heroSub}>
              Conectando ciência e sensibilidade humana para apoiar você na
              construção de novos significados.
            </p>
            <div className={styles.heroBtns}>
              <a href="#contato" className="btn btn-primary">
                Agendar Sessão
              </a>
              <a href="#sobre" className="btn btn-ghost">
                Conheça meu trabalho
              </a>
            </div>
            {/* <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNum}>Terapia TCC</div>
                <div className={styles.statLabel}>Cognitivo-Comportamental</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>Neuropsicologia</div>
                <div className={styles.statLabel}>Especialidade</div>
              </div>
            </div> */}
          </div>

          <div className={`${styles.heroImgWrap} reveal reveal-d2`}>
            <Image
              src="/1.jpg"
              alt="Psi. Alessandra Takenaka"
              width={440}
              height={550}
              className={styles.heroImg}
              priority
            />
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeIcon}>📚</span>
              <div>
                <div className={styles.hbNum}>Terapia TCC</div>
                <div className={styles.hbLbl}>Cognitivo-Comportamental</div>
              </div>
            </div>
            <div className={styles.heroBadge2}>
              <span className={styles.heroBadgeIcon}>🧠</span>
              <div>
                <div className={styles.hbNum}>Neuropsicologia</div>
                <div className={styles.hbLbl}>Especialidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
