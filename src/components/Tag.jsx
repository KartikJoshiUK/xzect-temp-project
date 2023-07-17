import React from "react";
import Image from "next/image";
import styles from "./css/Tag.module.css";
export default function Tag() {
  return (
    <div className={styles.tag}>
      <Image src="/python.png" alt="" width={32} height={32} priority />
      <span>Python</span>
    </div>
  );
}
