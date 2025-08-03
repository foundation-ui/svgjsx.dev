"use client";

import React from "react";

import LandingHero from "./_components/LandingHero";

import { Footer, WebNavigation } from "@/components";
import { Page } from "@foundation-ui/components";

function LandingPage() {
  return (
    <React.Fragment>
      <WebNavigation />

      <LandingHero />
      <Footer />
    </React.Fragment>
  );
}

export default LandingPage;
