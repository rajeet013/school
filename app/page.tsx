import About from "./components/home/About";
import Classes from "./components/home/Classes";
import Facilities from "./components/home/Facilities";
import Gallery from "./components/home/Gallery";
import Hero from "./components/home/Hero";
import News from "./components/home/News";
import Teachers from "./components/home/Teachers";
import Testimonal from "./components/home/Testimonal";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Facilities />
      <News />
      <Classes />
      <Teachers />
      <Testimonal />
      <Gallery />
    </div>
  );
}
