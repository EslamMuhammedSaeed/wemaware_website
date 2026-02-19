import { motion } from 'framer-motion';
import TextReveal from '../TextReveal';
import { fadeInUp, scaleIn } from '../../hooks/useRevealAnimation';
import { useSectionParallax } from '../../hooks/useParallax';
import styles from './Testimonials.module.scss';

const values = [
  {
    icon: '🎯',
    title: 'Mission',
    text: 'To empower local lenders in growth markets to profitably and efficiently provide growth capital to small businesses.',
  },
  {
    icon: '🌎',
    title: 'Vision',
    text: 'A world where every viable small business has access to the long-term capital it needs to grow, create jobs, and transform communities.',
  },
  {
    icon: '💎',
    title: 'Values',
    text: 'Impact-driven innovation, radical transparency, deep partnership with our clients, and relentless focus on borrower outcomes.',
  },
];

export default function Testimonials() {
  const { ref, opacity, y } = useSectionParallax();

  return (
    <section id="about" className={styles.testimonials} ref={ref}>
      <motion.div className={styles.container} style={{ opacity, y }}>
        <div className={styles.header}>
          <motion.div
            className={styles.sectionLabel}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            About WemaWare
          </motion.div>
          <h2 className={styles.heading}>
            <TextReveal text="Technology with" />
            {' '}
            <TextReveal
              text="Purpose"
              highlightWord="Purpose"
              highlightClass={styles.highlight}
            />
          </h2>
        </div>

        <div className={styles.aboutContent}>
          <motion.div
            className={styles.aboutText}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>
              Small businesses are the engine of emerging economies — yet most lack access
              to the structured, affordable capital they need to grow. Traditional banks
              avoid the segment. MFIs offer expensive short-term products. The gap persists.
            </p>
            <p>
              WemaWare was created to change that equation. By giving lenders the technology
              to originate, underwrite, and manage SME loans efficiently, we help them serve
              a market that has been overlooked for too long.
            </p>
            <p className={styles.builtBy}>
              Built by <strong>Kuo Sharper Initiative, LLC</strong>, WemaWare combines deep domain
              expertise in small business finance with modern cloud architecture to deliver a
              platform that scales with our clients' ambitions.
            </p>
          </motion.div>

          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className={styles.valueCard}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i * 0.1}
              >
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
