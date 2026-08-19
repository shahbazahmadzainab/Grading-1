import { ChatKitPanel } from "./components/ChatKitPanel";

export default function App() {
  return (
    <div className="app-shell">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">🎓</div>
          <div>
            <h1>AI Grading</h1>
            <span>Assistant</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button className="nav-item active">
            <span>🏠</span>
            Dashboard
          </button>

          <button className="nav-item">
            <span>📝</span>
            Grade Answer
          </button>

          <button className="nav-item">
            <span>📚</span>
            Assignments
          </button>

          <button className="nav-item">
            <span>📊</span>
            Results
          </button>

          <button className="nav-item">
            <span>👩‍🏫</span>
            Students
          </button>
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-item">
            <span>⚙️</span>
            Settings
          </button>

          <div className="user-card">
            <div className="user-avatar">Z</div>
            <div>
              <strong>Teacher</strong>
              <small>Grading Panel</small>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">SMART ASSESSMENT</p>
            <h2>AI Grading Dashboard</h2>
          </div>

          <div className="online-status">
            <span className="status-dot"></span>
            AI Online
          </div>
        </header>

        <section className="welcome-section">
          <div>
            <h3>Welcome to your Grading Assistant 👋</h3>
            <p>
              Evaluate student answers with AI-powered grading and
              personalized feedback.
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon purple">📝</div>
            <div>
              <span>Total Answers</span>
              <strong>120</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon blue">⭐</div>
            <div>
              <span>Average Score</span>
              <strong>92%</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">✓</div>
            <div>
              <span>Graded Today</span>
              <strong>15</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">👨‍🎓</div>
            <div>
              <span>Students</span>
              <strong>28</strong>
            </div>
          </div>
        </section>

        {/* ChatKit */}
        <section className="grading-section">
          <div className="section-heading">
            <div>
              <h3>💬 Grading Assistant</h3>
              <p>
                Enter a question and student's answer to get an AI-powered
                evaluation.
              </p>
            </div>

            <span className="ai-badge">✨ AI Powered</span>
          </div>

          <div className="chat-wrapper">
            <ChatKitPanel />
          </div>
        </section>

        {/* Features */}
        <section className="features-grid">
          <div className="feature-card">
            <span>🤖</span>
            <div>
              <h4>AI Evaluation</h4>
              <p>
                Automatically evaluates answers according to your grading
                criteria.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <span>📈</span>
            <div>
              <h4>Smart Feedback</h4>
              <p>
                Provides positive and constructive feedback for students.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <span>🎯</span>
            <div>
              <h4>Consistent Grading</h4>
              <p>
                Apply the same grading standards across student responses.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}