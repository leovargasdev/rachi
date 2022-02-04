import { useState } from 'react'
import styles from './styles.module.scss'

export const Contact = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false)

  return (
    <section className={styles['background-image']}>
      <div className={styles.container}>
        <h1>Contato</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          mi quis euismod ultrices.
        </p>
        <form
          action=""
          className={`${styles.form} ${isFocus ? styles.focus : ''}`}
        >
          <input
            type="text"
            placeholder="Seu melhor e-mail"
            onBlur={() => setIsFocus(false)}
            onFocus={() => setIsFocus(true)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}
