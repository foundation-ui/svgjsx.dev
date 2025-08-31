"use client";

import React from "react";
import LandingHero from "./_components/LandingHero";

import { WebNavigation } from "@/components";

function LandingPage() {
  return (
    <React.Fragment>
      <WebNavigation />
      <LandingHero />
    </React.Fragment>
  );
}

export default LandingPage;
