import Hero from "./components/Hero";
import MouseFollower from "./utils/MouseFollower";
import Products from "./components/products/products";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const App = () => {
  const [activeData, setActiveData] = useState([]);

  return (
    <main className="overflow-hidden">
      <MouseFollower props={{ activeData, setActiveData }} />
      <Hero props={{ activeData, setActiveData }} />
      <Products />
      <Banner />
      <BannerText />
      <Blogs />
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;
