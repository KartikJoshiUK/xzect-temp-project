import React from "react";
import styles from "./css/Footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <h3>Xzect Labs Pvt. Ltd.</h3>
        <p>
          Xzect provides a diverse array of services that enable both businesses
          and individuals to bring their vision to life . Our specialties
          include software development, website design and SEO, cloud services,
          robotics and automation, 3D printing and prototyping, data science and
          analytics, AI and machine learning, IOT, AR and VR, blockchain, and
          other tech-related services. Our team of experienced professionals is
          available to assist with the design and development of new products,
          exploration of robotics and automation possibilities, or any other
          requirements.
        </p>
        <p>Registered Address: 203, 2-A/3, Asaf Ali Road, Delhi - 110002</p>
        <p>CIN: U72200DL2022PTC408714</p>
        <p>GST: 07AAACX4373J1Z2</p>
        <div className={styles.media}>
          <a href="#">
            <Image src={"/facebook.png"} width={32} height={32} />
          </a>
          <a href="#">
            <Image src={"/facebook.png"} width={32} height={32} />
          </a>
          <a href="#">
            <Image src={"/facebook.png"} width={32} height={32} />
          </a>
          <a href="#">
            <Image src={"/facebook.png"} width={32} height={32} />
          </a>
          <a href="#">
            <Image src={"/facebook.png"} width={32} height={32} />
          </a>
          <a href="#">
            <Image src={"/facebook.png"} width={32} height={32} />
          </a>
        </div>
      </div>
      <div className={styles.links}>
        <span>Services</span>
        <a href="#">Software & App Development</a>
        <a href="#">Website Development & SEO</a>
        <a href="#">Cloud Services</a>
        <a href="#">Robotics & Automation</a>
        <a href="#">3D Printing & prototyping</a>
        <a href="#">Data Science & Analytics</a>
        <a href="#">AI & Machine Learning</a>
        <a href="#">IOT, AR & VR</a>
        <a href="#">Blockchain</a>
        <a href="#">Tech Consultancy</a>
        <a href="#">Research & Development</a>
        <a href="#">View all Services</a>
      </div>
      <div className={styles.links}>
        <span>Services</span>
        <a href="#">Software & App Development</a>
        <a href="#">Website Development & SEO</a>
        <a href="#">Cloud Services</a>
        <a href="#">Robotics & Automation</a>
        <a href="#">3D Printing & prototyping</a>
        <a href="#">Data Science & Analytics</a>
        <a href="#">AI & Machine Learning</a>
        <a href="#">IOT, AR & VR</a>
        <a href="#">Blockchain</a>
        <a href="#">Tech Consultancy</a>
        <a href="#">Research & Development</a>
        <a href="#">View all Services</a>
      </div>
      <div className={styles.links}>
        <span>Services</span>
        <a href="#">Software & App Development</a>
        <a href="#">Website Development & SEO</a>
        <a href="#">Cloud Services</a>
        <a href="#">Robotics & Automation</a>
        <a href="#">3D Printing & prototyping</a>
        <a href="#">Data Science & Analytics</a>
        <a href="#">AI & Machine Learning</a>
        <a href="#">IOT, AR & VR</a>
        <a href="#">Blockchain</a>
        <a href="#">Tech Consultancy</a>
        <a href="#">Research & Development</a>
        <a href="#">View all Services</a>
      </div>
    </div>
  );
}
