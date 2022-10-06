import React from 'react'
import styles from '../styles/Hero.module.css'

export default function Hero(props) {
  const { title, subtitle, image, text, children } = props
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div>
          <h1>{title}</h1>
          <div className="horizRule"></div>
          <h2>{subtitle}</h2>
          <p>{text}</p>
          {children}
        </div>
      </div>
    </div>
  )
}

