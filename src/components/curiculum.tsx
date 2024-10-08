import type { IExperience } from '../Interface/IExperience'
import cv from '../json/curiculum.json'
import Block from './block'
import styles from './curiculum.module.scss'
import Experience from './experience'
import NetWork from './network'
import SideBar from './sidebar'
import Skill from './skill'

const Curiculum = () => {
  return (
    <div className={styles.body}>
      <div style={{ maxWidth: '210mm' }} >
        <SideBar/>
        <div className={styles.main}>
        <div className={styles.content}>
          <div style={{flex:3}}>
            <div className={styles.about}>
              
              <Block title={'Expérience'}>
                  {cv.experiences.map((exp: IExperience[], index: number) => {
                    return <Experience key={index} data={exp} />
                  })}
              </Block>   
            </div>
          </div>   
          <div style={{width: "282px"}}>   
            <Block title={"Compétences humaines"}>        
              {cv.skills.filter((s) => s.type === 'soft').map((skill) => {
                  return (
                    <Skill data={skill} key={skill.name} />
                  )
              })}
            </Block> 
            <Block title={"Compétences techniques"}>        
              {cv.skills.filter((s) => s.type === 'hard').map((skill) => {
                  return (
                    <Skill data={skill} key={skill.name} />
                  )
              })}
            </Block>

            <Block title={'Formation'}>
              {cv.formations.map((exp: IExperience[]) => {
                return <Experience key={exp[0].title} data={exp} />
              })}
            </Block> 
            
            <Block title={"Me retrouver en ligne"}> 
              <NetWork data={[{
                  type: "string",
                  icon: "linkedin",
                  name: "LinkedIn.com",
                  subtitle: "/in/jeremiegambin",
                  link: "https://www.linkedin.com/in/jeremiegambin/"
                },{
                  type: "string",
                  icon: "cg",
                  name: "CodinGame.com",
                  subtitle: "/jBigman",
                  link: "https://www.codingame.com/profile/262698c2b361339f78efcf6f014e5b231298241"
                },{
                  type: "string",
                  icon: "github",
                  name: "Github.com",
                  subtitle: "/jBigman",
                  link: "https://github.com/jbigman"
                }]} /> 
            </Block>
           
          </div>   
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default Curiculum
