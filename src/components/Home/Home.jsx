import styles from './Home.module.css';

import { TypeAnimation } from 'react-type-animation';

export function Home() {
  return (
    <div id='home' className={styles.home}>
      <div className={styles.info}>
        <h1>Olá, eu sou <br /> Manoel Vieira</h1>
        <h2>Eu sou um <TypeAnimation
          sequence={[
            'Desenvolvedor Full-Stack',
            3000, 
            'Desenvolvedor Web',
            3000,
            'Desenvolvedor Mobile',
            3000,
          ]}
          speen={30}
          style={{color: '#7C3AED', fontSize: '2.5rem'}}
          repeat={Infinity}
        /></h2>   
        <p>Desenvolvedor Full Stack apaixonado por tecnologia. Possuo foco em desenvolvimento com Typescript, React, React Native, NodeJS, Java, Springboot dentre outras tecnologias que uso para criar aplicações web/mobile de alto nível e valor. Me considero ágil e consistente em aprender uma nova linguagem e me adaptar à qualquer mudança, pronto para superar qualquer desafio!</p>  
      </div>
      <img src="https://github.com/manoelvieira0.png" alt="" />
    </div>
  )
}