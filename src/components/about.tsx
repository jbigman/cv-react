import Image from 'next/image'
import FormattedMessage from './FormattedMessage'
import styles from './about.module.scss'
import Links from './links'

const About = () => {
  return (
    <div className={styles.about + ' dark-background'}>
      <div className={styles.member}>
        <h2>Jérémie Gambin</h2>
        <p className="text-muted">
          <FormattedMessage id={'ABOUT.KEYWORDS'} />
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}><Image src="/img/IMG_1193.d.jpg" alt="Photo" /></div>
        <br/>
        {<Links />}
      </div>
    </div>
  )
}

export default About
