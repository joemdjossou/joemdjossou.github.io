const TestApp = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#333" }}>Josué Djossou - Portfolio</h1>
      <p>This is a test version to debug the blank page issue.</p>
      <p>If you see this, React is working!</p>
      <p>Current time: {new Date().toLocaleString()}</p>
    </div>
  );
};

export default TestApp;
