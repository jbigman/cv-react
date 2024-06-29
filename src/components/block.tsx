import styles from './block.module.scss'

const Block = (props: { title: string, children: any, style?: any }) => {
  return (
    <div className={styles.main} style={props.style}>
      <h2 className={styles.title}>
        {props.title}
      </h2>
      <div  className={styles.content}>
        {props.children}
      </div>
    </div>
  )
}

export default Block
