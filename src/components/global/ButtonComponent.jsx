import styles from '../global/ButtonComponent.module.css'

// eslint-disable-next-line react/prop-types
const ButtonComponent = ({title, handleClick}) => {
  return (
    <button onClick={handleClick} className={`${styles.button} ${styles.button_1}`}>{title}</button>
  )
}

export default ButtonComponent