import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'
import styles from '../styles/ContactPage.module.css'

export default function contact() {
  return (
    <div>
      <Head>
        <title>Action 1 Qwik Service | Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.contact}>
        <h1>Contact Us</h1>
        <div className={styles.horizRule}></div>
        <ContactForm />
      </div>
    </div>
  )
}
