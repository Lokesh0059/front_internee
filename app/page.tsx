'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import './page.css'

export default function Home() {
  const [timer, setTimer] = useState('03:14:40:35')
const [activeFaq, setActiveFaq] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      // Timer countdown logic
      setTimer(prev => {
        const parts = prev.split(':').map(Number)
        let [hours, minutes, seconds, milliseconds] = parts
        
        milliseconds--
        if (milliseconds < 0) {
          milliseconds = 99
          seconds--
          if (seconds < 0) {
            seconds = 59
            minutes--
            if (minutes < 0) {
              minutes = 59
              hours--
              if (hours < 0) {
                hours = 0
              }
            }
          }
        }
        
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`
      })
    }, 10)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="badge">
              <span className="google-logo">🔒</span>
              <span className="partner-text">Google Cloud<br />Partner</span>
            </div>
          </div>
          <div className="timer">
            <span className="timer-text">{timer}</span>
          </div>
          <button className="contact-btn">Contact Sales</button>
        </div>
      </header>

      {/* Main Content */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="main-title">Google Workspace</h1>
          
          <div className="icons-row">
            <span className="icon">📄</span>
            <span className="icon">📊</span>
            <span className="icon">💾</span>
            <span className="icon">📸</span>
            <span className="icon">✓</span>
          </div>

          <h2 className="subtitle">
            किन केहि  <span className="highlight">Businesses efficiently</span> चलछन्, र केहि
            <span className="highlight"> daily operations </span>मै struggle गर्छन ।?
          </h2>

          <p className="description">  
            Reason luck, ads वा  team size होइन. Reason हो right partner with right tools.
          </p>

          {/* Discount Boxes */}
          <div className="discount-section">
            <div className="discount-box">
              <div className="discount-label">DISCOUNT<br />UP TO</div>
              <div className="discount-value">20%</div>
            </div>
            <div className="discount-box">
              <div className="discount-label">Offer<br />Discount</div>
              <div className="discount-value">₹499</div>
            </div>
          </div>
          
          <p className="benefit-text">
            Everything Your Business Needs to Work Smarter. A complete Google 
            Workspace setup done right by Neet Nepal.
          </p>

          {/* Buttons */}
          <div className="button-group">
            <button className="btn btn-primary">Book Free Demo</button>
            <button className="btn btn-secondary">Get a quotation</button>
          </div>
        </div>

        {/* Video Section */}
        <div className="video-section">
          <div className="video-placeholder">
            <div className="play-button">▶</div>
          </div>
        </div>
      </section>

      {/* Footer Text */}
      <footer className="footer">
        <p>Get A Free 15 Min Demo - See if it fits your business</p>
      </footer>

      {/* Trusted By Section */}
      <section className="trusted-section">
        <p className="trusted-header">Trusted by 1000+ Nepali businesses on their growth journey. अब तपाइँको team समार हो?</p>
        <div className="logos-container">
          <img src="/logo1.png" alt="Ministry of Health" className="logo" />
          <img src="/logo2.png" alt="British Council" className="logo" />
          <img src="/logo3.png" alt="IJSE" className="logo" />
          <img src="/logo4.png" alt="Company" className="logo" />
          <img src="/logo5.png" alt="Nagrik" className="logo" />
          <img src="/logo6.png" alt="IMSI Group" className="logo" />
          <img src="/logo7.png" alt="DHL" className="logo" />
          <img src="/logo8.png" alt="Klimont" className="logo" />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="pricing-header">
          <h2>
            के <span className="highlight-text">Google Workspace</span> तपाइँको <br />
            <span className="highlight-text">business growth</span> को लागि best fit हो?
          </h2>
          <p className="pricing-subheader">
            Tailored Plans तपाइँको Online Presence को हरेक पहलुलाई<br />
            Elevate र Empower गर्न
          </p>
          <div className="feature-icons">
            <span className="feature-icon">📧</span>
            <span className="feature-icon">📄</span>
            <span className="feature-icon">💾</span>
            <span className="feature-icon">📸</span>
            <span className="feature-icon">✓</span>
            <span className="feature-icon">➕</span>
          </div>
        </div>

        <div className="pricing-content">
          {/* Pricing Card */}
          <div className="pricing-card">
            <div className="plan-header">
              <h3 className="plan-name">Starter</h3>
              <div className="plan-price">
                <span className="currency">Rs.</span>
                <span className="price">499</span>
                <span className="original-price">560.</span>
              </div>
              <p className="plan-duration">per user / month,<br />1 year commitment</p>
            </div>
            <button className="contact-sales-btn">Contact Sales</button>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-section">
              <h4 className="feature-title">Storage</h4>
              <ul className="feature-list">
                <li>30GB Pooled Storage per user</li>
              </ul>
            </div>

            <div className="feature-section">
              <h4 className="feature-title">Communicate</h4>
              <ul className="feature-list">
                <li>Secured & Personalized Gmail</li>
                <li>Always in Touch with Schedule</li>
                <li>HD Video Calls (300 Users)</li>
                <li>Google Specified in your Group</li>
              </ul>
            </div>

            <div className="feature-section">
              <h4 className="feature-title">Collaborate</h4>
              <ul className="feature-list">
                <li>Documents with Google Docs</li>
                <li>Data Insights with Google Sheets</li>
                <li>Present with Google Slides</li>
                <li>Surveys, To-dos and Many More</li>
              </ul>
            </div>

            <div className="feature-section">
              <h4 className="feature-title">Control</h4>
              <ul className="feature-list">
                <li>Basic Security & Admin Control</li>
                <li>Standard Endpoint Management</li>
                <li>Smart Search with Workspace</li>
                <li>Vault for eDiscovery</li>
                <li>Backup options for Drive and Gmail</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Platform Section */}
      <section className="tools-platform-section">
        <div className="tools-header">
          <p className="tools-intro">
            <span className="highlight-blue">सबै</span> Tools <span className="highlight-blue">एवं</span> Platform मा
          </p>
          <h2 className="tools-title">Google Workspace</h2>
        </div>

        {/* Feature Cards */}
        <div className="feature-cards-grid">
          <div className="feature-card">
            <h3 className="feature-card-title">Premium AI built-in</h3>
            <p className="feature-card-description">
              Do your best work faster with the Gemini app, NotebookLM, and Gemini in Gmail, Docs, Sheets, and more.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-card-title">Tools born in the Cloud</h3>
            <p className="feature-card-description">
              Collaborate in real time, from any device, across tools that are always up-to-date.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-card-title">Enterprise-grade security</h3>
            <p className="feature-card-description">
              Protect your emails, files, and meetings with AI-powered security and compliance controls.
            </p>
          </div>
        </div>

        <button className="quotation-btn">Get a quotation</button>

        {/* Google Workspace Includes */}
        <div className="workspace-includes">
          <h3>Google Workspace includes:</h3>
          <div className="tools-icons-grid">
            <div className="tool-item">
              <span className="tool-icon">📧</span>
              <span className="tool-name">Gmail</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">💾</span>
              <span className="tool-name">Drive</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">📹</span>
              <span className="tool-name">Meet</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">📅</span>
              <span className="tool-name">Calendar</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">💬</span>
              <span className="tool-name">Chat</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">✨</span>
              <span className="tool-name">Gemini</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">📄</span>
              <span className="tool-name">Docs</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">📊</span>
              <span className="tool-name">Sheets</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">🎨</span>
              <span className="tool-name">Slides</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">🎥</span>
              <span className="tool-name">Vids</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">📝</span>
              <span className="tool-name">Keep</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">📋</span>
              <span className="tool-name">Gms</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">📑</span>
              <span className="tool-name">Forms</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">✓</span>
              <span className="tool-name">Tasks</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">🧠</span>
              <span className="tool-name">NotebookLM</span>
            </div>
            <div className="tool-item">
              <span className="tool-icon">⚙️</span>
              <span className="tool-name">AppSheet</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <h2 className="solutions-title">
          Solutions for businesses,<br />
          <span className="solutions-hindi">साना देखि ठूला सबैका लागि</span>
        </h2>
        <p className="solutions-description">
          No matter the size, Google Workspace ले तपाइँको business को सबै needs पूरा गर्छ
        </p>
      </section>

      {/* Solutions Tiers Section */}
      <section className="solutions-tiers-section">
        <div className="tiers-grid">
          <div className="tier-card">
            <div className="tier-image">
              <div className="tier-icons">
                <span className="tier-icon">📄</span>
                <span className="tier-icon">M</span>
                <span className="tier-icon">⭐</span>
                <span className="tier-icon">📧</span>
              </div>
              <div className="tier-central-logo">G</div>
            </div>
            <h3 className="tier-title">For enterprise</h3>
            <p className="tier-description">
              Secure collaboration <span className="highlight-link">tools for enterprise</span>, with premium AI and enterprise-grade security built in for all the ways work is changing.
            </p>
          </div>

          <div className="tier-card">
            <div className="tier-image">
              <div className="tier-image-photo">
                <div className="photo-placeholder">Photo</div>
                <div className="tier-image-list">
                  <div className="list-item">📁</div>
                  <div className="list-item">📝</div>
                  <div className="list-item">📊</div>
                  <div className="list-item">✓</div>
                </div>
              </div>
            </div>
            <h3 className="tier-title">For small business</h3>
            <p className="tier-description">
              Tools for <span className="highlight-link">small businesses</span> that help teams and <span className="highlight-link">individuals</span> with everyday tasks like scheduling appointments and email marketing.
            </p>
          </div>

          <div className="tier-card">
            <div className="tier-image">
              <div className="tier-image-photo">
                <div className="photo-placeholder">Photo</div>
              </div>
            </div>
            <h3 className="tier-title">For new business</h3>
            <p className="tier-description">
              Essentials tools for <span className="highlight-link">new businesses</span> and <span className="highlight-link">startups</span>, including business email domains, online file sharing and storage, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <h2 className="brands-title">
          Brands using Google Workspace to<br />
          succeed online, <span className="brands-highlight">कसरी?</span>
        </h2>
        <p className="brands-description">
          कसरी teams Google Workspace संग productivity<br />
          बढाउन र समाय बचत गर्छन्
        </p>
      </section>
      {/* ===== Workspace Banner + FAQ Section ===== */}

<section className="workspace-faq-section">

  {/* Banner Section */}
  <div className="workspace-banner">
    
    <div className="workspace-banner-left">
      <img 
        src="https://www.caveconsulting.com/wp-content/uploads/2020/10/GoogleWorkspace-Image.jpg" 
        alt="Google Workspace Tools" 
        className="workspace-banner-image"
      />
    </div>

    <div className="workspace-banner-right">
      <h3>Your files, all in one place</h3>
      <p>
        Edit and organize <span className="blue-text">Google Docs, Sheets, Slides</span>,
        Microsoft Office files, and PDFs in real-time.Plus,
        access over 100 other file types!
      </p>

      <ul className="workspace-features">
        <li>Annotate PDFs</li>
        <li>AI-powered search</li>
        <li>Activity view</li>
      </ul>
    </div>

  </div>


  {/* FAQ Section */}
  <div className="faq-container">
    <h2 className="faq-title">
      Frequently Asked Questions <span>(FAQs)</span>
    </h2>

    {[
      "Is Google Workspace compatible with my current email client?",
      "Can I transfer my current Google Workspace account to Nest Nepal?",
      "Are there any fees for transferring a domain to Nest Nepal?",
      "Are there any hidden charges for Nest Nepal Customers?",
      "What all does GSuite productivity suite include?"
    ].map((question, index) => (
      <div key={index} className="faq-item">
        <button
          className="faq-question"
          onClick={() =>
            setActiveFaq(activeFaq === index ? null : index)
          }
        >
          {question}
          <span className="faq-icon">
            {activeFaq === index ? "−" : "+"}
          </span>
        </button>

        {activeFaq === index && (
          <div className="faq-answer">
            This is a sample answer. Replace with actual FAQ content.
          </div>
        )}
      </div>
    ))}
  </div>

</section>
{/* ===== SALES CTA + FOOTER CARD ===== */}

<section className="sales-footer-section">

  {/* ===== SALES CTA ===== */}
  <div className="sales-cta">

    <div className="sales-left">
      <div className="workspace-icons">
        <span>📧</span>
        <span>📁</span>
        <span>🎥</span>
        <span>💬</span>
        <span>✨</span>
        <span>📄</span>
      </div>

      <h2>Prefer to talk to sales directly?</h2>

      <p>
        तपाईको company को unique requirements अनुसार
        तयार गरिएको solution संग efficiency र collaboration
        maximize गर्नुहोस्
      </p>

      <div className="sales-buttons">
        <button className="whatsapp-btn">
          Message On WhatsApp
        </button>

        <span className="sales-call">
          Call : +977 9864333517
        </span>
      </div>
    </div>

    <div className="sales-right">
      <img src="data:image/jpeg;base64,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" alt="Sales Representative" />
    </div>

  </div>


  {/* ===== BLUE FOOTER CARD ===== */}

  <div className="nest-footer-card">

    <div className="footer-top">
      <h3 className="footer-logo">✈ NEST NEPAL</h3>

      <div className="footer-contact">
        <p>Nepal</p>
        <p>Call us : +977 986-160-174</p>
        <p>Kupandole, Lalitpur, Nepal</p>
        <p>support@nestnepal.com</p>
      </div>
    </div>

    <div className="footer-bottom">
      <span>Google Workspace</span>

      <div className="footer-links">
        <Link href="#">Why google workspace?</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Get A Quotation ↗</Link>
      </div>
    </div>

  </div>

</section>


    </main>
  )
}
