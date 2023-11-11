import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.header}>
      <h2>Manoel.</h2>
      <div className={styles.link}>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#about">Sobre</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}