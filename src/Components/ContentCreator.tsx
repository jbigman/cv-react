import React from 'react'
import YoutubeSnapshots from '../../public/v2/youtube-large.png'
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

const ContentCreator = () => {
  return (
    <div className='dark-background' style={{ textAlign: 'center' }}>
      <div style={{
        height: '200px',
        backgroundImage: 'url(\'/v2/youtube-banner.png\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '2em'
      }} />

      <div className='content'>

      <div style={{ paddingBottom: '1.3em' }}>
        <h2>Streaming et contenus vidéo</h2>
        <div style={{ paddingBottom: '1.3em' }}>
          <div>
          Afin d'offrir une meilleur visibilité sur les jeux mobile, la chaîne diffusait plusieurs formats
          </div>
          <ul>
            <li>Présentation de jeu au format 4 minutes</li>
            <li>Présentation de jeu en bêta test</li>
            <li>Compilation des meilleures sorties</li>
            <li>Guide/solution détaillée de mécanismes de jeu</li>
            <li>Article de fond sur le domaine du jeu mobile</li>
          </ul>
        </div>

          <Image src={YoutubeSnapshots} alt="Gamewisher banner" style={{ maxWidth: '90%', height: 'auto', paddingBottom: '1.3em' }} />
          <Descriptif titre={'Compétences'} keywords={['Rédaction de script', 'Montage vidéo', 'Voix off', 'Talk Show']}/>
      </div>
      </div>
    </div>
  )
}

export default ContentCreator
