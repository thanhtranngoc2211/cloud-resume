import styles from './page.module.css'
import ContactNav from './ContactNav'
import ScrollButtonTrigger from './ScrollButtonTrigger'

let cachedData = null;

async function getData() {

  if (cachedData !== null) {
      // Nếu đã có dữ liệu được lưu trữ trong biến cachedData, trả về nó mà không gửi fetch mới.
      return cachedData;
  }

  const res = await fetch('https://oydsr9nyk8.execute-api.ap-east-1.amazonaws.com/dev/counter-api')

  const data = await res.json()

  if (!res.ok) {
      throw new Error('Failed to fetch data')
  }

  cachedData = data; // Lưu trữ dữ liệu trong biến cachedData
  return cachedData

}

export default async function WelcomePage() {
  const counter = await getData()
  const nValue = JSON.parse(counter.body).N
  
  return (
      <div className={styles.main}>
          <div className={styles.authorName}>Trần Ngọc Thành</div>
          <div>| Cloud Solution Architect | Programmer | Devops | Swimmer |</div>
          <ContactNav />         
          <ScrollButtonTrigger />
          <footer className={styles.footer}>
            <div>Totally this page has {nValue} visitor!!!</div>
          </footer>
      </div>
  )
}