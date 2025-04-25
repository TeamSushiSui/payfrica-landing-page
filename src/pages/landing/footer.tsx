import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <img
              width={170}
              height={61.78715133666992}
              src="/assets/Payfrica-Logo.png"
              alt="Payfrica Logo"
            />
          </div>
          <div className="flex space-x-4">
            <a
              href="https://x.com/Payfrica_Sui?t=ET4ThnISUDsACFEDrZxyIA&s=09"
              className="hover:text-red-500 transition-colors"
            >
              <img
                src="/assets/x-social-media-black-icon.svg"
                className="size-6"
                alt="X (Twitter)"
              />
            </a>

            <a
              href="https://t.me/+d908s2sJF_8yNWZk"  // Replace with your actual Telegram link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <img
                src="/assets/telegram-svgrepo-com.svg" // Ensure you have this icon in your assets
                className="size-6"
                alt="Telegram"
              />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex items-center justify-center mb-6 text-xs md:text-sm">
          <Mail size={16} className="mr-2" />
          <span>Send Your Feedback: </span>
          <a
            href="mailto:feedback@payfrica.com"
            className="ml-2 hover:text-red-500 transition-colors"
          >
            payfrica.sui@gmail.com
          </a>
        </div>

        {/* Policy Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a href="#" className="hover:text-red-500 transition-colors">
            Privacy Policy
          </a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-red-500 transition-colors">
            Terms & Condition
          </a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-red-500 transition-colors">
            Cookie Notice
          </a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-red-500 transition-colors">
            Copyright Policy
          </a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-red-500 transition-colors">
            Data Policy
          </a>
        </div>

        {/* Copyright and Additional Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            © 2025 Payfrica. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-red-500 transition-colors">
              Support
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Help
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
