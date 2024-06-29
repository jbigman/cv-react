import type { IExperience } from '../Interface/IExperience'
import type { ISkill } from '../Interface/ISkill'
import cv from '../json/curiculum.json'
import Block from './block'
import styles from './curiculum.module.scss'
import Experience from './experience'
import SideBar from './sidebar'
import Skill from './skill'

const Curiculum = () => {
  return (
    <div className={styles.body}>
      <div >
        <SideBar />
        <div className={styles.main}>
          
          
        <div className={styles.content}>
          <div style={{flex:3}}>
            <div className={styles.about}>
              <Block title={'Mes Atouts'}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'justify',
                  }}
                >
                  <span className={'sidebarStyles'}>
                  {/* Développeur expérimenté en applications web et mobiles, spécialisé en TypeScript, Node.js et React. Mes réalisations incluent la création d'une plateforme de réservation avec systèmes de paiement pour LaPetitePouzerie.fr et l'implémentation d'un moteur de recherche pour les jeux vidéo sur Gamewisher.com. À la recherche d'un poste de développeur à CoderPad, où je pourrais apporter mes compétences en développement front-end et back-end dans un environnement Agile, pour soutenir votre équipe Tech à renforcer vos produits et assurer leur évolutions. */}
                  
                  <ul>
                    <li>
                      9 ans d'expérience en développement Full stack en front et back office.
                    </li>
                    <li>
                      5 ans d'expérience en développement Agile
                    </li>
                    <li>
                      3 projets réalisés en remote
                    </li>
                    <li>
                      Conduite de projets de la conception à la livraison finale
                    </li>
                    <li>
                      Participation au développement de projets en anglais avec un Product Owner danois
                    </li>
                  </ul>
                  </span>
                </div>
              </Block>
              <Block title={'Expérience'}>
                  {cv.experiences.map((exp: IExperience[], index: number) => {
                    return <Experience key={index} data={exp} />
                  })}
              </Block>              
            </div>
          </div>   
          <div style={{flex:2}}>    
            <Block title={"Principales compétences "}>        
              {cv.skills.filter((s) => s.type === 'hard').map((skill) => {
                  return (
                    <Skill data={skill} key={skill.name} />
                  )
              })}
            </Block>

            <Block title={"Retrouvez moi en ligne"}>  
                <Skill data={{
                  type: "string",
                  icon: "linkedin",
                  name: "LinkedIn.com",
                  subtitle: "/in/jeremiegambin",
                  link: "https://www.linkedin.com/in/jeremiegambin/"
                }} />
                <Skill data={{
                  type: "string",
                  icon: "cg",
                  name: "CodinGame.com",
                  subtitle: "/jBigman",
                  link: "https://www.codingame.com/profile/262698c2b361339f78efcf6f014e5b231298241"
                }} />      
                <Skill data={{
                  type: "string",
                  icon: "github",
                  name: "Github.com",
                  subtitle: "/jBigman",
                  link: "https://github.com/jbigman"
                }} />
            </Block>

            <Block title={'Formation'}>
              {cv.formations.map((exp: IExperience[]) => {
                return <Experience key={exp[0].title} data={exp} />
              })}
            </Block> 
            <Block title={'Autres activités'}>
               <Skill data={
                {
                  type: 'other',
                  icon: "youtube",
                  name: "TAF Jeux Mobile",
                  subtitle: "Guides, présentations et reportages sur les jeux mobile",
                  link: "https://www.youtube.com/c/TAFJeuxMobile",
                }
              }/>
             </Block> 
          </div>   
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default Curiculum
