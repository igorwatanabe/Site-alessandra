"use client";
import styles from "./Contato.module.css";

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Contato() {
  return (
    <section id="contato" className={styles.contato}>
      <div className="container">
        <div className={styles.contatoInner}>
          <div className={`${styles.contatoInfo} reveal`}>
            <p className="label">Vamos conversar</p>
            <h2 className={`display ${styles.h2}`}>Agende sua Consulta</h2>
            <p className={styles.desc}>
              Dê o primeiro passo. Entre em contato para agendar sua sessão ou
              tirar dúvidas. Atendimento presencial em Presidente Prudente - SP
              e online para todo o Brasil.
            </p>

            <div className={styles.infoList}>
              {[
                {
                  icon: "📞",
                  label: "WhatsApp / Telefone",
                  value: <a href="tel:+5518996084353">(18) 99608-4353</a>,
                },
                // {
                //   icon: "✉️",
                //   label: "E-mail",
                //   value: "ale_takenaka@hotmail.com",
                // },
                {
                  icon: "📍",
                  label: "Endereço",
                  value: (
                    <a href="https://maps.app.goo.gl/tcy5iRYmGmGqWyCA6">
                      R. Iperoig, 55 - Vila Mathilde Vieira, Pres. Prudente -
                      SP, 19050-620
                    </a>
                  ),
                },
                {
                  icon: "🕐",
                  label: "Horários",
                  value: "Seg–Sex: 8h–20h",
                },
              ].map((r) => (
                <div key={r.label} className={styles.infoRow}>
                  <div className={styles.infoIcon}>{r.icon}</div>
                  <div>
                    <strong>{r.label}</strong>
                    <span>{r.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5518996084353"
              className="btn btn-wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Chamar no WhatsApp
            </a>
          </div>

          <div className="reveal reveal-d1">
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps?q=R.+Iperoig,+55,+Vila+Mathilde+Vieira,+Presidente+Prudente,+SP,+19050-620&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Consultório"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
