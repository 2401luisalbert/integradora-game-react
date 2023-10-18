import styles from '../global/ButtonComponent.module.css'

// eslint-disable-next-line react/prop-types
const ButtonComponent = ({title}) => {
  return (
    <div className={`${styles.button} ${styles.button_1}`}>{title}</div>
  )
}

export default ButtonComponent