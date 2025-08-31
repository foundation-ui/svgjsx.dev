"use client";

import React from "react";
import styled from "styled-components";

import { Button } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

const TerminalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: var(--breakpoint-tablet);
  margin: 0 auto;
  border: var(--measurement-small-30) solid var(--font-color-alpha-10);
  border-radius: var(--measurement-medium-30);

  background: var(--contrast-color);
`;

function CommandTrigger() {
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
    <TerminalContainer>
      <div className="p-medium-60 flex align-center justify-between g-large-10">
        <span className="flex align-center g-medium-30">
          <kbd className="fs-medium-10 opacity-default-10">$</kbd>
          <kbd className="fs-medium-10 opacity-default-60">
            npx @usefui/svgjsx generate
          </kbd>
        </span>

        <Button
          variant="ghost"
          sizing="small"
          onClick={() => copyToClipboard("npx @usefui/svgjsx generate")}
        >
          <Icon>{copied ? <PixelIcon.Check /> : <PixelIcon.Duplicate />}</Icon>
        </Button>
      </div>
    </TerminalContainer>
  );
}

export default CommandTrigger;
