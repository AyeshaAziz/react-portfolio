import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const CURSOR_ICON_URL = "about/cursorIcon.png";
const SERVER_ICON_URL = "about/serverIcon.png";
const SERVER_ICON_ALT = "Server icon";
const CURSOR_ICON_ALT = "cursor icon";
const ABOUT_IMAGE_URL = "about/aboutImage.png";
const ABOUT_IMAGE_ALT = "Me sitting with a laptop";
const ABOUT_TITLE = "About";
const FRONTEND_HEADER = "Frontend Developer";
const BACKEND_HEADER = "Backend Developer";
const FRONTEND_DESCRIPTION =
  "I am a frontend developer with experience in building responsive and optimized cross platform applications";
const BACKEND_DESCRIPTION =
  "I have experience developing fast and optimised back-end systems and APIs";
const ABOUT_ID = "about";

export const About = () => {
  return (
    <section className={styles.container} id={ABOUT_ID}>
      <h2 className={styles.title}>{ABOUT_TITLE}</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl(ABOUT_IMAGE_URL)}
          alt={ABOUT_IMAGE_ALT}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl(CURSOR_ICON_URL)} alt={CURSOR_ICON_ALT} />
            <div className={styles.aboutItemText}>
              <h3>{FRONTEND_HEADER}</h3>
              <p>{FRONTEND_DESCRIPTION}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl(SERVER_ICON_URL)} alt={SERVER_ICON_ALT} />
            <div className={styles.aboutItemText}>
              <h3>{BACKEND_HEADER}</h3>
              <p>{BACKEND_DESCRIPTION}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
