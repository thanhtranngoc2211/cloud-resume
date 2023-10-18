import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function FooterMain() {
    const techs = [
        {
            'url': './next.svg', 
            'id': 1
        },
        {
            'url': './k8s.svg', 
            'id': 2
        }, 
        {
            'url': './docker.svg', 
            'id': 3
        }, 
        {
            'url': './aws.svg', 
            'id': 4
        },
        {
            'url': './git.svg', 
            'id': 5
        } ,
        {
            'url': './linux.svg', 
            'id': 6
        },
        {
            'url': './python.svg', 
            'id': 7
        },
        {
            'url': './tensor.svg', 
            'id': 8
        },
    ]
    return (
        <section className={styles.footer_main} id='get-in-touch'>
            <div className={styles.footer_main_main}>
                <div style={{ marginTop:'3rem', marginBottom:'3rem', fontSize:'4rem' }}>Get In Touch</div>
                <div>I&apos;m currently looking for full-time Cloud Solution Architect or DevOps opportunities! 
                    If you know of any positions available, if you have any question, or if you just want to say hi, 
                    please feel free to email me at <Link href="https://www.google.com/gmail" className={styles.email}>thanhtranngoc2211@gmail.com</Link>
                </div>
                <div className={styles.techshow}>
                    {techs.map((tech) => (<Image key={tech.id} style={{ marginRight:'5rem' }} src={tech.url} width={250} height={250} alt="" />))}
                </div>
                <div style={{fontSize:'0.8rem', marginTop:'8rem'}}>This portfolio is based on <Link className={styles.email} href="https://github.com/hashirshoaeb/home#showcase-">Hashir Shoaib Template.</Link></div>
            </div>
        </section>
    )
}