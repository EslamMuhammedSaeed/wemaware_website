import { motion } from "framer-motion";
import TextReveal from "../TextReveal";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  // scaleIn,
} from "../../hooks/useRevealAnimation";
import { useSectionParallax } from "../../hooks/useParallax";
import styles from "./Features.module.scss";

// const problems = [
//   {
//     icon: "🔒",
//     title: "Lack of Collateral",
//     desc: "Many viable SMEs cannot meet traditional collateral requirements, excluding them from formal credit markets.",
//   },
//   {
//     icon: "⏳",
//     title: "Slow Approvals",
//     desc: "Manual and fragmented underwriting processes lead to weeks-long decision cycles, frustrating borrowers and increasing costs.",
//   },
//   {
//     icon: "🏦",
//     title: "Conservative Banks",
//     desc: "Risk-averse commercial banks often avoid SME lending entirely, leaving a massive funding gap in growth markets.",
//   },
//   {
//     icon: "💸",
//     title: "Expensive Short-Term Credit",
//     desc: "MFIs and fintechs fill the gap with short-term, high-interest products that don't support sustainable business growth.",
//   },
// ];

const solutions = [
  {
    title: "Origination",
    desc: "Digital loan applications with structured data capture and document management.",
    step: "01",
  },
  {
    title: "Underwriting",
    desc: "Configurable credit scoring, risk assessment, and approval workflows.",
    step: "02",
  },
  {
    title: "Disbursement & Servicing",
    desc: "Automated disbursement, repayment scheduling, and collections tracking.",
    step: "03",
  },
  {
    title: "Monitoring & Reporting",
    desc: "Real-time portfolio dashboards, borrower analytics, and regulatory reporting.",
    step: "04",
  },
  {
    title: "Configuration",
    desc: "Flexible product setup — loan types, interest models, collateral rules, and fee structures.",
    step: "05",
  },
];

export default function Features() {
  const { ref, opacity, y } = useSectionParallax();

  return (
    <section id="problem" className={styles.features} ref={ref}>
      <motion.div className={styles.container} style={{ opacity, y }}>
        {/* The Problem */}
        {/* <div className={styles.problemSection}>
          <div className={styles.problemHeader}>
            <motion.div
              className={styles.sectionLabel}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              The Problem
            </motion.div>
            <h2 className={styles.problemHeading}>
              <TextReveal text="Small Businesses Are Starved" />
              <br />
              <TextReveal
                text="of Growth Capital"
                highlightWord="Capital"
                highlightClass={styles.highlight}
              />
            </h2>
            <motion.p
              className={styles.problemSubtitle}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              In emerging markets, SMEs represent the backbone of the economy — yet they
              remain chronically underserved by formal financial institutions.
            </motion.p>
          </div>

          <div className={styles.problemGrid}>
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                className={styles.problemCard}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i * 0.1}
              >
                <span className={styles.problemIcon}>{p.icon}</span>
                <h3 className={styles.problemTitle}>{p.title}</h3>
                <p className={styles.problemDesc}>{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.gapStat}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className={styles.gapNumber}>$5T+</span>
            <span className={styles.gapText}>
              credit gap for SMEs in developing economies — and lenders lack the tools to close it profitably.
            </span>
          </motion.div>
        </div> */}

        {/* The Solution */}
        <div className={styles.solutionSection} id="solution">
          <div className={styles.solutionHeader}>
            <motion.div
              className={styles.sectionLabel}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              The Solution
            </motion.div>
            <h2 className={styles.solutionHeading}>
              <TextReveal text="End-to-End Lending," />
              <br />
              <TextReveal
                text="Simplified"
                highlightWord="Simplified"
                highlightClass={styles.highlight}
              />
            </h2>
            <motion.p
              className={styles.solutionSubtitle}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              WemaWare provides lenders with a single, cloud-based platform to
              manage the entire loan lifecycle — from application to maturity.
            </motion.p>
          </div>

          <div className={styles.solutionTimeline}>
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                className={styles.solutionStep}
                variants={i % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i * 0.1}
              >
                <div className={styles.stepNumber}>{s.step}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
