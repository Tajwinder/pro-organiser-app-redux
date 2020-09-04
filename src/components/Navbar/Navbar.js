import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom'

const Navbar=()=>{
    return(
    <div className={styles.Navbar}>
      <div id={styles.companyLogo}>Pro-Organizer </div>
      <ul className={styles.NavMenu}>
          <li className={styles.menuItem}><NavLink to='/' >Home</NavLink> </li>
          <li className={styles.menuItem}> <NavLink to='/createboard'>Create a board </NavLink></li>
      </ul>
    </div>
    )
}
export default Navbar;