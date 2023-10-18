import Link from 'next/link';
import styles from './page.module.css'
import Image from 'next/image';

export default function ProjectCard (props) {
    const { project } = props;
    return (
        <div className={styles.grid_projects_item}>
            <div className={styles.main_card}>
                <div style={{ fontWeight: '900' }}>
                    {project.name}
                </div>
                <div style={{ fontSize: 'small' }}>
                    {project.description}
                </div>
                <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Link href="" className={styles.moreDescription_invert} style={{ width: '6rem', height: '2.5rem' }}>
                        <Image 
                            src='./github.svg'
                            width={20}
                            height={20}
                        />
                        Repo
                    </Link>
                    <div>{project.updated}</div>
                </div>         
            </div>
        </div>
    )
}