import React from "react";

const PayfricaSavings = () => {
  return (
    <div className="bg-[#FCF5D7] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-[#FBE19A] rounded-full mb-6">
              <span className="text-[#3C53A4] text-sm">
                Payfrica Saving Circle
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Save With People You Trust
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-xl">
              Join Or Create A{" "}
              <span className="text-[#F7A325] font-semibold">
                Savings Circle
              </span>{" "}
              Where Your Money Is Safe And Your Community Thrives. With
              Payfrica, Savings Lead To Collective Empowerment
            </p>
            <button className="bg-[#C4392A] text-white px-8 py-3 rounded-md hover:bg-[#A32D21] transition-colors text-lg font-medium">
              Explore
            </button>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative w-full max-w-[500px] mx-auto">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#F7A325] rounded-full opacity-20 blur-lg"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#C4392A] rounded-full opacity-10 blur-xl"></div>
              <div className="relative z-10 rounded-3xl p-4 transform hover:scale-105 transition-transform duration-300 border-4 border-[#C43E26]">
                <img
                  src="/src/assets/piggy-bank.png"
                  alt="Piggy Bank Savings"
                  className="rounded-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayfricaSavings;
