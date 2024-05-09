import Image from "next/image";

import { LucideIcon } from "@/components/ui";

import styles from "./content.module.css";

interface ContentProps {
  href: string;
  img: {
    src: string;
    alt: string;
  };
  type: string;
  title: string;
  date: string;
}

const Content: React.FC<ContentProps> = ({ href, img, type, title, date }) => {
  return (
    <a className={styles.card} href={href} target="_blank">
      <Image
        className={styles.thumbnail}
        src={img.src}
        alt={img.alt}
        width={438}
        height={300}
      />
      <h3>{type}</h3>
      <h2>{title}</h2>
      <div className={styles.bottom}>
        <h3>{date}</h3>
        <LucideIcon name="ArrowUpRight" size={16} />
      </div>
    </a>
  );
};

export default Content;
