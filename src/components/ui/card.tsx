"use client";

import Image from "next/image";

import { LucideIcon } from "@/components/ui";

import styles from "./card.module.css";

interface CardProps {
  img: {
    src: string;
    alt: string;
  };
  href: string;
  title: string;
  details: string;
}

const Card: React.FC<CardProps> = ({ img, href, title, details }) => {
  return (
    <a className={styles.link} href={href} target="_blank">
      <Image src={img.src} alt={img.alt} width={64} height={64} />
      <div>
        <p className={styles.title}>
          {title}
          <LucideIcon name="ArrowUpRight" size={16} />
        </p>
        <p className={styles.details}>{details}</p>
      </div>
    </a>
  );
};

export default Card;
