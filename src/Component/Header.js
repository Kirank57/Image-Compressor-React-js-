import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <h1 className={styles.logoText}>ImageCompressor</h1>
        </Link>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
        <Link to="/" className={styles.link} onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          to="/about"
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
};

export default Header;
