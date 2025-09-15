// Temporarily comment out imports to test one by one
// import Navigation from "@/components/Navigation";
// import Hero from "@/components/Hero";
// import Experience from "@/components/Experience";
// import Projects from "@/components/Projects";
// import Skills from "@/components/Skills";
// import Education from "@/components/Education";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div style={{ padding: "20px", minHeight: "100vh", backgroundColor: "#fff" }}>
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Josué Djossou - Portfolio</h1>
      <p>Index component is loading successfully!</p>
      <p>Now testing individual components...</p>
      {/* <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer /> */}
    </div>
  );
};

export default Index;
