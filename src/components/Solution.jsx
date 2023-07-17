import React from "react";
import styles from "./css/Solution.module.css";
import Cards from "./Cards";
export default function Solution() {
  return (
    <div className={styles.solution}>
      <h2>Customised Solutions for All Your Business Needs</h2>
      <p>
        Take Your Business to the Next Level with Our Industry-Leading Services
      </p>
      <div className={styles.cardsLayout}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
