"use client";

import styled from "styled-components";
import { Page } from "@usefui/components";

export const LandingWrapper = styled(Page.Content)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url(/vignette.webp);
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;

  background-blend-mode: overlay;
  mix-blend-mode: overlay;
`;
