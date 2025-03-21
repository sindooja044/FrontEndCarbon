import CTA from "./components/CTA";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowITWorks";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div>
      <Navbar />
     <HeroSection/>
     <WhyChooseUs/>
     <HowItWorks/>
     <CTA/>
     <Footer/>
    </div>
  );
}

export default App;
