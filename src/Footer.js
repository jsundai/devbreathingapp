
import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
      
        <p>
          {" "}
          Simulated Meditation App Designed and Built By ✨{" "}
          <a href="https://jwahirdev.netlify.com">Jwahir Sundai</a>
          <br /> 
          <a href="https://github.com/jsundai">
            View Source Code
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;

