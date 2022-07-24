import React from "react";
import "./footer.sass"
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer-container">
      <div className="container-inside">
        <h3 className="Text">Made with ❤️ by<a>Lange</a></h3>
      </div>
    </div>
  );
};

export default Footer;
