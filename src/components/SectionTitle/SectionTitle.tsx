import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  lightMode?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  highlightText,
  subtitle,
  align = 'center',
  lightMode = false,
  className
}) => {
  return (
    <div className={clsx(
      'max-w-3xl mb-12 sm:mb-16',
      align === 'center' ? 'mx-auto text-center' : 'text-left',
      className
    )}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-3"
        >
          <span className={clsx(
            'px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase border shadow-sm',
            lightMode 
              ? 'bg-purple-900/60 text-purple-200 border-purple-700/50'
              : 'bg-purple-100/80 text-purple-900 border-purple-200/80'
          )}>
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={clsx(
          'text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]',
          lightMode ? 'text-white' : 'text-slate-950'
        )}
      >
        {title}{' '}
        {highlightText && (
          <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent font-serif italic">
            {highlightText}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={clsx(
            'mt-4 text-base sm:text-lg leading-relaxed font-normal',
            lightMode ? 'text-purple-200/80' : 'text-slate-600'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
