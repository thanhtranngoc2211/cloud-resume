import styles from './page.module.css'
import MainSection from './main-section'
import WelcomePage from './WelcomePage'
import FooterMain from './footer-main'

export default function Home() {
  return (
    <main className={styles.background}>
      <WelcomePage />
      <MainSection />
      <FooterMain />
    </main>
  )
}
