import './About.css'

const About = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Expert Support' },
    { number: '150+', label: 'Countries Served' }
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              Built for the future of 
              <span className="gradient-text"> digital collaboration</span>
            </h2>
            <p className="section-description">
              We're on a mission to transform how teams work together. Our platform combines 
              cutting-edge technology with intuitive design to create solutions that actually 
              make your work easier, not harder.
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">✨</div>
                <div>
                  <h4>Innovation First</h4>
                  <p>Always pushing boundaries with the latest technology</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🎯</div>
                <div>
                  <h4>User-Centric Design</h4>
                  <p>Every feature is designed with your experience in mind</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🌍</div>
                <div>
                  <h4>Global Scale</h4>
                  <p>Trusted by teams worldwide, from startups to enterprises</p>
                </div>
              </div>
            </div>

            <button className="btn btn-primary">
              Learn More About Us
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="about-visual">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">📈</div>
                  <h4>Growing Together</h4>
                  <p>Join thousands of teams already using our platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About