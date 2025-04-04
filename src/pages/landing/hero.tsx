import { Button } from "@/components/ui/button";
import { Wallet2 } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-[#F6AD19] pt-24 min-h-[1080px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10 md:mt-[282px] text-center md:text-left">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Bridging The Gap, Empowering Transactions
          </h1>
          <p className="text-white text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
            Seamless Payments, Effortless Savings, And Instant Token Conversions
            Built For Africa, Powered By SUI.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Button className="bg-[#C43E26] text-white px-6 py-3 rounded-md hover:bg-[#A32D21] transition-colors md:w-[250px] h-[59px] sm:w-auto text-base sm:text-lg">
              Quick Account
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#F6AD19] bg-transparent transition-colors md:w-[250px] h-[59px] sm:w-auto text-base sm:text-lg"
            >
              Sign In
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 px-4 sm:px-8 md:px-0 absolute right-0 md:-mr-[4rem]">
          <img
            src="/src/assets/africa-woman-laughing.png"
            alt="Happy African Woman"
            className="md:w-[796px] md:h-[1131px] mt-[14rem] md:mt-[51px]"
          />
        </div>
      </div>

      {/* Campus Badges */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <div className="flex space-x-4 animate-scroll py-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
