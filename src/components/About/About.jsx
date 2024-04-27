import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am a skilled backend developer adept in C# and .NET
                technologies, with versatile experience encompassing Java,
                Spring Boot, and containerization with Docker. Proficient in
                managing various database systems including Microsoft SQL
                Server, MySQL, and PostgreSQL, ensuring efficient data handling
                and optimization. I have experience developing fast and
                optimised back-end systems and APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>AWS Practitioner</h3>
              <p>
                I have deployed applications to the cloud. With AWS Cloud
                Practitioner certification, i understand AWS services like EC2
                (Elastic Compute Cloud), and Lambda, which can be utilized for
                deploying and hosting backend applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
