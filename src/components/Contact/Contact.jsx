import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const CONTACT_ID = "contact";
const CONTACT_TITLE = "Contact";
const CONTACT_DESCREPTION = "Feel free to reach out!";
const MAIL_TO = "mailto:ayesha444436@gmail.com";
const EMAIL_ICON_URL = "contact/emailIcon.png";
const EMAIL_ICON_URL_ALT = "Email icon";
const EMAIL = "Email";
const LINKEDIN_ICON_URL = "contact/linkedinIcon.png";
const LINKEDIN_ICON_URL_ALT = "LinkedIn icon";
const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/ayesha-aziz-945620b9";
const LINKEDIN = 'LinedIn';
const GIT = 'GitHub';
const GIT_URL = 'https://github.com/AyeshaAziz';
const GITHUB_ICON_PATH = "contact/githubIcon.png";
const GIT_ICON_URL_ALT = "GitHub icon";

export const Contact = () => {
  return (
    <footer id={CONTACT_ID} className={styles.container}>
      <div className={styles.text}>
        <h2>{CONTACT_TITLE}</h2>
        <p>{CONTACT_DESCREPTION}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl(EMAIL_ICON_URL)} alt={EMAIL_ICON_URL_ALT} />
          <a href={MAIL_TO}>{EMAIL}</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl(LINKEDIN_ICON_URL)}
            alt={LINKEDIN_ICON_URL_ALT}
          />
          <a href={LINKEDIN_PROFILE_URL}>{LINKEDIN}</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl(GITHUB_ICON_PATH)} alt={GIT_ICON_URL_ALT} />
          <a href={GIT_URL}>{GIT}</a>
        </li>
      </ul>
    </footer>
  );
};
