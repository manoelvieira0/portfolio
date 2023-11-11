import styles from './About.module.css'
import aboutImg from '../../images/about.jpg'

export function About() {
  return (
    <div id='about' className={styles.about}>
      <h2>Um pouco sobre mim</h2>
      <div className={styles.main}>
        <p className={styles.paragraph}>
          Eu sou um <span>Desenvolvedor Web</span> apaixonado em criar boas experiências para os usuários.
          Tenho 22 anos e sou graduado em <span>Ciência da Computação. </span>
          Além de desenvolver projetos, <span>eu amo</span> escutar música, viajar, ler e praticar esportes.
        </p>
      </div>
    </div>
  )
}