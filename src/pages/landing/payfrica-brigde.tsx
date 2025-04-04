const PayfricaBridge = () => {
  return (
    <div className="bg-[#3C53A4] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 relative">
            <div className="relative w-full max-w-[500px] mx-auto">
              <img
                src="/src/assets/mobile-image.png"
                alt="Mobile App Interface"
                className="relative z-10 rounded-3xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-[#FCF5D7] text-[#3C53A4] rounded-full mb-6">
              <span className="text-sm">Payfrica Bridge</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Simplifying Digital Assets
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl">
              Buy And Convert Tokens With Ease.{" "}
              <span className="text-[#F7A325]">Payfrica Bridge</span> Makes
              Digital Finance Accessible, Breaking Down The Barriers Of
              Complexity And Cost
            </p>
            <button className="bg-[#C43E26] text-white px-8 py-3 rounded-md hover:bg-[#A32D21] transition-colors text-lg font-medium">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayfricaBridge;
