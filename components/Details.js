import React from 'react'
import styles from '../styles/Details.module.css'

export default function Details(props) {
  const { details, title, children } = props
  return (
    <div className={styles.details}>
      <h2>{title}</h2>
      <div className={styles.horizRuleTop}></div>
      <div className={styles.detailsContent}>
        {details && details.map((detail, index) => (
          <div key={index} className={styles.detail}>
            <picture>
              <source srcSet={detail.image} type="image/png" />
              <img src={detail.image} alt={detail.title} />
            </picture>
            <h3>{detail.title}</h3>
            <div className={styles.horizRule}></div>
            <p>{detail.text}</p>
          </div>
        ))}
      </div>
      {children}
    </div>
  )
}
