import styles from './Experiences.module.css'

export function Experiences() {
  return (
    <div id='experience' className={styles.experience}>
      <h3>Minhas <p>experiências</p></h3>
      <div className={styles.experiences}>
        <section>
          <h4>Estagiário</h4>
          <h5>SEDUC-AL</h5>
          <div className={styles.wrapper}>
            <span>Dezembro/2020 - Junho/2022</span>
          </div>
          <p>Principal atividades: Atuava no suporte técnico, manutenção de computadores, rede de computadores e sistema Sageal.
          </p>
        </section>
        <section>
          <h4>Desenvolvedor / Técnico</h4>
          <h5>SEDUC-AL</h5>
          <div className={styles.wrapper}>
            <span>Janeiro/2023 - Atual</span>
          </div>
          <p>Principal atividades: Trabalho na Inserção, manipulação e controle do banco de dados, criação e controle de projetos internos utilizando ferramentas para manipulação de dados.
          </p>
        </section>
      </div>
    </div>
  )
}