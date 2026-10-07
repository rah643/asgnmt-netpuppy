import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export function Button({
  children,
  href,
  onClick,
  variant = 'primary', // primary | secondary | outline | ghost
  size = 'md', // sm | md | lg
  icon = true,
  iconType = 'upRight',
  className = '',
  type = 'button',
  ...props
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none group";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5"
  };

  const variantStyles = {
    primary: "bg-[#C5A059] hover:bg-[#B38F48] text-white shadow-lg shadow-[#C5A059]/20 hover:shadow-xl hover:shadow-[#C5A059]/30 border border-[#D8B772]/30",
    secondary: "bg-[#0E1B2E] text-white hover:bg-[#172B47] dark:bg-white dark:text-[#0E1B2E] dark:hover:bg-slate-100 shadow-md",
    outline: "border border-[#C5A059]/50 text-[#0E1B2E] dark:text-white hover:bg-[#C5A059]/10 hover:border-[#C5A059]",
    ghost: "text-[#0E1B2E] dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
  };

  const IconComponent = iconType === 'upRight' ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {content}
    </motion.button>
  );
}
