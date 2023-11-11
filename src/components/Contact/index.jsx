import styles from './Contact.module.css'
import curriculo from '../../assets/curriculo.pdf'
import { Envelope } from '@phosphor-icons/react'
import { GithubLogo } from '@phosphor-icons/react'
import { LinkedinLogo } from '@phosphor-icons/react'

export function Contact() {
  return (
    <div className={styles.contact}>
      <h1><span>Entre em</span> contato</h1>
      <h4>Assim poderemos conversar melhor...</h4>
      <a className={styles.pdf} href={curriculo} download="curriculum-manoel-vieira.pdf">Download CV</a>
      <div className={styles.icon}>
        <a href="mailto:manoelvsantosnt@gmail.com"><Envelope size={50} /></a>
        <a href="https://www.linkedin.com/in/manoelvieira01/" target='_blank'><LinkedinLogo size={50} /></a>
        <a href="https://github.com/manoelvieira0" target='_blank'><GithubLogo size={50} /></a>
      </div>
        <a className={styles.email} href="mailto:manoelvsantosnt@gmail.com">manoelvsantosnt@gmail.com</a>
    </div>
  )
}