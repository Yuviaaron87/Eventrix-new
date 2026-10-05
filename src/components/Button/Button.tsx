import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  showTrailingIcon?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: CustomIcon,
  showTrailingIcon = true,
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles = 'group inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 active:scale-[0.98] select-none';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-2',
    md: 'px-6 py-3 text-sm gap-3',
    lg: 'px-8 py-4 text-base gap-4'
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:from-purple-600 hover:to-indigo-500 border border-purple-400/20',
    secondary: 'bg-purple-900 text-purple-100 hover:bg-purple-800 border border-purple-700/50 shadow-md shadow-purple-950/20',
    outline: 'bg-white/80 text-purple-950 border border-purple-200 hover:bg-purple-50 hover:border-purple-300 shadow-sm',
    ghost: 'bg-transparent text-purple-900 hover:bg-purple-100/50',
    glass: 'glass-pill text-purple-950 hover:bg-white/90 border border-white/80 shadow-md shadow-purple-900/5'
  };

  const IconComponent = CustomIcon || ArrowRight;

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={twMerge(
        clsx(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          fullWidth ? 'w-full' : '',
          className
        )
      )}
      {...props}
    >
      <span>{children}</span>
      {showTrailingIcon && (
        <span className={clsx(
          'w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110',
          variant === 'primary' ? 'bg-white/20 text-white' :
          variant === 'secondary' ? 'bg-purple-800 text-purple-200' :
          'bg-purple-100 text-purple-700'
        )}>
          <IconComponent className="w-3.5 h-3.5" />
        </span>
      )}
    </motion.button>
  );
};
