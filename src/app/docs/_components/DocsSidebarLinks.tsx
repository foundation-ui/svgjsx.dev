"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import { Accordion, Divider, Toolbar } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";
import { AppLink } from "@/components";
import { COMMON_LINKS } from "../_routes";

function DocsSidebarLinks() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <React.Fragment>
      <div className="grid g-small-30">
        {COMMON_LINKS.map((commonLink, key) => (
          <AppLink
            key={key}
            as={Toolbar.Item}
            onClick={() => router.push(commonLink.link)}
            data-current={commonLink.link === pathname}
            className="fs-medium-20"
          >
            {commonLink.label}
          </AppLink>
        ))}
      </div>

      <Divider className="m-y-medium-60" />
      {/* 
      <Accordion.Root>
        <Accordion>
          <Accordion.Trigger
            value="components"
            className="m-b-medium-60 w-100 justify-between align-center"
          >
            Components
            <Icon>
              <PixelIcon.ChevronsVertical />
            </Icon>
          </Accordion.Trigger>
          <Accordion.Content
            value="components"
            defaultOpen
            className="grid g-small-30"
          >
            {COMPONENTS_LINKS.map((clink, key) => (
              <AppLink
                key={key}
                as={Toolbar.Item}
                onClick={() => router.push(clink.link)}
                className="fs-medium-20"
                data-current={clink.link === pathname}
              >
                {clink.label}
              </AppLink>
            ))}
          </Accordion.Content>
        </Accordion>
      </Accordion.Root>

      <Divider className="m-y-medium-70" /> */}
    </React.Fragment>
  );
}

export default DocsSidebarLinks;
