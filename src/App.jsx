import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import { Navbar } from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const App = () => {
  return (
    <main>
      <Navbar />
    </main>
  );
};
