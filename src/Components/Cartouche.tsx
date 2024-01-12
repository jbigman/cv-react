import styles from './cartouche.module.scss'

const Cartouche = (props: { name: string }) => {
  return (
    <span className={styles.cartouche}>
       {props.name}・
    </span>
  )
}

export default Cartouche
