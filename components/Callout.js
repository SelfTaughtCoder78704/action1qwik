import React from 'react'
import styles from '../styles/Callout.module.css'

export default function Callout(props) {
  const { image, title, text, children } = props

  return (
    <div className={styles.callout}>
      <div className={styles.calloutContent}>
        <h2>{title}</h2>
        <div className="horizRule"></div>
        <p>{text}</p>
        {children}
      </div>
      <div className={styles.calloutImage}>
        <picture>
          <source srcSet={image} type="image/jpg" />
          <img src={image} alt={title} />
        </picture>
      </div>
    </div>
  )
}


