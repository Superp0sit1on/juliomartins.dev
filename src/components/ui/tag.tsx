"use client";

import styles from "./tag.module.css";

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return <div className={styles.tag}>{children}</div>;
};

export default Tag;
