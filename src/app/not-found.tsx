import Image from "next/image";
import Link from "next/link";

import { LucideIcon } from "@/components/ui";

import styles from "./not-found.module.css";

function NotFound() {
  return (
    <main>
      <section className={styles.notFound}>
        <Image
          src="/images/animated/travolta.webp"
          alt="Scene of the John Travolta lost from the Pulp Fiction movie"
          width={480}
          height={204}
        />
        <p>Sorry, could not find what you&apos;re looking for...</p>
        <Link href="/">
          <LucideIcon name="ArrowLeft" size={16} />
          Go back to home
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
