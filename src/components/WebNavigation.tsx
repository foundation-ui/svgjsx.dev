"use client";

import React from "react";
import styled from "styled-components";

import Link from "next/link";

import { Avatar, Button } from "@foundation-ui/components";
import { Icon, SocialIcon } from "@foundation-ui/icons";
import { AppLink } from "@/components";

const FixedNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 0 auto;
  border: var(--measurement-small-30) solid transparent;
  border-bottom-color: var(--font-color-alpha-10);
  background-color: var(--body-color);
  padding: var(--measurement-medium-30);
`;

function WebNavigation() {
  return (
    <FixedNavigation
      className="flex justify-between align-center"
      style={{ alignSelf: "start" }}
    >
      <div className="flex align-center g-medium-30">
        <Avatar
          style={{
            background: "var(--font-color)",
            borderRadius: "var(--measurement-medium-30)",
          }}
        >
          <Icon fill="var(--body-color)">
            <SocialIcon.Foundation />
          </Icon>
        </Avatar>
        <AppLink as={Link} className="fs-medium-10" href="/docs/introduction">
          Docs
        </AppLink>
        <span className="opacity-default-10">|</span>
        <AppLink as={Link} className="fs-medium-10" href="/docs/examples">
          Examples
        </AppLink>
      </div>

      <Button
        variant="border"
        sizing="large"
        onClick={() =>
          window.open(
            "https://github.com/foundation-ui/svgjsx",
            "_blank",
            "noopener,noreferrer",
          )
        }
      >
        Github
        <Icon viewBox="0 0 14 14">
          <SocialIcon.Github />
        </Icon>
      </Button>
    </FixedNavigation>
  );
}

export default WebNavigation;
