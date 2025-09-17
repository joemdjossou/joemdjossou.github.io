import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

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

      {/* Test Navigation - WORKING ✅ */}
      <div
        style={{ border: "1px solid green", margin: "10px 0", padding: "10px" }}
      >
        <h3 style={{ color: "#000" }}>✅ Navigation Component: WORKING</h3>
        <Navigation />
      </div>

      {/* Test Hero component */}
      <div
        style={{ border: "1px solid blue", margin: "10px 0", padding: "10px" }}
      >
        <h3 style={{ color: "#000" }}>🧪 Testing Hero Component:</h3>
        <Hero />
      </div>

      {/* Comment out remaining components */}
      {/* 
      <Experience />
      <Projects />
      <Contact />
      <Footer /> 
      */}
    </div>
  );
};

export default Index;
