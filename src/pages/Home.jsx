import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Intro from '../components/Intro';
import Hero from '../components/Hero';
import About from '../components/About';
import Career from '../components/Career';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [copyNotification, setCopyNotification] = useState({ show: false, message: '' });

  useEffect(() => {
    // Prevent scroll when modal is open
    if (showContactModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showContactModal]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => setShowMain(true), 100);
  };

  const openContactModal = () => setShowContactModal(true);
  const closeContactModal = () => setShowContactModal(false);

  return (
    <div className="home-page min-h-screen bg-bg-main text-text-main font-sans overflow-x-hidden">
      <AnimatePresence>
        {showIntro && (
          <Intro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {showMain && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Hero
            onOpenContactModal={openContactModal}
            setCopyNotification={setCopyNotification}
          />

          <About />

          <Career />

          <Projects />

          <Footer />

          <ScrollToTop />
        </motion.div>
      )}

      <AnimatePresence>
        {showContactModal && (
          <ContactModal
            onClose={closeContactModal}
            setCopyNotification={setCopyNotification}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {copyNotification.show && (
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-secondary text-bg-main px-6 py-3 rounded-full shadow-lg font-bold z-[3000]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {copyNotification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
