import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { FaRocket, FaShieldAlt, FaMobileAlt, FaChartLine, FaCode, FaUsers } from 'react-icons/fa';

/**
 * Features Section Component
 * Displays 3-6 feature cards with icons, hover effects, and responsive grid layout
 */
const Features = () => {
  const features = [
    {
      icon: <FaRocket className="text-primary text-2xl" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with blazing-fast load times and smooth animations that delight your users.'
    },
    {
      icon: <FaShieldAlt className="text-primary text-2xl" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with regular updates and 99.9% uptime guarantee for peace of mind.'
    },
    {
      icon: <FaMobileAlt className="text-primary text-2xl" />,
      title: 'Mobile First',
      description: 'Responsive design that looks perfect on any device, from smartphones to desktop computers.'
    },
    {
      icon: <FaChartLine className="text-primary text-2xl" />,
      title: 'Analytics Ready',
      description: 'Built-in analytics and tracking to monitor performance and make data-driven decisions.'
    },
    {
      icon: <FaCode className="text-primary text-2xl" />,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code following industry best practices and standards.'
    },
    {
      icon: <FaUsers className="text-primary text-2xl" />,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools and workflows designed for modern development teams.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create exceptional digital experiences that drive growth and engagement.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card.Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="h-full hover:shadow-2xl transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg mb-8 text-white text-opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their business with our platform.
            </p>
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
