import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Work from "../components/Work";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Work />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
