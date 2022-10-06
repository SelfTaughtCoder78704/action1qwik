import Link from 'next/link'
import React from 'react'
import ContactForm from './ContactForm'
import styles from '../styles/HomeContact.module.css'

export default function HomeContact() {

  return (
    <div className={styles.homeContact}>
      <div className={styles.top}>
        <h2>CONTACT US TODAY</h2>
        <div className='horizRule'></div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.group}>
          <Link href='tel:1-800-555-5555'>
            <a className={styles.phone}>Phone</a>
          </Link>
          <Link href='mailto:bobbynicholson78704@gmail.com'>
            <a className={styles.email}>Email</a>
          </Link>
        </div>
        <ContactForm
          url='https://www.google.com'
        />
      </div>
    </div>
  )
}
