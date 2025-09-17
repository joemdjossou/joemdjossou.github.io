const Index = () => {
  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#f0f0f0", 
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ color: "#333", fontSize: "2rem", marginBottom: "20px" }}>
        🚀 MINIMAL TEST - Josué Djossou Portfolio
      </h1>
      <p style={{ color: "#666", fontSize: "1.2rem", marginBottom: "10px" }}>
        ✅ If you see this, React is working!
      </p>
      <p style={{ color: "#666", fontSize: "1rem", marginBottom: "10px" }}>
        🕐 Current time: {new Date().toLocaleString()}
      </p>
      <p style={{ color: "#666", fontSize: "1rem", marginBottom: "20px" }}>
        🔍 This is a minimal test to debug the blank page issue.
      </p>
      
      <div style={{ 
        backgroundColor: "#fff", 
        padding: "20px", 
        borderRadius: "8px",
        border: "2px solid #007bff"
      }}>
        <h2 style={{ color: "#007bff", marginBottom: "15px" }}>Test Results:</h2>
        <ul style={{ color: "#333", lineHeight: "1.6" }}>
          <li>✅ React rendering: WORKING</li>
          <li>✅ JavaScript execution: WORKING</li>
          <li>✅ Basic styling: WORKING</li>
          <li>✅ Dynamic content (date): WORKING</li>
        </ul>
      </div>
      
      <div style={{ 
        marginTop: "30px", 
        padding: "15px", 
        backgroundColor: "#d4edda", 
        border: "1px solid #c3e6cb",
        borderRadius: "5px"
      }}>
        <strong style={{ color: "#155724" }}>
          If you see this message, the blank page issue is NOT with React itself.
          The problem is likely with component imports or Tailwind CSS.
        </strong>
      </div>
    </div>
  );
};

export default Index;
