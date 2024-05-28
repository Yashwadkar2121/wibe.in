import React from "react";

function Landing() {
  const styles = {
    section: {
      marginTop: "50vh",
    },
    h1: {
      fontWeight: "700",
      marginBottom: "3%",
      fontSize: "3rem",
    },
  };
  return (
    <div className="container" style={styles.section}>
      {" "}
      <div className="container-fluid">
        <h1 style={styles.h1}>
          A digital-first creative studiio that <br /> designs to engage &
          impact
        </h1>

        <div>
          <h5>
            <a href="#">WEBSITE&nbsp;.&nbsp;</a>{" "}
            <a href="#">UI/UX&nbsp;.&nbsp;</a>
            <a href="#"> BRANDING&nbsp;.&nbsp;</a>
            <a href="#">VISUAL CONTANT</a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Landing;
