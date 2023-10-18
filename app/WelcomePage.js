import styles from './page.module.css'
import ContactNav from './ContactNav'
import ScrollButtonTrigger from './ScrollButtonTrigger'
import VisitorCounter from './VisitorCounter'

export default function WelcomePage() {
  return (
      <div className={styles.main}>
          <div className={styles.authorName}>Trần Ngọc Thành</div>
          <div>| Cloud Solution Architect | Programmer | Devops | Swimmer |</div>
          <ContactNav />         
          <ScrollButtonTrigger />
          <footer className={styles.footer}>
            <VisitorCounter />
          </footer>
      </div>
  )
}