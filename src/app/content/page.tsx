"use client";

import { motion } from "framer-motion";

import { ContentGallery } from "@/components";

import styles from "./page.module.css";

function Content() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className={styles.section}>
        <h1>Content</h1>
        <ContentGallery />
      </section>
    </motion.main>
  );
}

export default Content;
