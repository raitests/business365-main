import React, { useEffect, useState } from "react";

const StickyNavbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      let progress = (scrollTop / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#/">
          Your Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#section1">
                Section 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section2">
                Section 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section3">
                Section 3
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="progress" style={{ height: "4px" }}>
        <div
          className="progress-bar bg-danger"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StickyNavbar;
