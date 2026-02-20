import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { FaAward, FaUsers, FaLightbulb, FaTarget } from 'react-icons/fa';

/**
 * About Section Component
 * Image + text layout with fade-in animation on scroll
 */
const About = () => {
  const stats = [
    { icon: FaAward, number: '50+', label: 'Industry Awards' },
    { icon: FaUsers, number: '10,000+', label: 'Happy Clients' },
    { icon: FaLightbulb, number: '500+', label: 'Innovative Solutions' },
    { icon: FaTarget, number: '99.9%', label: 'Success Rate' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and explore new possibilities to deliver cutting-edge solutions.'
    },
    {
      title: 'Quality',
      description: 'Every project is crafted with attention to detail and commitment to excellence.'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with clients to understand their vision and exceed expectations.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section id="about" className="py-20 bg-white">
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
            About Kamora
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about creating exceptional digital experiences that drive growth and inspire innovation.
          </p>
        </motion.div>

        {/* Main Content - Image + Text Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for image */}
              <div className="bg-gradient-to-br from-primary to-secondary h-96 lg:h-full min-h-[400px] flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-6xl font-bold mb-4">K</div>
                  <div className="text-xl">Kamora Team</div>
                  <div className="text-sm opacity-80 mt-2">Innovation & Excellence</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-2xl font-bold text-primary">5+ Years</div>
                <div className="text-sm text-gray-600">of Excellence</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Building Digital Futures Since 2019
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              At Kamora, we believe in the power of technology to transform businesses and improve lives. 
              Our team of talented designers, developers, and strategists work together to create digital 
                  experiences that not only look beautiful but also deliver measurable results.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We've helped hundreds of companies across various industries establish their digital presence, 
              streamline their operations, and achieve their business goals through innovative web solutions.
            </p>
            
            <Button
              variant="primary"
              size="large"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                    <stat.icon className="text-primary text-xl" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-lg p-8 text-center"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
