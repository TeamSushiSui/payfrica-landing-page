import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const FixedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-[#C63E27] w-full fixed left-0 py-4 z-50 top-0 h-[110px]">
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              width={170}
              height={61.78715133666992}
              src="/src/assets/Payfrica-Logo.png"
            />
          </div>

          <div className="hidden md:flex gap-[24px]  text-white">
            <a href="#" className="hover:text-gray-200 transition-colors">
              Payfrica Bridge
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Payfrica Pay
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Payfrica Card
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Help
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden sm:block w-[168px] border-[2px] bg-transparent text-white h-[48px] rounded-[12px]"
            >
              Discover More
            </Button>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute pb-10 top-full left-0 right-0 bg-[#C63E27] md:hidden z-50">
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Payfrica Bridge
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Payfrica Pay
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Payfrica Card
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Help
              </a>
              <Button
                variant="outline"
                className="sm:hidden w-full border-2 bg-transparent text-white h-[3rem]"
              >
                Discover More
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FixedHeader;
