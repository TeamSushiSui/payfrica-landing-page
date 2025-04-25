import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PayfricaBridge = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.2,
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

  return (
    <div className="bg-[#3C53A4] py-16 sm:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2 relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <div className="relative w-full">
              <motion.img
                src="/assets/mobile-image.png"
                alt="Mobile App Interface"
                className="relative z-10 rounded-3xl transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <motion.div
              variants={itemVariants}
              className="bg-[#FBE19A] text-[#3C53A4] rounded-3xl px-4 py-2 mx-auto md:mx-0 w-fit mb-3"
            >
              Payfrica Bridge
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Simplifying Digital Assets
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-white/90 text-lg mb-8 max-w-xl"
            >
              Buy And Convert Tokens With Ease.{" "}
              <span className="text-[#F7A325]">Payfrica Bridge</span> Makes
              Digital Finance Accessible, Breaking Down The Barriers Of
              Complexity And Cost
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C43E26] text-white px-8 py-3 rounded-md hover:bg-[#A32D21] transition-colors text-lg font-medium"
            >
              Explore
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PayfricaBridge;
