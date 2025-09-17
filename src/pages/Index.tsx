import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div style={{ border: "2px solid blue", margin: "5px", padding: "5px" }}>
        <h4 style={{ color: "#000" }}>
          🧪 Testing ORIGINAL LAYOUT with Tailwind classes:
        </h4>
      </div>

      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />

      <div style={{ border: "2px solid green", margin: "5px", padding: "5px" }}>
        <h4 style={{ color: "#000" }}>
          ✅ If you see this, ALL components work in original layout!
        </h4>
      </div>
    </div>
  );
};

export default Index;
