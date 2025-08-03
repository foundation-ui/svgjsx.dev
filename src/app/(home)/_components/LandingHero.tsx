"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

import { useRouter } from "next/navigation";

import { Badge, Button, DropdownMenu } from "@foundation-ui/components";
import { CopyCode, DisplaySmall, DisplayXxl } from "@/components";
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

const Pulse = keyframes`
  0% {
    box-shadow: 0 0 0 var(--measurement-small-10) var(--font-color-alpha-10);
  }
  100% {
    box-shadow: 0 0 0 var(--measurement-medium-60) transparent;
  }
`;
const BetaBadge = styled(Badge)`
  animation: ${Pulse} 2s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
`;

function LandingHero() {
  const router = useRouter();

  const INSTALL_COMMANDS = [
    {
      command: "npm install -g @usefui/svgjsx",
    },
    {
      command: "pnpm add -g @usefui/svgjsx",
    },
    {
      command: "yarn global add @usefui/svgjsx",
    },
  ];

  return (
    <Header className="p-x-medium-60 justify-center m-y-large-30">
      <BetaBadge className="m-b-medium-60" variant="border">
        v1.0.2
      </BetaBadge>
      <DisplayXxl className="m-b-medium-30">
        Command-Line Interface for Building Scalable Icon Libraries
      </DisplayXxl>
      <HeroDescWrapper>
        <DisplaySmall as="p" className="m-b-large-10">
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

        <span className="flex flex-wrap align-center g-medium-30">
          <Button
            variant="primary"
            sizing="large"
            onClick={() => router.push("/docs/introduction")}
          >
            Documentation
          </Button>
          <DropdownMenu.Root>
            <DropdownMenu>
              <DropdownMenu.Trigger variant="border" sizing="large">
                Install the CLI
                <Icon>
                  <PixelIcon.ChevronsVertical />
                </Icon>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content sizing="large">
                {INSTALL_COMMANDS.map((item, key) => (
                  <DropdownMenu.Item
                    key={key}
                    radio
                    className="flex justify-between align-center"
                  >
                    <code className="fs-small-60 opacity-default-60">
                      {item.command}
                    </code>
                    <CopyCode value={item.command} />
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu>
          </DropdownMenu.Root>
        </span>
      </HeroDescWrapper>
    </Header>
  );
}

export default LandingHero;
