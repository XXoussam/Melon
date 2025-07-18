import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Optimized performance that delivers results in milliseconds, not minutes.'
    },
    {
      icon: '🔒',
      title: 'Secure by Design',
      description: 'Enterprise-grade security with end-to-end encryption and compliance.'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Deep insights and real-time analytics to drive better decisions.'
    },
    {
      icon: '🔧',
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows.'
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Fully responsive design that works perfectly on all devices.'
    },
    {
      icon: '🎯',
      title: 'Smart Automation',
      description: 'Intelligent automation that learns and adapts to your needs.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">
            Powerful Features for 
            <span className="gradient-text"> Modern Teams</span>
          </h2>
          <p className="section-description">
            Everything you need to streamline your workflow and boost productivity
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="features-showcase">
          <div className="showcase-content">
            <h3>See it in action</h3>
            <p>Watch how our platform transforms the way teams collaborate and deliver results.</p>
            <button className="btn btn-primary">
              Start Free Trial
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="showcase-visual">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="mockup-content">
                <div className="mockup-sidebar">
                  <div className="sidebar-item active"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                </div>
                <div className="mockup-main">
                  <div className="main-header"></div>
                  <div className="main-content">
                    <div className="content-card"></div>
                    <div className="content-card"></div>
                    <div className="content-card small"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features