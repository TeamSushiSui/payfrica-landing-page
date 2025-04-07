"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PayFricaCTA = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.3,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="w-full bg-white py-2 px-4 mt-20">
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-[#3B4992] relative max-w-7xl mx-auto rounded-[27px] md:h-[460px] py-16 sm:py-24 px-8"
      >
        <div className="px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
              variants={contentVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-bold text-white mb-6"
              >
                Are you ready for the Pay-volution?
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-white/90 text-lg mb-8 max-w-xl"
              >
                Personalize your settings, follow your progress, archive your
                highlights and notes automatically. Globe is the ultimate
                reading
              </motion.p>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "#A32D21" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#C4392A] text-white px-8 py-3 rounded-md transition-all duration-300 text-lg font-medium"
              >
                Get Started
              </motion.button>
            </motion.div>

            <motion.div className="md:w-1/2" variants={imageVariants}>
              <div className="flex justify-center items-center gap-4">
                <motion.div className="z-30 md:absolute md:top-0 mt-9 md:-mt-[7rem]">
                  <img
                    src="/src/assets/2 Phones.png"
                    alt="Payfrica App Screenshot"
                    className="w-full max-w-[766px] h-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PayFricaCTA;
