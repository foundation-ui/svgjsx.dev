"use client";

import React from "react";
import styled from "styled-components";

import { Button } from "@foundation-ui/components";
import { DisplaySmall, DisplayXxl } from "@/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

const Header = styled.hgroup`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: var(--breakpoint-tablet-landscape);
`;
const HeroDescWrapper = styled.div`
  max-width: var(--breakpoint-tablet);
`;

function LandingHero() {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async (value: string) => {
    if (!value) return;

    await navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });

    clearTimeout(1000);
  };

  return (
    <Header className="p-x-medium-60 justify-center m-y-large-30">
      <DisplayXxl className="m-b-medium-30">
        Command-Line Interface for Building Scalable Icon Libraries
      </DisplayXxl>
      <HeroDescWrapper className="m-b-large-10">
        <DisplaySmall as="p">
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
        </DisplaySmall>
      </HeroDescWrapper>
      <Button
        variant="primary"
        sizing="large"
        onClick={() => copyToClipboard("npx @usefui/svgjsx generate")}
      >
        npx @usefui/svgjsx generate
        <Icon fill="var(--body-color)">
          {copied ? <PixelIcon.Check /> : <PixelIcon.Duplicate />}
        </Icon>
      </Button>
    </Header>
  );
}

export default LandingHero;
