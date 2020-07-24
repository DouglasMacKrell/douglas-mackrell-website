import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__navigation">
          <div className="footer__nav-items">
            <span className="github">
              <a href="https://github.com/DouglasMacKrell">
                <i class="fab fa-github"></i>
              </a>
            </span>
            <div className="spacer" />
            <span className="youtube">
              <a href="https://youtube.com/BigMacKrell">
                <i class="fab fa-youtube"></i>
              </a>
            </span>
            <div className="spacer" />
            <span className="twitter">
              <a href="https://twitter.com/DouglasMacKrell">
                <i class="fab fa-twitter"></i>
              </a>
            </span>
            <div className="spacer" />
            <span className="email">
              <a href="mailto:bigmackrell+website@gmail.com?subject=An Urgent Message For Douglas MacKrell&body=Hello Douglas! I would like to talk to you about [OPPORTUNITY]. It sure was cool when we both [PAST TENSE VERB] that [NOUN]. Please contact me as soon as possible at [MY CONTACT INFORMATION]">
                <i class="fas fa-envelope"></i>
              </a>
            </span>
          </div>
        </div>
      </footer>
    );
}

export default Footer
