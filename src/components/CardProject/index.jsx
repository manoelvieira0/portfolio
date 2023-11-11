import styles from './CardProject.module.css'
import igniteTeam from '../../images/ignite-feed.png'
import todo from '../../images/todo.png'
import crud from '../../images/crud.png';
import javato from '../../images/javato.png'

export function CardProject({ }) {
  return (
    <div className={styles.listCard}>
      <div className={styles.cardProject}>
        <img src={todo} />
        <h2>To-do List</h2>
        <div className={styles.tags}>
          <h5>React</h5>
          <h5>Javascript</h5>
          <h5>useState</h5>
          <h5>useEffect</h5>
          <h5>Async Storage</h5>
        </div>
        <span>Aplicação em React de controle de tarefas no estilo to-do list.</span>
        <div className={styles.link}>
          <a href="https://todolistmanoelv.netlify.app" target='_blank'>Acessar</a>
        </div>
      </div>
      <div className={styles.cardProject}>
        <img src={igniteTeam} />
        <h2>Ignite Feed</h2>
        <div className={styles.tags}>
          <h5>React</h5>
          <h5>Typescript</h5>
          <h5>useState</h5>
          <h5>useEffect</h5>
        </div>
        <span>Projeto Frontend de uma rede social utilizando React.</span>
        <div className={styles.link}>
          <a href="https://github.com/manoelvieira0/ignite-feed-ts" target='_blank'>Acessar</a>
        </div>
      </div>
      <div className={styles.cardProject}>
        <img src={crud} />
        <h2>CRUD (React, Node.js, MySQL)</h2>
        <div className={styles.tags}>
          <h5>React</h5>
          <h5>Styled-Components</h5>
          <h5>useState</h5>
          <h5>useEffect</h5>
          <h5>Node</h5>
          <h5>Express</h5>
          <h5>Axios</h5>
          <h5>MySQL</h5>
        </div>
        <span>CRUD produzido com React, NodeJS e MySQL</span>
        <div className={styles.link}>
          <a href="https://github.com/manoelvieira0/crud" target='_blank'>Acessar</a>
        </div>
      </div>
      <div className={styles.cardProject}>
        <img src={javato} />
        <h2>Back-end de uma aplicação To-Do-List em Java</h2>
        <div className={styles.tags}>
          <h5>Java</h5>
          <h5>Spring Boot</h5>
        </div>
        <span>Back-end de uma aplicação To-Do-List em Java, utilizando Spring Boot, implementação de autenticação, Validações de rotas e deploy.</span>
        <div className={styles.link}>
          <a href="https://github.com/manoelvieira0/todolist" target='_blank'>Acessar</a>
        </div>
      </div>
    </div>
  )
}