import { useState } from 'react'
import styles from './styles.module.scss'

export const Header = () => {
  const [activeToggle, setActiveToggle] = useState<boolean>(false)

  return (
    <header className={styles.container}>
      <img src="logo.png" alt="Logo do Rachi" />

      <button
        type="button"
        className={`${styles.toggle} ${
          activeToggle ? styles['toggle-active'] : ''
        }`}
        onClick={() => setActiveToggle(state => !state)}
      >
        <span />
        <span />
      </button>

      <ul className={activeToggle ? styles.active : ''}>
        <li>Funcionalidades</li>
        <li>App</li>
        <li>Planos</li>
        <li>Contato</li>
      </ul>
    </header>
  )
}
