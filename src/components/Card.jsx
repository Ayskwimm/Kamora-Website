import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Card Component
 * Flexible card component with multiple variants and animations
 */
const Card = ({
  children,
  variant = 'default',
  hover = true,
  className = '',
  padding = 'medium',
  shadow = 'medium',
  onClick,
  ...props
}) => {
  const baseClasses = 'rounded-lg transition-all duration-300';
  
  const variants = {
    default: 'bg-white border border-gray-200',
    dark: 'bg-gray-800 text-white border border-gray-700',
    primary: 'bg-primary text-white',
    gradient: 'bg-gradient-to-br from-primary to-secondary text-white',
    glass: 'bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20'
  };

  const paddings = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };

  const shadows = {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
    xl: 'shadow-xl'
  };

  const cardClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${paddings[padding]}
    ${shadows[shadow]}
    ${hover ? 'hover:shadow-xl hover:-translate-y-1' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim();

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
    whileHover: hover ? { y: -5 } : {},
    ...props
  };

  if (onClick) {
    return (
      <motion.div
        className={cardClasses}
        onClick={onClick}
        {...motionProps}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cardClasses}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

/**
 * Card Header Component
 */
Card.Header = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

/**
 * Card Body Component
 */
Card.Body = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

/**
 * Card Footer Component
 */
Card.Footer = ({ children, className = '', ...props }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

/**
 * Feature Card Component
 * Specialized card for feature sections
 */
Card.Feature = ({ icon, title, description, className = '', ...props }) => (
  <Card variant="default" hover className={className} {...props}>
    <Card.Body>
      {icon && (
        <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card.Body>
  </Card>
);

/**
 * Pricing Card Component
 * Specialized card for pricing sections
 */
Card.Pricing = ({
  title,
  price,
  period,
  features,
  highlighted = false,
  buttonText,
  onButtonClick,
  className = '',
  ...props
}) => (
  <Card
    variant={highlighted ? 'primary' : 'default'}
    hover
    className={`relative ${highlighted ? 'scale-105' : ''} ${className}`}
    {...props}
  >
    {highlighted && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
    )}
    <Card.Body className="text-center">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className="text-gray-500 ml-2">{period}</span>}
      </div>
      <ul className="space-y-3 mb-6 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={onButtonClick}
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          highlighted
            ? 'bg-white text-primary hover:bg-gray-100'
            : 'bg-primary text-white hover:bg-primary-dark'
        }`}
      >
        {buttonText}
      </button>
    </Card.Body>
  </Card>
);

export default Card;
