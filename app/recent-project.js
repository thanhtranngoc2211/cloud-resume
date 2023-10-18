import styles from './page.module.css'
import ProjectCard from './project-card'

export default function RecentProject() {

    const projects = [
        {
            'id': 1,
            'name': 'CRAFT',
            'description': 'Losum ejenksfhkvbshjbjbxcv. Lusomvhb hbsdjfhbjxckjnvksdjnskjdhvj sdkjnxcv',
            'type': 'Machine Learning',
            'updated': 'September 10, 2023'
        },
        {
            'id': 2,
            'name': 'Digital Ocean Copy',
            'description': 'Losum ejenksfhkvbshjbjbxcv. Lusomvhb hbsdjfhbjxckjnvksdjnskjdhvj sdkjnxcv',
            'type': 'Block Chain',
            'updated': 'September 10, 2023'
        },
        {
            'id': 3,
            'name': 'H-PBSO Load Balancing Algorithm',
            'description': 'Losum ejenksfhkvbshjbjbxcv. Lusomvhb hbsdjfhbjxckjnvksdjnskjdhvj sdkjnxcv',
            'type': 'Load Balancing',
            'updated': 'September 10, 2023'
        },
        {
            'id': 4,
            'name': 'Home Medicine',
            'description': 'Losum ejenksfhkvbshjbjbxcv. Lusomvhb hbsdjfhbjxckjnvksdjnskjdhvj sdkjnxcv',
            'type': 'Website Development',
            'updated': 'September 10, 2023'
        }
    ]

    return (
        <div className={styles.recent_project}>
            <div className={styles.header}>Recent Projects</div>
            <div className={styles.grid_projects}>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} /> 
            ))}
            </div>
        </div>
    )
}