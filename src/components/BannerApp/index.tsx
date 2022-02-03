import styles from './styles.module.scss'

export const BannerApp = () => (
  <section style={{ background: 'var(--color-background)' }}>
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Baixe nosso app para desfrutar mais!</h1>
        <p>
          Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur
          turpis elementum amet vitae et etiam nec. Varius volutpat hac
          adipiscing tincidunt pretium.
        </p>

        <div>
          <a href="/">
            <img src="google-play.png" alt="Google play" />
          </a>
          <a href="/">
            <img src="app-store.png" alt="App Store" />
          </a>
        </div>
      </div>

      <img
        src="notifications-amico.png"
        alt="Pessoa navegando nas redes sociais"
      />
    </div>
  </section>
)
