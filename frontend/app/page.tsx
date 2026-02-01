export default function HomePage() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Placement Preparation Portal</h1>
        <p style={styles.subtitle}>
          Prepare for placements with aptitude practice, coding questions,
          and progress tracking.
        </p>
      </header>

      {/* Main Section */}
      <main style={styles.main}>
        <div style={styles.card}>
          <h3>Aptitude Practice</h3>
          <p>Solve company-level aptitude questions.</p>
        </div>
        <div style={styles.card}>
          <h3>Coding Questions</h3>
          <p>Improve problem-solving with coding challenges.</p>
        </div>
        <div style={styles.card}>
          <h3>Track Progress</h3>
          <p>Monitor accuracy and improvement over time.</p>
        </div>
      </main>

      {/* Buttons */}
      <div style={styles.buttons}>
        <button style={styles.primaryBtn}>Get Started</button>
        <button style={styles.secondaryBtn}>Login</button>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        © 2026 Placement Prep Portal
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f6f8",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px"
  },
  header: {
    textAlign: "center",
    maxWidth: "600px"
  },
  title: {
    fontSize: "36px",
    marginBottom: "10px",
    color: "#1f2937"
  },
  subtitle: {
    fontSize: "16px",
    color: "#555"
  },
  main: {
    display: "flex",
    gap: "20px",
    marginTop: "40px",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "220px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  buttons: {
    marginTop: "30px",
    display: "flex",
    gap: "15px"
  },
  primaryBtn: {
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  secondaryBtn: {
    padding: "10px 20px",
    backgroundColor: "white",
    color: "#2563eb",
    border: "1px solid #2563eb",
    borderRadius: "5px",
    cursor: "pointer"
  },
  footer: {
    marginTop: "40px",
    fontSize: "14px",
    color: "#777"
  }
};
