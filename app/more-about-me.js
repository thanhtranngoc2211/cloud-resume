'use client'

import styles from './page.module.css'
import Image from 'next/image'

export default function MoreAboutMe() {
    const handleClick = (element_id) => {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }  
    return (
        <div className={styles.about_me_section}>
            <div className={styles.information}>
                <Image
                    src='./avatar.svg'
                    width={400}
                    height={400}
                />
                <div className={styles.about}>
                    <div className={styles.header}>
                        About Me
                    </div>
                    <div className={styles.description_text}>
                        My name is Tran Ngoc Thanh. I&apos;m an undergraduate Master from Hanoi University of Science and Technology at Ha Noi, Viet Nam with a Bachelor&apos;s degree in Electrical and Telecomunication. I&apos;m most passionate about creating and developing application to fullfil everyone&apos;s life at ease, and my goal is to pursue this passion within the field of software engineering and cloud computing. In my free time I like to go swimming and listening to peacefull tracks.
                    </div>
                    <button style={{marginTop:'2rem'}} className={styles.moreDescription_invert} onClick={() => handleClick('get-in-touch')}>Get in touch!</button>
                </div>
            </div>
        </div>
    )
}