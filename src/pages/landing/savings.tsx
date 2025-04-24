import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PayfricaSavings = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const imageContainerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingBlobVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-[#FCF5D7] py-16 sm:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <motion.div
              className="bg-[#FBE19A] text-[#3C53A4] rounded-3xl md:mx-0 mx-auto px-4 py-2 w-fit mb-3"
              variants={itemVariants}
            >
              Payfrica Saving Circle
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Save With People You Trust
            </motion.h2>

            <motion.p
              className="text-gray-700 text-lg mb-8 max-w-xl"
              variants={itemVariants}
            >
              Join Or Create A{" "}
              <span className="text-[#F7A325] font-semibold">
                Savings Circle
              </span>{" "}
              Where Your Money Is Safe And Your Community Thrives. With
              Payfrica, Savings Lead To Collective Empowerment
            </motion.p>

            <motion.button
              className="bg-[#C4392A] text-white px-8 py-3 rounded-md hover:bg-[#A32D21] transition-colors text-lg font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore
            </motion.button>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageContainerVariants}
          >
            <div className="relative w-full max-w-[500px] mx-auto">
              <motion.div
                className="absolute -top-6 md:-left-6 w-24 h-24 bg-[#F7A325] rounded-full opacity-20 blur-lg"
                variants={floatingBlobVariants}
              ></motion.div>

              <motion.div
                className="absolute -bottom-8 md:-right-8 w-32 h-32 bg-[#C4392A] rounded-full opacity-10 blur-xl"
                variants={floatingBlobVariants}
              ></motion.div>

              <motion.div className="relative z-10 rounded-3xl">
                <img
                  src="/src/assets/piggy-bank.png"
                  alt="Piggy Bank Savings"
                  className="rounded-2xl w-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PayfricaSavings;
