import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span>◆</span> DevDeploy
        </div>

        <div className="nav-status">
          <span className="online-dot"></span>
          System Online
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <div className="badge">AWS • EC2 • REACT</div>

          <h1>
            My First
            <span> DevOps Deployment</span>
          </h1>

          <p className="subtitle">
            A simple React application deployed and running on an
            AWS EC2 instance.
          </p>

          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <p className="small-title">DEPLOYMENT STATUS</p>
                <h2>Production Ready</h2>
              </div>

              <div className="status-badge">
                <span></span> Online
              </div>
            </div>

            <div className="info-grid">
              <div className="info-box">
                <p>Frontend</p>
                <h3>React</h3>
              </div>

              <div className="info-box">
                <p>Server</p>
                <h3>AWS EC2</h3>
              </div>

              <div className="info-box">
                <p>Web Server</p>
                <h3>Nginx</h3>
              </div>
            </div>

            <button
              onClick={() =>
                alert("🚀 Deployment is working successfully!")
              }
            >
              Check Deployment →
            </button>
          </div>
        </div>
      </main>

      <footer>
        <p>Built while learning DevOps</p>
        <p>React • AWS • EC2 • Nginx</p>
      </footer>
    </div>
  );
}

export default App;