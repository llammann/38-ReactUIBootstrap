import React from "react";
import "../assets/styles/Map.scss";

function Map() {
  return (
    <div className="Map">
      <iframe className="container" src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Twitter,+I…tter,+Inc.,+Market+Street,+San+Francisco,+CA&t=m&z=15&iwloc=A&output=embed"></iframe>
    </div>
  );
}

export default Map;
