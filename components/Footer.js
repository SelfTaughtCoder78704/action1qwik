import React from 'react'
import GoogleMap from './GoogleMap'
import styles from '../styles/Footer.module.css'
export default function Footer(props) {
  const { logo, address, hours } = props
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.footerRow}>
          <div className={styles.footerSection}>
            <picture>
              <source srcSet={logo} type="image/jpg" />
              <img src={logo} alt="logo" />
            </picture>
          </div>
          <div className={styles.footerSection}>
            <h3>Address</h3>
            <p>{address.street}</p>
            <p>{address.city}, {address.state} {address.zip}</p>
            <p>{address.phone}</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Hours</h3>
            <p>{hours.monday}</p>
            <p>{hours.tuesday}</p>
            <p>{hours.wednesday}</p>
            <p>{hours.thursday}</p>
            <p>{hours.friday}</p>
            <p>{hours.saturday}</p>
            <p>{hours.sunday}</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Map</h3>
            <GoogleMap />
          </div>
        </div>
      </div>
    </footer>
  )
}

