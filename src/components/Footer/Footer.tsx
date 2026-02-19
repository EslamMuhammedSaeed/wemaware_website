import { motion } from "framer-motion";
import { fadeInUp } from "../../hooks/useRevealAnimation";
import logoImg from "../../assets/logo.png";
import styles from "./Footer.module.scss";

const columns = [
  {
    title: "Platform",
    links: [
      "Origination",
      "Underwriting",
      "Disbursement",
      "Portfolio Monitoring",
      "Reporting",
    ],
  },
  {
    title: "Resources",
    links: [
      "Documentation",
      "API Reference",
      "Blog",
      "Case Studies",
      "Support",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Careers",
      "Contact",
      "Privacy Policy",
      "Terms of Service",
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.top}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src={logoImg} alt="WemaWare" />
            </div>
            <p className={styles.brandDesc}>
              Empowering lenders in growth markets to profitably serve small
              businesses with intelligent, end-to-end loan management.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Twitter">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            &copy; {new Date().getFullYear()} WemaWare by Kuo Sharper
            Initiative, LLC. All rights reserved.
          </span>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
