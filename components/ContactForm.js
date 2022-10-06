import React from 'react'
import styles from '../styles/ContactForm.module.css'

export default function ContactForm(props) {
  const { url } = props
  return (
    <form className={styles.form} name="contact" method="POST" action={url}>
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <div className={styles.formInputContainer}>
        <input type='text' name='name' placeholder='Name' id='name' className={styles.formControl} />
      </div>
      <div className={styles.formInputContainer}>
        <input type='email' placeholder='Email' name='email' id='email' className={styles.formControl} />
      </div>
      <div className={styles.formInputContainer}>
        <input type='tel' placeholder='Phone Number' name='phone' id='phone' className={styles.formControl} />
      </div>
      <div className={styles.formInputContainer}>
        <textarea name='message' placeholder='Message' id='message' className={styles.formControl} />
      </div>
      <button type='submit' className='btn btn-red m-0'>Submit</button>
    </form>
  )
}