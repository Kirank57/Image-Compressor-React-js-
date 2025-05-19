import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} ImageCompressor. All rights reserved.</p>
      <p>
        <Link to="/terms" style={{ textDecoration: "none", color: "white" }}>
          Terms And Service
        </Link>
      </p>
      <p>
        <Link to="/privacy" style={{ textDecoration: "none", color: "white" }}>
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
