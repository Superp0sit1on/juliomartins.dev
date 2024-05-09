"use client";

import Link from "next/link";
import { useState } from "react";

import { NavBar, ThemeToggle } from "@/components";
import { Logo } from "@/components/svg";
import { LucideIcon } from "@/components/ui";

import styles from "./header.module.css";

const Header = () => {
  const [isActivated, setIsActivated] = useState(false);

  const handleNavbar = () => {
    setIsActivated(!isActivated);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Logo />
        </Link>
        <a
          className={styles.cta}
          href="https://linkedin.com/in/juliocmxavier"
          target="_blank"
        >
          Hire me
        </a>
      </div>
      <NavBar
        className={`${styles.navBar} ${isActivated ? styles.activated : ""}`}
      />
      <div className={styles.tools}>
        <ThemeToggle />
        <button className={styles.menuToggler} onClick={handleNavbar}>
          <LucideIcon name={isActivated ? "X" : "Menu"} size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
