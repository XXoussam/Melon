import { useState } from 'react'
import './Pricing.css'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small teams',
      monthlyPrice: 9,
      annualPrice: 7,
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        'Up to 25 team members',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom integrations',
        'Advanced security'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Custom analytics',
        '24/7 phone support',
        'Dedicated account manager',
        'Custom integrations',
        'Enterprise security',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">
            Simple, transparent 
            <span className="gradient-text"> pricing</span>
          </h2>
          <p className="section-description">
            Choose the perfect plan for your team. No hidden fees, no surprises.
          </p>
          
          <div className="pricing-toggle">
            <span className={!isAnnual ? 'active' : ''}>Monthly</span>
            <button 
              className="toggle-switch"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span className={`toggle-slider ${isAnnual ? 'annual' : ''}`}></span>
            </button>
            <span className={isAnnual ? 'active' : ''}>
              Annual 
              <span className="discount-badge">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span className="price">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="period">/month</span>
                </div>
                {isAnnual && (
                  <div className="annual-savings">
                    Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                  </div>
                )}
              </div>

              <div className="plan-features">
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.6667 5L7.50004 14.1667L3.33337 10" 
                              stroke="currentColor" strokeWidth="2" 
                              strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-full`}>
                Get Started
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p>All plans include a 14-day free trial. No credit card required.</p>
          <div className="pricing-links">
            <a href="#" className="pricing-link">Compare all features</a>
            <a href="#" className="pricing-link">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing