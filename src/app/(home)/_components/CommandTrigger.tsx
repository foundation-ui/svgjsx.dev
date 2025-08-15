"use client";

import React from "react";
import styled from "styled-components";

import { Badge, Button } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

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
    <Badge variant="border">
      <div className="p-medium-60 flex align-center justify-between g-large-10">
        <code className="fs-medium-10 opacity-default-60">
          npx @usefui/svgjsx generate
        </code>
        <Button
          variant="ghost"
          sizing="small"
          onClick={() => copyToClipboard("npx @usefui/svgjsx generate")}
        >
          <Icon>{copied ? <PixelIcon.Check /> : <PixelIcon.Duplicate />}</Icon>
        </Button>
      </div>
    </Badge>
  );
}

export default CommandTrigger;
