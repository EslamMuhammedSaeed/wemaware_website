import { motion } from 'framer-motion';
import TextReveal from '../TextReveal';
import { fadeInUp } from '../../hooks/useRevealAnimation';
import { useSectionParallax } from '../../hooks/useParallax';
import styles from './Integrations.module.scss';

const audiences = [
  {
    icon: '🏦',
    title: 'Banks',
    desc: 'Commercial and regional banks seeking to profitably enter or expand their SME lending portfolios with lower operational risk.',
  },
  {
    icon: '🤝',
    title: 'SACCOs & Credit Unions',
    desc: 'Member-owned cooperatives that need modern tools to manage growing loan books while maintaining governance standards.',
  },
  {
    icon: '💰',
    title: 'Microfinance Institutions',
    desc: 'MFIs looking to move beyond short-term micro-loans and offer structured growth capital products to small businesses.',
  },
  {
    icon: '⚡',
    title: 'Fintech Lenders',
    desc: 'Digital-first lenders that need a flexible, API-ready platform to power their lending operations without building from scratch.',
  },
];

export default function Integrations() {
  const { ref, opacity, y } = useSectionParallax();

  return (
    <section id="who" className={styles.integrations} ref={ref}>
      <motion.div className={styles.container} style={{ opacity, y }}>
        <div className={styles.header}>
          <motion.div
            className={styles.sectionLabel}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Who It's For
          </motion.div>
          <h2 className={styles.heading}>
            <TextReveal text="Built for Lenders Who Serve" />
            <br />
            <TextReveal
              text="Growth Markets"
              highlightWord="Markets"
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
            Whether you're a regional bank, a cooperative, an MFI, or a fintech —
            WemaWare adapts to your lending model.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              className={styles.card}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i * 0.1}
            >
              <span className={styles.cardIcon}>{a.icon}</span>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <p className={styles.cardDesc}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
