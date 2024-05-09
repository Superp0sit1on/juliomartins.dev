import Image from "next/image";

import { LucideIcon, LucideIconProps } from "@/components/ui";

import styles from "./project.module.css";

interface Link {
  id: number;
  href: string;
  name: string;
  icon: string;
}

interface ProjectProps {
  type: string;
  title: string;
  description: string;
  links: Link[];
  img: {
    src: string;
    alt: string;
  };
}

const Project: React.FC<ProjectProps> = ({
  type,
  title,
  description,
  links,
  img,
}) => {
  return (
    <div className={styles.project}>
      <Image
        className={styles.thumbnail}
        src={img.src}
        alt={img.alt}
        width={438}
        height={250}
      />
      <h3>{type}</h3>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.links}>
        {links.map((link) => (
          <a
            key={link.id}
            className={styles.link}
            href={link.href}
            target="_blank"
          >
            <LucideIcon name={link.icon as LucideIconProps["name"]} size={16} />
            {link.name}
            <LucideIcon name="ArrowUpRight" size={16} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
