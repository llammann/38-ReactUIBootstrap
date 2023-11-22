import { useState } from "react";

import "./App.css";
import FindOutMoreSec from "./components/FindOutMoreSec";
import WhatWeOfferSec from "./components/WhatWeOfferSec";
import Services from "./components/Services";
import WelcomeNextSec from "./components/WelcomeNextSec";
import RecentProjectsSec from "./components/RecentProjectsSec";
import ImpossibleResistSec from "./components/ImpossibleResistSec";
import Map from "./components/Map";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FindOutMoreSec />
      <WhatWeOfferSec />
      <Services />
      <WelcomeNextSec />
      <RecentProjectsSec />
      <ImpossibleResistSec />
      <Map />
      <Footer />
    </>
  );
}

export default App;
