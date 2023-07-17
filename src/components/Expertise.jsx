import React from "react";
import styles from "./css/Expertise.module.css";
import Tag from "./Tag";
export default function Expertise() {
  return (
    <div className={styles.expertise}>
      <h2>Leverage our software & hardware expertise</h2>
      <p>
        Use our services and tech expertise to create disruptive products &
        solutions that can revolutionize your business and stay ahead with
        evolving technological advancements.
      </p>
      <div className={styles.tagsLayout}>
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
      <button className={styles.button}>Explore Our Entire Tech Stack</button>
    </div>
  );
}
