import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

export const ExploreBtn: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.scrollTo({ top: 30, behavior: "smooth" })}
      className="bg-[#C43E26] text-white px-8 py-3 rounded-md hover:bg-[#A32D21] transition-colors w-fit text-lg font-medium"
    >
      {children}
    </motion.button>
  );
};
