import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Marquee } from "@/components/ui/marque";
import axios from "axios";
import { motion, animate, stagger } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

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
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useState(false);
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

  const joinWaitList = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(true);
    try {
      await axios.post(
        `https://payfrica-waitlist-v1.vercel.app/api/waitlist/join?email=${email}`
      );
      setEmail("");
      toast.success(
        `You have addedd ${email} to our waitlist, we will send you a notification when we launch.`
      );
      startTransition(false);
    } catch (error) {
      console.log(error);
      toast.error(
        "Something went wrong, unable to add your email to our waitlist, Please try again later."
      );
    } finally {
      startTransition(false);
    }
  };

  return (
    <div className="relative bg-[#F6AD19] pt-24 lg:min-h-[900px] min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16 flex flex-col md:flex-row items-center">
        <div
          ref={containerRef}
          className="md:w-1/2 z-10 text-center md:text-left"
        >
          <h1 className="text-white h1 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6 font-[LexendExtraBold]">
            Bridging The Gap, Empowering Transactions
          </h1>
          <p className="text-white text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
            Seamless Payments, Effortless Savings, And Instant Token Conversions
            Built For Africa, Powered By SUI.
          </p>

          <motion.div
            className="mt-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="bg-[#C63E27] border-[#C63E27] text-white">
              <CardHeader>
                <CardTitle className="font-[LexendExtraBold] text-xl sm:text-2xl lg:text-3xl">
                  {"Be among the first's to join the African Pay-volution"}
                </CardTitle>
                <CardDescription className="text-white/80">
                  Join the Waitlist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  action=""
                  onSubmit={joinWaitList}
                  className="flex w-full h-[3rem] relative bg-[#facca4] border-[#facca4] rounded-md"
                >
                  <Input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // className="w-full h-full text-sm placeholder:text-sm"
                    className="w-full h-full text-sm text-gray-500 placeholder:text-sm placeholder:text-gray-400"
                    placeholder="Your email here"
                  />
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="absolute right-0 top-0 h-full bg-[#F6AD19] hover:bg-[#F6AD19]/80"
                  >
                    {isPending && (
                      <Loader2 size={19} className="animate-spin" />
                    )}
                    Sit First Row
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="md:w-1/2 px-4 sm:px-8 md:px-0 absolute right-0 lg:-mr-[4rem] md:mt-[14rem]">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4 } }}
            src="/assets/hero.png"
            alt="Hero Image"
            className="md:w-[796px] md:h-[1131px] mt-[25rem] md:mt-[51px]"
          />
        </div>
      </div>

      {/* Campus Badges */}

      <Marquee
        pauseOnHover
        className="absolute [--duration:20s] bottom-0 -mb-3 left-0 right-0 overflow-hidden"
      >
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
                src="/assets/sui-logo.png"
                className="md:h-[82.5px] w-[30px] md:w-[60.83333206176758px]"
              />
              <div className="h-[10px] md:py-5 py-3 bg-white border" />
              <span className="text-white text-sm sm:text-base whitespace-nowrap">
                SUI ON CAMPUS
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Marquee>

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
