"use client";

import Image from "next/image";
import { useEffect } from "react";

import { LucideIcon } from "@/components/ui";

import styles from "./error.module.css";

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <section className={styles.error}>
        <Image
          src="/images/animated/fine.webp"
          alt="This is fine meme"
          width={480}
          height={270}
        />
        <p>Oh no, something went wrong!</p>
        <button onClick={() => reset()}>
          Try again
          <LucideIcon name="RefreshCw" size={16} />
        </button>
      </section>
    </main>
  );
}

export default Error;
