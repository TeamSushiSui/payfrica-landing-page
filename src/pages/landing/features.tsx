import { Coins, PiggyBank, WifiOff, Zap } from "lucide-react";
import React from "react";

const Features = () => {
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#3B4992] mb-6">
            The African Payvolution
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Want to pay anything so easy with the touch of a finger. Through
            <span className="text-[#C4392A] font-semibold"> Payfrica</span> you
            can make practically any transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-[#C4392A] font-bold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
