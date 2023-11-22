import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ModeIcon from "@mui/icons-material/Mode";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import "../assets/styles/Services.scss"
function Services() {
  return (
    <div className="Services">
      <div className="container">
        <h3>Services</h3>
        <h1>What We Offer</h1>
        <div className="row">
          <div className="col-3">
            <p>
              <PhoneIphoneIcon className="icon"/>
            </p>
            <span>Responsive</span>
            <h4>Looks great on any screen size!</h4>
          </div>
          <div className="col-3">
            <p>
              <ModeIcon  className="icon" />
            </p>
            <span>Redesigned</span>
            <h4>Freshly redesigned for Bootstrap 5.</h4>
          </div>
          <div className="col-3">
            <p>
              <ThumbUpOffAltIcon  className="icon" />
            </p>
            <span>Favorited</span>
            <h4>Millions of users Start Bootstrap!</h4>
          </div>
          <div className="col-3">
            <p>
              <CloudQueueIcon  className="icon" />
            </p>
            <span>Questions</span>
            <h4>I mustache you a question...</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
