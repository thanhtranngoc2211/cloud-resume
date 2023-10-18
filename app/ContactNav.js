import styles from './page.module.css'
import Image from 'next/image'

export default function ContactNav () {
    return (
        <div className={styles.contact}>
            <a className={styles.contactButton} href="https://github.com/thanhtranngoc2211">
              <Image
                src="./github.svg"
                alt="Github Logo"
                className={styles.vercelLogo}
                width={50}
                height={50}
                priority
              />
            </a>
            <a className={styles.contactButton} href="https://github.com/thanhtranngoc2211">
              <Image
                src="./facebook.svg"
                alt="Github Logo"
                className={styles.vercelLogo}
                width={50}
                height={50}
                priority
              />
            </a>
            <a className={styles.contactButton} href="https://github.com/thanhtranngoc2211">
              <Image
                src="./instagram.svg"
                alt="Github Logo"
                className={styles.vercelLogo}
                width={50}
                height={50}
                priority
              />
            </a>
            <a className={styles.contactButton} href="https://github.com/thanhtranngoc2211">
              <Image
                src="./linkedin.svg"
                alt="Github Logo"
                className={styles.vercelLogo}
                width={50}
                height={50}
                priority
              />
            </a>
        </div>
    )
}