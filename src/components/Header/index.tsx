import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <img src="logo.png" alt="Logo do Rachi" />

    <ul>
      <li>Funcionalidades</li>
      <li>App</li>
      <li>Planos</li>
      <li>Contato</li>
    </ul>
  </header>
)
