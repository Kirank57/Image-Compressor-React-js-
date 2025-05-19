import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Our Image Compressor</h2>
          <p className="about-description">
            Welcome to ImageCompressor, your go-to solution for optimizing
            images without sacrificing quality. In today's digital world,
            fast-loading images are crucial for better SEO rankings, improved
            user experience, and reduced bandwidth usage. Our tool empowers
            designers, developers, and content creators to compress images
            effortlessly while retaining visual clarity.
          </p>

          <p className="about-description">
            Built with cutting-edge browser-based technology, ImageCompressor
            processes your files locally for maximum privacy. Unlike other
            tools, we never upload your images to external servers—your data
            stays securely on your device. Whether you're preparing images for a
            website, social media, or email campaigns, our intuitive interface
            makes optimization accessible to everyone.
          </p>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast Processing</h3>
              <p>
                Leveraging WebAssembly and modern JavaScript, we deliver
                near-instant compression even for high-resolution images.
                Process batches of images in seconds, not minutes.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Military-Grade Privacy</h3>
              <p>
                Your images are processed 100% in your browser. We don't store,
                track, or analyze your files—unlike cloud-based alternatives
                that retain your data.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Advanced Quality Control</h3>
              <p>
                Fine-tune compression with our precision quality slider
                (1-100%). Compare original vs. compressed versions side-by-side
                before downloading.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Universal Compatibility</h3>
              <p>
                Supports all modern formats: JPEG, PNG, WEBP, and AVIF.
                Responsive design works flawlessly on desktop and mobile
                devices.
              </p>
            </div>
          </div>

          <div className="tech-details">
            <h3>Under the Hood:</h3>
            <ul>
              <li>Uses the Canvas API for lossy compression</li>
              <li>Implements Lanczos resampling for high-quality resizing</li>
              <li>Optimized Web Workers for multi-threaded processing</li>
              <li>Progressive loading for large files</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
