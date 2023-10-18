import styles from './page.module.css'
import RecentProject from './recent-project'
import MoreAboutMe from './more-about-me'

export default function MainSection() {
    return (
        <section id='main-section' className={styles.main_section}>
            <MoreAboutMe />
            <RecentProject />
        </section>
    )
}