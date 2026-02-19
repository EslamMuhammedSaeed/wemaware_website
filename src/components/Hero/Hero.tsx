import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '../TextReveal';
import { fadeInUp, fadeIn } from '../../hooks/useRevealAnimation';
import styles from './Hero.module.scss';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const previewY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgGlowScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section className={styles.hero} ref={sectionRef}>
      <motion.div className={`${styles.bgGlow} ${styles.glowOne}`} style={{ scale: bgGlowScale }} />
      <motion.div className={`${styles.bgGlow} ${styles.glowTwo}`} style={{ scale: bgGlowScale }} />

      <motion.div
        className={styles.badge}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={0.2}
      >
        <span className={styles.dot} />
        SME Lending Platform
      </motion.div>

      <h1 className={styles.heading}>
        <TextReveal text="Built to Empower" />
        <br />
        <TextReveal
          text="Intelligent Lending"
          highlightWord="Lending"
          highlightClass={styles.highlight}
        />
      </h1>

      <motion.p
        className={styles.subtitle}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0.4}
      >
        A cloud-based platform that gives lenders everything they need to
        originate, underwrite, and manage SME loans — closing the $5+ trillion
        credit gap in growth markets.
      </motion.p>

      <motion.div
        className={styles.buttons}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0.6}
      >
        <button className={styles.btnPrimary}>
          Request a Demo
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        <button className={styles.btnSecondary}>See How It Works</button>
      </motion.div>

      <motion.div className={styles.preview} style={{ y: previewY }}>
        <motion.div
          className={styles.previewInner}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
        >
          <div className={styles.previewToolbar}>
            <span /><span /><span />
            <div className={styles.toolbarUrl}>app.wemaware.com</div>
          </div>
          <div className={styles.previewContent}>
            <div className={styles.previewSidebar}>
              {[
                { label: 'Dashboard', active: true },
                { label: 'Applications', active: false },
                { label: 'Underwriting', active: false },
                { label: 'Portfolio', active: false },
                { label: 'Reports', active: false },
              ].map((item) => (
                <div key={item.label} className={`${styles.sidebarItem} ${item.active ? styles.active : ''}`}>
                  <div className={styles.icon} />
                  {item.label}
                </div>
              ))}
            </div>
            <div className={styles.previewMain}>
              <div className={styles.dashboardGrid}>
                <div className={styles.dashStat}>
                  <span className={styles.dashLabel}>Active Loans</span>
                  <span className={styles.dashValue}>2,847</span>
                </div>
                <div className={styles.dashStat}>
                  <span className={styles.dashLabel}>PAR &gt; 30</span>
                  <span className={styles.dashValue}>3.2%</span>
                </div>
                <div className={styles.dashStat}>
                  <span className={styles.dashLabel}>Disbursed (MTD)</span>
                  <span className={styles.dashValue}>$4.2M</span>
                </div>
                <div className={styles.dashStat}>
                  <span className={styles.dashLabel}>Approval Rate</span>
                  <span className={styles.dashValue}>68%</span>
                </div>
              </div>
              <div className={styles.dashChart}>
                <div className={styles.chartTitle}>Portfolio Performance</div>
                <div className={styles.chartBars}>
                  {[65, 72, 58, 85, 76, 90, 82, 88].map((h, i) => (
                    <div key={i} className={styles.bar} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
