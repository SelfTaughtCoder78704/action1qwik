import React from 'react'
import styles from '../styles/SecondarySection.module.css'

export default function SecondarySection(props) {
  const { title, text } = props
  return (
    <div className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.horizRule}></div>
      <p>{text}</p>
    </div>
  )
}
