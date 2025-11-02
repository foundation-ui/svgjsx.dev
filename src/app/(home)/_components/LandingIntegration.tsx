"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { DisplaySmall, Dragbox } from "@/components";
import { Button, ScrollArea } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

const SectionContainer = styled(motion.section)`
  width: 100%;
  height: var(--breakpoint-tablet-small);
  border-radius: var(--measurement-medium-30);
  background-color: var(--contrast-color);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;
const Hgroup = styled(motion.hgroup)`
  width: 100%;
  max-width: var(--breakpoint-mobile);
`;
const CodeContainer = styled(Dragbox.Container)`
  background: var(--body-color) !important;
`;
const CodeBox = styled(Dragbox)`
  background: var(--contrast-color) !important;
  position: absolute;

  @media (max-width: 1240px) {
    right: calc(var(--measurement-large-60) * -1);
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};
const staggerItem = {
  hidden: { opacity: 0, y: "var(--measurement-medium-10)" },
  show: { opacity: 1, y: 0 },
};

const JSX_TEMPLATE = `"use client";

export const Icon = ({
  children,
  ...restProps
}: React.ComponentProps<"svg">) => {
  return <Icon {...restProps}>{children}</Icon>;
};
Icon.displayName = "Icon";

const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <React.Fragment>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 20H13V8H15V6H13V4H11V6H9V8H11V20ZM7 10V8H9V10H7ZM7 10V12H5V10H7ZM17 10V8H15V10H17ZM17 10V12H19V10H17Z"
    />
  </React.Fragment>
);
ArrowUp.displayName = "Icon.ArrowUp";

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <React.Fragment>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 11L4 13L16 13L16 15L18 15L18 13L20 13L20 11L18 11L18 9L16 9L16 11L4 11ZM14 7L16 7L16 9L14 9L14 7ZM14 7L12 7L12 5L14 5L14 7ZM14 17L16 17L16 15L14 15L14 17ZM14 17L12 17L12 19L14 19L14 17Z"
    />
  </React.Fragment>
);
ArrowRight.displayName = "Icon.ArrowRight";

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <React.Fragment>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 4H13V16H15V18H13V20H11V18H9V16H11V4ZM7 14V16H9V14H7ZM7 14V12H5V14H7ZM17 14V16H15V14H17ZM17 14V12H19V14H17Z"
    />
  </React.Fragment>
);
ArrowDown.displayName = "Icon.ArrowDown";

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <React.Fragment>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 11L20 13L8 13L8 15L6 15L6 13L4 13L4 11L6 11L6 9L8 9L8 11L20 11ZM10 7L8 7L8 9L10 9L10 7ZM10 7L12 7L12 5L10 5L10 7ZM10 17L8 17L8 15L10 15L10 17ZM10 17L12 17L12 19L10 19L10 17Z"
    />
  </React.Fragment>
);
ArrowLeft.displayName = "Icon.ArrowLeft";

Icon.ArrowTop = ArrowTop;
Icon.ArrowRight = ArrowRight;
Icon.ArrowBottom = ArrowBottom;
Icon.ArrowLeft = ArrowLeft;
`;

function LandingIntegration() {
  const router = useRouter();

  return (
    <SectionContainer
      className="p-medium-60 g-large-10 w-100 h-100"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
    >
      <Hgroup>
        <motion.span variants={staggerItem}>
          <DisplaySmall as="p" className="m-b-medium-60">
            Built with Typescript, SVGJSX yields performant, type-safe, and
            tree-shakable components.
          </DisplaySmall>
        </motion.span>
        <motion.span variants={staggerItem}>
          <Button
            variant="ghost"
            sizing="medium"
            onMouseDown={() => router.push("/docs/examples")}
          >
            Usage guide
            <Icon>
              <PixelIcon.ChevronRight />
            </Icon>
          </Button>
        </motion.span>
      </Hgroup>

      <CodeContainer className="flex align-center justify-center">
        <CodeBox sizing="medium">
          <motion.div
            className="h-100 flex flex-column justify-between"
            variants={staggerItem}
          >
            <Dragbox.Header header="icons.tsx" meta="" />
            <ScrollArea
              scrollbar
              className="w-100 h-100 p-l-medium-60 p-y-medium-60 flex flex-column g-medium-30"
            >
              <SyntaxHighlighter
                language="tsx"
                customStyle={{
                  padding: "0",
                  background: "transparent",
                  fontSize: "var(--fontsize-small-50)",
                }}
                style={oneDark}
                lineNumberStyle={{
                  paddingRight: "var(--measurement-medium-10)",
                  textAlign: "right",
                  userSelect: "none",
                  opacity: 0.6,
                }}
                wrapLines={true}
                lineProps={{
                  style: {
                    fontFamily: "var(--font-mono)",
                    backgroundColor: "transparent",
                    display: "block",
                    width: "100%",
                  },
                }}
                PreTag="div"
              >
                {JSX_TEMPLATE}
              </SyntaxHighlighter>
            </ScrollArea>
          </motion.div>
        </CodeBox>
        <Dragbox.Overlay />
      </CodeContainer>
    </SectionContainer>
  );
}

export default LandingIntegration;
