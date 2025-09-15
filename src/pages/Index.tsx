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
  console.log("Index component rendering...");
  
  // Test if the component is actually rendering
  const testDiv = (
    <div 
      style={{ 
        padding: "20px", 
        minHeight: "100vh", 
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: "Arial, sans-serif",
        border: "2px solid red", // Visible border to debug
        margin: "0",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <h1 style={{ color: "#000", marginBottom: "20px", fontSize: "32px" }}>
        🚀 Josué Djossou - Portfolio (Index Component)
      </h1>
      <p style={{ color: "#000", fontSize: "18px" }}>Index component is loading successfully!</p>
      <p style={{ color: "#000", fontSize: "16px" }}>Time: {new Date().toLocaleString()}</p>
      <p style={{ color: "#000", fontSize: "16px" }}>This should definitely be visible with red border!</p>
    </div>
  );
  
  console.log("Index component returning:", testDiv);
  return testDiv;
};

export default Index;
