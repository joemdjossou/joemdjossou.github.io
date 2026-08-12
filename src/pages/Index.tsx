import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Navigation from "../components/Navigation";
import Stack from "../components/Stack";
import Work from "../components/Work";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Marquee />
        <Work />
        <Stack />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
