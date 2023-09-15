import React from 'react'
import Cartouche from './Cartouche'
import { faEnvelope, faMapMarker, faPhone, faCar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import Curiculum from '../json/Curiculum'

const SideBar = () => {
  const cv = Curiculum.data
  return (
        <aside id="sidebar">
            <img src="./photo-profil-b&w.png" className="avatar" alt={'Avatar'}/>
            <div className="side-block" id="contact">
                <h1>
                    Info
                </h1>
                <ul>
                    {cv.address && <li><FontAwesomeIcon icon={faMapMarker}/> {cv.address}</li>}
                    {cv.email && <li><FontAwesomeIcon icon={faEnvelope}/> {cv.email}</li>}
                    {cv.phone && <li><FontAwesomeIcon icon={faPhone}/> {cv.phone}</li>}
                    {cv.githubUrl && <li>
                        <FontAwesomeIcon icon={faGithub}/>
                        <a href={cv.githubUrl}> Github/{cv.githubUrl.split('/')[3]}</a>
                    </li>}
                    {cv.stackOverFlowUrl && <li>
                        <FontAwesomeIcon icon={faStackOverflow}/>
                        <a href={cv.stackOverFlowUrl}> StackOverFlow/{cv.stackOverFlowUrl.split('/')[5]}</a>
                    </li>}
                    {cv.drivingLicence && <li><FontAwesomeIcon icon={faCar}/> {cv.drivingLicence}</li>}
                </ul>
            </div>
            <div className="side-block" id="skills">
                <h1>
                    Compétences
                </h1>
                {
                    cv.skills.stacks.map((collection: any, index: number) => {
                      return (
                            <div key={index}>
                                <strong>{collection.type}</strong>
                                <ul>
                                    {
                                        collection.stack.map((element: string, i2: number) => {
                                          return (
                                                <li key={i2}>
                                                    {Cartouche(element)}
                                                </li>

                                          )
                                        })
                                    }
                                </ul>
                            </div>
                      )
                    })
                }
            </div>
            <div className="side-block" id="disclaimer">
                {/* */}
            </div>
        </aside>
  )
}

export default SideBar
