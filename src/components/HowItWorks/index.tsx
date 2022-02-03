import styles from './styles.module.scss'

export const HowItWorks = () => (
  <section>
    <div className={styles.container}>
      <h1>Como funciona</h1>
      <div className={styles.cards}>
        <div>
          <img src="icons/user-plus.png" alt="Icone user plus" />
          <strong>Crie conexões</strong>
          <p>Lorem ipsum dolor sit amet, consecteteu.</p>
        </div>
        <div>
          <img src="icons/carbon-security.png" alt="Icone carbon security" />
          <strong>100% gratuito</strong>
          <p>Lorem ipsum dolor sit amet, consecteteu.</p>
        </div>
        <div>
          <img src="icons/emoji-happy.png" alt="Icone emoji happy" />
          <strong>Compartilhamento</strong>
          <p>Lorem ipsum dolor sit amet, consecteteu.</p>
        </div>
      </div>
    </div>
  </section>
)
