import React from "react";
import styles from "./css/Banner.module.css";
import Image from "next/image";
import "./css/design.css";
import Design from "./Design";
export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.pattern}>
        <Image src="./rrreflection.svg" alt="pattern" fill priority />
      </div>
      <div className={styles.content}>
        <div className={styles.tagline}>
          <span className="color-red">Build,</span>{" "}
          <span className="color-blue">test,</span> and{" "}
          <span className="color-green">execute your ideas</span> with our{" "}
          <span className="color-yellow">innovative solutions.</span>
        </div>
        <div className={styles.buttons}>
          <button className="button-solid">
            <Image src="./whatsapp-icon.svg" width={32} height={32} priority />
            <span>Chat now on whatsapp</span>
          </button>
          <button className="button-gradient">Explore our services</button>
        </div>
      </div>
      <div className={`${styles.design} design`}>
        <Design />
      </div>
    </div>
  );
}
