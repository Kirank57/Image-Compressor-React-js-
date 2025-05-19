import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-page container">
      <h1 className="page-title">Terms of Service</h1>
      <div className="terms-content">
        <p className="last-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our Image Compression Tool ("Service"), you
            agree to be bound by these Terms of Service. If you disagree with
            any part of the terms, you may not access the Service.
          </p>
        </section>

        <section>
          <h2>2. Service Description</h2>
          <p>
            Our Service provides client-side image compression and optimization:
          </p>
          <ul>
            <li>All image processing occurs directly in your browser</li>
            <li>No image data is uploaded to our servers</li>
            <li>Supports various image formats (JPG, PNG, WEBP, etc.)</li>
            <li>Provides adjustable compression settings</li>
          </ul>
        </section>

        <section>
          <h2>3. User Responsibilities</h2>
          <p>When using our Service, you agree to:</p>
          <ul>
            <li>Use the Service only for lawful purposes</li>
            <li>Not upload any harmful or malicious content</li>
            <li>Not attempt to reverse engineer or disrupt the Service</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
          <div className="highlight-box">
            <p>
              <strong>Note:</strong> You retain all rights to any images you
              process through our Service. We do not claim ownership of your
              content.
            </p>
          </div>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality
            are owned by us and are protected by international copyright,
            trademark, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall we be liable for any indirect, incidental,
            special, consequential or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from:
          </p>
          <ul>
            <li>Your use or inability to use the Service</li>
            <li>Any unauthorized access to or use of our servers</li>
            <li>
              Any interruption or cessation of transmission to or from the
              Service
            </li>
            <li>
              Any bugs, viruses, or similar that may be transmitted through the
              Service
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Service Availability</h2>
          <p>
            We strive to maintain the Service's availability but do not
            guarantee uninterrupted access. We may temporarily suspend the
            Service for maintenance or updates without notice.
          </p>
        </section>

        <section>
          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will
            notify users of any changes by updating the "Last updated" date at
            the top of this page.
          </p>
        </section>

        <section>
          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of [Your Country/State], without regard to its conflict of
            law provisions.
          </p>
        </section>

        <section>
          <h2>9. Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at
            imagecompressor123@gmail.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
