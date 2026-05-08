import HeroSection from './HeroSection';
import WhyChooseUs from './WhyChooseUs';
import ProductsPreview from './ProductsPreview';
import ServicesPreview from './ServicesSection';
import TrustStrip from './TrustStrip';
import { Link } from 'react-router-dom';

// CTA section — inline since it's simple
const CTASection = () => (
  <section className="bg-[#c9922a] py-20 md:py-24">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a] tracking-tight mb-4">
        Ready to Work With Us?
      </h2>
      <p className="text-[#0d1b2a]/70 text-base mb-8 max-w-lg mx-auto">
        Get in touch for product enquiries, service quotations, or dealership opportunities across India.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-[#0d1b2a] text-[#c9922a] px-10 py-4 text-sm font-semibold hover:bg-[#132238] transition-colors"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Contact Us Today
      </Link>
    </div>
  </section>
);

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <ProductsPreview />
      <ServicesPreview />
      <TrustStrip />
      <CTASection />
    </div>
  );
};

export default Home;