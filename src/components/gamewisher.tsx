import React from 'react'
import GamewisherFront from '../../public/v2/gw-large.png'
import GamewisherMobile from '../../public/v2/gw-mobi.png'
import Image from 'next/image'
const Descriptif = (props: { titre: string, keywords: string[] }) => {
  return (
        <div className="row" style={{ paddingBottom: '1.3em' }}>
          {props.titre && <span style={{ fontWeight: 'bold' }}>{props.titre}:&nbsp;</span>}
          {
            props.keywords.map((k: string, index: number) => {
              return (
                <React.Fragment key={index}>
                  {k}{index !== props.keywords.length - 1 ? ' · ' : ''}
                </React.Fragment>
              )
            })
          }
        </div>
  )
}

const GameWisher = () => {
  return (
    <div className='dark-background' style={{ textAlign: 'center' }}>
      <div style={{
        height: '200px',
        backgroundImage: 'url(\'/v2/gw-banner.png\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '2em'
      }} />
      <div className='content'>
      <div style={{ paddingBottom: '1.3em' }}>
      <h2>Moteur de recherche</h2>
        Avec plus de 9000 jeux mobile referencés, Gamewisher.com est un moteur de recherche riche en options pour favoriser la découverte de jeux sur mesure par l'intermédiaire :
        <br/>
        <ul>
          <li>de nombreux critères : Prix, age, style graphique, type de jeu, sans publicité, sans achat intégré, promotion en cours, etc... </li>
          <li>et plusieurs tri: Nombre de téléchargement, note des stores, notes gamewisher, date de sortie, date de mise à jour.</li>
        </ul>
      </div>
      <div style={{ paddingBottom: '1.3em' }}>
        L’algorithme de scrapping cherche automatiquement les nouveaux jeux ainsi que les jeux en promotion.
      </div>
      <Image src={GamewisherFront} alt="Gamewisher banner" style={{ width: '60%', height: 'auto' }} />
      <h2>Communauté de joueur</h2>
      <div style={{ paddingBottom: '1.3em' }}>
      Chaque action réalisée sur le site (like, commentaires etc) permet d'engendrer des points.
      <br />
      Cette gamification du site permet d'octroyer plus de droits aux utilisateurs pour notamment rédiger des articles ou contrôler les avis signalés.
      </div>
      <Image src={GamewisherMobile} alt="Gamewisher banner" style={{ width: '600px', maxWidth: '100%', height: 'auto', paddingBottom: '1.3em' }} />
      <Descriptif titre={'Stack serveur'} keywords={['MongoDB', 'Node.js', 'Express.js']}/>
      <Descriptif titre={'Stack gamewisher.com'} keywords={['React.js', 'Next.js', 'TypeScript']} />
    </div>
    </div>
  )
}

export default GameWisher
