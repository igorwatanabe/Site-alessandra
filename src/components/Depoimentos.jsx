'use client'

import { useEffect, useState } from 'react'
import styles from './Depoimentos.module.css'

export default function Depoimentos() {
  const [reviews, setReviews] = useState([])
  const [rating, setRating] = useState(5)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await fetch('/api/google-reviews')

        if (!response.ok) {
          throw new Error('Erro ao carregar avaliações')
        }

        const data = await response.json()

        console.log('Google Reviews:', data)

        setRating(Number(data.rating) || 5)
        setReviews(Array.isArray(data.reviews) ? data.reviews : [])
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadReviews()
  }, [])

  return (
    <section id="depoimentos" className={styles.depoimentos}>
      <div className="container">
        <div
          className="section-head"
          style={{
            textAlign: 'center',
            maxWidth: 520,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <p className="label">Avaliações Google</p>

          <h2
            className="display"
            style={{
              fontSize: 'clamp(1.6rem,3.5vw,2.4rem)',
            }}
          >
            O que dizem meus pacientes
          </h2>

          <div
            style={{
              marginTop: '12px',
              fontSize: '1.1rem',
              fontWeight: 600,
            }}
          >
            ⭐ {rating.toFixed(1)} no Google
          </div>
        </div>

        <div className={styles.depGrid}>
          {loading && <p>Carregando avaliações...</p>}

          {!loading && reviews.length === 0 && (
            <p>Nenhuma avaliação encontrada.</p>
          )}

          {!loading &&
            reviews.length > 0 &&
            reviews.map((review, index) => (
              <div
                key={index}
                className={styles.depCard}
              >
                <div className={styles.depStars}>
                  {'★'.repeat(Number(review.rating || 5))}
                </div>

                <p>
                  "
                  {review.text ||
                    review.original_text ||
                    'Avaliação sem comentário.'}
                  "
                </p>

                <div className={styles.depAuthor}>
                  <div className={styles.depAvatar}>
                    {(review.author_name || '?')
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <div>
                    <div className={styles.depName}>
                      {review.author_name || 'Paciente'}
                    </div>

                    <div className={styles.depRole}>
                      Avaliação Google
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}