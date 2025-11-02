"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import { Accordion, Divider, Toolbar, useSheet } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";
import { AppLink } from "@/components";

import { COMMON_LINKS } from "../_routes";

function DocsSidebarLinks() {
  const router = useRouter();
  const pathname = usePathname();

  const { methods } = useSheet();
  const { setOpen } = methods;

  const handleRedirect = (link: string) => {
    router.push(link);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (setOpen) setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="grid g-small-30 m-b-medium-60">
        {COMMON_LINKS.map((commonLink, key) => (
          <AppLink
            key={key}
            as={Toolbar.Item}
            onClick={() => handleRedirect(commonLink.link)}
            data-current={commonLink.link === pathname}
            className="fs-medium-10"
          >
            {commonLink.label}
          </AppLink>
        ))}
      </div>
    </React.Fragment>
  );
}

export default DocsSidebarLinks;
