import React from "react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import AttachEmailSharpIcon from "@mui/icons-material/AttachEmailSharp";

import "../assets/styles/Footer.scss";
function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="contacts">
          <FacebookSharpIcon className="face" />
          <CallSharpIcon className="phone" />
          <AttachEmailSharpIcon className="email" />
        </div>
        <p>Copyright © Your Website 2023</p>
      </div>
    </div>
  );
}

export default Footer;
