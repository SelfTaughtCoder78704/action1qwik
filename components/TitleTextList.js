import React from 'react'
import styles from '../styles/TitleTextList.module.css'

export default function TitleTextList(props) {
  const { title, text, list } = props
  return (
    <div>
      <h2>{title}</h2>
      <div className={styles.horizRule}></div>
      <p>{text}</p>
      <ul className={styles.list}>
        {list && list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
