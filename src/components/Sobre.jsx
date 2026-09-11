import Image from "next/image";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className="container">
        <div className={styles.sobreInner}>
          <div className={`${styles.sobreImgWrap} reveal`}>
            <Image
              src="/2.jpg"
              alt="Sobre a Alessandra Takenaka"
              width={480}
              height={640}
              className={styles.sobreImg}
              loading="lazy"
            />
          </div>

          <div className={`${styles.sobreText} reveal reveal-d1`}>
            <div className="section-head" style={{ marginBottom: 20 }}>
              <p className="label">Sobre Mim</p>
              <h2 className={`display ${styles.h2}`}>Alessandra Takenaka</h2>
              <div className={styles.sobreName}>Psicóloga Clínica</div>
            </div>
            <p>
              Sou Psicóloga formada em 2019 e Especialista em Neuropsicologia
              pela Universidade do Oeste Paulista (UNOESTE). Sempre me fascinou
              compreender como a mente, o cérebro e as emoções se entrelaçam na
              forma como vivemos.
            </p>

            <p>
              Minha trajetória profissional foi construída na prática contínua
              em clínicas especializadas em reabilitação e atendimento clínico.
              Hoje, dedico minha atuação à avaliação neuropsicológica, à
              reabilitação e à psicoterapia.
            </p>

            <p>
              No consultório, meu trabalho vai além do diagnóstico ou do manejo
              de sintomas: busca criar um espaço seguro para que cada pessoa
              consiga ressignificar suas vivências, compreender o funcionamento
              da própria mente e encontrar novos caminhos diante das mudanças,
              perdas e transições da vida. Acredito que cuidar da saúde mental
              é, acima de tudo, aprender a viver com mais presença. Integrando
              evidência científica e escuta acolhedora, meu objetivo é ajudar
              você a desacelerar o piloto automático e reencontrar o sentido no
              momento presente.
            </p>

            <p>
              Essa mesma busca guia minha vida fora do consultório. Seja
              correndo, jogando vôlei, lendo ou fazendo crochê, vivencio
              diariamente a paciência e a atenção necessárias para construir
              transformações — passo a passo, ponto a ponto.
            </p>
            <div className={styles.chips}>
              {/* <span className={styles.chip}>CRP 06/167012</span>
              <span className={styles.chip}>Terapia Cognitivo-Comportamental</span>
              <span className={styles.chip}>Presencial &amp; Online</span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
