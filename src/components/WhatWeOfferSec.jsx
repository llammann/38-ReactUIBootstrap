import React from "react";
import "../assets/styles/WhatWeOfferSec.scss";
function WhatWeOfferSec() {
  return (
    <div className="WhatWeOffer">
      <div className="container">
        <h1>Stylish Portfolio is the perfect theme for your next project!</h1>
        <p>
          This theme features a flexible, UX friendly sidebar menu and stock
          photos from our friends at {<a>Unsplash</a>}!
        </p>
        <button>What We Offer</button>
      </div>
    </div>
  );
}

export default WhatWeOfferSec;
