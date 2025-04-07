import { Button } from "@/components/ui/button";
import { motion, animate, stagger } from "framer-motion";
import { useEffect, useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const buttonVariants = (duration = 0.5) => {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
      },
    },
  };
};

const container2Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const itemVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay,
    },
  },
});

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  function splitText(element: HTMLElement) {
    const text = element.textContent || "";

    // Split the text by spaces and filter out empty strings
    const words = text.split(/\s+/).filter((word) => word.length > 0);

    // Replace the original text with spans for each word
    element.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    // Get the created word elements
    const wordElements = Array.from(element.querySelectorAll(".word"));

    return {
      words: wordElements,
      originalText: text,
      wordCount: words.length,
    };
  }

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector("h1")!);
      const { words: words2 } = splitText(
        containerRef.current.querySelector("p")!
      );

      animate(
        words,
        { opacity: [0, 1], y: [100, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.18),
        }
      );

      animate(
        words2,
        { opacity: [0, 1], x: [100, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.08),
        }
      );
    });
  }, []);

  return (
    <div className="relative bg-[#F6AD19] pt-24 min-h-[900px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16 flex flex-col md:flex-row items-center">
        <div
          ref={containerRef}
          className="md:w-1/2 z-10 md:mt-[60px] text-center md:text-left"
        >
          <h1 className="text-white h1 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Bridging The Gap, Empowering Transactions
          </h1>
          <p className="text-white text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
            Seamless Payments, Effortless Savings, And Instant Token Conversions
            Built For Africa, Powered By SUI.
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 justify-center md:justify-start"
          >
            <motion.div
              variants={buttonVariants(0.5)}
              className="w-full md:w-fit px-0"
            >
              <Button className="bg-[#C43E26] text-white px-6 py-3 rounded-md hover:bg-[#A32D21] transition-colors md:w-[250px] w-full h-[59px] sm:w-auto text-base sm:text-lg">
                Quick Account
              </Button>
            </motion.div>

            <motion.div
              variants={buttonVariants(0.7)}
              className="w-full md:w-fit"
            >
              <Button
                variant="outline"
                className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#F6AD19] bg-transparent transition-colors md:w-[250px] h-[59px] w-full sm:w-auto text-base sm:text-lg"
              >
                Sign In
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="md:w-1/2 mt-8 px-4 sm:px-8 md:px-0 absolute right-0 md:-mr-[4rem] md:mt-[14rem]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4 } }}
            src="/src/assets/africa-woman-laughing.png"
            alt="Happy African Woman"
            className="md:w-[796px] md:h-[1131px] mt-[14rem] md:mt-[51px]"
          />
        </div>
      </div>

      {/* Campus Badges */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <motion.div
          variants={container2Variants}
          initial="hidden"
          animate="visible"
          className="flex space-x-10 animate-scroll py-4"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
            <motion.div
              variants={itemVariants(i * 0.2)}
              initial="hidden"
              animate="visible"
              key={item}
              className="flex items-center gap-3 px-3 sm:px-4 py-2 transform hover:scale-105 transition-transform"
            >
              <img
                src="/src/assets/sui-logo.png"
                className="md:h-[82.5px] w-[30px] md:w-[60.83333206176758px]"
              />
              <div className="h-[10px] md:py-5 py-3 bg-white border" />
              <span className="text-white text-sm sm:text-base whitespace-nowrap">
                SUI ON CAMPUS
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Stylesheet />
    </div>
  );
};

function Stylesheet() {
  return (
    <style>{`


          .split-word {
              will-change: transform, opacity;
          }
      `}</style>
  );
}

export default Hero;
