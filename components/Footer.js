import React from 'react'
import GoogleMap from './GoogleMap'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
export default function Footer(props) {
  const { logo, address, hours } = props
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.footerRow}>
          <div className={styles.footerSection}>
            <Image src={logo} alt="logo" width={200} height={42} />
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

