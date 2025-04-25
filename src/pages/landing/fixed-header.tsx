import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import payfricaLogo from "@/assets/Payfrica-Logo.png";

const FixedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Animation variants
  const navbarVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3 + custom * 0.1,
      },
    }),
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.6,
      },
    },
    tap: { scale: 0.95 },
  };

  const mobileMenuVariants = {
    initial: { opacity: 0, height: 0 },
    animate: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const mobileItemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.1 * custom,
      },
    }),
  };

  const navLinks = ["Payfrica Bridge", "Payfrica Pay", "Payfrica Card", "Help"];

  return (
    <motion.nav
      initial="initial"
      animate="animate"
      variants={navbarVariants}
      className={`bg-[#C63E27] w-full fixed left-0 py-4 z-50 top-0 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            variants={logoVariants}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              width={170}
              height={61.78715133666992}
              src="/assets/Payfrica-Logo.png"
              alt="Payfrica Logo"
            />
          </motion.div>

          <div className="hidden md:flex gap-[24px] text-white">
            {navLinks.map((link, index) => (
              <motion.a
                key={link}
                href="#"
                custom={index}
                variants={linkVariants}
                whileHover={{ scale: 1.05 }}
                className="hover:text-gray-200 transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap="tap"
            >
              <Button
                variant="outline"
                className="hidden sm:block w-[168px] border-[2px] bg-transparent text-white h-[48px] rounded-[12px]"
              >
                Discover More
              </Button>
            </motion.div>

            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute pb-10 top-full left-0 right-0 bg-[#C63E27] md:hidden z-50 overflow-hidden"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col space-y-4 p-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link}
                    href="#"
                    custom={index}
                    variants={mobileItemVariants}
                    whileHover={{ x: 5 }}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}

                <motion.div
                  variants={mobileItemVariants}
                  custom={4}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="sm:hidden w-full border-2 bg-transparent text-white h-[3rem]"
                  >
                    Discover More
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default FixedHeader;
