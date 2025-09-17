import React, { useState } from "react";
import skillls from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const EXPERIENCE_ID = "experience";
const TITLE = "Experience";
const LOGO = "Logo";

export const Experience = () => {
  return (
    <section className={styles.container} id={EXPERIENCE_ID}>
      <h2 className={styles.title}>{TITLE}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>{getSkills()}</div>
        <ul className={styles.history}>{getHistory()}</ul>
      </div>
    </section>
  );
};

const getSkills = () => {
  return skillls.map((skill, id) => {
    return (
      <div className={styles.skill} key={id}>
        <div className={styles.skillImageContainer}>
          <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
        </div>
        <p>{skill.title}</p>
      </div>
    );
  });
};

const getHistory = () => {
  return history.map((item, index) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
      <div>
        <li
          className={styles.historyItem}
          key={index}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {!isExpanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          <img
            src={getImageUrl(item.imageSrc)}
            alt={`${item.organisation} ${LOGO}`}
          />
          <div className={styles.historyItemDetails}>
            <h3>{`${item.role}, ${item.organisation}`}</h3>
            <p>{`${item.startDate} - ${item.endDate}`}</p>
          </div>
        </li>
        {isExpanded && getExperiences(item.experiences, isExpanded)}
      </div>
    );
  });
};

const getDetails = (details) => {
  return details.map((item, index) => (
    <li className={styles.header} key={index}>
      {item.header}
      <div className={styles.description}>{item.desc}</div>
    </li>
  ));
};

const getExperiences = (experiences) => {
  return (
    <div className={styles.historyItemDescription}>
      <img className={styles.subImg} src={getImageUrl(experiences.subImageSrc)} alt='' />

      <ul>{getDetails(experiences.details)}</ul>
    </div>
  );
};
