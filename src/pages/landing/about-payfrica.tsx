import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FeaturesProps {
  globeImageUrl?: string;
}

export default function AboutPayfrica({
  globeImageUrl = "/placeholder.svg?height=525&width=609",
}: FeaturesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.3 });

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.2 },
    },
  };

  return (
    <div className="bg-[#FCF5D7] py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.header
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headerVariants}
          className="flex flex-col gap-6 items-center justify-center mb-24"
        >
          <h2 className="tracking-tight text-3xl md:text-5xl lg:text-[57.22px] font-bold text-center text-[#3C53A4]">
            The Future of Finance is Here
          </h2>
          <p className="text-base md:text-xl lg:text-[25px] font-medium text-center text-[#3C53A4] max-w-3xl">
            Crypto or cash, <span className="text-[#C43E26]">Payfrica</span>{" "}
            makes financial transactions effortless across Africa.
          </p>
        </motion.header>

        <div
          ref={containerRef}
          className="flex flex-col md:flex-row items-center justify-between gap-12 py-12"
        >
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentVariants}
            className="flex flex-col gap-6 md:w-1/2"
          >
            <div className="bg-[#FBE19A] text-[#3C53A4] rounded-3xl px-4 py-2 w-fit">
              Payfrica Pay
            </div>
            <h2 className="font-medium text-3xl md:text-4xl lg:text-[45.78px] text-[#3C53A4]">
              Transactions Beyond Barriers
            </h2>
            <p className="font-normal text-base md:text-lg lg:text-[18.75px] text-[#3C53A4]">
              Make fast, secure transactions in your local currency, even with
              limited connectivity.{" "}
              <span className="text-[#C63B25] font-bold">Payfrica Pay</span> is
              your gateway to seamless financial interactions
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C43E26] text-white px-8 py-3 rounded-md hover:bg-[#A32D21] transition-colors w-fit text-lg font-medium"
            >
              Explore
            </motion.button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
            className="md:w-1/2"
          >
            <img
              src={globeImageUrl || "/placeholder.svg"}
              alt="Globe visualization"
              className="w-full h-auto object-contain max-w-[609px] max-h-[525px] mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
