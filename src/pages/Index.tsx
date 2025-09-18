const Index = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ color: "#333", fontSize: "2.5rem", marginBottom: "20px" }}>
          🎉 React App Successfully Deployed!
        </h1>
        <p
          style={{
            color: "#28a745",
            fontSize: "1.3rem",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          ✅ GitHub Pages + React is now working!
        </p>
        <p style={{ color: "#666", fontSize: "1rem", marginBottom: "10px" }}>
          🕐 Deployed: {new Date().toLocaleString()}
        </p>

        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          <h2 style={{ color: "#007bff", marginBottom: "15px" }}>
            ✅ All Systems Working:
          </h2>
          <ul
            style={{
              color: "#333",
              lineHeight: "1.8",
              textAlign: "left",
              listStyle: "none",
              padding: 0,
            }}
          >
            <li>✅ GitHub Pages deployment</li>
            <li>✅ React app rendering</li>
            <li>✅ JavaScript execution</li>
            <li>✅ Build process</li>
            <li>✅ GitHub Actions workflow</li>
          </ul>
        </div>

        <div
          style={{
            backgroundColor: "#d1ecf1",
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #bee5eb",
          }}
        >
          <strong style={{ color: "#0c5460" }}>
            🚀 Ready to restore the full portfolio components!
          </strong>
        </div>

        <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "20px" }}>
          Josué Djossou - Mobile App Developer Portfolio
        </p>
      </div>
    </div>
  );
};

export default Index;
