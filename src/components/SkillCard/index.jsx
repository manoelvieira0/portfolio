import styles from './SkillCard.module.css'

export function SkillCard({ title, src }) {
  return (
    <div className={styles.skillcard}>
      <img src={src} />
      <p>{title}</p>
    </div>
  )
}