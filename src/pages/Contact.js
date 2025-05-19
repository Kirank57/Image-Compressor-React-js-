import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <div className="contact-form-card">
              {/* ================================= */}
              {/* SOLUTION 4: mailto fallback */}
              {/* ================================= */}
              <form
                className="contact-form"
                action="mailto:imagecompressor123@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="Message"
                    rows="5"
                    placeholder="Your message"
                    className="form-textarea"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                  <span className="btn-icon">→</span>
                </button>
              </form>
            </div>
          </div>

          <div className="contact-info-card">
            <h3 className="info-title">Alternatively, reach us at:</h3>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <p>imagecompressor123@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
