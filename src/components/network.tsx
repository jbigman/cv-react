import type { ISkill } from '../Interface/ISkill'
import styles from './skill.module.scss'
import { TypeScriptIcon } from '../icons/TypeScriptIcon'
import { NodeJsIcon } from '../icons/NodeJsIcon'
import { ReactIcon } from '../icons/ReactIcon'
import { AutonomieIcon } from '../icons/AutonomieIcon'
import { BrainIcon } from '../icons/BrainIcon'
import { FireFighterIcon } from '../icons/FireFighterIcon'
import { YoutubeIcon } from '../icons/YoutubeIcon'
import { LinkedInIcon } from '../icons/LinkedInIcon'
import { CodinGameIcon } from '../icons/CodinGameIcon'
import { GithubIcon } from '../icons/GithubIcon'

const Icon = (props: { name: string}) => {

  switch (props.name) {
    case 'ts': return (<TypeScriptIcon className={styles.icon} />)
    case 'node': return (<NodeJsIcon className={styles.icon} />)
    case 'react': return (<ReactIcon className={styles.icon} />)
    case 'Autonomie': return (<AutonomieIcon className={`${styles.icon}`}/>)
    case 'fire': return (<FireFighterIcon className={`${styles.icon}`} />)
    case 'brain': return (<BrainIcon className={`${styles.icon}`}/>)
    case 'youtube': return (<YoutubeIcon className={`${styles.icon}`}/>)
    case 'linkedin': return (<LinkedInIcon className={`${styles.icon}`}/>)
    case 'github': return (<GithubIcon className={`${styles.icon}`}/>)
    case 'cg': return (<CodinGameIcon className={`${styles.icon}`} />)
  }
}

const NetWork = (props: { data: ISkill[] }) => {
  return (
    <div className={styles.main}>
      <div className='row center' style={{ alignItems: 'center', width: '100%'}}>
        {
          props.data.map((d)=> {
            return (
             <>
              {
                d.link ? (
                  <a key={d.icon}
                    href={d.link}
                    target="_blank"
                    className={`${styles.company} ${d.icon === 'youtube' && styles.silver}`}
                    rel="noreferrer"
                  >
                    <Icon name={d.icon}/>
                  </a>
                ) : (
                  <div  key={d.icon} className={`${styles.company} ${d.icon === 'youtube' && styles.silver}`} >
                    <Icon name={d.icon} key={d.icon}/>
                  </div>
                )
              }
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default NetWork
