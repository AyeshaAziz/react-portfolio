import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const HOME_URL = '/';
const CLOSE_ICON = 'nav/closeIcon.png';
const MENU_ICON = 'nav/menuIcon.png';
const MENU_BUTTON_ALT = 'menu-button';
const ABOUT_ID = '#about';
const EXPERIRNCE_ID = '#experience';
const PROJECTS_ID = '#projects';
const CONTACT_ID = '#contact';
const ABOUT = 'About';
const EXPERIRNCE = 'Experience';
// const PROJECTS = 'Projects';
const CONTACT = 'Contact';
const PORTFOLIO = 'Portfolio';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href={HOME_URL}>
        {PORTFOLIO}
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl(CLOSE_ICON)
              : getImageUrl(MENU_ICON)
          }
          alt={MENU_BUTTON_ALT}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href={ABOUT_ID}>{ABOUT}</a>
          </li>
          <li>
            <a href={EXPERIRNCE_ID}>{EXPERIRNCE}</a>
          </li>
          {/* <li>
            <a href={PROJECTS_ID}>{PROJECTS}</a>
          </li> */}
          <li>
            <a href={CONTACT_ID}>{CONTACT}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};