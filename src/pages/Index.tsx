import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Experience />
        <Projects />
        {/* Temporarily commenting out to test blank page issue */}
        {/* <Skills />
        <Education /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
