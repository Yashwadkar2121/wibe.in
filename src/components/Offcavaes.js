import React from "react";
import "./css/offcavaes.css";

function Offcavaes() {
  const styles = {
    section: {
      fontWeight: "800",
      fontFamily: "Poppins, sans-serif",
      fontSize: "2rem",
      color: "white",
    },
  };
  return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Toggle
      </button>

      <div
        className="offcanvas offcanvas-end --bs-dark
        --bs-dark-rgb"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ width: "100%" }}
      >
        <div className="offcanvas-header bg-dark">
          <h5
            className="offcanvas-title"
            id="offcanvasRightLabel"
            style={styles.section}
          >
            Wibe
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body text-center bg-dark">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Services</a>
              <ol>
                <li>
                  <a href="">Website Design</a>
                </li>
                <li>
                  <a href="">UI/UX Design</a>
                </li>
                <li>
                  <a href="">Branding</a>
                </li>
                <li>
                  <a href="">Visual Content</a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#">About</a>
              <ol>
                <li>
                  <a href="">Who we are</a>
                </li>
                <li>
                  <a href="">What we do</a>
                </li>
                <li>
                  <a href="">Our Clients</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#">Contact</a>
              <ol>
                <li>
                  <a href="">Get in Touch</a>
                </li>
                <li>
                  <a href="">Start a Project</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Offcavaes;
