import AboutPayfrica from "./about-payfrica";
import Features from "./features";
import FixedHeader from "./fixed-header";
import Footer from "./footer";
import Hero from "./hero";
import PayfricaBridge from "./payfrica-brigde";
import PayFricaCTA from "./payfrica-cta";
import PayfricaSavings from "./savings";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-screen">
      {/* Navigation */}
      <FixedHeader />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutPayfrica globeImageUrl="/src/assets/globe-image.png" />

      {/* Bridge Section */}
      <PayfricaBridge />

      {/* Savings Section */}
      <PayfricaSavings />

      {/* Features Page */}
      <Features />

      {/* CTA SECTION */}
      <PayFricaCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
