import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoImg from "../../assets/logo.png";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.container}>
          <a href="#" className={styles.logo}>
            <img src={logoImg} alt="WemaWare" />
          </a>

          <div className={styles.navLinks}>
            <a href="#problem">The Problem</a>
            <a href="#solution">Solution</a>
            <a href="#features">Features</a>
            <a href="#who">Who It's For</a>
            <a href="#about">About</a>
          </div>

          <div className={styles.cta}>
            <a href="#request-demo" className={styles.ctaButton}>Request Demo</a>
          </div>

          <div
            className={`${styles.mobileToggle} ${mobileOpen ? styles.open : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </motion.nav>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}>
        <a href="#problem" onClick={() => setMobileOpen(false)}>
          The Problem
        </a>
        <a href="#solution" onClick={() => setMobileOpen(false)}>
          Solution
        </a>
        <a href="#features" onClick={() => setMobileOpen(false)}>
          Features
        </a>
        <a href="#who" onClick={() => setMobileOpen(false)}>
          Who It's For
        </a>
        <a href="#about" onClick={() => setMobileOpen(false)}>
          About
        </a>
        <a
          href="#request-demo"
          className={styles.mobileCtaButton}
          onClick={() => setMobileOpen(false)}
        >
          Request Demo
        </a>
      </div>
    </>
  );
}
