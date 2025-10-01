import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
    </main>
  );
};
