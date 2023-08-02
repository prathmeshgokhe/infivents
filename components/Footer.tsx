const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-innersection">
        <div className="signup-section">
          <div className="section1">
            <h3>Sign Up and Start Chatting Today</h3>
            <p>
              Don't wait any longer to start improving the user experience on
              your website. Sign up for our live chat product and start
              connecting with your customers in real-time.
            </p>
          </div>
          <div>
            <button>Sign Up Now</button>
          </div>
        </div>
        <div className="footer-flex">
          <div className="list">
            <h4>PRODUCTS</h4>
            <ul>
              <li>Download App</li>
              <li>Integrations</li>
              <li>Case Studies</li>
              <li>API</li>
            </ul>
          </div>
          <div className="list">
            <h4>COMPANY</h4>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Help</li>
            </ul>
          </div>

          <div className="list">
            <h4>ESSENTIALS</h4>
            <ul>
              <li>Documentation</li>
              <li>Playground</li>
              <li>Sandbox</li>
              <li>Source Code</li>
            </ul>
          </div>
          <div className="list">
            <h4>GET IN TOUCH</h4>
            <ul>
              <li>Twitter</li>
              <li>Facebook</li>

              <li>Dribbble</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p>COPYRIGHT © 2022 — infivent</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
