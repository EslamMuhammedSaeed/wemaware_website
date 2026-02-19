import { motion } from 'framer-motion';
import TextReveal from '../TextReveal';
import { fadeInUp } from '../../hooks/useRevealAnimation';
import { useSectionParallax } from '../../hooks/useParallax';
import styles from './Community.module.scss';

const features = [
  {
    icon: '☁️',
    title: 'Cloud-Based SaaS',
    desc: 'No hardware, no complex IT. Subscribe, configure, and launch in weeks — not months.',
  },
  {
    icon: '🔄',
    title: 'Full Loan Lifecycle',
    desc: 'Origination, credit analysis, approval, disbursement, repayment tracking, and closure in one system.',
  },
  {
    icon: '✅',
    title: 'Consistent Underwriting',
    desc: 'Standardized workflows ensure every loan is assessed fairly and in line with institutional policy.',
  },
  {
    icon: '📊',
    title: 'Portfolio Analytics',
    desc: 'Dashboard views of PAR, concentration, vintage analysis, and borrower performance metrics.',
  },
  {
    icon: '⚙️',
    title: 'Flexible Configuration',
    desc: 'Define custom loan products, interest calculation methods, collateral types, and fee schedules.',
  },
  {
    icon: '🔗',
    title: 'API Integrations',
    desc: 'Connect to core banking systems, credit bureaus, mobile money, and payment gateways.',
  },
  {
    icon: '🛡️',
    title: 'Security & Compliance',
    desc: 'Role-based access, audit trails, and data encryption to meet regulatory requirements.',
  },
  {
    icon: '🌍',
    title: 'Multi-Currency & Multi-Market',
    desc: 'Designed for lenders operating across borders and currencies in growth markets.',
  },
];

export default function Community() {
  const { ref, opacity, y } = useSectionParallax();

  return (
    <section id="features" className={styles.community} ref={ref}>
      <motion.div className={styles.container} style={{ opacity, y }}>
        <div className={styles.header}>
          <motion.div
            className={styles.sectionLabel}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Features & Benefits
          </motion.div>
          <h2 className={styles.heading}>
            <TextReveal text="Everything You Need to" />
            <br />
            <TextReveal
              text="Lend Smarter"
              highlightWord="Smarter"
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
            WemaWare brings together the tools lenders need to operate efficiently,
            manage risk, and scale their SME portfolios.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className={styles.card}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={i * 0.06}
            >
              <span className={styles.cardIcon}>{f.icon}</span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
