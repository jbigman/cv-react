import Image from 'next/image'
import Link from 'next/link'
import photo from '../../public/img/photo-profil-b&w.png'
import cv from '../json/curiculum.json'
import sidebarStyles from './sidebar.module.scss'

const SideBar = () => {
  return (
    <div className={sidebarStyles.sidebar}>
    <h1>Jérémie GAMBIN</h1>
    <h2>Développeur Full Stack</h2>
    <div className={sidebarStyles.imageContainer}>
    <Image src={photo} alt='Photo' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} ></Image>
    </div>
    <div className={sidebarStyles.list}>
    <div> {cv.address}</div>
    <a href={`mailto:${cv.email}`} className={sidebarStyles.clickable}> {cv.email}</a>
    <a href={`tel:${cv.phone}`} className={sidebarStyles.clickable}> {cv.phone}</a>
    <div><Link href={'https://www.linkedin.com/in/jeremiegambin'}>LinkedIn</Link></div>
    <div><Link href={cv.githubUrl}>Github</Link></div>
    </div>
    <div className={sidebarStyles.skills}>
    {
      cv.skills.stacks.map((stack, index) => {
        return (
          <div key={index} className={'column center'}>
          <h3> { stack.type } </h3>
          <div className={'column center'}>
          {
            stack.stack.map((skill, iskill) => {
              return (
                <span key={iskill} className={sidebarStyles.skill}>{skill}&nbsp;</span>
              )
            })
            }
            </div>
            </div>
        )
      })
        }
        </div>
        </div>
  )
}

export default SideBar
