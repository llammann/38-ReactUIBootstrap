import React from "react";
import "../assets/styles/RecentProjectSec.scss"

function RecentProjectsSec() {
  return (
    <div className="Recent">
      <div className="container">
        <h1>Portfolio</h1>
        <p>Recent Projects</p>
        <div className="row">
          <div className="col-6 stationary">
            <h2>Stationary</h2>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="col-6 ice">
            <h2>Ice Cream</h2>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="col-6 straw">
            <h2>Strawberries</h2>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="col-6 work">
            <h2>Workspace</h2>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProjectsSec;
