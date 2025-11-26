import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PopularFlights from "./components/PopularFlights";
import PopularRoutes from "./components/PopularRoutes";
import TrendingDestinations from "./components/TrendingDestinations";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularFlights />
      <PopularRoutes />
      <TrendingDestinations />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
