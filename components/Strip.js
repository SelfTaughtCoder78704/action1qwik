import React from 'react'
import styles from '../styles/Strip.module.css'

export default function Strip(props) {
  const {  children } = props
  return (
    <div className={styles.strip}>
      {children}
    </div>
  )
}
