"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

import { DisplayMd, DisplaySmall } from "@/components";
import { Button, ScrollArea } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SectionContainer = styled(motion.article)`
  width: 100%;
  height: var(--breakpoint-tablet-small);
  border-radius: var(--measurement-medium-30);
  background-color: var(--contrast-color);

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;
const Hgroup = styled.hgroup`
  width: 100%;
  max-width: var(--breakpoint-mobile);
`;
const FixedWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const BackgroundContainer = styled(ScrollArea)`
  position: relative;
  width: 100%;
  height: var(--measurement-large-90);
  border-radius: var(--measurement-medium-30);
  background-color: var(--body-color);

  align-self: flex-end;
  justify-self: end;

  overflow-x: hidden;

  .language-tsx {
    position: absolute;
    background-color: transparent !important;
  }
`;
const Grid = styled.li`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(31%, 1fr));
  grid-gap: var(--measurement-large-10) var(--measurement-large-10);
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;

const WIKI_CATALOG = [
  {
    title: "Bundle Size",
    description:
      "Outputs a compact, tree-shakeable component set designed to minimize bundle impact and accelerate builds.",
    code: `{
    "value": 80,
    "unit": "KB",
    "label": "Total Bundle",
    "metrics": [
      {
        "value": 819,
        "unit": "bytes",
        "label": "Per Icon"
      },
      {
        "value": 100,
        "unit": "components",
        "label": "Generated"
      }
    ]
  }`,
  },
  {
    title: "Execution Time",
    description:
      "Rapid, incremental conversions with intelligent file detection to avoid redundant work and shorten feedback loops.",
    code: `{
    "value": 0.486,
    "unit": "s",
    "label": "Average Duration",
    "metrics": [
      {
        "value": 0.477,
        "unit": "s",
        "label": "Best Time"
      },
      {
        "value": 206,
        "unit": "icons/sec",
        "label": "Throughput"
      },
      {
        "value": "±2.3%",
        "unit": null,
        "label": "Consistency"
      }
    ]
  }`,
  },
  {
    title: "Memory Usage",
    description:
      "Predictable memory footprint under sustained workloads, tuned to handle large icon sets without pressure.",
    code: `{
    "value": 98.2,
    "unit": "MB",
    "label": "Average Usage",
    "metrics": [
      {
        "value": 98.6,
        "unit": "MB",
        "label": "Peak Memory"
      },
      {
        "value": 97.9,
        "unit": "MB",
        "label": "Minimum Usage"
      },
      {
        "value": "±0.3%",
        "unit": null,
        "label": "Stability"
      }
    ]
  }`,
  },
];

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

function LandingProducts() {
  const router = useRouter();

  return (
    <motion.section
      className="flex flex-column g-medium-60"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <hgroup className="flex align-end flex-wrap justify-between g-medium-60">
        <motion.span variants={staggerItem}>
          <DisplayMd>Fast, consistant, reliable.</DisplayMd>
        </motion.span>
        <motion.span variants={staggerItem}>
          <Button
            variant="ghost"
            sizing="medium"
            onMouseDown={() => router.push("/docs/performances")}
          >
            Benchmark details
            <Icon>
              <PixelIcon.ArrowRight />
            </Icon>
          </Button>
        </motion.span>
      </hgroup>

      <Grid>
        {WIKI_CATALOG.map((item, key) => (
          <SectionContainer
            key={`${key}`}
            className="p-medium-60 g-large-10 w-100 h-100"
            variants={staggerItem}
          >
            <Hgroup>
              <DisplaySmall as="p" className="fs-medium-20 m-b-medium-10">
                {item?.title}
              </DisplaySmall>
              <DisplaySmall
                as="p"
                className="fs-medium-20  opacity-default-60 "
              >
                {item?.description}
              </DisplaySmall>
            </Hgroup>

            <FixedWrapper className="w-100 h-100">
              {/* <BackgroundOverlay /> */}
              <BackgroundContainer className="p-medium-60">
                <SyntaxHighlighter
                  language="tsx"
                  customStyle={{
                    padding: "0",
                    background: "transparent",
                    fontSize: "var(--fontsize-small-50)",
                    overflow: "hidden",
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
                      wordBreak: "break-word",
                      width: "fit-content",
                    },
                  }}
                  PreTag="div"
                >
                  {item.code}
                </SyntaxHighlighter>
              </BackgroundContainer>
            </FixedWrapper>
          </SectionContainer>
        ))}
      </Grid>
    </motion.section>
  );
}

export default LandingProducts;
