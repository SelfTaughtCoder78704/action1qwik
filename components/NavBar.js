import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

export default function NavBar(props) {
  const { tagLine, logo, links } = props
  const mobileMenu = useRef(null)
  const toggleMobileMenu = () => {
    mobileMenu.current.classList.toggle(styles.active)
  }

  useEffect(() => {
    const closeMenu = () => {
      window.addEventListener('resize', () => {
        if (mobileMenu.current.classList && window.innerWidth > 768) {
          if (mobileMenu.current.classList?.contains(styles.active)) {
            mobileMenu.current.classList.remove(styles.active)
          } else {
            return
          }
        }
      })
    }
    closeMenu()
  }, [])




  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.logo}>
          {logo &&
            <Link href="/">
             <picture>
              <source srcSet={logo} type="image/png" />
              <img src={logo} alt="logo" />
            </picture>
            </Link>
          }
          {tagLine && <h1>{tagLine}</h1>}
        </div>
        <ul className={styles.navLinks}>
          {links && links.map((link, index) => (
            <li key={index}>
              <Link href={link.url}><a className={link.classes ? link.classes : 'link'} >{link.text}</a></Link>
            </li>
          ))}
        </ul>
        <span className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>MENU</span>
      </nav>


      <div className={styles.mobileMenu} ref={mobileMenu} >
        <span className={styles.closeBtn} onClick={toggleMobileMenu}>X</span>
        <ul className={styles.mobileLinks}>
          {links && links.map((link, index) => (
            <li key={index}>
              <Link href={link.url}><a className={link.classes ? link.classes : 'link'} >{link.text}</a></Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}



