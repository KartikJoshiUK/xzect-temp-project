import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Solution from "@/components/Solution";
import Expertise from "@/components/Expertise";
import Book from "@/components/Book";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Solution />
      <Expertise />
      <Book />
      <Footer />
      <footer>© 2018 - 2023. Xzect Labs Pvt. Ltd. All rights reserved.</footer>
    </main>
  );
}
