import styles from './styles.module.scss'

const PLANS_MOCK = [
  {
    type: 'Bronze',
    moreUsed: false,
    value: 28,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.'
  },
  {
    type: 'Prata',
    moreUsed: true,
    value: 57,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.'
  },
  {
    type: 'Ouro',
    moreUsed: false,
    value: 94,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.'
  }
]

export const Plans = () => (
  <section>
    <div className={styles.container}>
      <h1>Nossos Planos</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        mi quis euismod ultrices.
      </p>

      <div className={styles.plans}>
        {PLANS_MOCK.map(plan => (
          <div key={plan.value} className={styles.plan}>
            <strong>{plan.type}</strong>
            {plan.moreUsed && (
              <span className={styles['plan-tag']}>preferido</span>
            )}
            <h3>
              <small>R$</small>
              {plan.value}
              <span>/mês</span>
            </h3>
            <p>{plan.description}</p>
            <button type="button">Assinar</button>
          </div>
        ))}
      </div>
    </div>
  </section>
)
