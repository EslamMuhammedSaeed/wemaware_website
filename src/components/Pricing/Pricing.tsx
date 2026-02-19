import { useState } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../TextReveal';
import { fadeInUp } from '../../hooks/useRevealAnimation';
import { useSectionParallax } from '../../hooks/useParallax';
import styles from './Pricing.module.scss';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 15, yearly: 12 },
    desc: 'Perfect for personal projects and simple websites.',
    features: ['1 Website', '5 Pages', 'Basic Templates', 'Community Support', 'Custom Domain'],
    popular: false,
  },
  {
    name: 'Professional',
    price: { monthly: 25, yearly: 20 },
    desc: 'Ideal for freelancers and growing businesses.',
    features: ['5 Websites', 'Unlimited Pages', 'Premium Templates', 'Priority Support', 'Custom Domain', 'Analytics Dashboard', 'Team Collaboration'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 49, yearly: 40 },
    desc: 'Built for agencies and large-scale operations.',
    features: ['Unlimited Websites', 'Unlimited Pages', 'All Templates', '24/7 Support', 'Custom Domain', 'Advanced Analytics', 'Team Collaboration', 'API Access', 'White Label'],
    popular: false,
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const { ref, opacity, y } = useSectionParallax();

  return (
    <section id="pricing" className={styles.pricing} ref={ref}>
      <motion.div className={styles.container} style={{ opacity, y }}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <TextReveal text="Flexible Pricing Plans" />
            <br />
            <TextReveal text="to Suit Your Needs" />
          </h2>
          <p className={styles.subheading}>
            Choose the plan that fits your workflow. Upgrade or downgrade anytime.
          </p>
          <div className={styles.toggle}>
            <span className={!yearly ? styles.toggleActive : ''}>Monthly</span>
            <div
              className={`${styles.toggleSwitch} ${yearly ? styles.active : ''}`}
              onClick={() => setYearly(!yearly)}
            />
            <span className={yearly ? styles.toggleActive : ''}>Yearly</span>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`${styles.card} ${plan.popular ? styles.cardPopular : ''}`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i * 0.1}
            >
              {plan.popular && <div className={styles.popularBadge}>Popular</div>}
              <div className={styles.cardName}>{plan.name}</div>
              <div className={styles.cardPrice}>
                <span className={styles.currency}>$</span>
                <motion.span
                  className={styles.amount}
                  key={yearly ? 'y' : 'm'}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {yearly ? plan.price.yearly : plan.price.monthly}
                </motion.span>
                <span className={styles.period}>/mo</span>
              </div>
              <p className={styles.cardDesc}>{plan.desc}</p>
              <div className={styles.featureList}>
                {plan.features.map((feature) => (
                  <div key={feature} className={styles.feature}>
                    <div className={styles.featureCheck}>
                      <CheckIcon />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
              <button
                className={`${styles.cardButton} ${plan.popular ? styles.cardButtonPrimary : ''}`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
