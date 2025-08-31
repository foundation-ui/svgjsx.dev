"use client";

import { Page } from "@usefui/components";
import { LandingWrapper } from "./_components/LandingWrapper";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Page className="h-100 w-100">
      <LandingWrapper className="p-x-medium-30 p-b-medium-30">
        {children}
      </LandingWrapper>
    </Page>
  );
}

export default layout;
