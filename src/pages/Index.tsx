import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div
      style={{ padding: "20px", minHeight: "100vh", backgroundColor: "#fff" }}
    >
      <h1 style={{ color: "#000", fontSize: "32px", marginBottom: "20px" }}>
        🚀 Josué Djossou - Portfolio (Testing Components)
      </h1>
      <p style={{ color: "#000", fontSize: "18px" }}>
        Testing each component individually...
      </p>

      {/* Test Navigation first */}
      <div
        style={{ border: "1px solid red", margin: "10px 0", padding: "10px" }}
      >
        <h3 style={{ color: "#000" }}>Navigation Component:</h3>
        <Navigation />
      </div>

      {/* Comment out all other components for now */}
      {/* <main>
        <section id="home">
          <Hero />
        </section>
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer /> */}
    </div>
  );
};

export default Index;
