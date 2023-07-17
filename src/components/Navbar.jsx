"use client";
import React, { useState } from "react";
import styles from "./css/Navbar.module.css";
import Image from "next/image";
export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Image
            src="https://www.xzect.com/assets/images/xzect-logo.svg"
            width={32}
            height={32}
            priority
          />
          <span>Xzect</span>
        </div>
        <button
          className={show ? styles.hamClose : styles.hamOpen}
          onClick={() => setShow((prev) => !prev)}
        >
          <div className={styles.ham1}></div>
          <div className={styles.ham2}></div>
          <div className={styles.ham3}></div>
        </button>
        <div className={styles.gradient}></div>
      </nav>
      <nav
        className={`${styles.sidebar} ${
          show ? styles.sidebarOpen : styles.sidebarClose
        }`}
      >
        <div className={styles.linkContainer}>
          <span>Popular</span>
          <a href="#">Magento Development </a>
          <a href="#">Wordpress Development </a>
          <a href="#">Ecommerce </a>
          <a href="#">Shopify</a>
          <a href="#">NFT </a>
          <a href="#">MVP </a>
          <a href="#">Drones </a>
          <a href="#">View all Popular</a>
        </div>
        <div className={styles.linkContainer}>
          <span>Popular</span>
          <a href="#">Magento Development </a>
          <a href="#">Wordpress Development </a>
          <a href="#">Ecommerce </a>
          <a href="#">Shopify</a>
          <a href="#">NFT </a>
          <a href="#">MVP </a>
          <a href="#">Drones </a>
          <a href="#">View all Popular</a>
        </div>
        <div className={styles.linkContainer}>
          <span>Popular</span>
          <a href="#">Magento Development </a>
          <a href="#">Wordpress Development </a>
          <a href="#">Ecommerce </a>
          <a href="#">Shopify</a>
          <a href="#">NFT </a>
          <a href="#">MVP </a>
          <a href="#">Drones </a>
          <a href="#">View all Popular</a>
        </div>
        <div className={styles.linkContainer}>
          <span>Popular</span>
          <a href="#">Magento Development </a>
          <a href="#">Wordpress Development </a>
          <a href="#">Ecommerce </a>
          <a href="#">Shopify</a>
          <a href="#">NFT </a>
          <a href="#">MVP </a>
          <a href="#">Drones </a>
          <a href="#">View all Popular</a>
        </div>
      </nav>
    </>
  );
}
