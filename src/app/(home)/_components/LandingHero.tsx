"use client";

import React from "react";
import styled from "styled-components";

import { Dragbox, Terminal } from "@/components";

const AbsoluteBox = styled(Dragbox)`
  background-color: var(--body-color);
  position: absolute;

  &[data-foreground="true"] {
    z-index: 100;
  }

  &[data-position="center"] {
    @media (max-width: 768px) {
      right: calc(var(--measurement-large-60) * -1);
    }
  }

  &[data-position="right"] {
    top: var(--measurement-large-80);
    right: var(--measurement-large-30);
  }
`;

const SCRIPTS_OUTPUTS = {
  GENERATE: `✅ Added ArrowCircleDownLeft to ./icons/index.tsx
✅ Added ArrowCircleDownRight to ./icons/index.tsx
✅ Added ArrowCircleDown to ./icons/index.tsx
✅ Added ArrowCircleLeft to ./icons/index.tsx
✅ Added ArrowCircleRight to ./icons/index.tsx
✅ Added ArrowCircleUpLeft to ./icons/index.tsx
✅ Added ArrowCircleUpRight to ./icons/index.tsx
✅ Added ArrowCircleUp to ./icons/index.tsx
✅ Added ArrowCornerDownLeft to ./icons/index.tsx
✅ Added ArrowCornerDownRight to ./icons/index.tsx

🎉 Generation completed!
📦 Generated 10 components
📁 Output: ./icons/index.tsx`,
  SOURCE: `🔧 Checking configuration...
📂 Source: demo
📁 Output: ./icons/index.tsx

✅ Added ArrowCornerDownRight to ./icons/index.tsx

🎉 Generation completed!
📦 Generated 1 components
📁 Output: ./icons/index.tsx`,
  OUTPUT: `🔧 Checking configuration...
📂 Source: ./svg
📁 Output: ./demo/index.tsx

✅ Added ArrowCornerDownRight to ./icons/index.tsx

🎉 Generation completed!
📦 Generated 1 components
📁 Output: ./demo/index.tsx`,
};
const COMMANDS_CLI = [
  {
    command: "generate",
    description: "Generate TSX components from SVG files",
    exec: () => SCRIPTS_OUTPUTS.GENERATE,
  },
  {
    command: "-s",
    description: "Source directory containing SVG files",
    exec: () => SCRIPTS_OUTPUTS.SOURCE,
  },
  {
    command: "-o",
    description: "Output directory for generated TSX files",
    exec: () => SCRIPTS_OUTPUTS.OUTPUT,
  },
];
const HISTORY = [
  {
    input: "generate",
    output: SCRIPTS_OUTPUTS.GENERATE,
  },
];
const TERMINALS = [
  {
    sizing: "medium",
    position: "center",
    header: "svgjsx",
    meta: "@usefui",
    commands: COMMANDS_CLI,
    history: HISTORY,
  },
];

function LandingHero() {
  const constraintsRef = React.useRef<HTMLDivElement>(null);
  const [foregroundIndex, setForegroundIndex] = React.useState<number | null>(
    null,
  );

  return (
    <Dragbox.Container ref={constraintsRef}>
      {TERMINALS.map((terminal, key) => (
        <AbsoluteBox
          key={key}
          data-position={terminal.position}
          data-foreground={key === foregroundIndex}
          sizing={terminal.sizing as "small" | "medium" | "large"}
        >
          <div
            className="h-100 flex flex-column justify-between"
            onPointerDown={() => setForegroundIndex(key)}
          >
            <Dragbox.Header header={terminal.header} meta={terminal.meta} />
            <Terminal commands={terminal.commands} history={terminal.history} />
          </div>
        </AbsoluteBox>
      ))}
    </Dragbox.Container>
  );
}

export default LandingHero;
