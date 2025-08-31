"use client";

import styled from "styled-components";

import Link from "next/link";

import { Page, Button, Avatar } from "@usefui/components";
import { Icon, SocialIcon } from "@usefui/icons";
import { AppLink } from "./AppLink";

const StyledMenu = styled(Page.Menu)`
  border: none !important;
  background-color: transparent;
  padding: 0;
`;

function WebNavigation() {
  return (
    <StyledMenu className="w-100 flex g-medium-60 align-center justify-between">
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
      </div>

      <div className="flex g-medium-10 align-center">
        <AppLink as={Link} className="fs-medium-10" href="/docs/introduction">
          Docs
        </AppLink>
        <AppLink as={Link} className="fs-medium-10" href="/docs/examples">
          Examples
        </AppLink>

        <Button
          variant="border"
          sizing="small"
          onClick={() =>
            window.open(
              "https://github.com/foundation-ui/svgjsx",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          <span className="flex align-center justify-center p-y-small-30 p-l-small-30">
            <Icon viewBox="0 0 16 16" width={16} height={16}>
              <SocialIcon.Github />
            </Icon>
          </span>
        </Button>
      </div>
    </StyledMenu>
  );
}

export default WebNavigation;
