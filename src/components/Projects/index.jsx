import { CardProject } from '../CardProject'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <div id='projects' className={styles.project}>
      <h3>Projetos <p>selecionados</p></h3>
      <div className={styles.projects}>
        <CardProject/>
      </div>
    </div>
  )
}