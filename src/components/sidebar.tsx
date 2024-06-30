import Image from 'next/image'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import photo from '../../public/img/photo-profil-b&w.png'
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
        <h1>Jérémie GAMBIN</h1>
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
        <Block title={'Développeur Full Stack'}>
          <ul style={{padding : '12px', fontSize: '14px'}}>
            <li>
              9 ans d'expérience en développement Full-Stack Back et Front office.
            </li>
            <li>
              5 ans d'expérience en méthodologie Agile
            </li>
            <li>
              3 projets réalisés en remote
            </li>
            <li>
              2 applications Android
            </li>
            <li>
              Conduite de projets de la conception à la livraison finale
            </li>
          </ul>
          </Block>
      </div>
    </div>
  )
}

export default SideBar
