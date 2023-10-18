'use client'

import styles from './page.module.css'

export default function ScrollButtonTrigger() {

    const handleClick = (element_id) => {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }  

    return (
        <button className={styles.moreDescription} onClick={() => handleClick('main-section')}>
            More about me!
        </button>
    )
}