import React from 'react'
import Link from 'next/link'
import styles from '../styles/Actions.module.css'

export default function Actions(props) {
  const { actions, title, children } = props
  return (
    <div className={styles.actions}>
      <h2>{title}</h2>
      <div className={styles.horizRule}></div>
      <div className={styles.actionsContent}>
        {actions && actions.map((action, index) => (
          <Link key={index} href={action.link}>
            <a key={index} className={styles.action}>
              <picture>
                <source srcSet={action.image} type="image/jpg" />
                <img src={action.image} alt={action.alt} />
              </picture>
              <div className={styles.actionGroup}>
                <h3>{action.title}</h3>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.5001 25C12.5001 25.4144 12.6648 25.8118 12.9578 26.1048C13.2508 26.3979 13.6482 26.5625 14.0626 26.5625H32.1658L25.4564 33.2687C25.3111 33.414 25.1959 33.5865 25.1173 33.7763C25.0386 33.9661 24.9982 34.1695 24.9982 34.375C24.9982 34.5804 25.0386 34.7839 25.1173 34.9737C25.1959 35.1635 25.3111 35.336 25.4564 35.4812C25.6017 35.6265 25.7741 35.7418 25.9639 35.8204C26.1537 35.899 26.3572 35.9395 26.5626 35.9395C26.7681 35.9395 26.9715 35.899 27.1613 35.8204C27.3511 35.7418 27.5236 35.6265 27.6689 35.4812L37.0439 26.1062C37.1894 25.9611 37.3048 25.7887 37.3836 25.5988C37.4624 25.409 37.5029 25.2055 37.5029 25C37.5029 24.7945 37.4624 24.591 37.3836 24.4011C37.3048 24.2113 37.1894 24.0389 37.0439 23.8937L27.6689 14.5187C27.3755 14.2253 26.9776 14.0605 26.5626 14.0605C26.1477 14.0605 25.7498 14.2253 25.4564 14.5187C25.163 14.8121 24.9982 15.2101 24.9982 15.625C24.9982 16.0399 25.163 16.4378 25.4564 16.7312L32.1658 23.4375H14.0626C13.6482 23.4375 13.2508 23.6021 12.9578 23.8951C12.6648 24.1882 12.5001 24.5856 12.5001 25Z" fill="black" />
                </svg>
              </div>

            </a>
          </Link>
        ))}
      </div>
      {children}
    </div>
  )
}
