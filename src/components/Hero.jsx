import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Streamline Your Workflow with 
              <span className="gradient-text"> Smart Solutions</span>
            </h1>
            <p className="hero-description">
              Transform your productivity with our innovative platform designed to simplify 
              complex tasks and boost your team's efficiency.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-large">
                Get Started Free
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn btn-outline">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6.66667 10L10 13.3333L10 3.33333M10 13.3333L13.3333 10M10 13.3333V16.6667" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Watch Demo
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <div className="floating-card card-1">
                <div className="card-icon">📊</div>
                <div className="card-content">
                  <h4>Analytics</h4>
                  <p>Real-time insights</p>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">⚡</div>
                <div className="card-content">
                  <h4>Performance</h4>
                  <p>Lightning fast</p>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🔒</div>
                <div className="card-content">
                  <h4>Security</h4>
                  <p>Enterprise grade</p>
                </div>
              </div>
              <div className="hero-gradient"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero