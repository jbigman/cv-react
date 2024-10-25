import type { ISkill } from '../Interface/ISkill'
import styles from './network.module.scss'
import { TypeScriptIcon } from '../style/icons/TypeScriptIcon'
import { NodeJsIcon } from '../style/icons/NodeJsIcon'
import { ReactIcon } from '../style/icons/ReactIcon'
import { AutonomieIcon } from '../style/icons/AutonomieIcon'
import { BrainIcon } from '../style/icons/BrainIcon'
import { FireFighterIcon } from '../style/icons/FireFighterIcon'
import { YoutubeIcon } from '../style/icons/YoutubeIcon'
import { LinkedInIcon } from '../style/icons/LinkedInIcon'
import { CodinGameIcon } from '../style/icons/CodinGameIcon'
import { GithubIcon } from '../style/icons/GithubIcon'
import { DiscordIcon } from '../style/icons/DiscordIcon'
import { Fragment } from 'react'

const Icon = (props: { name: string}) => {
  
  switch (props.name) {
    case 'discord': return (<DiscordIcon className={styles.icon} />)
    case 'ts': return (<TypeScriptIcon className={styles.icon} />)
    case 'node': return (<NodeJsIcon className={styles.icon} />)
    case 'react': return (<ReactIcon className={styles.icon} />)
    case 'Autonomie': return (<AutonomieIcon className={`${styles.icon}`}/>)
    case 'fire': return (<FireFighterIcon className={`${styles.icon}`} />)
    case 'brain': return (<BrainIcon className={`${styles.icon}`}/>)
    case 'youtube': return (<YoutubeIcon className={`${styles.icon}`}/>)
    case 'linkedin': return (<LinkedInIcon className={`${styles.icon}`} size={30}/>)
    case 'github': return (<GithubIcon className={`${styles.icon}`} size={30}/>)
    case 'cg': return (<CodinGameIcon className={`${styles.icon}`} size={30} />)
  }
}

const NetWork = (props: { data: ISkill[] }) => {
  return (
    <div className={styles.main}>
    {
      props.data.map((d)=> {
        return (
          <Fragment key={d.name}>
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
          </Fragment>
        )
      })
    }
    </div>
  )
}

export default NetWork
