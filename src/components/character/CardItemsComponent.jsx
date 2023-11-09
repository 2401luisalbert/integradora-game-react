import styles from './CardItemsComponent.module.css'

const CardItemsComponent = (props) => {

    // eslint-disable-next-line react/prop-types
    const{title, imageURL, description} = props.item

  return (
    <div className={styles.card}>
        <figure className={styles.card__figure}>
        <img  className={styles.card__img} src={imageURL} alt="" />
        </figure>
        <div className={styles.card__container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    </div>
  )
}

export default CardItemsComponent