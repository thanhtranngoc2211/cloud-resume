'use client'

import styles from './page.module.css'
import ContactNav from './ContactNav'
import { useState, useEffect } from 'react'

export default function WelcomePage() {

  const handleClick = (element_id) => {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }
  
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://oydsr9nyk8.execute-api.ap-east-1.amazonaws.com/dev/counter-api')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    console.log('called')
  }, [])

  return (
      <div className={styles.main}>
          <div className={styles.authorName}>Trần Ngọc Thành</div>
          <div>| Cloud Solution Architect | Programmer | Devops | Swimmer |</div>
          <ContactNav />         
          <button className={styles.moreDescription} onClick={() => handleClick('main-section')}>
            More about me!
          </button>
          <footer className={styles.footer}>
            {isLoading ? (<div>Loading...</div>) : (<div>Totally this page has {JSON.parse(data.body).N} visitor!!!</div>)}
          </footer>
      </div>
  )
}