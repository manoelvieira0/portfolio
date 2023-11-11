import { SkillCard } from '../SkillCard'
import styles from './Skills.module.css'
import reactSvg from '../../assets/react.svg'
import javascriptSvg from '../../assets/javascript.svg'
import html5 from "../../assets/html5.svg"
import css3 from "../../assets/css3.svg"
import nodejs from "../../assets/nodejs.svg"
import reactnative from '../../assets/react-native.svg'
import java from '../../assets/java.svg'
import springboot from '../../assets/spring-boot.svg'

export function Skills() {
  return (
    <div id='skills' className={styles.skills}>
      <div className={styles.textskills}>
        <h3>Algumas das <br /><span>tecnologias que utilizo</span></h3>
        <div className={styles.skillsCategory}>
              <SkillCard title="React" src={reactSvg} />
              <SkillCard title="React Native" src={reactnative} />
              <SkillCard title="HTML5" src={html5} />
              <SkillCard title="CSS3" src={css3} />
              <SkillCard title="Javascript" src={javascriptSvg} />
              <SkillCard title="NodeJS" src={nodejs} />
              <SkillCard title="Java" src={java} />
              <SkillCard title="Spring Boot" src={springboot} />
        </div>
      </div>
    </div>
  )
}