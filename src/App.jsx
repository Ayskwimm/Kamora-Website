import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './layout/Layout';
import Home from './pages/Home';
import './assets/styles.css';

/**
 * Main App Component
 * Sets up routing and global animations
 */
function App() {
  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="App"
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
          </Routes>
        </Layout>
      </motion.div>
    </Router>
  );
}

export default App;
