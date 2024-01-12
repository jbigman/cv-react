import { type IExperience } from '../Interface/IExperience'
import Cartouche from '../components/cartouche'
import experienceStyles from './experience.module.scss'

const Experience = (props: { exp: IExperience }) => {
  return (
    <div className={experienceStyles.experience}>
        <div className={experienceStyles.date}>
          <span>{props.exp.dateStart}</span>
          <span>{props.exp.dateEnd}</span>
        </div>
        <div className={`${experienceStyles.decorator}`}></div>
        <div className={experienceStyles.details + ' column'}>
          <h3 className={experienceStyles.title}>{props.exp.title}</h3>
          {
            props.exp.link
              ? <a href={props.exp.link} target="_blank" className={experienceStyles.company + ' ' + experienceStyles.shift} rel="noreferrer">
                {props.exp.company} {props.exp.duration && <span className={experienceStyles.duration}>{props.exp.duration}</span>}
                </a>
              : <div className={experienceStyles.company + ' ' + experienceStyles.shift}>
              {props.exp.company} {props.exp.duration && <span className={experienceStyles.duration}>{props.exp.duration}</span>}
              </div>
          }
          <div className={`${experienceStyles.shift}`}>{props.exp.description}</div>
          <ul className={experienceStyles.shift + ' column'} >
            {
            props.exp.tasks.map((task) => {
              return (
                <li key={task}>{task}</li>
              )
            })
            }
            </ul>
            {
              props.exp.stack.length > 0 &&
              <div className={experienceStyles.cartouches}><b>{'Compétences: '}</b>{props.exp.stack.map((tech: string, index: number) => {
                return (
                  <Cartouche key={index} name={tech} />
                )
              })}
              </div>
          }
      </div>
    </div>
  )
}

export default Experience
