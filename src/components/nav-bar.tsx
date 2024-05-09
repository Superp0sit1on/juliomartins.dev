import Link from "next/link";

import { LucideIcon } from "@/components/ui";
import links from "@/data/pages.json";

import styles from "./nav-bar.module.css";

interface NavBarProps {
  className?: string;
}

function NavBar({ className }: NavBarProps) {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul>
        {links.map((item) => {
          return (
            <li key={item.id}>
              {item.external ? (
                <a href={item.href} target="_blank">
                  {item.name}
                  <LucideIcon name="ArrowUpRight" size={12} />
                </a>
              ) : (
                <Link href={item.href}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
