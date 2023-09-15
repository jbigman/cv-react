import React from 'react'
import SideBar from './SideBar'
import Block from './Block'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Curiculum from '../json/Curiculum'

const HomePage = () => {
  const cv = Curiculum.data
  return (
        <header className="App-header">
            <section id="main">
                <header id="title">
                    <h1>{cv.prenom} <strong>{cv.nom}</strong></h1>
                    <h3><span className="available"/>Disponible</h3>
                </header>
                <section className="main-block concise">
                    <h2>
                        <FontAwesomeIcon icon={faSuitcase}/> Expériences
                    </h2>
                    {
                        cv.experiences.length > 0 && cv.experiences.map((d) => {
                          return (Block(d))
                        })
                    }
                </section>
                <section className="main-block concise">
                    <h2>
                        <FontAwesomeIcon icon={faGraduationCap}/> Formation
                    </h2>
                    {
                        cv.formations.length > 0 && cv.formations.map((d) => {
                          return (Block(d))
                        })
                    }
                </section>

            </section>
            <SideBar/>
        </header>
  )
}

export default HomePage
