import { type IExperience } from '../Interface/IExperience'
import cv from '../json/curiculum.json'
import styles from './curiculum.module.scss'
import Experience from './experience'
import SideBar from './sidebar'

const Curiculum = () => {
  return (
    <div className={styles.body}>
      <div className='row'>
        <SideBar />
        <div className={styles.main}>
            <h2> A propos de moi </h2>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'justify' }}>
                <span className={'sidebarStyles'}> {cv.description} </span>
            </div>
            <h2>Expérience</h2>
            {cv.experiences.map((exp: IExperience, index: number) => {
              return (<Experience key={index} exp={exp} />)
            })}
            <h2>Formation</h2>
            {cv.formations.map((exp: IExperience, index: number) => {
              return (<Experience key={index} exp={exp} />)
            })}

        </div>
      </div>
    </div>
  )
}

export default Curiculum
