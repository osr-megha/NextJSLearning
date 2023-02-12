import React from 'react'
import styles from "../styles/Home.module.css"

const NavbarHeader = () => {
  return (
    <React.Fragment>
    <nav className={styles.navbar}>
                <li className={styles.li}>
                  <button className={styles.button}>All Section</button>
                </li>
                <li className={styles.li}>
                  <button className={styles.button}>Physics</button>
                </li>
                <li className={styles.li}>
                  <button className={styles.button}>Chemistry</button>
                </li>
                <li className={styles.li}>
                  <button className={styles.button}>Maths</button>
                </li>
              </nav>
    </React.Fragment>
  )
}

export default NavbarHeader