import React from "react";
import Offcavaes from "./Offcavaes";

function Navabar() {
  const styles = {
    section: {
      fontWeight: "800",
      fontFamily: "Poppins, sans-serif",
    },
  };
  return (
    <div className="m-4">
      <nav className="navbar">
        <div className="container-fluid">
          {" "}
          <a className="navbar-brand">
            <h2 className="tagname" style={styles.section}>
              <b>Wibe</b>
            </h2>
          </a>
          <div className="d-flex" role="search">
            <h3>
              {" "}
              <Offcavaes />
            </h3>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navabar;
