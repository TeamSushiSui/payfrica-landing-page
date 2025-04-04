const PayFricaCTA = () => {
  return (
    <div className="w-screen bg-white py-2 px-4 mt-20">
      <div className="bg-[#3B4992] relative max-w-7xl mx-auto rounded-[27px] md:h-[460px] py-16 sm:py-24 px-8">
        <div className=" px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Are you ready for the Pay-volution?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl">
                Personalize your settings, follow your progress, archive your
                highlights and notes automatically. Globe is the ultimate
                reading
              </p>
              <button className="bg-[#C4392A] text-white px-8 py-3 rounded-md hover:bg-[#A32D21] transition-colors text-lg font-medium">
                Get Started
              </button>
            </div>

            <div className="md:w-1/2">
              <div className="flex justify-center items-center gap-4">
                <div className="z-30 md:absolute md:top-0 mt-9 md:-mt-[7rem]">
                  <img
                    src="/src/assets/2 Phones.png"
                    alt="Payfrica App Screenshot 1"
                    className="w-[766px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayFricaCTA;
