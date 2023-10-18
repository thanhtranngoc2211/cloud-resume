import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function FooterMain() {
    const techs = [
        './next.svg', 
        './k8s.svg',
        './docker.svg',
        './aws.svg',
        './git.svg',
        './linux.svg',
        './python.svg',
        './tensor.svg'
    ]
    return (
        <section className={styles.footer_main} id='get-in-touch'>
            <div className={styles.footer_main_main}>
                <div style={{ marginTop:'3rem', marginBottom:'3rem', fontSize:'4rem' }}>Get In Touch</div>
                <div>I'm currently looking for full-time Cloud Solution Architect or DevOps opportunities! 
                    If you know of any positions available, if you have any question, or if you just want to say hi, 
                    please feel free to email me at <Link href="https://www.google.com/gmail" className={styles.email}>thanhtranngoc2211@gmail.com</Link>
                </div>
                <div className={styles.techshow}>
                    {techs.map((tech) => (<Image style={{ marginRight:'5rem' }} src={tech} width={250} height={250} alt="" />))}
                </div>
                <div style={{fontSize:'0.8rem', marginTop:'8rem'}}>This portfolio is based on <Link className={styles.email} href="https://github.com/hashirshoaeb/home#showcase-">Hashir Shoaib Template.    </Link></div>
            </div>
        </section>
    )
}