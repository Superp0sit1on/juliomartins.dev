import Image from "next/image";

import styles from "./polaroid.module.css";

interface PolaroidProps {
  src: string;
  alt: string;
  size: number;
  rotation: number;
}

const Polaroid: React.FC<PolaroidProps> = ({ src, alt, size, rotation }) => {
  return (
    <Image
      className={styles.polaroid}
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};

export default Polaroid;
