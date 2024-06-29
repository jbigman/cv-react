import Image from 'next/image'
import { FiPrinter } from 'react-icons/fi'
import photo from '../../public/img/photo-profil-b&w.png'
import cv from '../json/curiculum.json'
import sidebarStyles from './sidebar.module.scss'

const SideBar = () => {

  const Element = (props: {title: string, children: any}) => {
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
      </div>
      <div className={sidebarStyles.right}>
        <h1 style={{marginBottom: '0.3em'}}>Jérémie GAMBIN</h1>
        <h2>Développeur Full Stack</h2>
        <div className={sidebarStyles.list}>
          <Element title={'Location'}>
            <div> {cv.address}</div>
          </Element>

          <Element title={'Email'}>
            <a href={`mailto:${cv.email}`} className={sidebarStyles.clickable}>
              {' '}
              {cv.email}
            </a>
          </Element>

          
          <Element title={'Phone'}>
            <a href={`tel:${cv.phone}`} className={sidebarStyles.clickable}>
              {' '}
              {cv.phone}
            </a>
          </Element>
        </div>
      </div>
    </div>
  )
}

export default SideBar
