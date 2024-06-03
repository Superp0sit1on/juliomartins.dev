"use client";

import { motion } from "framer-motion";

import { Signature } from "@/components/svg";
import { Card, Polaroid, ReactIcon, Tag } from "@/components/ui";
import certifications from "@/data/certifications.json";
import education from "@/data/education.json";
import experience from "@/data/experience.json";
import photos from "@/data/photos.json";
import skills from "@/data/skills.json";

import styles from "./page.module.css";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.section
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className={styles.intro}
      >
        <h1>Hi there! 👋</h1>
        <p>
          My name is <strong>Júlio</strong>, but you can call me{" "}
          <strong>Ju</strong>. I am a <strong>Software Engineer</strong>,
          currently based in <strong>São Paulo</strong>, <strong>Brazil</strong>
          .
        </p>
        <div className={styles.gallery}>
          {photos.map((photo) => (
            <Polaroid key={photo.id} size={192} {...photo} />
          ))}
        </div>
      </motion.section>
      <section className={styles.letter}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          About
        </motion.h1>
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p>
            I graduated with a <strong>Systems Analysis and Development</strong>{" "}
            degree from <strong>Senac University Center</strong>, diving deep
            into frontend development through the{" "}
            <strong>Frontend Career Path</strong> course from{" "}
            <strong>Scrimba</strong>.
          </p>
          <p>
            Also, as you may know, I am{" "}
            <strong>
              passionate about enhancing user and developer experiences
            </strong>
            , always looking to learn or build something new. You can also find
            me hanging out in tech communities.
          </p>
          <p>
            Casually, I love to watch movies and series, from the latest
            blockbusters to those old black & white gems (don&apos;t judge!),
            playing video games from every genre, console and generation,
            cooking different recipes, especially from Korea, Japan, Italia and
            France, or maybe going to coffee shops, cycling and sometimes (wish
            was frequently) mountain biking.
          </p>
          <p>See you soon,</p>
          <Signature />
        </motion.article>
      </section>
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className={styles.career}
      >
        <h1>Career</h1>
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={styles.section}
        >
          <h2>Skills:</h2>
          <div className={styles.skills}>
            {skills.map((item) => (
              <Tag key={item.id}>
                <ReactIcon name={item.icon} />
                {item.name}
              </Tag>
            ))}
          </div>
        </motion.section>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={styles.grid}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={styles.column}
          >
            <h2>Experience</h2>
            {experience.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={styles.column}
          >
            <h2>Education</h2>
            {education.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={styles.grid}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={styles.column}
          >
            <h2>Certifications</h2>
            {certifications.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
