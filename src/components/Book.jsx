import React from "react";
import styles from "./css/Book.module.css";
import Image from "next/image";
export default function Book() {
  return (
    <div className={styles.book}>
      <div className={styles.pattern}>
        <Image src="/pattern2.svg" fill priority />
      </div>
      <h2>Innovate. Validate. Launch</h2>
      <h3>
        Let‘s transform your idea into reality with our MVP development
        services.
      </h3>
      <button className={styles.button}>Book a free consultation!</button>
      <div className={styles.gradient}></div>
    </div>
  );
}
