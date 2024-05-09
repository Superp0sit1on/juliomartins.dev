import { ReactIcon } from "@/components/ui";
import links from "@/data/social.json";

import styles from "./social-links.module.css";

function SocialLinks() {
  return (
    <ul className={styles.links}>
      {links.map((item) => {
        return (
          <li key={item.id}>
            <a href={item.href} target="_blank">
              <ReactIcon name={item.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
