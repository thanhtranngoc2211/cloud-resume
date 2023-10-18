'use client'

import styles from './page.module.css'
import ContactNav from './ContactNav'

export default function WelcomePage() {
  const handleClick = (element_id) => {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }  
  return (
      <div className={styles.main}>
          <div className={styles.authorName}>Trần Ngọc Thành</div>
          <div>| Cloud Solution Architect | Programmer | Devops | Swimmer |</div>
          <ContactNav />         
          <button className={styles.moreDescription} onClick={() => handleClick('main-section')}>
            More about me!
          </button>
          <footer className={styles.footer}>
            Visited today: 2.5k people
          </footer>
      </div>
  )
}