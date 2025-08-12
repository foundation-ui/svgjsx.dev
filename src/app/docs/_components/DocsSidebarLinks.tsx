"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import { Toolbar } from "@usefui/components";
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
    </React.Fragment>
  );
}

export default DocsSidebarLinks;
