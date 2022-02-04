import styles from './styles.module.scss'

export const BannerHero = () => (
  <section style={{ background: 'var(--color-background)' }}>
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Rachi,
          <br /> é tudo que você precisa em um só lugar.
        </h1>
        <button type="button">Cadastrar-se</button>
      </div>
      <img
        src="banner-hero.png"
        alt="Trabalhando em cima de uma pedra no meio da floresta"
      />
    </div>
  </section>
)
