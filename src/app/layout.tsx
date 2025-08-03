import StyledComponentsRegistry from "@/lib/styles-registry";

import { ClientProvider } from "@/providers";
import { Toaster } from "sonner";

import type { Metadata } from "next";

const metadataHead = {
  title:
    "Foundation UI - SVGJSX - Command-Line Interface for Building Scalable Icon Libraries",
  description:
    "An Open Source Command Line Interfaces to generate JSX Icon Components from SVGs.",
};
export const metadata: Metadata = {
  ...metadataHead,
  openGraph: {
    ...metadataHead,
    images: [
      {
        url: "https://www.usefui.dev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "svgjsx.dev Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    ...metadataHead,
    card: "summary_large_image",
    images: ["https://www.usefui.dev.com/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <html lang="en">
        <ClientProvider>
          <body>
            <div id="portal-container" />
            <Toaster
              toastOptions={{
                style: {
                  borderRadius: "var(--measurement-medium-30)",
                  borderColor: "var(--font-color-alpha-10)",
                  background: "var(--body-color)",
                  color: "var(--font-color)",
                  fontSize: "var(--fontsize-medium-10)",
                },
              }}
            />
            {children}
          </body>
        </ClientProvider>
      </html>
    </StyledComponentsRegistry>
  );
}
