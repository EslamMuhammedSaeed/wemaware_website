import { motion } from 'framer-motion';
import { wordReveal, wordChild } from '../hooks/useRevealAnimation';

interface TextRevealProps {
  text: string;
  className?: string;
  highlightWord?: string;
  highlightClass?: string;
}

export default function TextReveal({
  text,
  className = '',
  highlightWord,
  highlightClass = '',
}: TextRevealProps) {
  const words = text.split(' ');

  return (
    <motion.span
      className={className}
      variants={wordReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordChild}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
          className={highlightWord && word.replace(/[^a-zA-Z]/g, '') === highlightWord ? highlightClass : ''}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
