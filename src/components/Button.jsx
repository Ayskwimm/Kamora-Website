import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaPlay } from 'react-icons/fa';

/**
 * Reusable Button Component
 * Supports multiple variants and sizes with hover animations
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  onClick,
  href,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    ghost: 'text-primary hover:bg-primary hover:text-white focus:ring-primary',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500'
  };

  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim();

  const renderIcon = (iconComponent) => {
    if (!iconComponent) return null;
    const Icon = iconComponent;
    return <Icon className={iconPosition === 'left' ? 'mr-2' : 'ml-2'} size={size === 'small' ? 14 : size === 'large' ? 20 : 16} />;
  };

  const content = (
    <>
      {iconPosition === 'left' && renderIcon(icon)}
      {loading ? (
        <motion.div
          className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      ) : (
        children
      )}
      {iconPosition === 'right' && renderIcon(icon)}
    </>
  );

  const motionProps = {
    whileHover: disabled || loading ? {} : { scale: 1.05, y: -2 },
    whileTap: disabled || loading ? {} : { scale: 0.95 },
    transition: { duration: 0.2 }
  };

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        onClick={onClick}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
