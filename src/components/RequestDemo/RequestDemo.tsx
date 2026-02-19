import { motion } from "framer-motion";
import { fadeInUp } from "../../hooks/useRevealAnimation";
import styles from "./RequestDemo.module.scss";

export default function RequestDemo() {
  return (
    <section id="request-demo" className={styles.requestDemo}>
      <div className={styles.bgGlow} />

      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className={styles.heading}>
            Request a Demo
          </h2>
          <p className={styles.subtitle}>
            See how WemaWare can transform your lending operations. Fill out the
            form below and our team will be in touch.
          </p>
        </motion.div>

        <motion.form
          className={styles.form}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.formGroup}>
            <label htmlFor="demo-name">Full Name</label>
            <input
              type="text"
              id="demo-name"
              name="name"
              placeholder="John Doe"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="demo-email">Work Email</label>
            <input
              type="email"
              id="demo-email"
              name="email"
              placeholder="john@company.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="demo-company">Company Name</label>
            <input
              type="text"
              id="demo-company"
              name="company"
              placeholder="Acme Inc."
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="demo-phone">Phone Number</label>
            <input
              type="tel"
              id="demo-phone"
              name="phone"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="demo-message">Message (Optional)</label>
            <textarea
              id="demo-message"
              name="message"
              placeholder="Tell us about your lending needs..."
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Request
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
          </button>
        </motion.form>
      </div>
    </section>
  );
}
