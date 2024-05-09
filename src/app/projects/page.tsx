"use client";

import { motion } from "framer-motion";

import { ProjectsGallery } from "@/components";

import styles from "./page.module.css";

function Projects() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className={styles.section}>
        <h1>Projects</h1>
        <ProjectsGallery />
      </section>
    </motion.main>
  );
}

export default Projects;
