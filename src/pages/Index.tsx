import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";

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

      {/* Test Hero component - WORKING ✅ */}
      <div
        style={{ border: "1px solid green", margin: "10px 0", padding: "10px" }}
      >
        <h3 style={{ color: "#000" }}>✅ Hero Component: WORKING</h3>
        <Hero />
      </div>

      {/* Test Experience component - WORKING ✅ */}
      <div
        style={{ border: "1px solid green", margin: "10px 0", padding: "10px" }}
      >
        <h3 style={{ color: "#000" }}>✅ Experience Component: WORKING</h3>
        <Experience />
      </div>

      {/* Test Projects component */}
      <div
        style={{
          border: "1px solid red",
          margin: "10px 0",
          padding: "10px",
        }}
      >
        <h3 style={{ color: "#000" }}>🧪 Testing Projects Component:</h3>
        <Projects />
      </div>

      {/* Comment out remaining components */}
      {/* 
      <Contact />
      <Footer /> 
      */}
    </div>
  );
};

export default Index;
