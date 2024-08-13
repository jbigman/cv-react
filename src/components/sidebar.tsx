import Image from 'next/image'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import photo from '../../public/img/avatar.png'
import cv from '../json/curiculum.json'
import sidebarStyles from './sidebar.module.scss'
import Block from './block'
import type { ReactElement } from 'react'

const SideBar = () => {

  const Element = (props: {title: ReactElement, children: any}) => {
    return (
      <div className={sidebarStyles.element}>
        <div className={sidebarStyles.title}>
          {props.title}
        </div>
        <div className={sidebarStyles.content}>
          {props.children}
        </div>
      </div>
    )
  }

  return (
    <div className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.imageContainer}>
        <Image
          src={photo}
          alt="Photo de profil"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <h1>{cv.prenom} {cv.nom}</h1>
      </div>
      <div className={sidebarStyles.right}>
        <div className={sidebarStyles.list}>
          <Element title={<FiMapPin />}>
            <div> {cv.address}</div>
          </Element>
          <Element title={<FiMail />}>
            <a href={`mailto:${cv.email}`} className={sidebarStyles.clickable}>
              {' '}
              {cv.email}
            </a>
          </Element>
          <Element title={<FiPhone />}>
            <a href={`tel:${cv.phone}`} className={sidebarStyles.clickable}>
              {' '}
              {cv.phone}
            </a>
          </Element>
        </div>
        <Block title={'Senior Fullstack Developer'}>
          <ul style={{padding : '12px', fontSize: '14px'}}>
            {
              cv.punchLines.map((punchline) => {
                return (
                  <li key={punchline}>{punchline}</li>
                  
                )
              })
            }
          </ul>
          </Block>
      </div>
    </div>
  )
}

export default SideBar
