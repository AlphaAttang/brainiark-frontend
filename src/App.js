import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import Testimonials from './Components/Testimonials/Testimonials';
import Pricing from './Components/Pricing/Pricing';
import CTA from './Components/CTA/CTA';
import Footer from './Components/Footer/Footer';
import Overview from './Components/Overview/Overview';
import ScrollToTop from './Components/ScrollTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Overview />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
