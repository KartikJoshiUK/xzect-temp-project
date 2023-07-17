import React from "react";
import styles from "./css/Cards.module.css";
import Image from "next/image";
export default function Cards() {
  return (
    <div className={styles.cards}>
      <div>
        <Image src="/card.jpg" fill priority />
      </div>
      <h5>Software & App Development</h5>
      <a href="#">Get Started</a>
    </div>
  );
}
