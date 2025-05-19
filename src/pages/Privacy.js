import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-page container">
      <h1 className="page-title">Privacy Policy</h1>
      <div className="privacy-content">
        <p className="last-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2>1. Information Collection</h2>
          <p>
            Our Image Compression Tool is designed with your privacy in mind. We
            collect minimal information to provide and improve our service:
          </p>
          <ul>
            <li>
              <strong>Images you upload:</strong> All processing occurs locally
              in your browser. Your images are never uploaded to our servers or
              stored by us.
            </li>
            <li>
              <strong>Usage data:</strong> We may collect anonymous analytics
              about feature usage, compression statistics, and errors to improve
              the tool.
            </li>
            <li>
              <strong>Technical information:</strong> Browser type, version, and
              device information may be collected for compatibility purposes.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Information</h2>
          <p>We use collected information solely to:</p>
          <ul>
            <li>Provide the image compression service</li>
            <li>Improve tool performance and user experience</li>
            <li>Understand usage patterns to guide development</li>
            <li>Diagnose and fix technical issues</li>
          </ul>
          <p>
            <strong>Important:</strong> Your images remain entirely on your
            device during processing. We have no access to your original or
            compressed images.
          </p>
        </section>

        <section>
          <h2>3. Data Security</h2>
          <p>Since all image processing occurs locally in your browser:</p>
          <ul>
            <li>No image data is transmitted over the internet</li>
            <li>No images are stored on our servers</li>
            <li>
              Your privacy is protected by the security of your own device
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Third-Party Services</h2>
          <p>We may use third-party services for:</p>
          <ul>
            <li>Analytics (e.g., Google Analytics)</li>
            <li>Hosting (e.g., cloud service providers)</li>
          </ul>
          <p>
            These services only receive anonymized data and cannot access your
            images.
          </p>
        </section>

        <section>
          <h2>5. Cookies</h2>
          <p>Our website may use cookies to:</p>
          <ul>
            <li>Remember your preferences</li>
            <li>Collect anonymous usage statistics</li>
            <li>Improve site performance</li>
          </ul>
          <p>
            You can disable cookies in your browser settings, though this may
            affect some functionality.
          </p>
        </section>

        <section>
          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. The "Last updated"
            date at the top of this page will reflect any changes.
          </p>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>
            For any questions about this Privacy Policy or our practices, please
            contact us at imagecompressor123@gmail.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
