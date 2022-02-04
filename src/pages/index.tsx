import Head from 'next/head'

import { BannerHero } from 'components/BannerHero'
import { Header } from 'components/Header'
import { HowItWorks } from 'components/HowItWorks'
import { BannerApp } from 'components/BannerApp'
import { Plans } from 'components/Plans'
import { Contact } from 'components/Contact'
import { Footer } from 'components/Footer'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Desafio - Rachi</title>
      </Head>
      <Header />
      <BannerHero />
      <HowItWorks />
      <BannerApp />
      <Plans />
      <Contact />
      <Footer />
    </div>
  )
}
