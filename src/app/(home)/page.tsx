"use client";

import React from "react";

import LandingHero from "./_components/LandingHero";
import AnimatedHero from "./_components/AnimatedHero";

import { WebNavigation } from "@/components";

function LandingPage() {
  return (
    <div className="h-100 w-100" style={{ position: "relative" }}>
      <WebNavigation />

      <LandingHero />
      <AnimatedHero chars="svgjsx" />
      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
