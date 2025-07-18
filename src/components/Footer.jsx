import './Footer.css'

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'API', 'Integrations', 'Changelog'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Tutorials', 'Status'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies', 'Licenses']
  }

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'GitHub', icon: '🐙', url: '#' },
    { name: 'Discord', icon: '💬', url: '#' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/682efb3a529c378040f10a7a_Melon.svg" alt="Melon Logo" />
            </div>
            <p className="footer-description">
              Streamline your workflow with smart solutions designed for modern teams.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} className="social-link" aria-label={social.name}>
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-column">
                <h4 className="footer-title">{category}</h4>
                <ul className="footer-list">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3>Stay updated</h3>
            <p>Get the latest news and updates delivered to your inbox.</p>
          </div>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button className="btn btn-primary">
              Subscribe
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 Melon. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer