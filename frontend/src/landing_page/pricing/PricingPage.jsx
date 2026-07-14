import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Charges from "./Chargers";

function PricingPage() {
  return (
    <>
      <Hero></Hero>
      <Charges></Charges>
      <Brokerage></Brokerage>
    </>
  );
}

export default PricingPage;
