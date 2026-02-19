import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "../TextReveal";
import { fadeInUp } from "../../hooks/useRevealAnimation";
import styles from "./CTA.module.scss";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [60, -30]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section className={styles.cta} ref={sectionRef}>
      <motion.div className={styles.bgGlow} style={{ scale: glowScale }} />

      <motion.div className={styles.container} style={{ y: contentY }}>
        <h2 className={styles.heading}>
          <TextReveal text="Ready to Transform" />
          <br />
          <TextReveal
            text="SME Lending?"
            highlightWord="Lending?"
            highlightClass={styles.highlight}
          />
        </h2>

        <motion.p
          className={styles.subtitle}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          Join forward-thinking lenders who are already using WemaWare to close
          the credit gap and serve small businesses profitably.
        </motion.p>

        <motion.div
          className={styles.buttons}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          <a href="#request-demo" className={styles.btnPrimary}>
            Request a Demo
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          {/* <button className={styles.btnSecondary}>Contact Sales</button> */}
        </motion.div>

        <motion.div
          className={styles.trustRow}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
        >
          {[
            { value: "Cloud-Based", label: "SaaS Platform" },
            { value: "Weeks", label: "To Launch" },
            { value: "Full Lifecycle", label: "Loan Management" },
            { value: "24/7", label: "Support Available" },
          ].map((item) => (
            <div key={item.label} className={styles.trustItem}>
              <span className={styles.trustValue}>{item.value}</span>
              <span className={styles.trustLabel}>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
