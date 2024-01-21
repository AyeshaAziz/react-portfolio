import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Introduction.module.css";

const TITLE = "Hi, I am Ayesha";
const DESCRIPTION =
  "I bring over 8 years of expertise as a front-end developer, specializing in AngularJS, Angular, and JavaScript. Additionally, I possess 4 years of experience as a full-stack developer, having worked with various cutting-edge technologies during that time. Feel free to connect with me to learn more about my skills and experiences.";
const MAIL_TO = "mailto:ayeshaaziz44436@gmail.com";
const URL = "intro/introImage.png";
const URL_ALT = "Intro image";
const CONTACT_ME = "Contact Me";

export const Introduction = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{TITLE}</h1>
        <p className={styles.description}>{DESCRIPTION}</p>
        <a className={styles.contactBtn} href={MAIL_TO}>
          {CONTACT_ME}
        </a>
      </div>
      <img className={styles.introImg} src={getImageUrl(URL)} alt={URL_ALT} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
