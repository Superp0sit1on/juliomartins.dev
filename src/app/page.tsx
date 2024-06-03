"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { DotGrid } from "@/components/svg";
import { Button, LucideIcon } from "@/components/ui";

import styles from "./page.module.css";

function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className={styles.hero}>
        <div className={styles.info}>
          <h1>Welcome! 👋</h1>
          <p>
            I am <strong>Júlio</strong>, a <strong>Software Engineer</strong>,
            based in São Paulo, Brazil, and{" "}
            <strong>
              passionate about enhancing user and developer experiences
            </strong>
            .
          </p>
          <div className={styles.actions}>
            <Link href="about">
              <Button primary>
                Get to know me
                <LucideIcon name="ArrowRight" size={16} />
              </Button>
            </Link>
            <a href="https://github.com/Superp0sit1on/resume/raw/main/files/Resume.pdf">
              <Button secondary>
                Download CV
                <LucideIcon name="CloudDownload" size={16} />
              </Button>
            </a>
          </div>
        </div>
        <div className={styles.profile}>
          <DotGrid />
          <Image
            src="/images/profile.webp"
            alt="Júlio looking up, on a white background, with dark black hair tied up, looking up, wearing a white sweatshirt with Brooklin written on it."
            width={265}
            height={265}
          />
        </div>
      </section>
    </motion.main>
  );
}

export default Home;
