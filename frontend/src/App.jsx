import { useState } from "react";
import Hero from "./components/Hero";
import MouseFollower from "./utils/MouseFollower";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import { SyncScroll } from "./utils/SyncScroll";

const App = () => {
  const [activeData, setActiveData] = useState([]);
  SyncScroll();

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
