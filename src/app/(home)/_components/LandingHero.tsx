"use client";

import React from "react";
import styled from "styled-components";

import CommandTrigger from "./CommandTrigger";

import { DisplayXxl } from "@/components";

const Header = styled.hgroup`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: var(--breakpoint-tablet-landscape);
  text-align: center;
`;
const HeroDescWrapper = styled.div`
  max-width: var(--breakpoint-tablet);
`;

function LandingHero() {
  return (
    <Header className="p-x-medium-60 h-100 justify-center align-center">
      <DisplayXxl className="m-b-medium-30">
        Build Scalable Icon Libraries
      </DisplayXxl>
      <HeroDescWrapper className="m-b-large-10">
        <p className="fs-medium-20">
          <span className="opacity-default-60">A powerful CLI to</span>
          &nbsp;convert, optimize, and bundle SVG files into ready-to-use JSX
          components.&nbsp;
          <span className="opacity-default-60">
            It enables you to maintain a
          </span>
          &nbsp;single source of truth for your visual assets,&nbsp;
          <span className="opacity-default-60">
            yielding performant, type-safe, and tree-shakable components that
            grow with your project.
          </span>
        </p>
      </HeroDescWrapper>
      <CommandTrigger />
    </Header>
  );
}

export default LandingHero;
