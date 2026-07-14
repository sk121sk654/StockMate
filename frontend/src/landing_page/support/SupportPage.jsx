import React, { Component } from "react";
import CreateTicket from "./CreateTicket";
import Hero from "./Hero";
import HeroSearch from "./HeroSearch";
import SupportLinks from "./SupportLink";

function SupportPage() {
  return (
    <>
      <HeroSearch />
      <SupportLinks />
    </>
  );
}

export default SupportPage;
