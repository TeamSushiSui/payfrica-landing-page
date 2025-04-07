import { Coins, PiggyBank, WifiOff, Zap } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Features = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const areCardsInView = useInView(cardsRef, { once: true, amount: 0.2 });

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const features = [
    {
      icon: <Coins className="w-8 h-8 text-[#C4392A]" />,
      title: "Buy SUI & USDC",
      description: "Buy Sui tokens and USDC without any hassle",
      color: "bg-[#FBE19A]",
    },
    {
      icon: <WifiOff className="w-8 h-8 text-[#C4392A]" />,
      title: "Offline Payment",
      description: "Make Payments with No Internet Connection",
      color: "bg-[#FBE19A]",
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-[#C4392A]" />,
      title: "Save & Earn",
      description: "Save with friends and family and earn interest",
      color: "bg-[#FBE19A]",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#C4392A]" />,
      title: "Fast Transaction",
      description: "No more Delayed and failed transactions",
      color: "bg-[#FBE19A]",
    },
  ];

  return (
    <div className="bg-[#F8F8F8] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          ref={headerRef}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-[#3B4992] mb-6"
            variants={textVariants}
          >
            The African Payvolution
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            variants={textVariants}
          >
            Want to pay anything so easy with the touch of a finger. Through
            <span className="text-[#C4392A] font-semibold"> Payfrica</span> you
            can make practically any transaction.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          ref={cardsRef}
          initial="hidden"
          animate={areCardsInView ? "visible" : "hidden"}
          variants={cardContainerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.color} rounded-2xl p-6 hover:shadow-lg`}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md"
                whileHover={{ rotate: 5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-[#C4392A] font-bold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
