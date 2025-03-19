
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Associations from '../components/Associations';
import SuccessStories from '../components/SuccessStories';
import Statistics from '../components/Statistics';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans" style={{ direction: 'rtl' }}>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Associations />
      <Statistics />
      <SuccessStories />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
